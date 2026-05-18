"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";
import { COMMUNITY_ROLES } from "@/lib/constants";

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  color: string;
  icon: string;
  description: string;
  isCenter?: boolean;
}

const STAT_CARDS = [
  { value: "8+", label: "Communities", accent: "#00ff88" },
  { value: "100s", label: "Mentored", accent: "#6366f1" },
  { value: "5+", label: "Events Organized", accent: "#f59e0b" },
  { value: "3", label: "Countries Reached", accent: "#06b6d4" },
];

function NetworkGraph({ inView }: { inView: boolean }) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const WIDTH = 600;
  const HEIGHT = 360;
  const CX = WIDTH / 2;
  const CY = HEIGHT / 2;
  const R = 130;

  const nodes: Node[] = [
    {
      id: "center",
      x: CX,
      y: CY,
      label: "Shraavani",
      color: "#00ff88",
      icon: "ST",
      description: "Builder at the intersection of tech, community, and creativity",
      isCenter: true,
    },
    ...COMMUNITY_ROLES.map((role, i) => {
      const angle = (i / COMMUNITY_ROLES.length) * Math.PI * 2 - Math.PI / 2;
      return {
        id: role.id,
        x: CX + R * Math.cos(angle),
        y: CY + R * Math.sin(angle),
        label: role.label,
        color: role.color,
        icon: role.icon,
        description: role.description,
      };
    }),
  ];

  const hovered = nodes.find((n) => n.id === hoveredNode);

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        style={{ height: "auto" }}
      >
        {/* Connection lines */}
        {nodes.slice(1).map((node, i) => (
          <motion.line
            key={node.id}
            x1={CX}
            y1={CY}
            x2={node.x}
            y2={node.y}
            stroke={hoveredNode === node.id ? node.color : "rgba(255,255,255,0.08)"}
            strokeWidth={hoveredNode === node.id ? 1.5 : 0.8}
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease: "easeInOut" }}
            style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
          />
        ))}

        {/* Outer nodes */}
        {nodes.slice(1).map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className="cursor-pointer"
          >
            {/* Outer glow ring on hover */}
            {hoveredNode === node.id && (
              <circle
                cx={node.x}
                cy={node.y}
                r="24"
                fill="none"
                stroke={node.color}
                strokeWidth="1"
                opacity="0.3"
              />
            )}

            <circle
              cx={node.x}
              cy={node.y}
              r="18"
              fill={hoveredNode === node.id ? `${node.color}25` : "rgba(0,0,0,0.8)"}
              stroke={hoveredNode === node.id ? node.color : `${node.color}50`}
              strokeWidth="1.5"
              style={{ transition: "all 0.2s" }}
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fontSize="14"
              className="select-none"
            >
              {node.icon}
            </text>
          </motion.g>
        ))}

        {/* Center node */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        >
          <circle
            cx={CX}
            cy={CY}
            r="36"
            fill="rgba(0,255,136,0.06)"
            stroke="#00ff88"
            strokeWidth="1.5"
          />
          <circle cx={CX} cy={CY} r="28" fill="rgba(0,0,0,0.9)" />
          <text
            x={CX}
            y={CY - 3}
            textAnchor="middle"
            fontSize="10"
            fill="#00ff88"
            fontFamily="monospace"
            fontWeight="bold"
          >
            ST
          </text>
          <text
            x={CX}
            y={CY + 10}
            textAnchor="middle"
            fontSize="7"
            fill="rgba(0,255,136,0.6)"
            fontFamily="monospace"
          >
            SHRAAVANI
          </text>
        </motion.g>
      </svg>

      {/* Tooltip */}
      {hoveredNode && hovered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-64 p-3 rounded-xl text-xs"
          style={{
            background: "rgba(10,10,10,0.95)",
            border: `1px solid ${hovered.color}30`,
            boxShadow: `0 4px 20px ${hovered.color}20`,
          }}
        >
          <div className="font-semibold mb-1" style={{ color: hovered.color }}>
            {hovered.label}
          </div>
          <div className="text-[#a1a1aa]">{hovered.description}</div>
        </motion.div>
      )}
    </div>
  );
}

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="community" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-xs font-mono tracking-widest text-[#f59e0b] uppercase mb-4"
          >
            ◆ Community & Ecosystems
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white max-w-3xl"
          >
            Ecosystems don't{" "}
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent",
              }}
            >
              build themselves.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#a1a1aa] mt-4 max-w-xl"
          >
            From Google Women Techmakers to ETHMumbai — building the scaffolding that
            enables other builders to build. Hover nodes to explore.
          </motion.p>
        </motion.div>

        {/* Network graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <NetworkGraph inView={inView} />
        </motion.div>

        {/* Role list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12"
        >
          {COMMUNITY_ROLES.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-xl"
              style={{
                background: `${role.color}08`,
                border: `1px solid ${role.color}20`,
              }}
            >
              <div className="text-xl mb-2">{role.icon}</div>
              <div className="text-xs font-semibold mb-1" style={{ color: role.color }}>
                {role.label}
              </div>
              <p className="text-[10px] text-[#52525b] leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STAT_CARDS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-5 rounded-xl"
              style={{
                background: `${stat.accent}06`,
                border: `1px solid ${stat.accent}15`,
              }}
            >
              <div
                className="text-3xl font-black font-mono mb-1"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[#52525b] uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
