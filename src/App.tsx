import Header from "./components/navigations/header"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <div className="text-2xl text-gray-800 font-bold">inittial profile</div>
    </>
  )
}

export default App
