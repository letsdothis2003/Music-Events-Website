import React, { useState, useEffect } from "react";
import "./blurryloader.css";

const BlurryLoader = ({ imageUrl }) => {
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Increment every 30ms
    return () => clearInterval(interval);
  }, []);

  // Map progress to blur and opacity
  const blurValue = Math.max(30 - (loadProgress / 100) * 30, 0);
  const opacityValue = (100 - loadProgress) / 100;

  return (
    <div className="blurry-loader">
      <img
        src={imageUrl}
        alt="Blurry Loading"
        style={{
          filter: `blur(${blurValue}px)`,
        }}
      />
      <div
        className="loading-text"
        style={{
          opacity: opacityValue,
        }}
      >
        {loadProgress}%
      </div>
    </div>
  );
};

export default BlurryLoader;