import ProjectCard from "./card"
import Title from "../title"

function Projects() {
    return (
        // Projects
        <section id="projects">
            <div className="text-center xl:max-w-screen-xl sm:container px-5 mx-auto">
                <Title title="Visit my portfolio and keep your feedback" description="My Projects" />

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    <ProjectCard
                        label="Project 1"
                        linkGithub="github.com"
                        linkPreview="google.com"
                        imgSrc="https://contents.rizerssoft.com/uploads/large_aomua1_rizerssoft_online_db7f78b49d.png"
                    />

                    <ProjectCard
                        label="Project 2"
                        linkGithub="github.com"
                        linkPreview="google.com"
                        imgSrc="https://contents.rizerssoft.com/uploads/large_aomua1_rizerssoft_online_db7f78b49d.png"
                    />

                    <ProjectCard
                        label="Project 3"
                        linkGithub="github.com"
                        linkPreview="google.com"
                        imgSrc="https://contents.rizerssoft.com/uploads/large_aomua1_rizerssoft_online_db7f78b49d.png"
                    />

                    <ProjectCard
                        label="Project 4"
                        linkGithub="github.com"
                        linkPreview="google.com"
                        imgSrc="https://contents.rizerssoft.com/uploads/large_aomua1_rizerssoft_online_db7f78b49d.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
