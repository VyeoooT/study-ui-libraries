import About from "../../components/profiles/about"
import Skills from "../../components/profiles/skills"
import Projects from "../../components/profiles/projects"
import Resumes from "../../components/profiles/resume"
import Contact from "../../components/profiles/contact"
import Header from "../../components/profiles/navigations/header"
import Footer from "../../components/profiles/navigations/footer"

function ProfilePerson() {
    return (
        // home page
        <>
            <Header />
            <About />
            <Skills />
            <Resumes />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default ProfilePerson
