import {
    FieldValues,
    useController
} from 'react-hook-form';
import {FormFieldProps} from "@/types/types";


export const FormField = <T extends FieldValues>({control,name,type,inputStyle, placeholder, className}: FormFieldProps<T>) => {
    const {field,fieldState: {error}} = useController({control,name});
    const resolvedClassName = className ?? '';
    const resolvedInputStyle = inputStyle ?? '';
    const resolvedPlaceholder = placeholder ?? '';

    return (
        <div className={resolvedClassName}>
            <input
                {...field}
                type={type}
                placeholder={resolvedPlaceholder}
                className={`py-2 text-soft-mint text-base placeholder-current bg-teal-muted w-3/4 focus:outline-none ${resolvedInputStyle}`}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">
                    {error.message}
                </p>
            )}
        </div>
    );
};