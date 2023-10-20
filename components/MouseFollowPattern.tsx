"use client";
import React, { useEffect, useState } from "react";

const MouseFollowPattern: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 md:w-full md:h-full"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="absolute w-8 h-8 rounded-full shadow-md bg-blue-500"
        style={{
          transform: `translate(${mousePosition.x - 7}px, ${
            mousePosition.y - 7
          }px)`, // Adjust the translate values to center the cursor
          transition: "transform 0.1s ease-out",
        }}
      ></div>
    </div>
  );
};

export default MouseFollowPattern;
