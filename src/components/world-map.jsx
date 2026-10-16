
import React from "react";

export function WorldMap({ dots = [], lineColor = "#6366f1" }) {
  const project = (lat, lng) => ({
    x: ((lng + 180) / 360) * 800,
    y: ((90 - lat) / 180) * 400,
  });

  return (
    <svg
      viewBox="0 0 800 400"
      className="h-auto w-full"
      role="img"
      aria-label="Dotted world map showing global connections"
    >
      <defs>
        <pattern
          id="world-map-dots"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.2" fill="#94a3b8" opacity="0.65" />
        </pattern>
      </defs>

      <rect width="800" height="400" fill="url(#world-map-dots)" />

      {dots.map((dot, index) => {
        const start = project(dot.start.lat, dot.start.lng);
        const end = project(dot.end.lat, dot.end.lng);
        const controlX = (start.x + end.x) / 2;
        const controlY = Math.min(start.y, end.y) - 50;

        return (
          <g key={index}>
            <path
              d={`M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`}
              fill="none"
              stroke={lineColor}
              strokeWidth="1.5"
              opacity="0.9"
            />
            <circle cx={start.x} cy={start.y} r="4" fill={lineColor} />
            <circle cx={end.x} cy={end.y} r="4" fill={lineColor} />
          </g>
        );
      })}
    </svg>
  );
}
