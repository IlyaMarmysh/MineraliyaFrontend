"use client"
import Link from "next/link"
import Image from "next/image"
import { useUser } from "@/context/UserContext"

export default function IconsNavigation() {
    const { user } = useUser()
    const navigationLinks = [
        { icon: "Notification", path: "/" },
        { icon: "Bookmarks", path: "/" },
        { icon: "Basket", path: "/" },
        { icon: "profile_icon", path: "/profile" }
    ]

    return (
        <nav className="order-4 hidden lg:block">
            <ul className="flex justify-between gap-2 h-full items-center">
                {navigationLinks.map((link, index) => {
                    const isLastLink = index === navigationLinks.length - 1
                    const showAvatar = isLastLink && user?.avatar

                    return (
                        <li key={index}>
                            <Link
                                href={link.path}
                                className={`
                                    w-10 h-10 rounded-xl block p-2.5
                                    ${showAvatar
                                    ? "bg-cover bg-center hover:opacity-90"
                                    : "bg-teal-muted hover:bg-soft-mint/25"
                                }
                                `}
                                style={showAvatar ? {
                                    backgroundImage: `url(${user.avatar})`
                                } : {}}
                            >
                                {!isLastLink && (
                                    <Image
                                        src={`/icons/${link.icon}.svg`}
                                        alt={link.icon}
                                        width={20}
                                        height={20}
                                        className="w-full h-full"
                                    />
                                )}
                                {isLastLink && !user?.avatar && (
                                    <Image
                                        src="/icons/profile_icon.svg"
                                        alt="Profile"
                                        width={20}
                                        height={20}
                                        className="w-full h-full"
                                    />
                                )}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}