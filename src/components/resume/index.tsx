import Title from "../title"
import { resumeTabs } from "../../constants"
import { useEffect, useState } from "react"
import EduWork from "./contents/edu_work"
import ProcessSkill from "./contents/processSkill"

function Resumes() {
    interface TabType {
        _id: number
        label: string
    }

    const initTab = resumeTabs.tab[0].label
    const [isActive, setIsActive] = useState(initTab)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    const toggle = (label: string) => {
        setIsActive(label)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener("resize", handleResize)
        return() => { window.removeEventListener("resize", handleResize) }
    }, [])

    return (
        // Resumes
        <section id="resume" className="xl:max-w-screen-xl sm:container">
            <div className="mx-auto md:px-10 px-5">
                {/* title - tabs */}
                <div className="text-center">
                    <Title title="+2 year of experience" description="my resume" />

                    <div className="md:flex hidden justify-center items-center space-x-5">
                        {resumeTabs.tab.map((item: TabType) => (
                            <button
                                key={item._id}
                                className={`btn ${isActive === item.label ? "btn-outline" : "btn-filled"}`}
                                onClick={() => toggle(item.label)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* component */}
                <div>
                    {isMobile ? 
                    (
                        <>
                            <EduWork />
                            <ProcessSkill />
                        </>
                    )
                    :
                    (
                        <>
                            {isActive === "Education & Work" &&  <EduWork />}
                            {isActive === "Professional Skills" && <ProcessSkill />}
                        </>
                    )
                }
                </div>
            </div>
        </section>
    )
}

export default Resumes
