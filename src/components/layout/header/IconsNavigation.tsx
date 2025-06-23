import Link from "next/link";
import Image from "next/image";

export default function IconsNavigation() {
    const navigationLinks = [["Notification", "/"],["Bookmarks", "/"],["Basket", "/"],["profile_icon", "/profile?userId=${1}"]]
    return (
        <nav className="order-4 hidden lg:block">
            <ul className="flex justify-between gap-2 h-full items-center">
                <li>
                    <Link href="/" className="w-10 h-10 bg-teal-muted rounded-xl block p-2.5 hover:bg-soft-mint/25"><Image
                        src="/icons/Notification.svg" alt="Notification" width={20} height={20}/></Link>
                </li>
                {
                    navigationLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link[1]} className="w-10 h-10 bg-teal-muted rounded-xl block p-2.5 hover:bg-soft-mint/25"><Image
                                src={`/icons/`+link[0]+`.svg`} alt={link[0]} width={20} height={20}/></Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}