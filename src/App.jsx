import About from "./components/About";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-900">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Main Container */}
      <div className="container mx-auto px-8 py-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Tech/>
        <Projects/>
        <Contact/>
      </div>
      <footer className="bg-neutral-900 text-white py-4 mt-8">
                <div className="flex justify-center items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Harshal Shelke</p>
                </div>
            </footer>
    </div>
  );
};

export default App;
