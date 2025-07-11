
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export default function TestParticles() {
//   const particlesInit = useCallback(async engine => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <div style={{ position: "relative", width: "100%", height: "100vh" }}>
//       {/* <Particles
//   id="tsparticles"
//   init={particlesInit}
//   options={{
//     background: {
//       color: { value: "#000" },
//     },
//     fpsLimit: 60,
//     interactivity: {
//       events: {
//         onHover: { enable: false },
//         resize: true,
//       },
//     },
//     particles: {
//       color: { value: "#ffffff" },
//       links: {
//         color: "#ffffff",
//         distance: 150,
//         enable: true,
//         opacity: 0.1,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 0.3,
//         direction: "none",
//         outModes: "bounce",
//       },
//       number: {
//         value: 30,
//         density: {
//           enable: true,
//           area: 800,
//         },
//       },
//       opacity: { value: 0.2 },
//       size: { value: 1 },
//     },
//     detectRetina: true,
//   }}
//   style={{
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     zIndex: 0,
//   }} 
// />
//  <Particles 
// options={{
//   background: {
//     color: { value: "#000" },
//   },
//   particles: {
//     number: { value: 50 },
//     size: { value: 3 },
//   },
// }}
// /> */}

// <Particles
//   id="tsparticles"
//   init={particlesInit}
//   options={{
//     background: {
//       color: { value: "#000" },
//     },
//     fpsLimit: 60,
//     interactivity: {
//       events: {
//         onHover: { enable: false },
//         resize: true,
//       },
//     },
//     particles: {
//       color: { value: "#ffffff" },
//       links: {
//         color: "#ffffff",
//         distance: 120,
//         enable: true,
//         opacity: 0.1,
//         width: 0.5,
//       },
//       move: {
//         enable: true,
//         speed: 0.2,
//         direction: "none",
//         outModes: "bounce",
//       },
//       number: {
//         value: 80, // plenty of dots
//         density: {
//           enable: true,
//           area: 1000,
//         },
//       },
//       opacity: { value: 0.2 },
//       size: { value: 1 }, // fine dots
//     },
//     detectRetina: true,
//   }}
//   style={{
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     zIndex: 0,
//   }}
// />

//       <div
//         style={{
//           position: "relative",
//           zIndex: 1,
//           color: "white",
//           textAlign: "center",
//           paddingTop: "20vh",
//         }}
//       >
//         <h1>Hello World</h1>
//       </div>
//     </div>
//   );
// }



import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#000" },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: false },
              resize: true,
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.1,
              width: 0.5,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              outModes: "bounce",
            },
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: { value: 0.2 },
            size: { value: 1 },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          paddingTop: "20vh",
        }}
      >
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
