import ProjectCard from "./ProjectCard"

function Projects() {
    return (
        <section>
            <ProjectCard
                title = "Portfolio Website"
                descriptiopn = "Personal portfolio website designed with Figma and built using React and Vite (You're looking at it!)"
                tags = {["Javascript", "Figma", "React", "Vite"]}
            />

            <ProjectCard
                title = "Videogame"
                descriptiopn = "Platforming videogame "
                tags = {["C#", "GameMaker", "Aesprite", "Ableton Live"]}
            />
        </section>
    )
}

export default Projects;