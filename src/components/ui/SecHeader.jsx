import { motion } from "motion/react";
import { fadeInUp } from "../../utils/animations";

const SecHeader = ({
  title,
  subtitle,
  description,
  color = false,
  dark = false,
}) => {
  const textColor = !dark
    ? color
      ? "text-primary"
      : "text-sndry"
    : "text-white";
  const bgColor = !dark ? (color ? "bg-primary" : "bg-sndry") : "bg-white";
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp()}
      className="flex flex-col gap-5 text-center max-w-[700px] w-full"
    >
      {subtitle && (
        <div className="mb-5 text-center flex items-center justify-center gap-3">
          <span className={`w-1 h-1 rounded-full ${bgColor}`}></span>
          <span className={`text-sm uppercase font-normal ${textColor}`}>
            {subtitle}
          </span>
          <span className={`w-1 h-1 rounded-full ${bgColor}`}></span>
        </div>
      )}
      <h2 className={textColor}>{title}</h2>
      {description && (
        <p className={`m-0 text-sm ${dark ? "text-white" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SecHeader;
