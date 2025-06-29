import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false); // State for scroll-to-top button visibility

  // Effect to handle scroll event for the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling down 300px
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = {
    'Web Development': ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    'Programming': ['Python', 'JavaScript (ES6+)'],
    'Database': ['MySQL'],
    'JavaScript Technologies': ['React', 'Node.js'],
    'Front-End Build Tools': ['Vite', 'PostCSS', 'Autoprefixer'],
    'CSS Framework': ['Bootstrap', 'Tailwind CSS'],
    'Version Control': ['Git', 'GitHub', 'GitLab'],
    'Software & Tools': [
      'Figma',
      'Canva',
      'Microsoft Office Suite',
      'Adobe Photoshop',
      'AutoCAD',
      'SketchUp',
    ],
    'Soft Skills': [
      'Problem-solving',
      'Critical Thinking',
      'Initiative',
      'Adaptability',
      'Time Management',
      'Work Ethic',
      'Patience',
      'Creativity',
      'Innovation',
      'Leadership',
      'Teamwork',
      'Communication'
    ],
  };

  const education = [
    {
      id: 'edu-1',
      degree: 'BS Computer Engineering',
      institution: 'Polytechnic University of the Philippines',
      years: '2021 - 2025',
      description: 'Specialized in Software Development with a focus on web technologies.',
      logoUrl: 'https://placehold.co/100x100/ADD8E6/000000?text=PUP+Logo'
    },
    {
      id: 'edu-2',
      degree: 'BS Interior Design',
      institution: 'Polytechnic University of the Philippines',
      years: '2019 - 2021',
      description: 'My first course in Polytechnic University of the Philippines. Took 2 years of this course before shifting to BS Computer Engineering in 2021.',
      logoUrl: 'https://placehold.co/100x100/FFD700/000000?text=PUP+Logo'
    },
  ];

  const projects = [
    {
      id: 'project-1',
      category: 'Project 1',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://placehold.co/600x400/FFF0F5/800000?text=Project+1',
      link: '#',
    },
    {
      id: 'project-2',
      category: 'Project 2',
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://placehold.co/600x400/FFF0F5/800000?text=Project+2',
      link: '#',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">

      {/* Header/Navigation Bar */}
      <header className="bg-white shadow-md fixed w-full z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Name */}
          <a href="#" className="text-2xl font-bold text-indigo-700 rounded-md p-2 hover:bg-indigo-50 transition duration-300">
            Miguel Ivan Calarde
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 rounded-md px-3 py-2 hover:bg-gray-100">About</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 rounded-md px-3 py-2 hover:bg-gray-100">Education</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 rounded-md px-3 py-2 hover:bg-gray-100">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 rounded-md px-3 py-2 hover:bg-gray-100">Projects</button>
            <button onClick={() => scrollToSection('github')} className="text-gray-600 hover:text-indigo-700 font-medium transition duration-300 rounded-md px-3 py-2 hover:bg-gray-100">GitHub</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-2">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">About</button>
            <button onClick={() => scrollToSection('education')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Education</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Projects</button>
            <button onClick={() => scrollToSection('github')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">GitHub</button>
          </div>
        )}
      </header>

      {/* Intro Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 md:py-25 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Hello, I'm Miguel Ivan Calarde
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up delay-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in-up delay-400"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 md:py-12 pb-8 md:pb-12 scroll-mt-[96px]">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-gray-50 pt-8 md:pt-6 py-16 md:py-20 scroll-mt-[96px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-indigo-500 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex items-start space-x-4">
                {/* Removed the <img> tag for the logo */}
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600 mb-1">{edu.degree}</h3>
                  <p className="text-gray-700 text-lg mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mb-3">{edu.years}</p>
                  <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 py-16 md:py-16 scroll-mt-[96px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-indigo-500 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">{category}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {skillList.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 md:py-16 scroll-mt-[96px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-b-4 border-purple-500 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/CCCCCC/000000?text=Image+Error`; }}
              />
              <div className="p-6">
                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-16 scroll-mt-[96px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Check out my GitHub!
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Feel free to check my projects on my GitHub account.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://github.com/vnclrd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out">
              Visit GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg
          hover:bg-indigo-700 transition-opacity duration-500 z-50
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75
          ${showScrollToTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Miguel Ivan Calarde. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;