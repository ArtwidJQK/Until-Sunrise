import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Constellation() {
  const group = useRef<THREE.Group>(null!);
  const points = useMemo(() => [new THREE.Vector3(-2.8, 1.25, -1), new THREE.Vector3(-1.45, .55, -1), new THREE.Vector3(-.2, 1.65, -1), new THREE.Vector3(1.25, .65, -1), new THREE.Vector3(2.75, 1.35, -1)], []);
  useFrame((state) => { group.current.rotation.z = Math.sin(state.clock.elapsedTime * .12) * .035; });
  return <group ref={group} position={[0, .3, 0]}><Line points={points} color="#f7d39e" transparent opacity={.36} lineWidth={.7} />{points.map((point, index) => <Float key={index} speed={.55 + index * .1} rotationIntensity={0} floatIntensity={.25}><mesh position={point}><sphereGeometry args={[.035 + (index % 2) * .015, 16, 16]} /><meshBasicMaterial color="#ffe5b4" /></mesh></Float>)}</group>;
}

function CameraDrift() {
  useFrame(({ camera, clock }) => { camera.position.x = Math.sin(clock.elapsedTime * .08) * .16; camera.position.y = Math.cos(clock.elapsedTime * .1) * .09; camera.lookAt(0, .25, 0); });
  return null;
}

export function Atmosphere3D() {
  return <div className="atmosphere-3d" aria-hidden="true"><Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 46 }} gl={{ alpha: true, antialias: true }}><CameraDrift /><Constellation /><Sparkles count={58} scale={[9, 5, 2]} size={1.5} speed={.2} color="#f9d5a1" opacity={.7} /></Canvas></div>;
}
