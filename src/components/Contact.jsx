import React, { useState } from 'react';

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    isBrandCollaboration: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 
        transition-colors duration-500 
        ${darkMode ? "bg-[#010714] text-white" : "bg-white text-black"}`}
    >
      <div className="w-full max-w-md -mt-12"> {/* 🔹 Reduced max-width */}
        {/* Title */}
        <div className="text-center mb-2">
          <h2 className={`text-4xl font-bold mb-2 ${
            darkMode 
              ? "bg-gradient-to-r from-[#FFD100] to-[#FFEE32] bg-clip-text text-transparent"
              : "text-[#FFD100]"
          }`}>
            Let's Connect
          </h2>
        </div>
{/* Subtitle */}
<div className="text-center mb-10 flex justify-center">
  <p className="text-base md:text-md text-gray-400 max-w-2xl leading-relaxed">
    Have a project idea? Want to chat about tech? Interested in brand collaborations?  
    Or just say hi? I'd love to hear from you!
  </p>
</div>


        {/* Contact Form */}
        <div 
          className={`p-6 rounded-lg border transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${
            darkMode 
              ? "bg-gray-900/50 border-gray-700 hover:shadow-[#FFD100]/20" 
              : "bg-[#ded9d9d9] border-gray-200 hover:shadow-[#FFD100]/20"
          }`}
        >
          <div className="flex items-center mb-5">
            <div className="w-5 h-5 mr-2">
              <svg viewBox="0 0 24 24" fill="none" className="text-[#FFD100]">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </div>
            <h3 className={`text-lg font-semibold ${
              darkMode ? "text-white" : "text-black"
            }`}>
              Send a Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className={`block text-xs font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                className={`w-full px-3 py-2.5 rounded-md border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD100] ${
                  darkMode 
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                }`}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className={`block text-xs font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className={`w-full px-3 py-2.5 rounded-md border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD100] ${
                  darkMode 
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                }`}
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className={`block text-xs font-medium mb-1 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                required
                rows={4} // 🔹 Reduced rows
                className={`w-full px-3 py-2.5 rounded-md border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD100] resize-none ${
                  darkMode 
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                }`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-2 rounded-md font-medium text-sm transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFD100] focus:ring-offset-2 ${
                darkMode 
                  ? "bg-[#FFD100] text-black hover:bg-[#FFEE32] focus:ring-offset-gray-900" 
                  : "bg-[#FFD100] text-black hover:bg-[#FFEE32] focus:ring-offset-white"
              } hover:shadow-lg`}
            >
              Send Message
              <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
