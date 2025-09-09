

// import React, { useState } from "react";
// import { Moon, Sun, Menu, X } from "lucide-react";
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   // Function to check if current route is active
//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-50 shadow-md transition-colors duration-500 
//         ${darkMode ? "bg-transparent text-white border-b border-white/20" : "bg-white text-black border-b border-gray-200"}`}
//     >
//       <div className="w-full flex justify-between items-center py-4 px-4">
//         {/* Logo */}
//         <Link to="/" className="text-xl font-bold cursor-pointer">
//           {darkMode ? (
//             <span className="bg-gradient-to-r from-[#FFD100] to-[#FFEE32] bg-clip-text text-transparent pl-6">
//               Adarsh Priyadarshi
//             </span>
//           ) : (
//             <span className="text-[#e2bb0f] pl-6">Adarsh Priyadarshi</span>
//           )}
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           <ul
//             className={`hidden md:flex ml-auto space-x-8 transition text-sm
//               ${darkMode ? "text-gray-300" : "text-gray-900 "}`}
//           >
//             <li className="ml-70 pl-96">
//               <Link 
//                 to="/" 
//                 className={`hover:text-[#e2bb0f] transition-colors duration-300 ${
//                   isActive('/') ? 'text-[#e2bb0f] font-semibold' : ''
//                 }`}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 to="/projects" 
//                 className={`hover:text-[#e2bb0f] transition-colors duration-300 ${
//                   isActive('/projects') ? 'text-[#e2bb0f] font-semibold' : ''
//                 }`}
//               >
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 to="/skills" 
//                 className={`hover:text-[#e2bb0f] transition-colors duration-300 ${
//                   isActive('/skills') ? 'text-[#e2bb0f] font-semibold' : ''
//                 }`}
//               >
//                 Skills
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 to="/podcast" 
//                 className={`hover:text-[#e2bb0f] transition-colors duration-300 ${
//                   isActive('/podcast') ? 'text-[#e2bb0f] font-semibold' : ''
//                 }`}
//               >
//                 Podcast
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 to="/contact" 
//                 className={`hover:text-[#e2bb0f] transition-colors duration-300 ${
//                   isActive('/contact') ? 'text-[#e2bb0f] font-semibold' : ''
//                 }`}
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Right Section (Theme Toggle + Hamburger) */}
//         <div className="flex items-center space-x-4">
//           {/* Theme Toggle (always visible) */}
//           <button
//             onClick={toggleDarkMode}
//             className={`p-2 rounded-full transition hover:cursor-pointer ${
//               darkMode
//                 ? "bg-black hover:bg-gray-900"
//                 : "bg-gray-200 hover:bg-gray-300"
//             }`}
//           >
//             {darkMode ? (
//               <Sun size={18} className="text-[#FFD100]" />
//             ) : (
//               <Moon size={18} className="text-black" />
//             )}
//           </button>

