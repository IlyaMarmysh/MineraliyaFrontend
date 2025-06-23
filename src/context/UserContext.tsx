'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {User, UserContextType} from "@/types/types";
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
            const userData = await UserApi.fetchUser(token);
            UserApi.storeTokens({ accessToken: token });
            setUser(userData);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        UserApi.clearTokens();
        setUser(null);
    };

    const updateUser = (userData: Partial<User>) => {
        if (user) {
            setUser({ ...user, ...userData });
        }
    };

    // Проверка авторизации при монтировании
    useEffect(() => {
        const token = UserApi.getAccessToken();
        if (token) {
            login(token).catch(err => {
                console.error('Auto-login failed:', err);
            });
        } else {
            setIsLoading(false);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, isLoading, error, login, logout, updateUser }}>
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