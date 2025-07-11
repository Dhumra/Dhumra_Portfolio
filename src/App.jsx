import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { ResearchTools } from './components/ResearchTools';
import { Education } from './components/Education';
import { Connect } from './components/Connect';
import { SideBar } from './components/SideBar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
// import { SideBar } from './components/SideBar';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
  
    <div className="App">
      {/* Global Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: false }, resize: true },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 0.5, direction: "none", outModes: "bounce" },
            number: { value: 30, density: { enable: true, area: 800 } },
            opacity: { value: 0.9 },
            size: { value: 0.5 },
          },
          detectRetina: true,
        }}
        style={{
          position: "fixed",         // 👈 Fixed to the background
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,                 // 👈 Behind everything
        }}
      />

      {/* Content Sections */}
      <SideBar />
      <Banner />
      <AboutMe />
      <Projects />
      <Publications />
      <ResearchTools />
      <Education />
      <Connect />
      
    </div>
  );
};




export default App;

