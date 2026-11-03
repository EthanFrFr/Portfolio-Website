import Header from "./components/Header"
import Hero from "./components/Hero"
import {useState} from "react"
import "./index.css"

export default function App() {
  // Global Variables + Setters
  const [theme, setTheme] = useState("dark")
  const [palette, setPalette] = useState("bw")

  return (
    <div id = "Page" className = "style-page min-h-screen flex flex-col items-center pt-[64px]">
      <Header theme = {theme} setTheme = {setTheme}/>
      <Hero theme = {theme} palette = {palette} setPalette = {setPalette}/>
      <div className = "mb-[2000px]"></div>
    </div>
  )
}