export default function IndexSlide () {
    const text = [["2,4K", 'Followers'],["2,4K", 'Following'],["2,4K", 'Likes']]
    return (
        <div
            className="max-w-full rounded-xl min-w-full min-h-72 justify-around flex flex-col bg-mineral bg-center bg-no-repeat bg-cover">
            <div>
                <h1 className="font-bold text-xl p-4 xl:text-4xl">
                    World of Minerals
                </h1>
            </div>
            <div className="flex gap-9 py-3 px-4">

                {
                    text.map((item, index) => (
                        <div key={index} className="border border-light-snow rounded-xl w-1/3 flex-col flex justify-center items-center gap-1 py-3 sm:gap-3 bg-soft-mint/40">
                            <h3 className="font-bold text-teal-muted text-xl xl:text-2xl">
                                {item[0]}
                            </h3>
                            <span className="text-teal-muted text-base">
                   {item[1]}
                </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}