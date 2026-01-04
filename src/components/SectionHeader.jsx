function SectionHeader({ title }) {
    return (
      <header className = "max-w-4xl mx-auto mb-4 text-[#E0E1DD] text-left">
        
        <h2 className = "text-4xl font-semibold">
          {title}
        </h2>
      
      </header>
    );
  }
  
  export default SectionHeader;