"use client";
import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ACCENT = "#00D4AA";

// Pure Pursuit path waypoints — no duplicate closing point (closed:true handles that)
const RAW: [number, number, number][] = [
  [-3.2,  0.10,  0.5],
  [-2.9,  0.30,  1.9],
  [-1.9,  0.45,  2.7],
  [-0.4,  0.25,  3.0],
  [ 1.1,  0.50,  2.5],
  [ 2.3,  0.30,  1.5],
  [ 3.0,  0.00,  0.0],
  [ 2.6, -0.30, -1.5],
  [ 1.5, -0.45, -2.6],
  [ 0.0, -0.25, -3.0],
  [-1.6, -0.35, -2.7],
  [-2.8, -0.10, -1.6],
];

function checkWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

function Scene({ mobile }: { mobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const tRef = useRef(0);
  const speed = mobile ? 0.045 : 0.065;
  const tubeSeg = mobile ? 80 : 180;
  const radSeg = mobile ? 5 : 7;

  const waypoints = useMemo(
    () => RAW.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
    []
  );

  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(waypoints, true, "catmullrom", 0.5),
    [waypoints]
  );

  const tubeGeo = useMemo(
    () => new THREE.TubeGeometry(curve, tubeSeg, 0.017, radSeg, true),
    [curve, tubeSeg, radSeg]
  );

  const glowGeo = useMemo(
    () => new THREE.TubeGeometry(curve, tubeSeg, 0.052, radSeg, true),
    [curve, tubeSeg, radSeg]
  );

  useEffect(() => () => { tubeGeo.dispose(); glowGeo.dispose(); }, [tubeGeo, glowGeo]);

  useFrame((_, delta) => {
    tRef.current = (tRef.current + delta * speed) % 1;
    const pos = curve.getPoint(tRef.current);
    if (groupRef.current) groupRef.current.position.copy(pos);
    if (ringRef.current) ringRef.current.position.copy(pos);
  });

  return (
    <>
      <mesh geometry={tubeGeo}>
        <meshBasicMaterial color={ACCENT} />
      </mesh>

      <mesh geometry={glowGeo}>
        <meshBasicMaterial color={ACCENT} transparent opacity={0.07} side={THREE.BackSide} />
      </mesh>

      {waypoints.map((wp, i) => (
        <group key={i} position={wp}>
          <mesh>
            <sphereGeometry args={[0.055, 8, 8]} />
            <meshBasicMaterial color={ACCENT} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.13, 8, 8]} />
            <meshBasicMaterial color={ACCENT} transparent opacity={0.12} />
          </mesh>
        </group>
      ))}

      <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.85, 0.007, 6, 48]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.35} />
      </mesh>

      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[0.095, 14, 14]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.22, 12, 12]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.28} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.38, 10, 10]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.08} />
        </mesh>
      </group>
    </>
  );
}

export default function TrajectoryScene() {
  const [mobile, setMobile] = useState(false);
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768 || (navigator.hardwareConcurrency ?? 4) <= 2;
    setMobile(isMobile);
    setSupported(checkWebGL());
  }, []);

  // Not yet checked — render nothing until client decides
  if (supported === null) {
    return <div style={{ width: "100%", height: "100%" }} />;
  }

  if (!supported) {
    return (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 180, height: 2, background: ACCENT, opacity: 0.35, borderRadius: 2 }} />
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 4.5, 9], fov: 44 }}
      gl={{
        antialias: !mobile,
        alpha: true,
        powerPreference: mobile ? "low-power" : "high-performance",
      }}
      style={{ background: "transparent", pointerEvents: "none" }}
      dpr={mobile ? [1, 1] : [1, 2]}
    >
      <Scene mobile={mobile} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={mobile ? 0 : 0.35}
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
      />
    </Canvas>
  );
}
