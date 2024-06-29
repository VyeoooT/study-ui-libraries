import About from "../../components/about"
import Skills from "../../components/skills"
import Projects from "../../components/projects"
import Resumes from "../../components/resume"
import Contact from "../../components/contact"
import Header from "../../components/navigations/header"

function Home() {
    return (
        // home page
        <>
            <Header />
            <About />
            <Skills />
            <Resumes />
            <Projects />
            <Contact />
        </>
    )
}

export default Home
