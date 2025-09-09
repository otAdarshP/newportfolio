
// import React from 'react';
// import img1 from '../assets/summer.jpg';
// import img2 from '../assets/winter.jpg';
// import img3 from '../assets/validify.jpg';
// import img4 from '../assets/visiontransformer.jpg';

// function Contribution({ darkMode }) {
//   return (
//     <section
//       className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 
//         transition-colors duration-500 
//         ${darkMode ? "bg-[#010714] text-white" : "bg-white text-black"}`}
//     >
//       <div className="w-full max-w-7xl -mt-20">
//         {/* Section Title */}
//         <h2
//           className={`text-4xl md:text-4xl font-bold mb-16 text-center ${
//             darkMode
//               ? "bg-gradient-to-r from-[#FFD100] to-[#FFEE32] bg-clip-text text-transparent"
//               : "text-[#FFD100]"
//           }`}
//         >
//           Contribution
//         </h2>

//         {/* Responsive Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 -mt-6">
//           {/* Left Section - Research Publications */}
//           <div
//             className={`col-span-3 p-6 rounded-2xl border-2 flex flex-col h-[70vh] overflow-hidden
//               ${darkMode ? "border-[#FFD100] bg-gray-900/50" : "border-gray-300 bg-gray-200"}`}
//           >
//             <h3
//               className={`text-xl md:text-2xl font-bold mb-6 ${
//                 darkMode ? "text-[#FFD100]" : "text-gray-700"
//               }`}
//             >
//               Research Paper Contribution
//             </h3>

//             <div className="flex-1 overflow-y-auto space-y-6 pr-2">
//               {/* Research Paper 1 */}
//               <div
//                 className={`p-4 rounded-xl ${
//                   darkMode
//                     ? "bg-[#283593]/60"
//                     : "bg-white border border-gray-200"
//                 }`}
//               >
//                 <div className="w-full h-64 rounded-lg mb-4 overflow-hidden bg-white">
//                   <img
//                     src={img3}
//                     alt="Blockchain Certificate Authentication System Architecture"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <p
//                   className={`text-sm leading-relaxed mb-2 ${
//                     darkMode ? "text-gray-300" : "text-gray-700"
//                   }`}
//                 >
//                   Blockchain-powered certificate authentication system,
//                   implementing the Proof-of-Authority consensus mechanism
//                   utilizing Smart Contracts.
//                 </p>
//                 <a
//                   href="https://www.researchgate.net/publication/389839359_VaLiDiFy_-_Certificate_Validation_using_Blockchain_and_AI?_tp=eyJjb250ZXh0Ijp7InBhZ2UiOiJwcm9maWxlIiwicHJldmlvdXNQYWdlIjpudWxsLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19 "
//                   className={`text-sm underline ${
//                     darkMode ? "text-[#FFD100]" : "text-blue-600"
//                   }`}
//                 >
//                   &lt;LINK&gt;
//                 </a>
//               </div>

//               {/* Research Paper 2 */}
//               <div
//                 className={`p-4 rounded-xl ${
//                   darkMode
//                     ? "bg-[#283593]/60"
//                     : "bg-white border border-gray-200"
//                 }`}
//               >
//                 <div className="w-full h-64 rounded-lg mb-4 overflow-hidden bg-white">
//                   <img
//                     src={img4}
//                     alt="Hybrid Vision Transformer (ViT) and CNN Architecture"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <p
//                   className={`text-sm leading-relaxed mb-2 ${
//                     darkMode ? "text-gray-300" : "text-gray-700"
//                   }`}
//                 >
//                   A hybrid Vision Transformer (ViT)-Convolutional Neural Network
//                   (CNN) model for enhanced defect pattern recognition in
//                   industrial applications.
//                 </p>
//                 <a
//                   href="https://drive.google.com/file/d/1WEzgQLRxwNrpnDMJqChipw1hMG8OYb52/view "
//                   className={`text-sm underline ${
//                     darkMode ? "text-[#FFD100]" : "text-blue-600"
//                   }`}
//                 >
//                   &lt;LINK&gt;
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Open Source Contributions */}
//           <div
//             className={`col-span-2 p-6 rounded-2xl border-2 flex flex-col h-[70vh] overflow-hidden
//               ${darkMode ? "border-[#FFD100] bg-[#1a237e]/80" : "border-gray-300 bg-gray-200"}`}
//           >
//             <h3
//               className={`text-xl md:text-xl font-bold mb-6 ${
//                 darkMode ? "text-[#FFD100]" : "text-gray-700"
//               }`}
//             >
//               open source contribution
//             </h3>

//             <div className="flex-1 overflow-y-auto space-y-6 pr-2">
//               {/* Social Summer of Code */}
//               <div
//                 className={`p-4 rounded-xl ${
//                   darkMode
//                     ? "bg-gray-900/50"
//                     : "bg-white border border-gray-200"
//                 }`}
//               >
//                 <div className="w-full h-40 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
//                   <img
//                     src={img1}
//                     alt="Social Summer of Code Logo"
//                     className="w-32 h-32 object-contain"
//                   />
//                 </div>
//                 <div className="text-center">
//                   <p
//                     className={`text-sm font-medium mb-1 ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     Open-Source Contributor
//                   </p>
//                   <p
//                     className={`text-sm ${
//                       darkMode ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     Social Summer of Code
//                   </p>
//                 </div>
//               </div>

