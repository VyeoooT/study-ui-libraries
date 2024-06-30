import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    label: string
    linkPreview: string
    linkGithub: string
    imgSrc: string
}

function ProjectCard({ label, linkPreview, linkGithub, imgSrc }: Props) {
    return (
        // project card
        <div className="flex justify-center items-center">
            <div className="*:font-oswald relative flex flex-col border-2 border-second rounded-xl overflow-hidden">
                <a className="group" href={linkPreview} target="_blank" rel="noopener noreferrer">
                    {/* img */}
                    <div className="w-80 h-[24rem]">
                        <img className="absolute top-0 left-0 right-0 bottom-0 object-cover group-hover:scale-110 duration-500" src={imgSrc} alt={label} />
                    </div>
                </a>

                <div className="relative flex justify-center items-center gap-4 py-2 dark:bg-slate-800 bg-gray-50">
                    <span className="text-lg font-normal text-primary">{label}</span>
                    
                    <a className="dark:text-white group" href={linkGithub} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="dark:shadow-sm dark:shadow-gray-50 group-hover:shadow-none duration-200" icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
