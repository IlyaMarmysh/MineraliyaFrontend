"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { IregisterForm } from "@/types/api.types";
import CustomInput from "@/components/ui/form/CustomInput";
import { PhotoUploadField } from "@/components/ui/form/PhotoUploadField";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import UserApi from "@/api/UserApi";

export default function RegisterForm() {
    const router = useRouter();
    const {
        handleSubmit,
        control,
        formState: { isSubmitting }
    } = useForm<IregisterForm>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            avatarUrl: ""
        }
    });

    const onSubmit: SubmitHandler<IregisterForm> = async (data) => {
        try {
            const registerData = {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.confirmPassword,
                avatar_url: data.avatarUrl
            };
            await UserApi.register({ body: registerData });
        } catch (error: any) {
            console.error("Registration error:", error);
            toast.error(error.message || 'Ошибка регистрации');
        }
    };
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
                    type="password"
                />
                <CustomInput
                    size={25}
                    icon={'password'}
                    style={'mb-4 w-11/12 m-auto flex'}
                    inputStyle={'block'}
                    control={control}
                    name="confirmPassword"
                    placeholder={'Confirm your password'}
                    type="password"
                />
                <PhotoUploadField<IregisterForm>
                    name="avatarUrl"
                    control={control}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 space-x-2 bg-soft-mint/25 rounded-lg shadow-sm hover:bg-teal-muted my-3 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    {isSubmitting ? 'Регистрация...' : 'Register'}
                </button>
            </form>
        </div>
    );
}