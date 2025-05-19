import gsap from "gsap";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
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

const cardModules = import.meta.glob(
  "../../assets/cards/card_deck/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default" }
);
const sortedPaths = Object.keys(cardModules).sort();
const firstSevenPaths = sortedPaths.slice(0, 7);
const cards = firstSevenPaths.map((path) => cardModules[path]);

const [
  firstCardImage,
  secondCardImage,
  thirdCardImage,
  fourthCardImage,
  fifthCardImage,
  sixthCardImage,
  seventhCardImage,
] = cards;

const cardList = [
  {
    id: 1,
    img: secondCardImage,
    title: "Go have fun",
    text: "You are allowed to enjoy your life. This card encourages you to take a break, laugh, and do something that brings you pure joy. Fun is not a distraction—it’s a form of healing. Whether it’s adventure, play, or simple pleasures, go do what lights you up inside.",
  },
  {
    id: 2,
    img: thirdCardImage,
    title: "You are living a human experience",
    text: "You are not meant to be perfect—you’re here to be human. This card reminds you that feeling, learning, and stumbling are all part of the journey. Embrace the beautiful mess oflife, because every experience is shaping your soul in powerful ways.",
  },
  {
    id: 3,
    img: fourthCardImage,
    title: "Overcoming this bumpy road",
    text: "Tough times are a part of life, but they don’t define you. This card is a sign that you’re getting through it, even if it doesn’t feel that way yet. Your strength is building with every challenge, and the light at the end of this road is closer than you think.",
  },
  {
    id: 4,
    img: fifthCardImage,
    title: "You are meant to feel your...",
    text: "Your emotions are not wrong or too much—they’re meant to be felt. This card calls you to honor your feelings rather than hide them. When you allow yourself to fully experience what’s in your heart, you begin the process of healing and self-acceptance.",
  },
  {
    id: 5,
    img: sixthCardImage,
    title: "You have to feel it",
    text: "Healing doesn’t come from avoidance, it comes from feeling. This card reminds you that the only way out is through. Sit with your emotions, even the uncomfortable ones. Let them move through you so you can finally let them go.",
  },
  {
    id: 6,
    img: seventhCardImage,
    title: "Go in nature",
    text: "Nature holds deep wisdom and peace. This card invites you to step outside and let the natural world soothe your soul. The trees, the breeze, the stillness—all of it reminds you of who you really are beneath the noise of daily life.",
  },
];

const Section3 = () => {
  const detailRef = useRef(null);
  const [selectedId, setSelectedId] = useState(1);
  const [openId, setOpenId] = useState(1);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  // watch viewport width
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // animate detail on change
  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [selectedId, openId]);

  const currentCard = cardList.find(
    (c) => c.id === (isDesktop ? selectedId : openId)
  );

  return (
    <section>
      <div className="flex flex-col w-full grow shrink items-center gap-5 mx-auto py-[130px]">
        <SecHeader
          title="Soulful Card"
          description="Empowering words to guide your heart, uplift your spirit, and awaken inner healing."
        />

        <div className="mt-[60px] w-full">
          {isDesktop ? (
            <div className="min-[1181px]:flex min-[1181px]:flex-row relative">
              <div className="md:min-w-[450px] md:w-[450px]">
                <ul className="relative flex z-[2] flex-col min-[1181px]:mr-[15%]">
                  {cardList.map((card) => (
                    <motion.li
                      key={card.id}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp()}
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
                        <h3
                          className={`text-[22px] ${
                            selectedId === card.id
                              ? "text-white"
                              : "text-primary"
                          }`}
                        >
                          {card.title}
                        </h3>
                      </button>
                    </motion.li>
                  ))}
                  <li className="block not-last:mb-2.5 rounded-[20px] relative align-middle bg-stone-600 hover:bg-stone-800 transition-all duration-300 ease-in-out z-[1] group">
                    <Link
                      to="/cards"
                      className="text-left rounded-[20px] transition-all duration-300 p-5 py-3 cursor-pointer tracking-[-1px] flex justify-between text-xl leading-[1.25em] relative items-center w-full"
                    >
                      <h3 className="text-xl text-white">view all</h3>
                      <span className="-translate-x-5 group-hover:translate-x-0 transition-all duration-200 ease-linear">
                        <BsArrowUpRight className="rotate-45 text-white" />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="min-[1181px]:grow z-[1]">
                <div ref={detailRef} className="text-left relative">
                  <div className="grid grid-cols-2">
                    <motion.figure
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp()}
                      className="rounded-[20px] transition-all duration-300 mb-[30px]"
                    >
                      <img
                        src={currentCard.img}
                        alt={currentCard.title}
                        className="object-cover h-[440px] rounded-[20px] w-full"
                      />
                    </motion.figure>
                    <motion.figure
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp()}
                      className="rounded-[20px] transition-all duration-300 mb-[30px]"
                    >
                      <img
                        src={firstCardImage}
                        alt={currentCard.title}
                        className="object-cover h-[440px] rounded-[20px] w-full"
                      />
                    </motion.figure>
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp()}
                    className="flex flex-col transition-all duration-300 ease-in-out"
                  >
                    <h3 className="mb-5 text-left text-sndry z-[2] relative">
                      {currentCard.title}
                    </h3>
                    <div className="relative w-full text-left z-[2] text-primary-950">
                      {currentCard.text}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ) : (
            <ul className="space-y-4">
              {cardList.map((card) => {
                const isOpen = openId === card.id;
                return (
                  <li key={card.id} className="overflow-hidden">
                    <button
                      onClick={() => setOpenId(isOpen ? null : card.id)}
                      className={`w-full text-left justify-start rounded-[20px] transition-all duration-300 p-5 py-7 cursor-pointer tracking-[-1px] flex items-center ${
                        isOpen
                          ? "bg-primary"
                          : "bg-[#F5F3EF] hover:bg-[#e7e0d1]"
                      }`}
                    >
                      <h3
                        className={`text-[22px] ${
                          isOpen ? "text-white" : "text-primary"
                        }`}
                      >
                        {card.title}
                      </h3>
                    </button>

                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-5 bg-white border border-[#D1D1D1] rounded-[20px] mt-3"
                      >
                        <div className="relative mb-5">
                          <Swiper>
                            <SwiperSlide>
                              <img
                                src={card.img}
                                alt={card.title}
                                className="object-cover h-[440px] rounded-[20px] w-full"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={firstCardImage}
                                alt={card.title}
                                className="object-cover h-[440px] rounded-[20px] w-full"
                              />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeInUp()}
                          className="flex flex-col transition-all duration-300 ease-in-out"
                        >
                          <h3 className="mb-5 text-left text-sndry z-[2] relative">
                            {card.title}
                          </h3>
                          <div className="relative w-full text-left z-[2] text-primary-950">
                            {card.text}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section3;
