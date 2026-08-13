import { useState } from "react";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  tip: string;
};

const nodes: Node[] = [
  { id: "polyflow", label: "Polyflow", x: 180, y: 70, tip: "Speech infrastructure for under-resourced languages." },
  { id: "echo", label: "Echo", x: 300, y: 120, tip: "Pronunciation practice product for real-world conversations." },
  { id: "semantic", label: "Semantic Audio", x: 80, y: 150, tip: "Voice memos → structured mind maps." },
  { id: "memory", label: "Audio Memory Map", x: 220, y: 210, tip: "Geotagged voice memories on an interactive map." },
  { id: "play", label: "Play-by-Ear", x: 340, y: 230, tip: "Pitch and rhythm feedback for music practice." },
  { id: "bot", label: "SandwichBot", x: 100, y: 280, tip: "LLM-planned robotics under real-world constraints." },
  { id: "istwa", label: "ISTWA", x: 280, y: 300, tip: "Interactive storytelling around Haitian history." },
];

const edges: [string, string][] = [
  ["polyflow", "echo"],
  ["polyflow", "semantic"],
  ["echo", "memory"],
  ["semantic", "memory"],
  ["memory", "play"],
  ["bot", "memory"],
  ["istwa", "echo"],
  ["play", "istwa"],
];

export function HeroGraph() {
  const [activeId, setActiveId] = useState("polyflow");
  const active = nodes.find((n) => n.id === activeId) ?? nodes[0];
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="work-graph" aria-label="Interactive map of selected projects">
      <svg viewBox="0 0 420 360" role="img">
        <title>Projects connected as a working system</title>
        {edges.map(([from, to]) => {
          const a = byId[from];
          const b = byId[to];
          return (
            <line
              key={`${from}-${to}`}
              className="work-graph-edge"
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
            />
          );
        })}
        {nodes.map((node) => (
          <g
            key={node.id}
            className="work-graph-node"
            data-active={node.id === activeId}
            tabIndex={0}
            role="button"
            aria-label={`${node.label}: ${node.tip}`}
            onMouseEnter={() => setActiveId(node.id)}
            onFocus={() => setActiveId(node.id)}
            onClick={() => setActiveId(node.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveId(node.id);
              }
            }}
          >
            <circle cx={node.x} cy={node.y} r={node.id === activeId ? 9 : 7} />
            <text x={node.x + 14} y={node.y + 4}>
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="work-graph-tip">
        <strong>{active.label}</strong>
        {active.tip}
      </div>
    </div>
  );
}
