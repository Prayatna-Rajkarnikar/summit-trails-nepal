"use client";

import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function Terrain() {
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(60, 30, 256, 128);
    const positions = geo.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);

      let height = 0;

      // Flat foreground
      if (y > 3) {
        positions.setZ(i, -0.2 + Math.sin(x * 0.5) * 0.05);
        continue;
      }

      if (y > 1) {
        const t = (y - 1) / 2;
        const groundH = -0.2;
        const foothill = Math.sin(x * 0.4) * 0.3 + Math.sin(x * 0.8 + 1) * 0.2;
        positions.setZ(i, groundH * t + foothill * (1 - t));
        continue;
      }

      // 3 major peaks
      const p1x = -10, p1y = -5;
      const d1 = Math.sqrt((x - p1x) ** 2 + (y - p1y) ** 2);
      if (d1 < 7) {
        const t = 1 - d1 / 7;
        height += Math.pow(t, 2.5) * 7.0;
        const angle = Math.atan2(y - p1y, x - p1x);
        height += Math.pow(Math.max(0, Math.cos(angle * 2 + 0.8)), 5) * t * 1.2;
        height += Math.pow(Math.max(0, Math.cos(angle * 3 - 0.5)), 4) * t * 0.6;
      }

      // Center peak — wide broad mountain with a spiky tip
      const p2x = 0, p2y = -6;
      const d2 = Math.sqrt((x - p2x) ** 2 + (y - p2y) ** 2);
      if (d2 < 10) {
        const t = 1 - d2 / 10;
        height += Math.pow(t, 1.4) * 7.0;
        height += Math.sin(x * 1.5 + y * 1.2) * 0.15 * t;
        // Slight point at the top
        if (d2 < 2) {
          const tip = 1 - d2 / 2;
          height += Math.pow(tip, 2) * 0.8;
        }
      }

      const p3x = 12, p3y = -5.5;
      const d3 = Math.sqrt((x - p3x) ** 2 + (y - p3y) ** 2);
      if (d3 < 7) {
        const t = 1 - d3 / 7;
        height += Math.pow(t, 2.3) * 7.5;
        const angle = Math.atan2(y - p3y, x - p3x);
        height += Math.pow(Math.max(0, Math.cos(angle * 2 - 0.3)), 5) * t * 1.0;
        height += Math.pow(Math.max(0, Math.cos(angle * 3 + 1.5)), 4) * t * 0.5;
      }

      // Saddle ridges
      const ridgeY = -5.5 + Math.sin(x * 0.1) * 0.5;
      const ridgeDist = Math.abs(y - ridgeY);
      if (ridgeDist < 3) {
        const t = 1 - ridgeDist / 3;
        height += t * t * 1.5;
      }

      // Secondary peaks
      const smallPeaks = [
        { px: -5, py: -4.5, h: 4.0, r: 4, s: 2.0 },
        { px: 6, py: -5, h: 4.5, r: 4.5, s: 2.0 },
        { px: -16, py: -4, h: 3.5, r: 4, s: 1.8 },
        { px: 18, py: -4.5, h: 3.0, r: 3.5, s: 1.8 },
        { px: -20, py: -3, h: 2.5, r: 3, s: 1.6 },
        { px: 22, py: -3.5, h: 2.2, r: 3, s: 1.6 },
        { px: 3, py: -3, h: 3.0, r: 3, s: 1.8 },
        { px: -8, py: -3, h: 2.5, r: 3, s: 1.7 },
      ];

      for (const peak of smallPeaks) {
        const dx = x - peak.px;
        const dy = y - peak.py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < peak.r) {
          const t = 1 - dist / peak.r;
          height += Math.pow(t, peak.s) * peak.h;
        }
      }

      height += Math.sin(x * 2.5 + y * 1.8) * 0.08;
      height += Math.sin(x * 4 + y * 3 + 1.5) * 0.04;

      positions.setZ(i, height);
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 2.6, 0, 0]} position={[0, -3, -8]}>
      <meshStandardMaterial
        color="#111111"
        roughness={0.95}
        metalness={0.05}
        flatShading
      />
    </mesh>
  );
}

