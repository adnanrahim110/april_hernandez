import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { posts } from "../../constant";
import Card from "../ui/Card";
import SecHeader from "../ui/SecHeader";

const Posts = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <section className="mb-[150px] items-center px-5 lg:p-0 gap-2.5">
      <SecHeader
        color
        subtitle="Articles and tips by April"
        title="Enery Healing Blogs"
      />
      <div className="relative w-full mt-[55px] group">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          onSwiper={setSwiperInstance}
        >
          {sortedPosts.map((post, idx) => (
            <SwiperSlide key={idx} className="self-stretch">
              <Card post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute z-[2] top-1/2 -translate-y-1/2 left-5 text-base p-[25px] rounded-full bg-sndry text-white inline-flex items-center justify-center leading-none text-center transition-all duration-300 hover:bg-primary group-hover:scale-110"
          >
            <MdOutlineArrowBackIos className="transition-all duration-300 group-hover:scale-110" />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="absolute z-[2] top-1/2 -translate-y-1/2 right-5 text-base p-[25px] rounded-full bg-sndry text-white inline-flex items-center justify-center leading-none text-center transition-all duration-300 hover:bg-primary group-hover:scale-110"
          >
            <MdOutlineArrowForwardIos className="transition-all duration-300 group-hover:scale-110" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Posts;
