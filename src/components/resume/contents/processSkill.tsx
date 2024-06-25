function ProcessSkill() {
    return (
        // processSkill
        <div className="w-full flex justify-center mt-10">
            <div className="lg:w-[60%] w-full flex flex-col gap-6">
                {/* HTML5/CSS */}
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">HTML5/CSS</p>

                    <span className="w-full h-2 bg-second rounded-full inline-flex mt-2">
                        {/* <motion.span
                            className="relative w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        > */}
                        <div className="relative w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full">
                            <span className="absolute -top-7 right-0">80%</span>
                        </div>
                        {/* </motion.span> */}
                    </span>
                </div>

                {/* React/Javascript/TypeScript */}
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">React/Javascript/TypeScript</p>

                    <span className="w-full h-2 bg-second rounded-full inline-flex mt-2">
                        {/* <motion.span
                            className="relative w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        > */}
                        <div className="relative w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full">
                            <span className="absolute -top-7 right-0">75%</span>
                        </div>
                        {/* </motion.span> */}
                    </span>
                </div>

                {/* WordPress: PageBuilder, UX Builder, Flatsome, Elementor */}
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">WordPress: PageBuilder/UX Builder/Flatsome/Elementor</p>

                    <span className="w-full h-2 bg-second rounded-full inline-flex mt-2">
                        {/* <motion.span
                            className="relative w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        > */}
                        <div className="relative w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full">
                            <span className="absolute -top-7 right-0">80%</span>
                        </div>
                        {/* </motion.span> */}
                    </span>
                </div>

                {/* Git, SVN */}
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Git/SVN</p>

                    <span className="w-full h-2 bg-second rounded-full inline-flex mt-2">
                        {/* <motion.span
                            className="relative w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        > */}
                        <div className="relative w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full">
                            <span className="absolute -top-7 right-0">80%</span>
                        </div>
                        {/* </motion.span> */}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProcessSkill
