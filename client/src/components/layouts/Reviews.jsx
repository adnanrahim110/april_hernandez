import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FaPlay, FaStar } from "react-icons/fa6";
import { reviews } from "../../constant";
import Button from "../ui/Button";
import SecHeader from "../ui/SecHeader";

const Reviews = ({ dark = false, title, text }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawYOuter = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const rawYMiddle = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const yOuter = useSpring(rawYOuter, { stiffness: 140, damping: 20 });
  const yMiddle = useSpring(rawYMiddle, { stiffness: 140, damping: 20 });

  return (
    <section
      ref={sectionRef}
      className={`relative ${
        dark ? "bg-[#f5eeef] py-[100px] mb-[150px]" : "my-[150px] "
      }`}
    >
      <div className="flex flex-col grow shrink items-center gap-5 h-full mx-auto w-full">
        <SecHeader title={title} description={text} />
        <div className="grid grid-cols-3 grid-rows-1 gap-10 content-[start] grid-flow-row justify-start mt-[50px] relative">
          {[...Array(3)].map((_, colIdx) => {
            const y = colIdx === 1 ? yMiddle : yOuter;
            const chunk = reviews.slice(colIdx * 3, colIdx * 3 + 3);
            return (
              <motion.div
                key={colIdx}
                style={{ y }}
                className={`flex flex-col shrink gap-10 items-start flex-wrap justify-start ${
                  colIdx === 0
                    ? "translate-y-12"
                    : colIdx === 2
                    ? "translate-y-24"
                    : "-translate-y-5"
                }`}
              >
                {chunk.map((review, idx) => {
                  return review.video ? (
                    <button
                      key={idx}
                      className="flex w-full outline-none min-h-[495px] flex-col justify-center items-center rounded-[20px] shrink bg-center bg-cover bg-no-repeat group"
                      style={{ backgroundImage: `url(${review.img})` }}
                    >
                      <div className="text-base p-[25px] rounded-full bg-sndry text-white inline-flex items-center justify-center leading-none text-center transition-all duration-300 hover:bg-primary group-hover:scale-110">
                        <FaPlay className="transition-all duration-300 group-hover:scale-110" />
                      </div>
                    </button>
                  ) : (
                    <div
                      key={idx}
                      className={`${
                        dark
                          ? "bg-[#eddee1] border border-[#ddc4c9]"
                          : "bg-[#F5F3EF]"
                      } p-10 rounded-[20px]`}
                    >
                      <div>
                        <div className="relative flex items-center">
                          <div className="flex flex-col shrink items-center">
                            <div className="text-center">
                              <div className="mb-[30px]">
                                <div className="inline-flex gap-[5px] whitespace-nowrap relative text-[22px] text-primary-300">
                                  {[...Array(review.rating)].map(
                                    (_, starIdx) => (
                                      <span
                                        key={starIdx}
                                        className={`flex leading-none align-middle items-center text-sndry`}
                                      >
                                        <FaStar />
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                              <div>
                                <p className="m-0">{review.text}</p>
                              </div>
                            </div>
                            <div className="mt-[30px] inline-flex flex-col self-center relative">
                              <div className="flex mb-[15px] items-center justify-center">
                                <img
                                  src={review.avatar}
                                  className="w-[60px] block rounded-full h-[60px]"
                                  alt={review.author}
                                />
                              </div>
                              <div className="flex items-center">
                                <div className="text-left text-[15px]">
                                  {review.author}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
