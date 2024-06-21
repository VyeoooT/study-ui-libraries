import Education from "./education"
import WorkJob from "./workJob"

function EduWork() {
    return (
        // education & work
        <div className="w-full flex lg:flex-row flex-col lg:gap-20 gap-10">
            <Education />
            <WorkJob />
        </div>
    )
}

export default EduWork
