import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex grow min-w-full gap-2 justify-center items-center lg:min-w-0 lg:order-2">
            <Image src="/fabula-ai.svg" alt="Logo" width={35} height={35}/>
            <span className="text-xl text-dark-background font-bold lg:text-2xl">
                Mineral Collector
            </span>
        </div>
    )
}
