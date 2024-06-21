function ResumeCard({ title, subTitle, description, result }: any) {
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
            <div className="w-full bg-slate-600 rounded-lg lg:px-10 p-4 flex flex-col justify-center lg:gap-10 gap-6 shadowGray hover:bg-opacity-70 duration-300 transition-opacity">
                {/* top */}
                <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-0 gap-4">
                    <div>
                        <h3 className="md:text-2xl text-xl font-semibold group-hover:text-white duration-300">{title}</h3>

                        <p className="text-sm text-gray-400 mt-2 group-hover:text-white duration-300">{subTitle}</p>
                    </div>

                    <div>
                        <p className="px-4 py-2 bg-second/25 text-primary text-sm font-medium rounded-lg flex justify-center items-center shadowGray">{result}</p>
                    </div>
                </div>

                {/* bottom */}
                <p className="md:text-base text-sm font-medium text-gray-400 group-hover:text-gray-300 duration-300 transition-colors">{description}</p>
            </div>
        </div>
    )
}

export default ResumeCard
