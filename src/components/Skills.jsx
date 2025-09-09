
import React from 'react';
import {
  Globe,
  Database,
  Cloud,
  Code,
  Settings ,
  Brain,
  BarChart3
} from 'lucide-react';

function Skills({ darkMode }) {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      iconColor: "text-red-400",
      skills: [
        "JavaScript", "HTML5", "CSS3", 
        "Tailwind CSS"
      ]
    },
    {
      title: "Backend Development", 
      icon: Database,
      iconColor: "text-purple-400",
      skills: [
        "Java", "Spring Boot", "Python","Django",
        "Fast API", "GraphQL", "Rest APIs"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain, 
      iconColor: "text-pink-400",
      skills: [
        "TensorFlow", "Transformers", "Vision Transformers", "OpenCV",
        "Keras","Scikit learn", "NumPy", "Pandas", "SciPy", "NLTK"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      iconColor: "text-yellow-400", 
      skills: [
        "AWS", "Docker",  "CI/CD", 
        "Jenkins", "Git", "GitHub Actions"
      ]
    },
    {
      title: "Data Analytics",
      icon: BarChart3,
      iconColor: "text-blue-400",
      skills: [
        "PowerBI","MS Excel","Matplotlib","Seaborn",
        "Streamlit","Tableau"
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      iconColor: "text-green-400",
      skills: [
        "Java", "Python", "SQL", "Rust"
      ]
    },
    {
      title: "Database, Tools & Technologies", 
      icon: Settings,
      iconColor: "text-orange-400",
      skills: [
        "VS Code", "IntelliJ IDEA", "Postman", "MySQL", "Jupyter Notebook", 
        "PostgreSQL", "Redis", "Firebase"
      ]
    }
  ];

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 
        transition-colors duration-500 
        ${darkMode ? "bg-[#010714] text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-10 -mt-20">
          <h2 className={`text-4xl md:text-4xl font-bold mb-4 p-1 ${
            darkMode 
              ? "bg-gradient-to-r from-[#FFD100] to-[#FFEE32] bg-clip-text text-transparent"
              : "text-[#FFD100]"
          }`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg  max-w-3xl mx-auto -mt-2 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            A comprehensive overview of the technologies, languages, and tools I work 
            with to build amazing software experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={index}
                className={`rounded-xl p-5 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode 
                    ? "bg-transparent border-gray-800 hover:border-[#FFD100] hover:shadow-[#FFD100]/20" 
                    : "bg-gray-50 border-gray-200 hover:border-[#FFD100] hover:shadow-[#010714]/20"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-5">
                  <IconComponent 
                    size={20} 
                    className={`mr-3 ${category.iconColor}`}
                  />
                  <h3 className={`text-lg font-semibold ${
                    darkMode ? "text-white" : "text-black"
                  }`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1  ${
                        darkMode 
                          ? "bg-[#0a1428] text-gray-300 hover:bg-[#FFD100] hover:text-[#010714] hover:shadow-lg hover:shadow-[#FFD100]/30" 
                          : "bg-gray-200 text-gray-700 hover:bg-[#010714] hover:text-[#FFD100] hover:shadow-lg hover:shadow-[#010714]/30"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <div className={`max-w-2xl w-full rounded-2xl p-6 border ${
            darkMode 
              ? "bg-[#c4575720] border-[#c800005a]" 
              : "bg-[#c457570e] border-[#c800005a]"
          }`}>
            <div className="text-center">
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}>
                Always Learning
              </h3>
              <p className={`text-md leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                Technology evolves rapidly, and I'm committed to continuous learning. I regularly 
                explore new frameworks, tools, and best practices to stay current with industry trends 
                and deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;