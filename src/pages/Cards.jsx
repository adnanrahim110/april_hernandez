import { motion } from "framer-motion";
import { useState } from "react";
import { banners_about_bg_1, banners_home_bg, box1, card_mu } from "../assets";
import specialBackImg from "../assets/cards/54.png";
import backFaceImg from "../assets/cards/card_deck/1.png";
import { fadeInLeft } from "../utils/animations";

const cardModules = import.meta.glob(
  "../assets/cards/card_deck/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default" }
);
const cards = Object.values(cardModules);

function Card({ src, index }) {
  const [flipped, setFlipped] = useState(false);
  const backImg = src === backFaceImg ? specialBackImg : backFaceImg;

  return (
    <motion.div
      className="group perspective-[1000px] w-full h-[520px] lg:h-96 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`w-full h-full transition-all duration-500 group rounded-lg hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] [transform-style:preserve-3d] cursor-pointer hover:scale-105 ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        } [will-change:transform]`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img
            src={src}
            alt={`Card ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            src={backImg}
            alt="Back of card"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      <button
        onClick={() => setFlipped(!flipped)}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-xs hover:bg-black transition-all duration-300 ease-in-out border border-white/50 hover:border-black shadow-[0_0_40px_20px_rgba(0,0,0,0.5)] text-white uppercase text-xs font-semibold px-5 py-2 rounded-lg ${
          flipped ? "hidden" : "opacity-0 group-hover:opacity-100"
        } z-10`}
      >
        Flip
      </button>
    </motion.div>
  );
}

export default function CardDeckPage() {
  return (
    <>
      <section
        className={`px-0 lg:px-[30px] relative flex flex-row mb-20 md:mb-[150px] pt-24 w-full`}
      >
        <div
          className={`bg-cover bg-center bg-no-repeat flex flex-nowrap w-full shrink lg:rounded-[20px] relative px-5`}
          style={{ backgroundImage: `url(${banners_home_bg})` }}
        >
          <div
            className={`flex grow shrink justify-end text-center lg:text-left lg:flex-row flex-col`}
          >
            <div className="w-full md:w-7/12 flex rounded-t-[20px] lg:rounded-[20px_0_0_20px] flex-col shrink">
              <img
                src={card_mu}
                className="h-full w-auto object-contain"
                alt=""
              />
            </div>
            <div
              className={`w-full md:w-5/12 px-5 lg:px-[60px] pt-[60px] pb-10 lg:py-5 rounded-b-[20px] lg:rounded-[0_20px_20px_0] text-left flex flex-col gap-10 justify-center max-lg:text-center`}
            >
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft({ delay: 0.2 })}
              >
                Cards
              </motion.h1>
              <div>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeft({ delay: 0.4 })}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  recusandae consequatur vel est reiciendis debitis, libero
                  officia labore eos incidunt.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-0 lg:px-[30px] mb-20">
        <div className="min-h-screen bg-gradient-to-b from-sndry-50 via-primary-50 to-ivory-50 py-12 px-6 lg:rounded-[20px]">
          <h1 className="text-center mb-10 text-3xl font-bold">
            Spiritual Therapy Card Deck
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-5">
            {cards.map((src, index) => (
              <Card key={index} src={src} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
