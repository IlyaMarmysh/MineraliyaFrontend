import Image from "next/image";
import {IInputProps} from "@/types/types";
import {FormField} from "@/components/ui/form/FormField";
import {FieldValues} from "react-hook-form";

export default function CustomInput<T extends FieldValues>({icon, style, size, control,inputStyle, type, name, placeholder}:IInputProps<T>) {
    return (
    <div className={`bg-teal-muted rounded-xl min-h-full content-center px-3.5 gap-2 order-3 ${style || ""}`}>
        <Image src={'/icons/' + icon + '_icon.svg'} alt="Search input" width={size} height={size}/>
        <FormField
            control={control}
            name={name}
            type={type}
            placeholder={placeholder}
            inputStyle={inputStyle}
        />
    </div>
)
};