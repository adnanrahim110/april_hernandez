import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { fadeInUp } from "../../utils/animations";
import Button from "./Button";

const ImgRounded = ({
  bgImg,
  w = "md:w-[45%]",
  imgw = "md:w-[55%]",
  title,
  titleClass,
  content = "",
  pClass,
  subtitle,
  btntext,
  textPrimary = false,
  bar,
  path,
  reverse = false,
}) => {
  const textColor = textPrimary ? "text-primary" : "text-sndry";
  const bgColor = textPrimary ? "bg-primary" : "bg-sndry";
  const btnColor = textPrimary
    ? "bg-primary border-primary hover:bg-transparent hover:text-primary hover:after:bg-primary"
    : "bg-sndry border-sndry hover:text-sndry-500 hover:bg-transparent hover:after:bg-sndry-500";

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [20, -40]);

  const y = useSpring(rawY, { stiffness: 40, damping: 20 });

  return (
    <div
      ref={containerRef}
      className={`flex gap-y-10 flex-wrap ${
        reverse
          ? "lg:flex-row-reverse flex-col-reverse"
          : "flex-col lg:flex-row"
      } basis-auto grow relative shrink items-center justify-start`}
    >
      <motion.div
        className={`${imgw} flex flex-col lg:flex-row shrink relative ${
          reverse ? "lg:pl-[4%]" : "lg:pr-[4%]"
        } items-start flex-wrap`}
        style={{ y }}
      >
        <div>
          <img
            src={bgImg}
            className={`w-full h-full shadow-[0_0_20px_10px_rgba(0,0,0,0.1)] ${
              reverse
                ? "rounded-[20px_20px_20px_100px] lg:rounded-[20px_20px_20px_250px]"
                : "rounded-[20px_100px_20px_20px] lg:rounded-[20px_250px_20px_20px]"
            }`}
          />
        </div>
        {bar && (
          <div className="w-full lg:max-w-[65%]">
            <p className="text-xs md:text-sm mt-4">{bar}</p>
          </div>
        )}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp()}
        className={`w-full ${
          reverse ? "lg:pr-[4%]" : "lg:pl-[4%]"
        } ${w} flex flex-col gap-[30px] justify-center`}
      >
        {subtitle && (
          <div className="flex flex-row-reverse text-right justify-end">
            <span className="flex items-center flex-row-reverse text-end gap-4 pl-1">
              <span className={`w-1 h-1 rounded-full ${bgColor}`}></span>
              <span className={`text-sm uppercase ${textColor}`}>
                {subtitle}
              </span>
            </span>
          </div>
        )}
        <h2 className={titleClass + " " + textColor}>{title}</h2>
        <div>
          {content
            .split(/\r?\n/)
            .filter((line) => line)
            .map((line, idx) => (
              <p
                key={idx}
                className={pClass}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
        </div>
        <div className="flex items-center justify-start">
          <Button href={path} className={btnColor} btn2>
            {btntext}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ImgRounded;
