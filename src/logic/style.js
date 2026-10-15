// Variables
let currTheme = "dark"
let currPalette = "bw"

// Switch CSS "Theme Variables"
export function switchTheme() {
    // Switch the state
    if (currTheme == "dark") {
        currTheme = "light"
    } else {
        currTheme = "dark"
    }
    
    // Store the colors temporarily
    const temp1 = getComputedStyle(document.documentElement).getPropertyValue('--theme-1')
    const temp2 = getComputedStyle(document.documentElement).getPropertyValue('--theme-2')
    const temp3 = getComputedStyle(document.documentElement).getPropertyValue('--theme-3')
    const temp4 = getComputedStyle(document.documentElement).getPropertyValue('--theme-4')
    
    // Switch the "Theme Variables" depending on the current palette
    document.documentElement.style.setProperty('--theme-1', temp4)
    document.documentElement.style.setProperty('--theme-4', temp1)
    if (currPalette == "bw" | currPalette == "gb" | currPalette == "vb" | currPalette == "az") {
        document.documentElement.style.setProperty('--theme-2', temp1)
        document.documentElement.style.setProperty('--theme-3', temp1)
    } else {
        document.documentElement.style.setProperty('--theme-2', temp3)
        document.documentElement.style.setProperty('--theme-3', temp2)
    }
}

// Change CSS "Palette Variables"
export function changePalette(paletteName) {
    // Switch the state
    currPalette = paletteName

    // Build the palette color names
    const palette1 = '--' + paletteName + '-1'
    const palette2 = '--' + paletteName + '-2'
    const palette3 = '--' + paletteName + '-3'
    const palette4 = '--' + paletteName + '-4'

    // Switch the "Palette Variables" depending on the current theme
    if (currTheme == "dark") {
        document.documentElement.style.setProperty('--theme-1', `var(${palette1})`)
        document.documentElement.style.setProperty('--theme-2', `var(${palette2})`)
        if (currPalette == "bw" | currPalette == "gb" | currPalette == "vb" | currPalette == "az") {
            document.documentElement.style.setProperty('--theme-3', `var(${palette2})`)
            document.documentElement.style.setProperty('--theme-4', `var(${palette2})`)
        } else {
            document.documentElement.style.setProperty('--theme-3', `var(${palette3})`)
            document.documentElement.style.setProperty('--theme-4', `var(${palette4})`)
        }
    } else {
        document.documentElement.style.setProperty('--theme-4', `var(${palette1})`)
        if (currPalette == "bw" | currPalette == "gb" | currPalette == "vb" | currPalette == "az") {
            document.documentElement.style.setProperty('--theme-3', `var(${palette1})`)
            document.documentElement.style.setProperty('--theme-2', `var(${palette1})`)
            document.documentElement.style.setProperty('--theme-1', `var(${palette2})`)
        } else {
            document.documentElement.style.setProperty('--theme-3', `var(${palette2})`)
            document.documentElement.style.setProperty('--theme-2', `var(${palette3})`)
            document.documentElement.style.setProperty('--theme-1', `var(${palette4})`)
        }        
    }
}