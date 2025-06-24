'use client'

import Image from 'next/image'
import Link from 'next/link'
import {useUser} from "@/context/UserContext";

export const HeaderUserProfile = () => {
    const { user, isLoading } = useUser()

    if (isLoading) {
        return (
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
        )
    }

    return user ? (
        <div className="flex items-center gap-2 order-5">
            {/* Аватар пользователя */}
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                {user.avatar ? (
                    <Image
                        src={user.avatar}
                        alt={`${user.name}'s avatar`}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-soft-mint flex items-center justify-center text-white text-xs">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                )}
            </div>

            {/* Имя пользователя (опционально) */}
            <span className="hidden md:inline text-sm font-medium">
        {user.name.split(' ')[0]} {/* Показываем только первое имя */}
      </span>
        </div>
    ) : (
        <Link
            href="/login"
            className="px-4 py-2 bg-soft-mint text-white rounded-md hover:bg-soft-mint-dark transition-colors text-sm order-5"
        >
            Войти
        </Link>
    )
}