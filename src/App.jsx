import Header from "./components/Header"
import Hero from "./components/Hero"
import "./index.css"

export default function App() {
  return (
    <div id = "Page" className = "style-page min-h-screen flex flex-col items-center pt-[64px]">
      <Header />
      <Hero />
      <div className = "mb-[2000px]"></div>
    </div>
  )
}