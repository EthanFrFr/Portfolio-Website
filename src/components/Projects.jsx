import ProjectCard from "./ProjectCard"

function Projects() {
    return (
        <section>
            <ProjectCard
                title = "Portfolio Website"
                description = "My personal portfolio website designed with Figma and built using React and Vite (You're looking at it!). I've had prior experience designing with Figma, and after I made a simple design for this site I had a ton of fun learning React and Tailwind CSS to make it come to life."
                tags = {["Javascript", "Figma", "React", "Vite", "Tailwind CSS"]}
            />

            <ProjectCard
                title = "Video Game"
                description = "I have been working on a 2D platformer video game in the GameMaker Studio game engine on-and-off for about a year now. Through this project I have learned a lot more about the full process of object-oriented programming, and I have also greatily improved my artistic abilities. I hope to have a small demo of the game avaliable on GitHub soon, but for now you can listen to a snippet of a piece I wrote for it!"
                tags = {["C#", "GameMaker", "Aesprite", "Ableton Live"]}
                hasAudio = {true}
            />
        </section>
    )
}

export default Projects;