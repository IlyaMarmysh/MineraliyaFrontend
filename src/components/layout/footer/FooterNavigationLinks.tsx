import Link from "next/link";

export default function FooterNavigationLinks () {
    const navigationLinks = [["Home", "/"],["Minerals", "/"],["Gallery", "/"],["About", "/"],[" Contact Us", "/"]]
    return(
        <div className="w-full mt-10 px-5">
            <ul className="flex gap-5 flex-wrap justify-between">
                {
                    navigationLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link[1]} className="text-soft-mint text-xl hover:text-dark">
                                {link[0]}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}