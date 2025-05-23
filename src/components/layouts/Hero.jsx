import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
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

  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const springY = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
  });

  return hero2 ? (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp()}
      className="px-0 lg:px-[30px] relative flex flex-row pt-24 w-full mb-20 md:mb-[150px]"
    >
      <div
        className="lg:rounded-[20px] bg-cover bg-center text-center bg-no-repeat flex flex-col w-full py-[130px_140px] px-[30px] shrink gap-5"
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
        imgRight ? "mb-20 md:mb-[180px] pb-[30px]" : "mb-20 md:mb-[150px]"
      } pt-24 w-full`}
    >
      <div
        className={`bg-cover bg-center bg-no-repeat flex flex-nowrap w-full shrink lg:rounded-[20px] relative ${
          imgRight ? "px-5 lg:px-10" : "px-5 "
        }`}
        style={imgLeft ? {} : { backgroundImage: `url(${banners_home_bg})` }}
      >
        <div
          className={`flex grow shrink justify-end text-center lg:text-left lg:flex-row flex-col ${
            imgRight ? "py-[60px] gap-x-[9%] gap-y-10" : "min-h-[720px]"
          }`}
        >
          {!imgRight && imgLeft && (
            <div
              className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat flex rounded-t-[20px] lg:rounded-[20px_0_0_20px] flex-col shrink max-md:min-h-[400px]"
              style={{ backgroundImage: `url(${imgLeft}` }}
            ></div>
          )}
          <div
            className={`w-full ${
              imgRight
                ? "md:w-[46%]"
                : "md:w-1/2 bg-cover bg-center bg-no-repeat px-5 lg:px-[100px] pt-[60px] pb-10 lg:py-5 gap-10 rounded-b-[20px] lg:rounded-[0_20px_20px_0] text-left"
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
            {btn && (
              <div>
                <Button href={btnLink} btn2 className="inline-block">
                  {btn}
                </Button>
              </div>
            )}
          </div>
          {!imgLeft && imgRight && (
            <div className="w-full md:w-[46%] px-[5%] lg:px-0 flex flex-col grow-0 shrink relative">
              <motion.div style={{ y: isDesktop ? springY : 0 }}>
                <div
                  className="lg:-mb-[100px] bg-cover bg-center bg-no-repeat relative shadow-[0_0_20px_10px_rgba(0,0,0,0.1)] flex min-h-[360px] lg:min-h-[800px] rounded-[600px_600px_20px_20px] flex-col grow-0 shrink"
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
