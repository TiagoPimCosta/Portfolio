"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Dot {
  x: number;
  y: number;
  lineType: "vertical" | "horizontal";
  lineIndex: number;
  direction: 1 | -1;
  speed: number;
  radius: number;
}

const RidingDotsOnGridLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const spacing = 40;
    const dotsCount = 15;
    const dots: Dot[] = [];

    let verticalLinesCount = 0;
    let horizontalLinesCount = 0;

    const initDots = () => {
      dots.length = 0;
      verticalLinesCount = Math.floor(width / spacing) + 1;
      horizontalLinesCount = Math.floor(height / spacing) + 1;

      for (let i = 0; i < dotsCount; i++) {
        const lineType: "vertical" | "horizontal" = Math.random() < 0.5 ? "vertical" : "horizontal";

        if (lineType === "vertical") {
          const lineIndex = Math.floor(Math.random() * verticalLinesCount);
          const x = lineIndex * spacing;
          const y = Math.random() * height;
          dots.push({
            x,
            y,
            lineType,
            lineIndex,
            direction: Math.random() < 0.5 ? 1 : -1,
            speed: 0.3 + Math.random() * 0.3,
            radius: 2 + Math.random() * 1.5,
          });
        } else {
          const lineIndex = Math.floor(Math.random() * horizontalLinesCount);
          const y = lineIndex * spacing;
          const x = Math.random() * width;
          dots.push({
            x,
            y,
            lineType,
            lineIndex,
            direction: Math.random() < 0.5 ? 1 : -1,
            speed: 0.3 + Math.random() * 0.3,
            radius: 2 + Math.random() * 1.5,
          });
        }
      }
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initDots();
    };

    const draw = () => {
      const isDark = theme === "dark";

      const backgroundColor = isDark ? "#000000" : "#ffffff";
      const lineColor = isDark ? "rgba(0, 200, 255, 0.2)" : "rgba(249, 168, 38, 0.2)";
      const dotColor = isDark ? "rgba(0, 255, 200, 0.8)" : "rgba(249, 168, 38, 0.8)";
      const dotShadow = isDark ? "rgba(0, 255, 200, 0.8)" : "rgba(249, 168, 38, 0.8)";

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;

      for (let x = 0; x <= width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (const dot of dots) {
        if (dot.lineType === "vertical") {
          dot.y += dot.direction * dot.speed;
          if (dot.y > height || dot.y < 0) dot.direction *= -1;
          dot.x = dot.lineIndex * spacing;
        } else {
          dot.x += dot.direction * dot.speed;
          if (dot.x > width || dot.x < 0) dot.direction *= -1;
          dot.y = dot.lineIndex * spacing;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.shadowColor = dotShadow;
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      animationFrameId.current = requestAnimationFrame(draw);
    };

    resizeCanvas();
    animationFrameId.current = requestAnimationFrame(draw);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [theme]); // re-run on theme change

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
};

export default RidingDotsOnGridLines;
