import {AuthTokens, User} from "@/types/types";
import {fetchGET, fetchMutate} from "@/api/fetch";
import {setCookie} from "cookies-next";
import {IRegisterParams} from "@/types/api.types";
import toast from "react-hot-toast";


class UserApi {
    private static readonly API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    public static async fetchUser(token: string): Promise<User> {
        const response = await fetch(`${this.API_BASE_URL}/user`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return response.json();
    }

    public static async fetchUserById(id: number): Promise<User> {
        return await fetchGET({
            url: `/user/${id}`,
        })
    }

    public static register = async ({body}: IRegisterParams) => {
        return await fetchMutate({
            url: "register",
            body,
            method: "POST",
        }).then((data: { token: string }) => {
            setCookie("token", data.token, {
                maxAge: 30 * 24 * 60 * 60,
            });
            toast.success("Регистрация прошла успешно");
        });
    };

    public static storeTokens(tokens: AuthTokens): void {
        localStorage.setItem('accessToken', tokens.accessToken);
        if (tokens.refreshToken) {
            localStorage.setItem('refreshToken', tokens.refreshToken);
        }
    }

    public static clearTokens(): void {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }

    public static getAccessToken(): string | null {
        return localStorage.getItem('accessToken');
    }
}

export default UserApi;