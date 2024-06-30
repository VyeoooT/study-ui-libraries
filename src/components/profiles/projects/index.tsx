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
                        linkGithub="#"
                        linkPreview="#"
                        imgSrc="https://contents.rizerssoft.com/uploads/large_aomua1_rizerssoft_online_db7f78b49d.png"
                    />

                    <ProjectCard
                        label="Project 2"
                        linkGithub="#"
                        linkPreview="#"
                        imgSrc="https://contents.rizerssoft.com/uploads/large_app101_rizerssoft_online_0c3c4b2271.png"
                    />

                    <ProjectCard
                        label="Project 3"
                        linkGithub="#"
                        linkPreview="#"
                        imgSrc="https://contents.rizerssoft.com/uploads/large_banhang28_rizerssoft_online_a4b22f10f5.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
