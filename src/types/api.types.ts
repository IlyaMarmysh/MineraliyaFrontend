export interface IFetchMutateParams {
    url: string;
    body?: Record<string, any>;
    method: Method;
    token?: string;
    contentType?: "multipart/form-data" | "application/json";
}

export type Method = "POST" | "PUT" | "DELETE";
export interface IRedirect {
    id: number;
    from: string;
    to: string;
}
export interface IFetchGetParams {
    url: string;
    token?: string;
}
export interface IRegisterParams{
    body: IregisterBody;
}
export interface IregisterBody {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    avatar_url: string;
}
export interface IregisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    avatarUrl: string;
}
export interface ISearchForm {
    search: string;
}