"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function SmallDot({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

function RotatingRing({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1} floatIntensity={0.3}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[0.4, 0.05, 12, 40]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.12} wireframe />
      </mesh>
    </Float>
  );
}

export default function FloatingGeometry() {
  const dots = [
    [-3, 2, -2],
    [3.5, -1, -3],
    [-2, -2, -1],
    [2, 2.5, -4],
    [0, -3, -2],
    [-4, 0, -3],
    [4, 1, -2],
  ] as [number, number, number][];

  return (
    <>
      <ambientLight intensity={0.3} />
      {dots.map((pos, i) => (
        <SmallDot key={i} position={pos} />
      ))}
      <RotatingRing position={[3, 1.5, -3]} scale={0.8} />
      <RotatingRing position={[-3, -1, -2]} scale={0.6} />
    </>
  );
}
