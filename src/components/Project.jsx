
import React from "react";
import { ExternalLink,Code } from "lucide-react";

function Projects({ darkMode }) {
  // const [sort, setSort] = useState("stars");

  const projects = [
    {
      name: "Thynkly-Extension ",
      description:
        "Chrome extension with Spring Boot + Gemini backend offering in-browser AI-powered text summarization via a clean sidebar interface.",
      tags: ["Java", "Spring-Boot", "Gemini", "Chrome-Extension"],
      language: "Java",
      color: "yellow",
      stars: 2,
      forks: 0,
      url: "https://github.com/otAdarshP/Thynkly-Extension",
    },
    {
      name: "Vision Transformers in Manufacturing",
      description: " Compares performance of Convolutional Neural Networks and Vision Transformers for defect detection in manufacturing, via research notebooks.(Published in Taylor & Francis, UK)",
      tags: ["Python", "GenAI", "Transformers", "TensorFlow"],
      language: "Python",
      color: "purple",
      stars: 0,
      forks: 0,
      url: "https://github.com/otAdarshP/CNN-ViT",
    },
    {
      name: "SecuResidences Backend ",
      description:
        "Spring Boot and PostgreSQL backend for smart hostel residence management, featuring JWT auth, RabbitMQ, geofencing alerts, and multi-channel notifications.",
      tags: ["Java", "Spring-Boot", "PostgreSQL", "Security-JWT"],
      language: "Java",
      color: "yellow",
      stars: 0,
      forks: 0,
      url: "https://github.com/otAdarshP/SecuResidences_Backend",
    },
    {
      name: "Spectacles.ai  ",
      description:
        "A Flask-based image enhancement app that deblurs and up-scales images using FFT and super-resolution deep-learning models.",
      tags: ["Python", "Machine Learning", "LDSR"],
      language: "Python",
      color: "purple",
      stars: 0,
      forks: 0,
      url: "https://github.com/otAdarshP/Spectacles.ai",
    },
    {
      name: "ChatApp ",
      description:
        "Real-time chat platform enabling real-time communication directly within the app using WebSocket.",
      tags: ["Java", "Spring-Boot", "JavaScript", "MongoDB"],
      language: "Java",
      color: "yellow",
      stars: 0,
      forks: 0,
      url: "https://github.com/otAdarshP/ChatApp",
    },
    {
      name: "VaLiDiFy ",
      description:
        "Blockchain-based certificate issuance and verification system using SHA-256, FastAPI, IPFS/MongoDB, Merkle-style hashing based WebApp. (Published in IEEE)",
      tags: ["Python", "IPFS", "SHA-256", "Blockchain"],
      language: "Python",
      color: "purple",
      stars: 0,
      forks: 0,
      url: "https://github.com/otAdarshP/Certificate",
    },
    {
      name: "Customer Success Analytics  ",
      description:
        "Implements cohort and RFM analysis with Python and dashboards to understand customer retention and predict purchase behavior.",
      tags: ["Pandas", "Python", "Power BI"],
      language: "Python",
      color: "purple",
      stars: 0,
      forks: 0,
      url: "https://github.com/otAdarshP/customer_analytic-main",
    },
    {
      name: "Brain-Tumor-Segmentation ",
      description:
        "Deep learning project for segmenting brain tumors in MRI scans using neural network techniques.",
      tags: ["Python", "PyTorch","Deep Learning", "Image Processing"],
      language: "Python",
      color: "purple",
      stars: 0,
      forks: 0,
      url: "https://github.com/otAdarshP/Brain-Tumor-Segmentation",
    },
    {
      name: "International Debt Statistics Sample Analysis ",
      description:
        "Uses PostgreSQL and Power BI to analyze World Bank debt data and visualize global debt trends in a mobile-friendly dashboard.",
      tags: ["Python", "Power BI", "Matplotlib","Pandas"],
      language: "Python",
      color: "purple",
      stars: 0,
      forks: 0,
      url: "https://github.com/otAdarshP/International_Debt_Statistics_Sample_Analysis-main",
    },
  ];

  return (
    <section
      className={`min-h-screen flex flex-col items-center px-6 md:px-16 py-20 transition-colors duration-500 ${
        darkMode ? "bg-[#010714] text-white" : "bg-white text-black"
      }`}
    >
      {/* Title */}
      <div className="text-center mb-8 -mt-16">
        <h2 className={`text-4xl md:text-4xl font-bold mb-6 pb-1 ${
            darkMode 
              ? "bg-gradient-to-r from-[#FFD100] to-[#FFEE32] bg-clip-text text-transparent"
              : "text-[#FFD100]"
          }`}>My Projects </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A collection of projects I've been working on. From web applications
          to open source contributions, here's what keeps me busy.
        </p>
      </div>

      {/* Sort dropdown */}
      {/* <div className="w-full max-w-6xl flex justify-end mb-6">
        <label className="flex items-center text-sm text-gray-400 space-x-2">
          <span>Sort by:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className={`px-3 py-1.5 rounded-md border text-sm ${
              darkMode
                ? "bg-gray-900 border-gray-700 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >
            <option value="stars">Most Stars</option>
            <option value="recent">Most Recent</option>
          </select>
        </label>
      </div> */}

      {/* Projects grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project, idx) => (
          <div
  key={idx}
  className={`group flex flex-col justify-between p-6 h-[340px] rounded-lg border transition-all duration-300 transform hover:scale-[1.02] ${
    darkMode
      ? "bg-gray-900/50 border-gray-700 hover:shadow-xl hover:shadow-[#FFD100]/20"
      : "bg-gray-50 border-gray-200 hover:shadow-xl hover:shadow-[#010714]/20"
  }`}
>
  <div>
    {/* Project header */}
    <div className="flex justify-between items-center mb-3">
      <h3
        className="font-semibold text-lg transition-colors duration-300 group-hover:text-[#FFD100]"
      >
        {project.name}
      </h3>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 group-hover:text-[#FFD100]"
      >
        <ExternalLink size={16} />
      </a>
    </div>


              {/* Description */}
              <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-0.5 text-xs rounded-md  ${
              darkMode
                ? "bg-gray-800 text-gray-300"
                : "bg-gray-300 border-gray-200 "
            }`  }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div>
              <div className="flex items-center justify-between text-sm mb-3">
                <div className="flex items-center space-x-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      project.color === "purple"
                        ? "bg-purple-500"
                        : project.color === "yellow"
                        ? "bg-yellow-400"
                        : "bg-gray-400"
                    }`}
                  ></span>
                  <span>{project.language}</span>
                </div>
                <div className="flex space-x-4 text-gray-400">
                  {/* <span>⭐ {project.stars}</span>
                  <span>🍴 {project.forks}</span> */}
                </div>
              </div>

              {/* GitHub Button (aligned bottom) */}
              <a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className={`block w-full text-center py-2 rounded-md font-medium text-sm border transition-all duration-200 transform hover:scale-105 ${
    darkMode
      ? "bg-transparent text-white border border-gray-600 hover:bg-[#FFEE32] hover:text-black"
      : "bg-transparent text-black border border-gray-400 hover:bg-[#FFEE32]"
  }`}
>
  View on GitHub
</a>

            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mb-12">
        {/* ...map projects here... */}
      </div>

      {/* View All Button */}
      <a
        href="https://github.com/yourusername?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-3 px-6 py-2 rounded-md  text-base border transition-all duration-300 hover:scale-105 ${
          darkMode
            ? "bg-transparent text-white border border-gray-600 hover:bg-[#FFEE32] hover:text-black"
            : "bg-transparent text-black border border-gray-400 hover:bg-[#FFEE32]"
        }`}
      >
        <Code size={18} />
        View All Projects on GitHub
        <ExternalLink size={18} />
      </a>
    </section>
  );
}

export default Projects;
