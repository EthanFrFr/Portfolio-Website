function Header() {
    return (
      <header className = "w-full py-16 text-[#E0E1DD]">
        <div className = "max-w-6xl mx-auto flex items-center justify-between gap-8">
          
          <h1 className = "text-xl font-bold"> Ethan Kremer </h1>
  
          <p className="font-normal"> ethk21578@gmail.com </p>
  
          <a
            href="https://www.linkedin.com/in/ethan-kremer-778561330"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2"
          > LinkedIn </a>
  
          <a
            href="https://github.com/EthanFrFr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2"
          > GitHub </a>
  
        </div>
      </header>
    );
  }

export default Header;