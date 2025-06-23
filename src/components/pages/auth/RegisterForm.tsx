"use client"
import {SubmitHandler, useForm} from "react-hook-form";
import {IregisterForm} from "@/types/api.types";
import CustomInput from "@/components/ui/form/CustomInput";
import {PhotoUploadField} from "@/components/ui/form/PhotoUploadField";
import {FormValues} from "@/types/types";

export default function RegisterForm(){
    const {handleSubmit, control} = useForm<IregisterForm>({
        defaultValues: {
            name:"",
            email: "",
            password: "",
            confirmPassword:"",
        }
    })
    const uploadFile = async (file: File): Promise<string> => {
        // Ваша логика загрузки файла
        const formData = new FormData();
        formData.append('avatar', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        const { url } = await response.json();
        return url;
    };

    const onSubmit: SubmitHandler<IregisterForm> = (data) => console.log(data)
    return (
        <div className="flex flex-col w-2/4 rounded-xl shadow-md m-auto gap-3 p-3">
            <h2 className="font-bold text-xl xl:text-2xl">Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
                size={25}
                icon={'profile'}
                style={'mb-4 w-11/12 m-auto flex'}
                inputStyle={'block'}
                control={control}
                name="name"
                placeholder={'Enter your profile name'}
            />
            <CustomInput
                size={25}
                icon={'email'}
                style={'mb-4 w-11/12 m-auto flex'}
                inputStyle={'block'}
                control={control}
                name="email"
                placeholder={'Enter your email'}
            />
            <CustomInput
                size={25}
                icon={'password'}
                style={'mb-4 w-11/12 m-auto flex'}
                inputStyle={'block'}
                control={control}
                name="password"
                placeholder={'Enter your password'}
            />
            <CustomInput
                size={25}
                icon={'password'}
                style={'mb-4 w-11/12 m-auto flex'}
                inputStyle={'block'}
                control={control}
                name="confirmPassword"
                placeholder={'Enter your password'}
            />
            <PhotoUploadField<IregisterForm>
                name="avatar"
                control={control}
                uploadHandler={uploadFile}
                required
            />
            <button type="submit" className="px-6 py-3 space-x-2 bg-soft-mint/25 rounded-lg shadow-sm hover:bg-teal-muted my-3">Register</button>
        </form>
        </div>
    )
}