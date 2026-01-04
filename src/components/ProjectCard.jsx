function ProjectCard({title, description, tags, hasAudio}) {
    return (
      <div className = "max-w-4xl mx-auto p-6 mb-4 text-[#E0E1DD] text-left border border-[#E0E1DD] rounded-xl bg-[#1B263B]">
        
        <h3 className = "text-2xl font-semibold mb-4">{title}</h3>
        
        <p className = "mb-4 text-lg">{description}</p>
        
        <ul className = "text-sm flex gap-2">
          {tags.map((item, index) => (
            <li key={index} className = "px-3 py-1 border border-[#E0E1DD]/40 rounded-full bg-[#0D1B2A] whitespace-nowrap">{item}</li>
          ))}
        </ul>
      
        {hasAudio && (<audio controls className = "w-full mt-4">
          <source src="/audio/REM-Ember.mp4" type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>)}
      </div>
    );
  }
  
  export default ProjectCard;