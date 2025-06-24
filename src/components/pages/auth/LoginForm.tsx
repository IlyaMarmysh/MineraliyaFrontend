"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import {ILoginForm, IregisterForm} from "@/types/api.types";
import CustomInput from "@/components/ui/form/CustomInput";
import { PhotoUploadField } from "@/components/ui/form/PhotoUploadField";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import UserApi from "@/api/UserApi";

export default function LoginForm() {
    const router = useRouter();
    const {
        handleSubmit,
        control,
        formState: { isSubmitting }
    } = useForm<ILoginForm>({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        try {
            const loginData = {
                email: data.email,
                password: data.password,
            };
            await UserApi.login({ body: loginData }, () => {
                router.push('/')
            });
        } catch (error: any) {
            console.error("Login error:", error);
            toast.error(error.message || 'Ошибка авторизации');
        }
    };
    return (
        <div className="flex flex-col w-2/4 rounded-xl shadow-md m-auto gap-3 p-3">
            <h2 className="font-bold text-xl xl:text-2xl">Authorization...</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 space-x-2 bg-soft-mint/25 rounded-lg shadow-sm hover:bg-teal-muted my-3 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    {isSubmitting ? 'Авторизация...' : 'Авторизоваться'}
                </button>
            </form>
        </div>
    );
}