//           {/* Hamburger (mobile only) */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden p-2 rounded-lg focus:outline-none"
//           >
//             {menuOpen ? (
//               <X size={24} className={`${darkMode ? "text-white" : "text-black"}`} />
//             ) : (
//               <Menu size={24} className={`${darkMode ? "text-white" : "text-black"}`} />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Right-Side Mobile Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 ease-in-out 
//           ${menuOpen ? "translate-x-0" : "translate-x-full"} 
//           ${darkMode ? "bg-[#010714] text-gray-300" : "bg-white text-gray-600"} 
//           md:hidden shadow-lg z-40`}
//       >
//         <div className="flex flex-col w-full pr-6 py-6 space-y-6 items-end">
//           <Link 
//             to="/" 
//             onClick={() => setMenuOpen(false)} 
//             className={`hover:text-[#FFD100]  transition-colors duration-300  ${
//               isActive('/') ? 'text-[#FFD100] font-semibold' : ''
//             }`}
//           >
//             Home
//           </Link>
//           <Link 
//             to="/projects" 
//             onClick={() => setMenuOpen(false)} 
//             className={`hover:text-[#FFD100]  transition-colors duration-300 ${
//               isActive('/projects') ? 'text-[#FFD100] font-semibold' : ''
//             }`}
//           >
//             Projects
//           </Link>
//           <Link 
//             to="/skills" 
//             onClick={() => setMenuOpen(false)} 
//             className={`hover:text-[#FFD100]  transition-colors duration-300 ${
//               isActive('/skills') ? 'text-[#FFD100] font-semibold' : ''
//             }`}
//           >
//             Skills
//           </Link>
//           <Link 
//             to="/podcast" 
//             onClick={() => setMenuOpen(false)} 
//             className={`hover:text-[#FFD100]  transition-colors duration-300 ${
//               isActive('/podcast') ? 'text-[#FFD100] font-semibold' : ''
//             }`}
//           >
//             Podcast
//           </Link>
//           <Link 
//             to="/contact" 
//             onClick={() => setMenuOpen(false)} 
//             className={`hover:text-[#FFD100]  transition-colors duration-300 ${
//               isActive('/contact') ? 'text-[#FFD100] font-semibold' : ''
//             }`}
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled 
          ? darkMode 
            ? "bg-[#010714]/80 backdrop-blur-md border-b border-white/10 shadow-lg" 
            : "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
          : "bg-transparent border-b border-transparent"
      } ${darkMode ? "text-white" : "text-black"}`}
    >
      <div className="w-full flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold cursor-pointer">
          {darkMode ? (
            <span className="bg-gradient-to-r from-[#FFD100] to-[#FFEE32] bg-clip-text text-transparent pl-6">
              Adarsh Priyadarshi
            </span>
          ) : (
            <span className="text-[#e2bb0f] pl-6">Adarsh Priyadarshi</span>
          )}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul
            className={`hidden md:flex ml-auto space-x-8 transition text-sm
              ${darkMode ? "text-gray-300" : "text-gray-900 "}`}
          >
            <li className="ml-50 pl-96">
              <Link 
                to="/" 
                className={`hover:text-[#e2bb0f] transition-colors duration-300 ${
                  isActive('/') ? 'text-[#e2bb0f] font-semibold' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`hover:text-[#e2bb0f] transition-colors duration-300 ${
                  isActive('/projects') ? 'text-[#e2bb0f] font-semibold' : ''
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={`hover:text-[#e2bb0f] transition-colors duration-300 ${
                  isActive('/skills') ? 'text-[#e2bb0f] font-semibold' : ''
                }`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`hover:text-[#e2bb0f] transition-colors duration-300 ${
                  isActive('/blog') ? 'text-[#e2bb0f] font-semibold' : ''
                }`}
              >
                Contribution
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`hover:text-[#e2bb0f] transition-colors duration-300 ${
                  isActive('/contact') ? 'text-[#e2bb0f] font-semibold' : ''
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section (Theme Toggle + Hamburger) */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle (always visible) */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition hover:cursor-pointer ${
              darkMode
                ? "bg-black hover:bg-gray-900"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {darkMode ? (
              <Sun size={18} className="text-[#FFD100]" />
            ) : (
              <Moon size={18} className="text-black" />
            )}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none"
          >
            {menuOpen ? (
              <X size={24} className={`${darkMode ? "text-white" : "text-black"}`} />
            ) : (
              <Menu size={24} className={`${darkMode ? "text-white" : "text-black"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Right-Side Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 ease-in-out 
          ${menuOpen ? "translate-x-0" : "translate-x-full"} 
          ${darkMode ? "bg-[#010714] text-gray-300" : "bg-white text-gray-600"} 
          md:hidden shadow-lg z-40`}
      >
        <div className="flex flex-col w-full pr-6 py-6 space-y-6 items-end">
          <Link 
            to="/" 
            onClick={() => setMenuOpen(false)} 
            className={`hover:text-[#FFD100]  transition-colors duration-300  ${
              isActive('/') ? 'text-[#FFD100] font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            onClick={() => setMenuOpen(false)} 
            className={`hover:text-[#FFD100]  transition-colors duration-300 ${
              isActive('/projects') ? 'text-[#FFD100] font-semibold' : ''
            }`}
          >
            Projects
          </Link>
          <Link 
            to="/skills" 
            onClick={() => setMenuOpen(false)} 
            className={`hover:text-[#FFD100]  transition-colors duration-300 ${
              isActive('/skills') ? 'text-[#FFD100] font-semibold' : ''
            }`}
          >
            Skills
          </Link>
          <Link 
            to="/podcast" 
            onClick={() => setMenuOpen(false)} 
            className={`hover:text-[#FFD100]  transition-colors duration-300 ${
              isActive('/blog') ? 'text-[#FFD100] font-semibold' : ''
            }`}
          >
           Contribution
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setMenuOpen(false)} 
            className={`hover:text-[#FFD100]  transition-colors duration-300 ${
              isActive('/contact') ? 'text-[#FFD100] font-semibold' : ''
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;