"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 150;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    return pos;
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        color="#6366f1"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function GlowingSphere() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={ref} position={[6, 1.5, -6]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color="#6366f1"
          transparent
          opacity={0.12}
          wireframe
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function GlowingTorus() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.3}>
      <mesh ref={ref} position={[-6, -1.5, -5]}>
        <torusGeometry args={[0.7, 0.12, 16, 50]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.15} wireframe />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.25;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3 + 2.5;
    }
  });

  return (
    <mesh ref={ref} position={[-5, 2.5, -8]}>
      <octahedronGeometry args={[0.4, 0]} />
      <meshBasicMaterial color="#a78bfa" transparent opacity={0.1} wireframe />
    </mesh>
  );
}

function SmallOctahedron() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1} floatIntensity={0.5}>
      <mesh ref={ref} position={[5.5, -2, -7]}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.1} wireframe />
      </mesh>
    </Float>
  );
}

function ConnectionLines() {
  const ref = useRef<THREE.LineSegments>(null!);

  const geometry = useMemo(() => {
    const points: number[] = [];
    for (let i = 0; i < 25; i++) {
      const x1 = (Math.random() - 0.5) * 20;
      const y1 = (Math.random() - 0.5) * 14;
      const z1 = -Math.random() * 10 - 3;
      const x2 = x1 + (Math.random() - 0.5) * 4;
      const y2 = y1 + (Math.random() - 0.5) * 4;
      const z2 = z1 + (Math.random() - 0.5) * 2;
      points.push(x1, y1, z1, x2, y2, z2);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#6366f1" transparent opacity={0.04} />
    </lineSegments>
  );
}

export default function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <FloatingParticles />
      <GlowingSphere />
      <GlowingTorus />
      <FloatingOctahedron />
      <SmallOctahedron />
      <ConnectionLines />
    </>
  );
}
