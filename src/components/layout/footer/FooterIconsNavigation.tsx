import Link from "next/link";

export default function FooterIconsLinks () {
    const navigationLinks = [["Twitter", "/"],["Instagramm", "/"],["Facebook", "/"]]
    return(
        <div className="w-full mt-10 px-5">
            <ul className="flex gap-5 flex-wrap justify-center">
                {
                    navigationLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link[1]} className="text-soft-mint ">
                                <img src={`icons/${link[0]}.svg`} alt=""/>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )}