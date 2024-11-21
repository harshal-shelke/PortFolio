import ProfilePic from '../assets/profilePic.png';
import resume from '../assets/Harshal Shelke Resume.pdf';
import { motion } from "framer-motion";

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition: { duration: 0.5, delay: delay },
    },
})


const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <div className="flex flex-wrap items-center">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 lg:pl-4 px-4">
                    <div className="flex flex-col text-left lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                         className="pb-4 text-4xl sm:text-5xl lg:text-7xl font-thin tracking-tight">
                            <span className="text-blue-400 text-6xl font-bold">Hi,</span> 
                            I am <br /> Harshal Shelke
                        </motion.h1>
                        
                        {/* Add description paragraph */}
                        <motion.p  variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="text-lg text-gray-600 pb-4">
                            Passionate Full-Stack Developer, always eager to learn new Technologies and build innovative projects. 
                            Focused on creating dynamic web apps with modern tech stacks.
                        </motion.p>
                        
                        <div className="mt-4">
                            <a
                                href={resume} 
                                download="Harshal Shelke Resume.pdf" 
                                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Content - Profile Picture */}
                <div className="w-full lg:w-1/2 lg:pr-4 px-4 mt-8 lg:mt-0">
                    <div className="flex justify-center">
                        <motion.img
                        initial={{x:100,opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1,delay:1.1}}
                            className="w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-none shadow-lg transform transition-transform hover:shadow-xl"
                            src={ProfilePic}
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
