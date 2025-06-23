import Link from "next/link";
export default function HeaderNavigation() {
    const navigationLinks = [["Explore", "/public"],["Create", "/public"],["Events", "/public"],["Feed", "/public"]]
    return (
        <nav className="hidden items-center justify-start lg:flex">
            <ul className="flex justify-between gap-9 h-full items-center">
                {
                    navigationLinks.map((link, index) => (
                        <li key={index}>
                        <Link href={link[1]} className="text-base leading-4 text-dark hover:border-b">{link[0]}</Link>
                    </li>
                    ))
                }
            </ul>
        </nav>
    )
}
