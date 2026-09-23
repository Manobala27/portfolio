import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CursorGlow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 30, stiffness: 250 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: fine)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      window.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
      style={{
        x: cursorX,
        y: cursorY,
        background: "radial-gradient(circle, rgba(250, 82, 82, 0.12) 0%, rgba(255, 179, 71, 0.08) 45%, transparent 70%)"
      }}
    />
  );
};
