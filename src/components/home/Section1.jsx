import { motion } from "motion/react";
import React from "react";
import { fadeInUp, fadeOut } from "../../utils/animations";
const Section1 = () => {
  return (
    <section className="flex flex-col mb-[150px] px-10">
      <div className="flex grow shrink flex-col gap-[30px] mx-auto max-w-[1000px] w-full">
        <div>
          <div className="mb-[30px] text-center">
            <span className="text-[120px] inline-block leading-none text-center transition-all duration-300">
              <motion.svg
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeOut()}
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="60"
                  className="fill-ivory-100"
                ></circle>
                <g clipPath="url(#clip0_18202_1669)">
                  <path
                    className="fill-primary"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.0153 46.971C26.1064 46.4837 26.5769 46.1622 27.0664 46.2528C40.9604 48.8242 50.1114 53.2386 55.9845 58.4913C61.8728 63.7576 64.4088 69.8161 65.1555 75.5428C65.8995 81.2487 64.8658 86.6013 63.661 90.5073C63.0574 92.4642 62.4074 94.0689 61.9068 95.1873C61.6564 95.7468 61.4431 96.1853 61.291 96.4862C61.215 96.6367 61.1543 96.7529 61.1119 96.8326C61.0908 96.8725 61.0741 96.9032 61.0625 96.9246L61.0488 96.9497L61.0448 96.9568L61.0436 96.9591C61.0436 96.9591 61.0428 96.9605 60.2543 96.5256C59.5842 97.1259 59.5832 97.1248 59.5832 97.1248L59.582 97.1235L59.579 97.1202L59.5707 97.1108C59.5641 97.1033 59.5554 97.0933 59.5447 97.081C59.5234 97.0562 59.4942 97.0217 59.458 96.9775C59.3856 96.8889 59.2848 96.7612 59.1624 96.5942C58.9176 96.2602 58.5857 95.7686 58.2193 95.1182C57.4864 93.8169 56.6158 91.8804 56.0282 89.3C54.8501 84.1264 54.825 76.4329 59.2177 66.1683C59.3234 65.9215 59.527 65.7461 59.7642 65.668C58.5 63.6573 56.8656 61.6922 54.7795 59.8264C49.2281 54.8614 40.4209 50.5499 26.7369 48.0173C26.2474 47.9268 25.9243 47.4583 26.0153 46.971ZM60.7 67.2886C56.6227 77.0217 56.714 84.1934 57.7865 88.9032C58.3318 91.2979 59.1347 93.0734 59.792 94.2404C59.9036 94.4385 60.011 94.6191 60.1122 94.7822C60.1596 94.6793 60.209 94.5708 60.26 94.4568C60.7363 93.3925 61.3588 91.8564 61.9375 89.9804C63.0972 86.2206 64.0672 81.1396 63.3675 75.7739C63.0034 72.9812 62.1866 70.105 60.7 67.2886ZM60.2543 96.5256L59.5842 97.1259C59.7792 97.3416 60.0668 97.4501 60.3563 97.4172C60.6459 97.3844 60.9016 97.2142 61.0428 96.9605L60.2543 96.5256Z"
                  ></path>
                  <path
                    className="fill-primary"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M94.0403 47.0728C94.0748 47.5673 93.7001 47.9959 93.2034 48.0303C79.9238 48.949 70.526 53.0202 65.099 59.7113C64.7862 60.097 64.2187 60.1572 63.8313 59.8458C63.4439 59.5345 63.3834 58.9694 63.6962 58.5838C69.5594 51.3549 79.531 47.1771 93.0784 46.2398C93.5751 46.2054 94.0057 46.5784 94.0403 47.0728Z"
                  ></path>
                  <path
                    className="fill-primary"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M57.3037 34.5963C53.6412 36.1065 51.902 40.2864 53.4191 43.9323C54.9361 47.5783 59.135 49.3096 62.7975 47.7994C66.46 46.2892 68.1992 42.1093 66.6821 38.4633C65.165 34.8174 60.9661 33.0861 57.3037 34.5963ZM51.7533 44.6192C49.8552 40.0575 52.0312 34.8276 56.6137 32.938C61.1961 31.0485 66.4497 33.2147 68.3478 37.7764C70.246 42.3382 68.0699 47.568 63.4875 49.4576C58.905 51.3472 53.6515 49.181 51.7533 44.6192Z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_18202_1669">
                    <rect
                      width="68"
                      height="74.423"
                      fill="white"
                      transform="translate(26 23)"
                    ></rect>
                  </clipPath>
                </defs>
              </motion.svg>
            </span>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp()}
            className="text-center"
          >
            <h3 className="text-[28px] text-primary leading-[1.45em] -tracking-[1px] mb-10">
              Healing and Feeling and My Heart Expansions are soul-deep journeys
              for anyone moving through the messiness of emotions. With raw
              reflections, spiritual insights, and heartfelt confessions, these
              books offer not quick fixes but true healing—from shadow work to
              self-love. They're not just reads—they're rituals of
              transformation.
            </h3>
            <p className="text-primary font-heading text-sm uppercase">
              <b>April</b> is a healer who blends therapy, spirit, and soul in
              her work
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
