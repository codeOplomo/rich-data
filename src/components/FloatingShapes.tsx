"use client";
import { motion } from "framer-motion";

interface Shape {
  className: string;
  size: number;
  x: string;
  y: string;
  delay: number;
  type: "circle" | "hexagon" | "square" | "triangle";
}

const shapes: Shape[] = [
  { className: "animate-float", size: 60, x: "10%", y: "20%", delay: 0, type: "hexagon" },
  { className: "animate-float-reverse", size: 40, x: "85%", y: "15%", delay: 1, type: "circle" },
  { className: "animate-float-slow", size: 80, x: "75%", y: "60%", delay: 2, type: "square" },
  { className: "animate-float", size: 50, x: "20%", y: "70%", delay: 0.5, type: "triangle" },
  { className: "animate-float-reverse", size: 35, x: "60%", y: "80%", delay: 1.5, type: "circle" },
  { className: "animate-float-slow", size: 45, x: "90%", y: "40%", delay: 0.8, type: "hexagon" },
  { className: "animate-float", size: 30, x: "5%", y: "50%", delay: 2.2, type: "square" },
  { className: "animate-float-reverse", size: 55, x: "45%", y: "10%", delay: 1.2, type: "triangle" },
];

const ShapeElement = ({ shape }: { shape: Shape }) => {
  const baseClasses = "absolute opacity-[0.06]";

  const shapeStyles: Record<string, React.CSSProperties> = {
    circle: {
      width: shape.size,
      height: shape.size,
      borderRadius: "50%",
      border: "1px solid hsl(187 100% 50% / 0.5)",
      background: "linear-gradient(135deg, hsl(187 100% 50% / 0.1), hsl(258 90% 66% / 0.1))",
    },
    hexagon: {
      width: shape.size,
      height: shape.size,
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      background: "linear-gradient(135deg, hsl(187 100% 50% / 0.2), hsl(258 90% 66% / 0.15))",
    },
    square: {
      width: shape.size,
      height: shape.size,
      borderRadius: shape.size * 0.15,
      border: "1px solid hsl(258 90% 66% / 0.4)",
      transform: "rotate(45deg)",
      background: "hsl(258 90% 66% / 0.08)",
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: `${shape.size / 2}px solid transparent`,
      borderRight: `${shape.size / 2}px solid transparent`,
      borderBottom: `${shape.size}px solid hsl(187 100% 50% / 0.1)`,
    },
  };

  return (
    <motion.div
      className={`${baseClasses} ${shape.className}`}
      style={{
        left: shape.x,
        top: shape.y,
        animationDelay: `${shape.delay}s`,
        ...shapeStyles[shape.type],
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.06, scale: 1 }}
      transition={{ duration: 1.5, delay: shape.delay * 0.3 }}
    />
  );
};

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, i) => (
        <ShapeElement key={i} shape={shape} />
      ))}
    </div>
  );
};

export default FloatingShapes;
