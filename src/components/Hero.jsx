import {changePalette} from "../logic/style.js"
import "../index.css"

export default function Hero() {
    return (
        <div id = "Hero" className = "style-element font-bold flex items-center">
            {/* Name */}
            <p className = "text-[64px] w-[512px] h-[128px] mr-[64px] border-t-4 border-b-4 border-inherit flex items-center justify-center">
                Ethan Kremer
            </p>

            {/* Art & Palette Selection */}
            <img src = "../../public/pixel%20art/bw-dark.png"></img>

            {/* Palette Button */}

        </div>
    )
}