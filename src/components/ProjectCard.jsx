function ProjectCard({title, description, tags}) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {tags.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button>View Project</button>
      </div>
    );
  }
  
  export default ProjectCard;