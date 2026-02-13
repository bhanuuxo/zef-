"use client";

import { useMemo, Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

/* ===== Three.js 3D Scene ===== */
function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={2.4} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#6B21A8"
          emissive="#A020F0"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={1.8}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function FloatingRing({ radius, speed, color, yPos }: { radius: number; speed: number; color: string; yPos: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, yPos, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

function OrbitalParticles({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 3;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#A020F0" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#A020F0" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#FF00FF" />
      <pointLight position={[0, 3, -5]} intensity={0.3} color="#E6E6FA" />

      <GlowingSphere />
      <FloatingRing radius={3.2} speed={0.15} color="#A020F0" yPos={0} />
      <FloatingRing radius={3.8} speed={-0.1} color="#FF00FF" yPos={0.2} />
      <FloatingRing radius={4.4} speed={0.08} color="#6B21A8" yPos={-0.1} />
      <OrbitalParticles count={300} />

      <Stars radius={50} depth={80} count={2000} factor={3} saturation={0.3} fade speed={0.5} />
    </>
  );
}

/* ===== 2D Ambient Particles ===== */
function AmbientParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 15,
        opacity: Math.random() * 0.3 + 0.05,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: "-5%",
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0 ? "#A020F0" : p.id % 3 === 1 ? "#FF00FF" : "#E6E6FA",
            boxShadow: `0 0 ${p.size * 4}px ${p.id % 2 === 0 ? "rgba(160,32,240,0.6)" : "rgba(255,0,255,0.5)"}`,
          }}
          animate={{
            y: [0, -(typeof window !== "undefined" ? window.innerHeight + 100 : 1200)],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
}

/* ===== HUD Decoration Lines ===== */
function HUDDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
      {/* Top left HUD bracket */}
      <div className="absolute top-[15%] left-[5%] w-16 h-16 md:w-24 md:h-24">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#A020F0]/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-[#A020F0]/50 to-transparent" />
        <div className="absolute top-2 left-2 w-1 h-1 bg-[#A020F0] rounded-full shadow-[0_0_6px_#A020F0]" />
      </div>

      {/* Top right HUD bracket */}
      <div className="absolute top-[15%] right-[5%] w-16 h-16 md:w-24 md:h-24">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#FF00FF]/50 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[#FF00FF]/50 to-transparent" />
        <div className="absolute top-2 right-2 w-1 h-1 bg-[#FF00FF] rounded-full shadow-[0_0_6px_#FF00FF]" />
      </div>

      {/* Bottom left HUD bracket */}
      <div className="absolute bottom-[25%] left-[5%] w-16 h-16 md:w-24 md:h-24">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#A020F0]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-[#A020F0]/30 to-transparent" />
      </div>

      {/* Data lines - left side */}
      <div className="hidden md:block absolute top-[30%] left-[3%] space-y-2 opacity-30">
        {[48, 32, 56, 24, 40].map((w, i) => (
          <motion.div
            key={i}
            className="h-[1px] bg-[#A020F0]"
            style={{ width: w }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* Scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A020F0]/20 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* ===== MAIN HERO SECTION ===== */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Deep layered background */}
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0518]/50 via-transparent to-[#050508]" />

      {/* Radial ambient glows */}
      <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-[#A020F0]/[0.06] rounded-full blur-[120px]" />
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-[#FF00FF]/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-[10%] left-[40%] w-[600px] h-[600px] bg-[#A020F0]/[0.03] rounded-full blur-[150px]" />

      {/* 3D Canvas — atmospheric */}
      <div className="absolute inset-0 z-[0] opacity-50">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 7], fov: 55 }}
            dpr={[1, 1.5]}
            style={{ background: "transparent" }}
          >
            <Scene3D />
          </Canvas>
        </Suspense>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 pt-32 pb-40 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-10"
        >
          <span className="inline-block px-5 py-2 rounded-full text-[10px] font-heading font-semibold tracking-[0.2em] uppercase text-[#a78bfa] border border-[#7c3aed]/25 bg-[#7c3aed]/[0.05]">
            Global Esports IP Curator
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading font-black leading-[1.05] mb-6 hero-title"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}
        >
          <span className="text-white">Designing the Future of</span>
          <br />
          <span className="text-gradient">Competitive Gaming</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#9494a8] text-lg max-w-2xl mb-12 font-body leading-relaxed"
        >
          We curate, build, and scale competitive esports IPs across titles,
          audiences, and continents — powering the next generation of
          <span className="text-[#E6E6FA] font-semibold"> competitive gaming infrastructure.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <a href="#ips" className="btn-primary">
            <span>Explore Our IPs</span>
          </a>
          <a href="#contact" className="btn-outline">
            <span>Get In Touch</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {[
            { val: "3+", label: "IPs OWNED" },
            { val: "10+", label: "EVENTS" },
            { val: "₹40K+", label: "PRIZE POOL" },
            { val: "5+", label: "CITIES" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-heading font-black text-2xl text-white mb-1">{s.val}</div>
              <div className="text-[11px] text-[#6b6b80]">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-heading tracking-[0.3em] text-[#555568]">SCROLL</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#A020F0]/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
