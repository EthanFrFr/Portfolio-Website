function SectionHeader({ title }) {
    return (
      <header className = "max-w-6xl mx-auto py-8 text-[#E0E1DD] text-center">
        <h2 className = "text-4xl font-bold">
          {title}
        </h2>
      </header>
    );
  }
  
  export default SectionHeader;