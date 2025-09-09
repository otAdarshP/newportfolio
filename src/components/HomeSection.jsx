
// import React, { useState, useEffect } from "react";
// import { MdEmail } from "react-icons/md";

// const HeroSection = ({ darkMode }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
  
//   const texts = ["Backend Engineer", "Blogger", "AI/ML Engineer"];
  
//   useEffect(() => {
//     const currentText = texts[currentIndex];
//     const typingSpeed = isDeleting ? 50 : 100;
//     const pauseTime = isDeleting ? 500 : 2000;
    
//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         // Typing
//         if (displayedText.length < currentText.length) {
//           setDisplayedText(currentText.slice(0, displayedText.length + 1));
//         } else {
//           // Finished typing, start deleting after pause
//           setTimeout(() => setIsDeleting(true), pauseTime);
//         }
//       } else {
//         // Deleting
//         if (displayedText.length > 0) {
//           setDisplayedText(displayedText.slice(0, -1));
//         } else {
//           // Finished deleting, move to next text
//           setIsDeleting(false);
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//         }
//       }
//     }, typingSpeed);
//     return () => clearTimeout(timeout);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [displayedText, currentIndex, isDeleting]);

//   return (
//     <section
//       id="home"
//       className={`min-h-screen flex flex-col items-start justify-center px-6 md:px-16 py-20 
//         transition-colors duration-500 
//         ${darkMode ? "bg-[#010714] text-white" : "bg-white text-black"}`}
//     >
//       {/* Main intro */}
//       <div className="text-left">
//         <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
//           hi,{" "}
//           <span
//             className={`font-bold ${
//               darkMode
//                 ? "bg-gradient-to-r from-[#FFD100] to-[#ffee32d6] bg-clip-text text-transparent"
//                 : "text-[#FFD100]"
//             }`}
//           >
//             Adarsh
//           </span>{" "}
//           here
//           <span className="text-[#FFD100]">.</span>
//         </h1>
        
//         <h2
//           className={`mb-6 text-xl md:text-4xl ${
//             darkMode ? "text-gray-400" : "text-gray-600"
//           }`}
//         >
//           <span className="min-w-0">
//             {displayedText}
//             <span
//               className="ml-1 animate-pulse"
//               style={{ color: "#FFD100" }}
//             >
//               |
//             </span>
//           </span>
//         </h2>

//         <p
//           className={`max-w-3xl text-md md:text-lg ${
//             darkMode ? "text-gray-400" : "text-gray-600"
//           }`}
//         >
//           I am a Software Engineer from Bangalore, India. Experienced in
//           developing
//         </p>
//         <p
//           className={`max-w-3xl text-md md:text-lg ${
//             darkMode ? "text-gray-400" : "text-gray-600"
//           }`}
//         >
//           multi-model AI & Deep Learning apps and scalable backend servers.
//         </p>
//         <p
//           className={`max-w-2xl mb-10 text-md md:text-lg ${
//             darkMode ? "text-gray-400" : "text-gray-600"
//           }`}
//         >
//           Computer Science Engineering '26, at Dayananda Sagar University.
//         </p>

//         {/* CTA Button */}
//         <a
//           href="mailto:your.email@example.com"
//           className={`flex items-center gap-2 w-fit px-4 py-2 rounded transition
//             ${
//               darkMode
//                 ? "border border-[#FFD100] text-[#FFD100] hover:bg-gradient-to-r hover:from-[#FFD100] hover:to-[#FFEE32] hover:text-black"
//                 : "border border-[#FFD100] bg-[#FFD100] text-black hover:bg-white hover:text-[#FFD100]"
//             }`}
//         >
//           <MdEmail size={20} /> Say hi!
//         </a>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





// src/components/HomeSection.jsx
import React, { useState, useEffect } from "react";
import "@google/model-viewer";              // registers <model-viewer> custom element
import { MdEmail } from "react-icons/md";

const HeroSection = ({ darkMode }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Software Engineer","Backend Engineer","Data Scientist","Machine Learning Engineer","AI Researcher"];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedText, currentIndex, isDeleting]);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center px-6 md:px-16 py-20 transition-colors duration-500 ${
        darkMode ? "bg-[#010714] text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 -mt-50">
        {/* Left: text content */}
        <div className="md:w-1/2 text-left">
          <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
            hi,{" "}
            <span
              className={`font-bold ${
                darkMode
                  ? "bg-gradient-to-r from-[#FFD100] to-[#ffee32d6] bg-clip-text text-transparent"
                  : "text-[#FFD100]"
              }`}
            >
              Adarsh
            </span>{" "}
            here
            <span className="text-[#FFD100]">.</span>
          </h1>

          <h2
            className={`mb-6 text-xl md:text-4xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span className="min-w-0">
              {displayedText}
              <span className="ml-1 animate-pulse" style={{ color: "#FFD100" }}>
                |
              </span>
            </span>
          </h2>

          <p className={`max-w-3xl text-md md:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            I am a Software Engineer from Bangalore, India. Experienced in developing
          </p>
          <p className={`max-w-3xl text-md md:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            multi-model AI & Deep Learning apps and scalable backend servers.
          </p>
          <p className={`max-w-2xl mb-10 text-md md:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Computer Science Engineering '26, at Dayananda Sagar University.
          </p>

          <a
            href="mailto:your.email@example.com"
            className={`flex items-center gap-2 w-fit px-4 py-2 rounded transition ${
              darkMode
                ? "border border-[#FFD100] text-[#FFD100] hover:bg-gradient-to-r hover:from-[#FFD100] hover:to-[#FFEE32] hover:text-black"
                : "border border-[#FFD100] bg-[#FFD100] text-black hover:bg-white hover:text-[#FFD100]"
            }`}
          >
            <MdEmail size={20} /> Say hi!
          </a>
        </div>

        {/* Right: 3D model */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          {/* model-viewer: responsive sizing via style + Tailwind container */}
        <model-viewer
  src="/models/finalmovedell12.glb"
  alt="3D animated model"
  autoplay
  loop
  auto-rotate
  auto-rotate-delay="0"
  camera-controls
  camera-orbit="0deg 75deg 105%"
  environment-image="neutral"
  exposure="1.2"
  shadow-intensity="1"
  shadow-softness="0.8"
  style={{
    width: "100%",
    maxWidth: "1000px",
    height: "600px",
    borderRadius: "12px",
    backgroundColor: "transparent",   // transparent background
  }}
>
  {/* <div>Your browser does not support <code>model-viewer</code>.</div> */}
</model-viewer>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
