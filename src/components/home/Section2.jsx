import { motion } from "motion/react";
import React from "react";
import { banners_home_2, home_1_2 } from "../../assets";
import { fadeInUp } from "../../utils/animations";
import ImgRounded from "../ui/ImgRounded";

const Section2 = () => {
  return (
    <section
      className="bg-cover bg-[top_center] bg-no-repeat"
      style={{ backgroundImage: `url(${banners_home_2})` }}
    >
      <div className="flex flex-wrap basis-auto grow shrink items-center justify-start pb-[150px]">
        <ImgRounded
          bar="Heal Deeply, Shine Brightly, Live Freely."
          bgImg={home_1_2}
          title="Soulful Healing Journey"
          content={`I’m April — a spiritual therapist, Reiki practitioner, healer, and medium. I blend therapy with energy healing to help you reconnect with your truest self. Through life’s messiness, I found that true healing requires both the mind and the spirit. \n I walk this path with you, honoring every part of your journey with compassion and soul.`}
          btntext="Author’s Journey"
          path="/author"
        />
        <div className="w-full mt-[150px] text-center">
          <motion.h6
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp()}
            className="uppercase text-primary text-sm"
          >
            Discover
          </motion.h6>
        </div>
        <div className="w-full mt-5 mb-[60px] text-center">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp({ delay: 0.15 })}
            className="text-[66px] tracking-[-2px] text-primary"
          >
            Your Path to Healing
          </motion.h3>
        </div>
        <div className="flex flex-row grow-0 shrink gap-10 justify-center items-stretch">
          {[
            {
              title: "Therapy",
              items: [
                "A space for self-exploration, healing, and growth",
                "Book a consultation call to explore our fit",
                "Unpack emotional blocks in a safe environment",
                "Develop healthier coping strategies",
                "Heal past trauma at your own pace",
                "Strengthen self-awareness and confidence",
                "Create lasting change through guided support",
              ],
            },
            {
              title: "Reiki",
              items: [
                "Energy healing for body, mind, and spirit",
                "Channel universal life force energy for balance",
                "Promote relaxation and reduce stress",
                "Restore natural energy flow in the body",
                "Support physical and emotional healing",
                "Clear energetic blockages and stagnation",
                "Enhance overall well-being and vitality",
              ],
            },
            {
              title: "Readings",
              items: [
                "Gain clarity and insight from spirit and intuition",
                "Connect with spirit guides and higher wisdom",
                "Receive messages aligned with your journey",
                "Receive messages aligned with your journey",
                "Validate your inner knowing and intuition",
                "Explore crossroads with spiritual insight",
                "Feel supported and guided through life’s transitions",
              ],
            },
          ].map((card, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp({ delay: (idx + 1) * 0.15 })}
              key={idx}
              className="bg-white/70 md:w-[calc(100%_/_3_-_120px_/_3)] flex gap-2.5 rounded-[30px] p-[50px_30px_60px] flex-col grow-0 shrink text-center"
            >
              <h3 className="capitalize text-4xl mb-5 text-sndry">
                {card.title}
              </h3>
              <ul className="flex flex-col items-center text-center gap-2.5">
                {card.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="block first:font-semibold font-normal"
                  >
                    {idx !== 0 && (
                      <div className="flex items-center justify-center">
                        <span className="w-1 h-1 my-1 bg-primary rounded-full block"></span>
                      </div>
                    )}
                    <div>
                      <p className="mb-0 text-lg tracking-[0]">{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
