import {IMineralMain} from "@/types/api.types";

export default function MineralMain() {

    type MineralProperties = Omit<IMineralMain, 'image' | 'name'>
    const mainMineral:IMineralMain = {
        name: "Garnet",
        image:["/garnet 3.png","/garnet 2.png","/garnet 1.png"],
        chemicalFormula: "X3Y2(SiO4)3",
        color: "Varying shades of red",
        streak: "White",
        luster: "Vitreous to resinous",
        diaphaneity: "Transparent to translucent",
        cleavage: "None",
        fracture: "Conchoidal to uneven",
        hardness: "6.5-7.5 (Mohs Scale)"
    }
    const { name, image, ...properties } = mainMineral;

    const formatKey = (key: string) => {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase());
    };
    return (

        <div className="flex gap-2 flex-col  mt-5">
            <span className="font-bold text-xl xl:text-2xl grow px-4">
                {mainMineral.name}
            </span>
            <div className="flex gap-5 px-4 flex-wrap justify-center min-h-72 items-center">
                {
                    mainMineral.image.map((image, i) => { const visibilityRules = [
                        '',
                        'hidden md:block',
                        'hidden lg:block',
                        'hidden xl:block'
                    ];
                        const visibilityClass = visibilityRules[i] || '';

                        return (
                            <img
                                key={i}
                                src={image}
                                alt={`Garnet ${i + 1}`}
                                className={`h-full ${visibilityClass}`}
                            />
                        );
                    })}
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 w-full py-2">
                {(Object.entries(properties) as Array<[keyof MineralProperties, string]>).map(([key, value]) => (
                    <li key={key} className="flex flex-col gap-2 border-t border-light-snow py-2 pl-4">
                        <span className="text-soft-mint text-base">{formatKey(key)}</span>
                        <span>{value}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}