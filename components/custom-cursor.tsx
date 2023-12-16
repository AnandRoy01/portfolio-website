"use client";
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function cursorTrackerOnMouse(e: MouseEvent) {
      if (!cursorRef.current) return;
      cursorRef.current.style.background = `radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    }

    document.addEventListener("mousemove", cursorTrackerOnMouse);

    return () => {
      document.removeEventListener("mousemove", cursorTrackerOnMouse);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none z-90 inset-0 transition duration-300 lg:absolute"
    ></div>
  );
};

export default CustomCursor;
