import ResumeCard from "../../card"

function WorkJob() {
    return (
        // right - workjob
        <div className="lg:w-1/2 w-full">
            {/* header */}
            <div className="flex flex-col gap-4 lgl:py-12 py-6">
                <p className="text-sm text-primary tracking-[4px]">12/2021 - Now</p>
                <h2 className="md:text-4xl text-3xl font-bold">Work Experience</h2>
            </div>

            {/* card content */}
            <div className="w-full flex flex-col gap-10 border-l-[6px] border-l-black border-opacity-30 lg:mt-10 mt-6">
                <ResumeCard
                    title="AZODA TECHNOLOGY JOINT STOCK COMPANY LTD"
                    subTitle="WORDPRESS DEVELOPER (12/2021 - 01/2023)"
                    result=""
                    description="Build the UI of WordPress website (introducing the company's images, projects, products and technology solutions)."
                />

                <ResumeCard
                    title="PROJECT HEALTH TRACKING"
                    subTitle="BACKEND DEVELOPER - FREELANCER (01/2023 - 10/2023)"
                    result=""
                    description="Build the system according to the MVC model.
                    Analyze medical examination results from PDF files of hospitals.
                    Use design pattern: adapter, to word with input data, returning results that accurately match the user's request.
                    Query data from the database to display on the frontend.
                    Handle data extracted from PDF and save to database.
                    Processing arrays of data."
                />

                <ResumeCard
                    title="WORDPRESS DEVELOPER"
                    subTitle="ALENA ENERGY TECHNOLOGY CO., LTD (07/2023 - 3/2024)"
                    result=""
                    description="Build the UI of WordPress website (introducing the company's images, projects, products and technology solutions)."
                />
            </div>
        </div>
    )
}

export default WorkJob
