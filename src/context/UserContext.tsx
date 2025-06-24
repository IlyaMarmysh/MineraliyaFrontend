'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, UserContextType } from "@/types/types";
import UserApi from "@/api/UserApi";
const UserContext = createContext<UserContextType | undefined>(undefined);
interface UserProviderProps {
    children: React.ReactNode;
}
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const login = async (token: string) => {
        try {
            setIsLoading(true);
            setError(null);
            const userData = await UserApi.fetchUser(token);
            UserApi.storeTokens({ accessToken: token });
            setUser(userData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
            setUser(null);
            UserApi.clearTokens(); // Очищаем токен при ошибке
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        UserApi.clearTokens();
        setUser(null);
        setError(null);
    };

    const updateUser = (userData: Partial<User>) => {
        if (user) {
            setUser({ ...user, ...userData });
        }
    };
    useEffect(() => {
        const token = UserApi.getAccessToken();
        if (token) {
            login(token).catch(err => {
                console.error('Auto-login failed:', err);
                UserApi.clearTokens();
            });
        } else {
            setIsLoading(false);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, isLoading, error, login, logout, updateUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};