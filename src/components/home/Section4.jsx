import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { banners_home_3, home_1_10, home_1_9 } from "../../assets";
import ImgRounded from "../ui/ImgRounded";

const Section4 = () => {
  const sectionRef = useRef(null);

  // 2️⃣ tie scroll progress to it
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 3️⃣ map 0→1 progress to 0→360deg rotation
  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const rotate = useSpring(rawRotate, { stiffness: 200, damping: 20 });
  return (
    <section
      ref={sectionRef}
      className="bg-cover bg-[top_center] bg-no-repeat"
      style={{ backgroundImage: `url(${banners_home_3})` }}
    >
      <div className="flex flex-wrap basis-auto relative grow gap-y-48 shrink items-center justify-start py-[150px]">
        <motion.div
          style={{ rotate }}
          className="absolute z-[1] left-[calc(50%_-_85px)] top-[calc(50%_-_85px)]"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
          >
            <mask
              id="mask0_18202_1788"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="150"
              height="150"
            >
              <path d="M0 0H150V150H0V0Z" fill="white"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150 0H0V150H150V0ZM149.722 149.722H0.277507V0.277512H149.722V149.722Z"
                fill="white"
              ></path>
            </mask>
            <g mask="url(#mask0_18202_1788)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M111.397 139.549C111.934 139.549 112.43 139.263 112.698 138.798C120.199 125.78 120.75 109.222 112.694 95.2681L111.458 95.9818L112.694 95.2681C104.638 81.3148 90.0226 73.5129 74.998 73.4999C74.4611 73.4994 73.965 73.7859 73.697 74.251C66.1958 87.2692 65.6451 103.827 73.7008 117.781L73.7009 117.781C81.7572 131.734 96.372 139.536 111.397 139.549ZM110.526 136.539C96.8379 136.232 83.642 128.999 76.2989 116.281C68.9564 103.562 69.2902 88.5177 75.8685 76.5101C89.5568 76.817 102.753 84.0501 110.096 96.7681C117.439 109.486 117.105 124.531 110.526 136.539Z"
                className="fill-sndry"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M76.7399 75.0004C83.8497 63.2993 96.7118 55.4878 111.397 55.4878C126.083 55.4878 138.945 63.2993 146.055 75.0004C138.945 86.7014 126.083 94.5127 111.397 94.5127C96.7118 94.5127 83.8497 86.7014 76.7399 75.0004ZM73.6977 75.7515C81.2213 88.7569 95.2854 97.5127 111.397 97.5127C127.51 97.5127 141.574 88.7569 149.097 75.7515C149.366 75.2868 149.366 74.7139 149.097 74.2493C141.574 61.2439 127.51 52.4878 111.397 52.4878C95.2854 52.4878 81.2213 61.2439 73.6977 74.2493C73.4289 74.7139 73.4289 75.2868 73.6977 75.7515Z"
                className="fill-sndry"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M73.6971 75.7489C73.9651 76.214 74.4612 76.5005 74.9981 76.5C90.0227 76.487 104.638 68.6851 112.694 54.7319L112.694 54.7318C120.75 40.778 120.199 24.2203 112.698 11.2022C112.43 10.7371 111.934 10.4506 111.397 10.4511C96.3722 10.4638 81.757 18.266 73.701 32.2192C65.6449 46.1725 66.196 62.7308 73.6971 75.7489ZM75.8686 73.4898C69.2902 61.4821 68.9562 46.4372 76.299 33.7192C83.6419 21.0013 96.838 13.7679 110.526 13.4612C117.105 25.4689 117.438 40.5133 110.096 53.2319L111.395 53.9818L110.096 53.2319C102.753 65.9498 89.5569 73.1829 75.8686 73.4898Z"
                className="fill-primary"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M74.9984 76.5C75.5352 76.5005 76.0314 76.214 76.2994 75.7489C83.8005 62.7307 84.3512 46.1728 76.2955 32.2193L76.2955 32.2192C68.2392 18.266 53.6243 10.4638 38.5996 10.4511C38.0628 10.4506 37.5666 10.7371 37.2986 11.2022C29.7975 24.2203 29.2465 40.7783 37.3025 54.7318L38.5266 54.0251L37.3025 54.7318C45.3585 68.6851 59.9737 76.487 74.9984 76.5ZM74.1278 73.4898C60.4395 73.1829 47.2434 65.9498 39.9006 53.2318C32.5578 40.5136 32.8918 25.4689 39.4702 13.4612C53.1584 13.7679 66.3543 21.0013 73.6974 33.7193L74.9625 32.9889L73.6974 33.7193C81.04 46.4375 80.7062 61.4822 74.1278 73.4898Z"
                className="fill-primary"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.0986 96.0127C37.0986 96.8411 37.7702 97.5127 38.5986 97.5127C54.7107 97.5127 68.7748 88.7566 76.2984 75.7512C76.5672 75.2865 76.5672 74.7137 76.2984 74.249C68.7748 61.2436 54.7107 52.4878 38.5986 52.4878C22.4866 52.4878 8.42243 61.2436 0.898872 74.249C0.63006 74.7137 0.630064 75.2866 0.898882 75.7512C6.86449 86.0632 16.9402 93.7032 28.8928 96.4261C29.7005 96.6101 30.5045 96.1045 30.6885 95.2968C30.8725 94.489 30.3669 93.6851 29.5592 93.501C18.73 91.034 9.54687 84.2255 3.94106 75.0001C11.0509 63.2991 23.913 55.4878 38.5986 55.4878C53.2843 55.4878 66.1464 63.2991 73.2562 75.0001C66.1464 86.7012 53.2843 94.5127 38.5986 94.5127C37.7702 94.5127 37.0986 95.1843 37.0986 96.0127Z"
                className="fill-primary"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.2985 138.798C37.5665 139.263 38.0627 139.549 38.5995 139.549C53.6242 139.536 68.2394 131.734 76.2954 117.781C84.3514 103.827 83.8004 87.2691 76.2993 74.251C76.0312 73.7859 75.5351 73.4994 74.9983 73.4999C59.9736 73.5129 45.3587 81.3148 37.3024 95.268L37.3024 95.2681C29.2467 109.222 29.7974 125.78 37.2985 138.798ZM39.4701 136.539C32.8917 124.531 32.5579 109.487 39.9005 96.768C47.2436 84.0501 60.4395 76.817 74.1277 76.5101C80.7061 88.5178 81.0401 103.563 73.6973 116.281C66.3545 128.999 53.1583 136.232 39.4701 136.539Z"
                className="fill-sndry"
              ></path>
            </g>
          </motion.svg>
        </motion.div>
        <ImgRounded
          w="md:w-1/2"
          imgw="md:w-1/2"
          reverse={true}
          textPrimary
          titleClass="text-4xl font-medium"
          bgImg={home_1_9}
          subtitle="My Heart Expansions"
          title="A poetic journey through love, heartbreak, and the sacred return to self."
          content={`My Heart Expansions is a deeply personal collection of poetry and reflections that explores the raw, beautiful process of falling apart and finding your way back to wholeness. From the tenderness of love to the ache of heartbreak, and the quiet strength of rediscovering self-worth, April writes with a vulnerability that resonates with anyone who has ever lost themselves in love—and found their way back home. \n These words are more than poems; they are gentle companions for the soul. Each piece reminds us that even in our most broken moments, we remain whole—and forever worthy of love.`}
          btntext="Ready to blossom!"
          path="/book"
        />
        <ImgRounded
          w="md:w-1/2"
          imgw="md:w-1/2"
          bgImg={home_1_10}
          titleClass="text-4xl font-medium"
          subtitle="Healing and Feeling"
          title="A spiritual workbook to help you feel, process, and rise into your most healed, whole self."
          content={`You’ve tried talk therapy. You’ve journaled, meditated, maybe even burned some sage. Still,  something feels stuck. Healing and Feeling was created for those moments. This isn’t a “read it and feel better” kind of book—it’s a “sit with it, feel it, and transform through it” kind of book. \n With chapters on the shadow self, inner child wounds, spiritual connection, grounding, and more, this workbook gently holds your hand as you look within. It offers tools, prompts, and energetic insights that help you heal not just your mind but your spirit too. Whether you're in the middle of a breakdown, breakthrough, or both—this book is for you.`}
          btntext="Ready to thrive!"
          path="/book"
        />
      </div>
    </section>
  );
};

export default Section4;
