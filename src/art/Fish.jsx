//ascii fish tank

import { useEffect, useState } from "react";

//creating the fish movement
export const Fish = ({ fish, speed }) => {
    const [position, setPosition] = useState(0);
    const [direction, setDirection] = useState(1);
  
    useEffect(() => {
      const moveFish = () => {
        setPosition((prev) => {
          if (prev >= 100) {
            setDirection(-1);
            return 100;
          }
          if (prev <= 0) {
            setDirection(1);
            return 0;
          }
          return prev + direction * speed;
        });
      };
  
      const interval = setInterval(moveFish, 100);
      return () => clearInterval(interval);
    }, [direction, speed]);
  
    return (
      <div
        style={{
          position: 'absolute',
          left: `${position}%`,
          transition: 'left 0.1s linear',
        }}
      >
        {direction === 1 ? fish : fish.split('').reverse().join('')}
      </div>
    );
  };