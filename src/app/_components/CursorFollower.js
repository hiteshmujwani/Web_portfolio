"use client";

import { useState, useEffect } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-6 h-6 z-50 border flex justify-center items-center border-black dark:border-[#eeeeed] rounded-full pointer-events-none transition-transform duration-75"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`, // Centers the dot perfectly
      }}
    >
      <div className="w-1 h-1 bg-black dark:bg-[#eeeeed] rounded-full"></div>
    </div>
  );
}
