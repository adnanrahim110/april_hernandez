import { motion } from "framer-motion";
import { useState } from "react";
import { box1 } from "../assets";
import specialBackImg from "../assets/cards/54.png";
import backFaceImg from "../assets/cards/card_deck/1.png";

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
      className="group perspective-[1000px] w-full h-96 relative"
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
      <section className="px-0 lg:px-[30px] relative flex flex-row pt-24 w-full mb-10">
        <div className="flex flex-col rounded-[20px] overflow-hidden max-h-[680px]">
          <img
            src={box1}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
      <section className="px-5 lg:px-[30px] mb-20">
        <div className="min-h-screen bg-gradient-to-b from-sndry-50 via-primary-50 to-ivory-50 py-12 px-6 rounded-[20px]">
          <h1 className="text-center mb-10 text-3xl font-bold">
            Spiritual Therapy Card Deck
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {cards.map((src, index) => (
              <Card key={index} src={src} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
