import { useState } from "react";
import { PROJECTS } from "../constants/index"; // Assuming you have the array in constants.js

const Projects = () => {
  const [showAll, setShowAll] = useState(false); // State to control visibility of all projects

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4); // Show all or just the first 4

  return (
    <div className="bg-neutral-900 py-16">
      <h2 className="text-4xl font-light text-center text-white pb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-neutral-800 border-2 border-neutral-700 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl text-white font-semibold">{project.title}</h3>
              <p className="text-neutral-400 text-sm mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs text-neutral-300 bg-neutral-700 py-1 px-2 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="mt-4 inline-block text-cyan-400 hover:text-cyan-600"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)} // Show all projects when clicked
            className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-all"
          >
            Show More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
