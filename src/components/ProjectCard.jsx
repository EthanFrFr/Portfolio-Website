function ProjectCard({title, description, tags}) {
    return (
      <div className = "max-w-6xl mx-auto py-8 text-[#E0E1DD] text-left">
        <h3 className = "text-3xl font-bold">{title}</h3>
        <p>{description}</p>
        <ul>
          {tags.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
        <button className = "border">View Project</button>
      </div>
    );
  }
  
  export default ProjectCard;