function SnowPeaks() {
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(60, 30, 256, 128);
    const positions = geo.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);

      if (y > 1) { positions.setZ(i, -999); continue; }

      let height = 0;

      const p1x = -10, p1y = -5;
      const d1 = Math.sqrt((x - p1x) ** 2 + (y - p1y) ** 2);
      if (d1 < 7) {
        const t = 1 - d1 / 7;
        height += Math.pow(t, 2.5) * 7.0;
        const angle = Math.atan2(y - p1y, x - p1x);
        height += Math.pow(Math.max(0, Math.cos(angle * 2 + 0.8)), 5) * t * 1.2;
        height += Math.pow(Math.max(0, Math.cos(angle * 3 - 0.5)), 4) * t * 0.6;
      }

      // Center peak — wide broad mountain with a spiky tip
      const p2x = 0, p2y = -6;
      const d2 = Math.sqrt((x - p2x) ** 2 + (y - p2y) ** 2);
      if (d2 < 10) {
        const t = 1 - d2 / 10;
        height += Math.pow(t, 1.4) * 7.0;
        height += Math.sin(x * 1.5 + y * 1.2) * 0.15 * t;
        // Slight point at the top
        if (d2 < 2) {
          const tip = 1 - d2 / 2;
          height += Math.pow(tip, 2) * 0.8;
        }
      }

      const p3x = 12, p3y = -5.5;
      const d3 = Math.sqrt((x - p3x) ** 2 + (y - p3y) ** 2);
      if (d3 < 7) {
        const t = 1 - d3 / 7;
        height += Math.pow(t, 2.3) * 7.5;
        const angle = Math.atan2(y - p3y, x - p3x);
        height += Math.pow(Math.max(0, Math.cos(angle * 2 - 0.3)), 5) * t * 1.0;
        height += Math.pow(Math.max(0, Math.cos(angle * 3 + 1.5)), 4) * t * 0.5;
      }

      const ridgeY = -5.5 + Math.sin(x * 0.1) * 0.5;
      const ridgeDist = Math.abs(y - ridgeY);
      if (ridgeDist < 3) {
        const t = 1 - ridgeDist / 3;
        height += t * t * 1.5;
      }

      const smallPeaks = [
        { px: -5, py: -4.5, h: 4.0, r: 4, s: 2.0 },
        { px: 6, py: -5, h: 4.5, r: 4.5, s: 2.0 },
        { px: -16, py: -4, h: 3.5, r: 4, s: 1.8 },
        { px: 18, py: -4.5, h: 3.0, r: 3.5, s: 1.8 },
        { px: -20, py: -3, h: 2.5, r: 3, s: 1.6 },
        { px: 22, py: -3.5, h: 2.2, r: 3, s: 1.6 },
        { px: 3, py: -3, h: 3.0, r: 3, s: 1.8 },
        { px: -8, py: -3, h: 2.5, r: 3, s: 1.7 },
      ];

      for (const peak of smallPeaks) {
        const dx = x - peak.px;
        const dy = y - peak.py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < peak.r) {
          const t = 1 - dist / peak.r;
          height += Math.pow(t, peak.s) * peak.h;
        }
      }

      height += Math.sin(x * 2.5 + y * 1.8) * 0.08;
      height += Math.sin(x * 4 + y * 3 + 1.5) * 0.04;

      if (height < 2.0) {
        positions.setZ(i, -999);
      } else {
        positions.setZ(i, height + 0.03);
      }
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 2.6, 0, 0]} position={[0, -3, -8]}>
      <meshStandardMaterial
        color="#f0e8d8"
        roughness={0.6}
        metalness={0.0}
        flatShading
      />
    </mesh>
  );
}

function Lighting() {
  return (
    <>
      <fog attach="fog" args={["#0a0a0a", 12, 40]} />
      <ambientLight intensity={0.15} />

      {/* Strong golden key light — raking across faces to show depth */}
      <directionalLight
        position={[8, 6, -5]}
        intensity={2.0}
        color="#C9A84C"
        castShadow
      />

      {/* Warm backlight behind peaks */}
      <directionalLight
        position={[0, 4, -15]}
        intensity={1.0}
        color="#d4956b"
      />

      {/* Cool blue fill — opposite side for contrast */}
      <directionalLight
        position={[-10, 3, 3]}
        intensity={0.4}
        color="#2a3a5a"
      />

      {/* Golden rim from below horizon */}
      <pointLight position={[0, 0, -10]} intensity={0.6} color="#C9A84C" distance={20} />
    </>
  );
}

export default function MountainScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 2, 12], fov: 50, near: 0.1, far: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        frameloop="demand"
      >
        <color attach="background" args={["#0a0a0a"]} />
        <Lighting />
        <Terrain />
        <SnowPeaks />
      </Canvas>
    </div>
  );
}
