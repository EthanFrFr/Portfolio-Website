import {changePalette} from "../logic/style.js"
import "../index.css"

export default function Hero({theme, palette, setPalette}) {
    return (
        <div id = "Hero" className = "style-element font-bold flex items-center">
            {/* Name */}
            <p className = "text-[64px] w-[512px] h-[128px] mr-[64px] border-t-4 border-b-4 border-inherit flex items-center justify-center">
                Ethan Kremer
            </p>

            {/* Art & Palette Selection */}
            <img className = "mr-[48px]" src = {`../../pixel%20art/${palette}-${theme}.png`}></img>

            {/* Palette Button */}
            <button className = "grid grid-cols-1 grid-rows-1 size-[64px]" onClick = {() => {changePalette("lush"); setPalette("lush")}}>
                <svg ariaLabel = "Palette Button" fill = "currentColor" viewBox = "0 0 512 512">
                    <circle cx = "50%" cy = "50%" r = "32%"/>
                </svg>
                <svg ariaLabel = "Palette Button Border" fill = "currentColor" viewBox = "0 0 512 512">
                    <path d = "M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333z"></path>
                </svg>
            </button>
        </div>
    )
}