//               {/* Social Winter of Code */}
//               <div
//                 className={`p-4 rounded-xl ${
//                   darkMode
//                     ? "bg-[#283593]/60"
//                     : "bg-white border border-gray-200"
//                 }`}
//               >
//                 <div className="w-full h-40 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
//                   <img
//                     src={img2}
//                     alt="Social Winter of Code Logo"
//                     className="w-32 h-32 object-contain"
//                   />
//                 </div>
//                 <div className="text-center">
//                   <p
//                     className={`text-sm font-medium mb-1 ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     Open-Source Contributor
//                   </p>
//                   <p
//                     className={`text-sm ${
//                       darkMode ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     Social Winter of Code
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contribution;


import React from 'react';
import img1 from '../assets/summer.jpg';
import img2 from '../assets/winter.jpg';
import img3 from '../assets/validify.jpg';
import img4 from '../assets/visiontransformer.jpg';

function Contribution({ darkMode }) {
  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 
        transition-colors duration-500 
        ${darkMode ? "bg-[#010714] text-white" : "bg-white text-black"}`}
    >
      <div className="w-full max-w-7xl -mt-20">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-4xl font-bold mb-16 text-center ${
            darkMode
              ? "bg-gradient-to-r from-[#FFD100] to-[#FFEE32] bg-clip-text text-transparent"
              : "text-[#FFD100]"
          }`}
        >
          Contribution
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 -mt-6">
          {/* Left Section - Research Publications */}
          <div
            className={`col-span-3 p-6 rounded-2xl border flex flex-col h-[70vh] overflow-hidden
              ${darkMode ? "border-gray-700/50 bg-[#0f172a]" : "border-gray-300 bg-gray-50"}`}
          >
            <h3
              className={`text-xl md:text-2xl font-bold mb-6 ${
                darkMode ? "text-[#FFD100]" : "text-gray-700"
              }`}
            >
              Research Paper Contribution
            </h3>

            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {/* Research Paper 1 */}
              <div
                className={`p-6 rounded-xl border ${
                  darkMode
                    ? "bg-[#1e293b] border-gray-700/30"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="w-full h-80 rounded-lg mb-4 overflow-hidden bg-white">
                  <img
                    src={img3}
                    alt="Blockchain Certificate Authentication System Architecture"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p
                  className={`text-sm leading-relaxed mb-3 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Blockchain-powered certificate authentication system,
                  implementing the Proof-of-Authority consensus mechanism
                  utilizing Smart Contracts.
                </p>
                <a
                  href="https://www.researchgate.net/publication/389839359_VaLiDiFy_-_Certificate_Validation_using_Blockchain_and_AI?_tp=eyJjb250ZXh0Ijp7InBhZ2UiOiJwcm9maWxlIiwicHJldmlvdXNQYWdlIjpudWxsLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19 "
                  className={`text-sm hover:no-underline transition-all ${
                    darkMode ? "text-[#FFD100] hover:text-yellow-300" : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  &lt;LINK&gt;
                </a>
              </div>

              {/* Research Paper 2 */}
              <div
                className={`p-6 rounded-xl border ${
                  darkMode
                    ? "bg-[#1e293b] border-gray-700/30"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="w-full  rounded-lg mb-4 overflow-hidden bg-white">
                  {/* <h3
              className={`text-xl md:text-xl font-bold mb-6 ${
                darkMode ? "text-black" : "text-gray-700"
              }`}
            >
              CNN VIt
            </h3> */}
                  <img
                    src={img4}
                    alt="Hybrid Vision Transformer (ViT) and CNN Architecture"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p
                  className={`text-sm leading-relaxed mb-3 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  A hybrid Vision Transformer (ViT)-Convolutional Neural Network
                  (CNN) model for enhanced defect pattern recognition in
                  industrial applications.
                </p>
                <a
                  href="https://drive.google.com/file/d/1WEzgQLRxwNrpnDMJqChipw1hMG8OYb52/view "
                  className={`text-sm  hover:no-underline transition-all ${
                    darkMode ? "text-[#FFD100] hover:text-yellow-300" : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  &lt;LINK&gt;
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Open Source Contributions */}
          <div
            className={`col-span-2 p-6 rounded-2xl border flex flex-col h-[70vh] overflow-hidden
              ${darkMode ? "border-gray-700/50 bg-[#0f172a]" : "border-gray-300 bg-gray-50"}`}
          >
            <h3
              className={`text-xl md:text-xl font-bold mb-6 ${
                darkMode ? "text-[#FFD100]" : "text-gray-700"
              }`}
            >
              open source contribution
            </h3>

            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {/* Social Summer of Code */}
              <div
                className={`p-6 rounded-xl border ${
                  darkMode
                    ? "bg-[#1e293b] border-gray-700/30"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                  <img
                    src={img1}
                    alt="Social Summer of Code Logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="text-center">
                  <p
                    className={`text-sm font-medium mb-1 ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Open-Source Contributor
                  </p>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Social Summer of Code
                  </p>
                </div>
              </div>

              {/* Social Winter of Code */}
              <div
                className={`p-6 rounded-xl border ${
                  darkMode
                    ? "bg-[#1e293b] border-gray-700/30"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                  <img
                    src={img2}
                    alt="Social Winter of Code Logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="text-center">
                  <p
                    className={`text-sm font-medium mb-1 ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Open-Source Contributor
                  </p>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Social Winter of Code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contribution;