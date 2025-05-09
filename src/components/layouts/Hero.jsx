import { motion, useScroll, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { banners_home_bg } from "../../assets";
import { fadeInLeft, fadeInUp } from "../../utils/animations";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import Button from "../ui/Button";

const Hero = ({
  title,
  subtitle,
  text,
  btn,
  btnLink,
  imgLeft,
  imgRight,
  imgRightBg,
  hero2 = false,
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 20,
  });

  return hero2 ? (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp()}
      className="px-[30px] relative flex flex-row pt-24 w-full mb-[150px]"
    >
      <div
        className="rounded-[20px] bg-cover bg-center text-center bg-no-repeat flex flex-col w-full py-[130px_140px] px-[30px] shrink gap-5"
        style={{ backgroundImage: `url(${banners_home_bg})` }}
      >
        <h1>{title}</h1>
        {text && <p className="font-medium mb-0 text-xl">{text}</p>}
        <Breadcrumbs />
      </div>
    </motion.section>
  ) : (
    <section
      ref={sectionRef}
      className={`px-0 lg:px-[30px] relative flex flex-row ${
        imgRight ? "mb-[180px] pb-[30px]" : "mb-[150px]"
      } pt-24 w-full`}
    >
      <div
        className={`bg-cover bg-center bg-no-repeat flex flex-nowrap w-full shrink lg:rounded-[20px] relative ${
          imgRight ? "px-5 lg:px-10" : "px-0"
        }`}
        style={imgLeft ? {} : { backgroundImage: `url(${banners_home_bg})` }}
      >
        <div
          className={`flex grow shrink justify-end flex-col text-center lg:text-left lg:flex-row ${
            imgRight ? "py-[60px] gap-x-[9%]" : "min-h-[720px]"
          }`}
        >
          {!imgRight && imgLeft && (
            <div
              className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat flex rounded-[20px_0_0_20px] flex-col shrink"
              style={{ backgroundImage: `url(${imgLeft}` }}
            ></div>
          )}
          <div
            className={`w-full ${
              imgRight
                ? "md:w-[46%]"
                : "md:w-1/2 bg-cover bg-center bg-no-repeat px-[100px] py-5 gap-10 rounded-[0_20px_20px_0]"
            } flex flex-col gap-10 justify-center`}
            style={imgRight ? {} : { backgroundImage: `url(${imgRightBg}` }}
          >
            {subtitle && (
              <div>
                <span className="flex items-center gap-2.5 justify-start relative text-left text-primary text-sm uppercase tracking-[1px]">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  <span>{subtitle}</span>
                </span>
              </div>
            )}
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft({ delay: 0.2 })}
            >
              {title}
            </motion.h1>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft({ delay: 0.4 })}
              >
                {text}
              </motion.p>
            </div>
            <div>
              {btn && (
                <Button href={btnLink} btn2>
                  {btn}
                </Button>
              )}
            </div>
          </div>
          {!imgLeft && imgRight && (
            <div className="w-full md:w-[46%] px-[5%] lg:px-0 flex flex-col grow-0 shrink relative">
              <motion.div style={{ y }}>
                <div
                  className="lg:-mb-[200px] bg-cover bg-center bg-no-repeat relative shadow-[0_0_20px_10px_rgba(0,0,0,0.1)] flex min-h-[360px] lg:min-h-[800px] rounded-[600px_600px_20px_20px] flex-col grow-0 shrink"
                  style={{ backgroundImage: `url(${imgRight})` }}
                ></div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
