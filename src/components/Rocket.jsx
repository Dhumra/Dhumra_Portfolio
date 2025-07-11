import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Rocket() {
  return (
    <group rotation={[0, 0, 0]}>
      {/* Rocket Body */}
      <mesh>
        <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Nose Cone */}
      <mesh position={[0, 1.25, 0]}>
        <coneGeometry args={[0.2, 0.5, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Fins */}
      {[
        [0.2, -1, 0],
        [-0.2, -1, 0],
        [0, -1, 0.2],
        [0, -1, -0.2],
      ].map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.05, 0.5, 0.2]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      ))}
    </group>
  );
}

// export default function App() {
//   return (
//     <div style={{ width: '100vw', height: '100vh', background: 'transparent' }}>
//       <Canvas
//         camera={{ position: [0, 0, 5] }}
//         style={{ background: 'transparent' }}
//         gl={{ alpha: true }}
//       >
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[5, 5, 5]} intensity={0.8} />
//         <Rocket />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }
