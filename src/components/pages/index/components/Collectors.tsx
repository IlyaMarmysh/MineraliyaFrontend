import Link from "next/link";
import {ActiveCollectors} from "@/types/api.types"
export default function Collectors(){
    const collectors:ActiveCollectors = [
        {id:1, name: "Sophia Carter", avatar:null },
        {id:2, name: "Ethan Benneth", avatar: null },
        {id:3, name: "Olivia Haynes", avatar:null },
        {id:4, name: "Liam Foster", avatar: null },
        {id:5, name: "Ava Morgan", avatar: null }
    ]
    return(
        <div className="flex gap-2 flex-col mt-5">
            <h3 className="font-bold text-xl xl:text-2xl grow px-4">
                Active collectors
            </h3>
            <div className="mx-auto w-11/12">
                <ul className="flex justify-between gap-2 flex-wrap">
                    {
                        collectors.map((collector)=>
                            <li key={collector.id} className="flex p-3 border border-soft-mint rounded-xl hover:bg-soft-mint/25">
                                <img src={collector.avatar || "icons/profile_icon.svg"} alt={collector.name}/>
                                <Link href={`/profile?id=${collector.id}`} className={collector.name}>
                                    {collector.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}