// Technology logos (You need to import actual logos here)
import JavaLogo from '../assets/java.svg';
import JSLogo from '../assets/js.svg';
import SQLLogo from '../assets/sql.svg';
import ReactLogo from '../assets/react.svg';
import MongoLogo from '../assets/mongodb.svg';
import NodeLogo from '../assets/node.svg';
import GitLogo from '../assets/git.svg';
import DockerLogo from '../assets/docker.svg';
import LinuxLogo from '../assets/linux.svg';
import AWSLogo from '../assets/aws.svg';

const Tech = () => {
  return (
    <div className="bg-neutral-900 text-neutral-300 py-16">
      {/* Styled Technologies heading */}
      <h2 className="text-4xl text-center font- bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-gray-800 pb-10">
        Technologies
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {/* Technology Boxes with Animation */}
        {[
          { name: 'Java', logo: JavaLogo },
          { name: 'JavaScript', logo: JSLogo },
          { name: 'SQL', logo: SQLLogo },
          { name: 'React', logo: ReactLogo },
          { name: 'MongoDB', logo: MongoLogo },
          { name: 'NodeJS', logo: NodeLogo },
          { name: 'Git', logo: GitLogo },
          { name: 'Docker', logo: DockerLogo },
          { name: 'Linux', logo: LinuxLogo },
          { name: 'AWS', logo: AWSLogo },
        ].map((tech, index) => (
          <div key={index} className="tech-logo-container flex justify-center items-center">
            <div className="w-24 h-24 bg-black-800 border-2 border-neutral-700 rounded-lg flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-neutral-700">
              <img
                src={tech.logo}
                alt={tech.name}
                className="tech-logo transition-transform duration-300 ease-in-out transform hover:scale-110 w-16 h-16 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
