import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-1 flex items-center justify-between py-6">
      <div className="flex m-8 items-center gap-4 text-3xl">
        {/* GitHub Icon with Link */}
        <a href="https://github.com/harshal-shelke" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer hover:text-gray-600 transition-all" />
        </a>
        
        {/* Instagram Icon with Link */}
        <a href="https://www.instagram.com/harshal.shelke_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition-all" />
        </a>
        
        {/* LinkedIn Icon with Link */}
        <a href="https://www.linkedin.com/in/harshal-shelke94/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="cursor-pointer hover:text-blue-500 transition-all" />
        </a>
        
        {/* Email Icon with Mailto Link */}
        <a href="mailto:harshalshelke94@gmail.com">
          <FaEnvelope className="cursor-pointer hover:text-red-500 transition-all" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
