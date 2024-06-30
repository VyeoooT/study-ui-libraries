import ResumeCard from "../../card"

function Education() {
    return (
        // left - education
        <div className="lg:w-1/2 w-full">
            {/* header */}
            <div className="flex flex-col gap-4 lgl:py-12 py-6">
                <p className="text-sm text-primary tracking-[4px]">2018 - Present</p>
                <h2 className="font-oswald md:text-4xl text-3xl font-bold">Education</h2>
            </div>

            {/* card content */}
            <div className="w-full flex flex-col gap-10 border-l-[6px] border-l-black border-opacity-30 lg:mt-10 mt-6">
                <ResumeCard
                    title="VIETNAMESE - KOREAN VOCATIONAL COLLEGE"
                    subTitle="SOFTWARE APPLICATION PROGRAMING (2018 - 2021)"
                    result="GPA: 3.2/4"
                />
            </div>
        </div>
    )
}

export default Education
