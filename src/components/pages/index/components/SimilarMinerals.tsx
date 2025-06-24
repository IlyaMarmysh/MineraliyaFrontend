import {ISimilarMinerals} from "@/types/api.types";
import Link from "next/link";

export default function SimilarMinerals() {
    const similarMineral:ISimilarMinerals = [
        {id:1, name: "Spessartine", image:"/spessartin.png", url: "/"},
        {id:2, name: "Almandine", image:"/almandine.png", url: "/"},
        {id:3, name: "Rhodolite", image:"/Rhodolite.png", url: "/"},
        {id:4, name: "Pyrope", image:"/Pyrope.png", url: "/"},
        {id:5, name: "Hessonite", image:"/Hessonite.png", url: "/"},
        {id:6, name: "Uvarovite", image:"/Uvarovite.png", url: "/"},
    ]
    return (
        <div className="flex gap-2 flex-col">
            <span className="font-bold text-xl xl:text-2xl grow px-4">
                Similar Minerals
            </span>
            <ul className="flex gap-3 flex-wrap justify-between min-h-56 items-center">
                {
                    similarMineral.map((mineral)=>
                        <li key={mineral.id}  className="flex flex-col w-44 gap-2">
                            <Link href={mineral.url} className="block hover:bg-teal-muted p-2 rounded-xl">
                                <img src={mineral.image || "icons/profile_icon.svg"} alt={mineral.name} className="w-full rounded-xl"/>
                                <span className="text-base">{mineral.name}</span>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}