import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { medi } from "../../assets";

const Loader = ({ progress }) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (displayProgress >= progress) return;

    const step = () => {
      setDisplayProgress((prev) => {
        const next = prev + (progress - prev) * 0.1;
        return next > progress ? progress : next;
      });
    };

    const id = setInterval(step, 2);
    return () => clearInterval(id);
  }, [progress, displayProgress]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center gap-5 p-5 md:max-w-[300px] w-full">
        <img
          src={medi}
          alt="loader image"
          className="w-full h-auto object-contain animate-pulse"
        />

        <div className="relative w-full md:max-w-[250px] h-5 bg-gray-200 rounded-full overflow-hidden">
          <div
            style={{ width: `${displayProgress}%` }}
            className="h-full bg-primary transition-[width] duration-[2ms] ease-in-out"
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className={
                displayProgress > 50
                  ? "text-white font-medium"
                  : "text-black font-medium"
              }
            >
              {Math.round(displayProgress)}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
