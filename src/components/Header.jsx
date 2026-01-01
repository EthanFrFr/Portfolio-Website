import { useState } from "react";

function Header() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("ethk21578@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); 
      })
      .catch(err => console.error("Failed to copy: ", err));
  };

  return (
    <header className = "w-full py-16 text-[#E0E1DD] border-b border-gray-500">
      <div className = "max-w-6xl mx-auto flex items-center justify-between gap-8">
        
        <h1 className = "text-xl font-bold"> Ethan Kremer </h1>

        <p
          className = "font-normal cursor-pointer hover:text-[#E0E1DD]"
          onClick = {copyToClipboard}
          title = "Click to copy"
        >
          {copied ? "Copied!" : "ethk21578@gmail.com"}
        </p>

        <a
          href = "https://www.linkedin.com/in/ethan-kremer-778561330"
          target = "_blank"
          rel = "noopener noreferrer"
          className = "px-4 py-2"
        > LinkedIn </a>

        <a
          href = "https://github.com/EthanFrFr"
          target = "_blank"
          rel = "noopener noreferrer"
          className = "px-4 py-2"
        > GitHub </a>

      </div>
    </header>
  );
}

export default Header;
