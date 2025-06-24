"use client"
import Link from "next/link"
import Image from "next/image"

export default function IconsNavigation() {
    const navigationLinks = [
        { icon: "Notification", path: "/" },
        { icon: "Bookmarks", path: "/" },
        { icon: "Basket", path: "/" }
    ]
    return (
        <nav className="order-4 hidden lg:block">
            <ul className="flex justify-between gap-2 h-full items-center">
                {navigationLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path} className="block p-2 hover:bg-soft-mint/25 rounded-lg transition-colors">
                            <Image
                                src={`/icons/${link.icon}.svg`}
                                alt={`${link.icon} icon`}
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}