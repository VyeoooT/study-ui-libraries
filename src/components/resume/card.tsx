function ResumeCard({ title, subTitle, descriptions, result}: any) {
    return (
        // resume card
        <div className="w-full h-1/3 flex group">
            {/* dot hover */}
            <div className="relative w-5 h-[6px] mt-16">
                <span className="absolute size-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-second bg-opacity-60">
                    <span className="size-3 rounded-full bg-gray-300 inline-flex group-hover:bg-primary duration-300"></span>
                </span>
            </div>

            {/* content */}
            <div className="w-full flex flex-col justify-center lg:gap-10 gap-6 rounded-lg lg:px-10 p-4 bg-card-resume shadow-gray-500 shadow-lg">
                {/* top */}
                <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-0 gap-4">
                    <div>
                        {title && (
                            <h3 className="md:text-2xl text-xl font-semibold group-hover:text-white">{title}</h3>
                        )}

                        {subTitle && (
                            <p className="text-sm text-gray-700 mt-2 group-hover:text-white">{subTitle}</p>
                        )}
                    </div>

                    {result && (
                        <div className="min-w-24 px-4 py-2 flex justify-center items-center bg-second/20 text-primary rounded-lg group-hover:bg-third shadow-light">
                            <p className="text-sm font-medium text-nowrap">{result}</p>
                        </div>
                    )}
                </div>

                {/* bottom */}
                {descriptions && descriptions.length > 0 && (
                    <div className="pl-5">
                        <ul className="list-disc list-outside">
                            {descriptions.map((desc: string, idx: number) => (
                                <li key={idx} className="md:text-base text-sm text-justify text-gray-700 group-hover:text-white duration-300 transition-colors">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ResumeCard
