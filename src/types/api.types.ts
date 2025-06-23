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
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
}
export interface IregisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    avatar: string;
}
export interface ISearchForm {
    search: string;
}