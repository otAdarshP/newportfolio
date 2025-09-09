import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaYoutube } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full py-10 px-4 text-center transition-colors duration-500 
        ${darkMode ? "bg-[#010714] text-gray-400 border-t border-white/20" : "bg-gray-100 text-gray-600 border-t border-gray-300"}`}
    >
      {/* Social Icons */}
      <div className="flex justify-center gap-10 mb-4">
        {[
          { icon: FaLinkedin, href: "linkedin.com/in/adarsh-priyadarshi-ba88a4165" },
          { icon: FaGithub, href: "https://www.github.com/otAdarshP" },
          { icon: FaEnvelope, href: "notadarshp@gmail.com" },
          
        ].map(({ icon: Icon, href }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Icon
              size={18}
              className={`transition-colors duration-300 ${
                darkMode
                  ? "text-white hover:text-[#FFD100]"
                  : "text-black hover:text-[#FFD100]"
              }`}
            />
          </a>
        ))}
      </div>

      {/* Copyright Text */}
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span
          className={`font-semibold ${
            darkMode ? "text-[#FFD100]" : "text-black"
          }`}
        >
          Adarsh Priyadarshi
        </span>
        . Built with <span className="text-red-500">❤️</span> and lots of coffee.
      </p>
    </footer>
  );
};

export default Footer;
