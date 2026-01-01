import Header from "./components/Header"
import About from "./components/About"
import SectionHeader from "./components/SectionHeader"
import Projects from "./components/Projects"

function App() {
  return (
    <div className = "min-h-screen font-worksans bg-gradient-to-b from-[#0D1B2A] to-[#1B263B]">
      <Header />
      <About />
      <SectionHeader title = "Projects" />
      <Projects />
    </div>
  )
}

export default App;