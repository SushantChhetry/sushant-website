"use client";

import React, { useEffect, useState } from "react";

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RandomPattern: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateRandomCircles = () => {
      const numCircles = 50;
      const circleRadiusMin = 10;
      const circleRadiusMax = 30;
      const viewBoxSize = 100;
      const bluePalette = [
        "#0080ff",
        "#0070e0",
        "#0060c0",
        "#0050a0",
        "#ffffff",
        "#f0f0f0",
        "#e0e0e0",
        "#d0d0d0",
      ];

      const newCircles = Array.from({ length: numCircles }, (_, index) => {
        const x = getRandomInt(0, viewBoxSize);
        const y = getRandomInt(0, viewBoxSize);
        const radius = getRandomInt(circleRadiusMin, circleRadiusMax);
        const fill = bluePalette[index % bluePalette.length];

        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={radius}
            fill={fill}
            className="animate-float"
          />
        );
      });

      setCircles(newCircles);
    };

    generateRandomCircles();
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-64 h-64"
    >
      {circles}
    </svg>
  );
};

export default RandomPattern;
