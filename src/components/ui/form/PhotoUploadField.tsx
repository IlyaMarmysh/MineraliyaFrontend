"use client"
import { useRef, useState } from 'react';
import {
    Controller,
    FieldValues,
    FieldPath,
    FieldPathValue
} from 'react-hook-form';
import {PhotoUploadFieldProps} from "@/types/types";

export const PhotoUploadField = <T extends FieldValues>({
                                                            name,
                                                            control,
                                                            required = false,
                                                            apiUrl
                                                        }: PhotoUploadFieldProps<T>) => {
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const uploadHandler = async (file: File): Promise<string> => {
        try {
            // Проверка типа файла
            if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
                throw new Error('Допустимые форматы: JPEG, PNG, GIF');
            }

            // Генерация уникального имени файла
            const fileExtension = file.name.split('.').pop();
            const randomName = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${fileExtension}`;

            // Запрос CSRF токена
            const csrfResponse = await fetch(`${apiUrl}/sanctum/csrf-cookie`, {
                credentials: 'include',
            });

            if (!csrfResponse.ok) {
                throw new Error('Ошибка получения CSRF токена');
            }

            // Запрос presigned URL
            const presignedResponse = await fetch(`${apiUrl}/api/generate-presigned-url`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    filename: randomName,
                    contentType: file.type,
                    fileSize: file.size
                }),
                credentials: 'include'
            });

            if (!presignedResponse.ok) {
                throw new Error('Ошибка получения URL для загрузки');
            }

            const { presignedUrl, objectUrl } = await presignedResponse.json();

            // Загрузка файла на S3
            const uploadResponse = await fetch(presignedUrl, {
                method: 'PUT',
                body: file,
                headers: {
                    'Content-Type': file.type,
                    'Content-Length': file.size.toString()
                },
                mode: 'cors'
            });

            if (!uploadResponse.ok) {
                throw new Error(`Ошибка загрузки: ${uploadResponse.statusText}`);
            }

            return objectUrl;
        } catch (err: any) {
            console.error('Ошибка загрузки:', err);
            throw new Error(err.message || 'Ошибка загрузки изображения');
        }
    };

    const handleFileChange = async (
        file: File,
        onChange: (value: FieldPathValue<T, FieldPath<T>>) => void
    ) => {
        try {
            setIsUploading(true);
            setError(null);

            const url = await uploadHandler(file);
            onChange(url as FieldPathValue<T, FieldPath<T>>);

            // Сброс значения input для возможности повторной загрузки
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required }}
            render={({ field, fieldState }) => (
                <div className="w-full">
                    <div className="relative">
                        <input
                            type="file"
                            accept=".jpg,.jpeg,.png,.gif"
                            ref={fileInputRef}
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleFileChange(file, field.onChange);
                            }}
                            required={required}
                            disabled={isUploading}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex m-auto w-11/12 items-center justify-center px-6 py-3 space-x-2 rounded-lg shadow-sm bg-teal-muted">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-5 h-5 ${isUploading ? 'text-teal-500' : 'text-gray-500'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className={`font-medium ${isUploading ? 'text-teal-500' : 'text-gray-700'}`}>
                {isUploading
                    ? 'Загрузка...'
                    : field.value
                        ? 'Фото выбрано'
                        : 'Выбрать фото'}
              </span>
                        </div>
                    </div>

                    {field.value && !isUploading && (
                        <img
                            src={field.value as string}
                            alt="Preview"
                            className="w-3/4 mx-auto rounded-lg my-3"
                        />
                    )}

                    {error && (
                        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
                    )}

                    {fieldState.error && (
                        <p className="text-red-500 text-sm mt-2 text-center">
                            {fieldState.error.message || 'Обязательное поле'}
                        </p>
                    )}
                </div>
            )}
        />
    );
};