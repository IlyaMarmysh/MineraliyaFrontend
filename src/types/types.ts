import {Control, FieldPath, FieldValues, Path} from "react-hook-form";

export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

export interface AuthTokens {
    accessToken: string;
    refreshToken?: string;
}

export interface UserContextType {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    login: (token: string) => Promise<void>;
    logout: () => void;
    updateUser: (userData: Partial<User>) => void;
}

export interface IInputProps<T extends FieldValues> {
    icon:string;
    style: string | null;
    size: number;
    inputStyle: string | null;
    control: Control<T>;
    name: Path<T>;
    type?: "email" | "password" | "text" | "search";
    placeholder: string | null;
}

export interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    placeholder?: string | null | undefined;
    className?: string | null | undefined;
    inputStyle?: string | null;
    type?: "email" | "password" | "text" | "search";
}
export interface PhotoUploadFieldProps<T extends FieldValues> {
    name: FieldPath<T>;
    control: Control<T>;
    required?: boolean;
}
export type FormValues = {
    avatar: string;
};