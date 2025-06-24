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
export interface ILoginParams{
    body: ILoginBody;
}
export interface ILoginForm {
    email: string;
    password: string;
}
export interface ILoginBody {
    email: string;
    password: string;
}
export interface ISearchForm {
    search: string;
}
export type ActiveCollectors = Collector[];
export interface Collector {
    id: number;
    name: string;
    avatar: string | null;
};
export interface IMineralMain {
    name: string,
    image: string[],
    chemicalFormula: string,
    color: string,
    streak: string,
    luster: string,
    diaphaneity: string,
    cleavage: string,
    fracture: string,
    hardness: string,
}
export type ISimilarMinerals = ISimilarMineral[];
export interface ISimilarMineral {
    id: number;
    name: string;
    image: string | null;
    url: string;
};