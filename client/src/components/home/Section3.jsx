import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import {
  home_1_3,
  home_1_4,
  home_1_5,
  home_1_6,
  home_1_7,
  home_1_8,
} from "../../assets";
import { fadeInUp } from "../../utils/animations";
import SecHeader from "../ui/SecHeader";

const cardList = [
  {
    id: 1,
    icon: "",
    img: home_1_3,
    title: "Reiki energy healing",
    text: "Our life coaching integrates Reiki energy healing to address both your mindset and energy. This unique blend helps release blocks, align your energy, and empower you to achieve lasting growth and transformation.",
  },
  {
    id: 2,
    icon: "",
    img: home_1_4,
    title: "Deep meditative journeys",
    text: "Our life coaching incorporates deep meditative journeys to guide you inward, uncover hidden insights, and foster clarity. This unique approach helps align your inner wisdom with your goals, empowering lasting growth and transformation.",
  },
  {
    id: 3,
    icon: "",
    img: home_1_5,
    title: "Intuitive emotional healing",
    text: "Our life coaching integrates intuitive emotional healing to help you release emotional blocks and reconnect with your inner self. This unique approach fosters clarity, balance, and the emotional freedom needed for lasting growth and transformation.",
  },
  {
    id: 4,
    icon: "",
    img: home_1_6,
    title: "Mindset transformation",
    text: "Our life coaching focuses on mindset transformation to help you break free from limiting beliefs and cultivate a growth-oriented perspective. This empowering approach aligns your thoughts with your goals, paving the way for lasting change and personal success.",
  },
  {
    id: 5,
    icon: "",
    img: home_1_7,
    title: "The science of spirituality",
    text: "Our life coaching weaves the science of spirituality into personal growth, blending spiritual insights with practical tools. This unique approach bridges the gap between the tangible and the transcendent, empowering you to align your energy and mindset for meaningful transformation.",
  },
  {
    id: 6,
    icon: "",
    img: home_1_8,
    title: "Relational intimacy building",
    text: "Our life coaching integrates relational intimacy building, helping you cultivate deeper connections with yourself and others. Through mindful communication and emotional awareness, this approach fosters trust, empathy, and meaningful relationships in all areas of life.",
  },
];

const Section3 = () => {
  const detailRef = useRef(null);
  const [selectedId, setSelectedId] = useState(1);

  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [selectedId]);

  const currentCard =
    selectedId && cardList.find((card) => card.id === selectedId);
  return (
    <section>
      <div className="flex flex-col grow shrink items-center gap-5 mx-auto py-[130px]">
        <SecHeader
          title="Reframing the unknown from scary to exhilarating"
          description="My unique life coaching approach integrates:"
        />
        <div className="mt-[60px]">
          <div className="min-[1181px]:flex min-[1181px]:flex-row relative">
            <div className="min-w-[450px] w-[450px]">
              <ul className="relative flex z-[2] flex-col min-[1181px]:mr-[15%]">
                {cardList.map((card) => (
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp()}
                    key={card.id}
                    className={`block not-last:mb-2.5 rounded-[20px] relative align-middle ${
                      selectedId === card.id
                        ? "bg-primary"
                        : "bg-[#F5F3EF] hover:bg-[#e7e0d1]"
                    } transition-all duration-300 ease-in-out z-[1] group`}
                  >
                    <button
                      onClick={() => setSelectedId(card.id)}
                      className="text-left justify-start rounded-[20px] transition-all duration-300 p-5 py-7 cursor-pointer tracking-[-1px] flex text-[22px] leading-[1.25em] relative items-center w-full"
                    >
                      <span className="self-center mr-5"></span>
                      <h3
                        className={`text-[22px] ${
                          selectedId === card.id ? "text-white" : "text-primary"
                        }`}
                      >
                        {card.title}
                      </h3>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="min-[1181px]:grow z-[1]">
              <div className="text-left relative">
                <div className="flex max-w-full flex-col shrink">
                  <div className="max-w-full relative">
                    <div className="h-full transition-all duration-300">
                      <div className="relative transition-all duration-300 ease-in-out h-full break-words">
                        <div className="flex flex-col">
                          <div className="flex flex-col mb-[30px] items-start">
                            <motion.figure
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={fadeInUp()}
                              className="rounded-[20px] transition-all duration-300"
                            >
                              <img
                                src={currentCard.img}
                                alt={currentCard.title}
                                className="object-cover h-[440px] rounded-[20px]"
                              />
                            </motion.figure>
                          </div>
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp()}
                            className="flex flex-col grow justify-center transition-all duration-300 ease-in-out"
                          >
                            <h3 className="mb-5 text-left text-sndry z-[2] relative">
                              {currentCard.title}
                            </h3>
                            <div className="mb-10 relative w-full text-left z-[2] text-primary-950">
                              {currentCard.text}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
