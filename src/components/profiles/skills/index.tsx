import { useEffect, useState } from "react"
import Title from "../title"
import { tabs } from "../../../constants"
import Languages from "./contents/languages"
import Frameworks from "./contents/frameworks"
import Databases from "./contents/databases"
import Others from "./contents/others"

function Skills() {
    // tab type
    interface TabType {
        _id: number
        label: string
    }

    // toggle content of tab
    const initTab = tabs.tab[0].label
    const [isActive, setIsActive] = useState(initTab)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    const toggleContent = (label: string) => {
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
        // skills
        <section id="skills" className="xl:max-w-screen-xl sm:container">
            <div className="mx-auto md:px-20 px-5">
                {/* title */}
                <div className="text-center">
                    <Title title="skills" description="what i do" />

                    {/* tabs */}
                    <div className="md:flex hidden justify-center items-center space-x-5">
                        {tabs.tab.map((item: TabType) => (
                            <button
                                key={item._id}
                                className={`btn ${isActive === item.label ? "btn-outline" : "btn-filled"}`}
                                onClick={() => toggleContent(item.label)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* contents grid */}
                <div>
                    {isMobile ? 
                    (
                        <>
                            <Languages />
                            <Frameworks />
                            <Databases />
                            <Others />
                        </>
                    )
                    :
                    (
                        <>
                            {isActive === "Languages" && <Languages />}
                            {isActive === "Frameworks" && <Frameworks />}
                            {isActive === "Databases" && <Databases />}
                            {isActive === "Others" && <Others />}
                        </>
                    )
                }
                </div>
            </div>
        </section>
    )
}

export default Skills
