import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaShare,
  FaXTwitter,
} from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { author_1_1 } from "../assets";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { posts } from "../constant";

const Blog = () => {
  const { blogName } = useParams();

  const currentIndex = posts.findIndex(
    (p) => p.link.replace("/blogs/", "") === blogName
  );
  const post = posts[currentIndex] || posts[0];

  const prevPost = posts[(currentIndex - 1 + posts.length) % posts.length];
  const nextPost = posts[(currentIndex + 1) % posts.length];

  const relatedPosts = posts
    .filter((p) => p.categories === post.categories && p.link !== post.link)
    .slice(0, 3);

  const slug = post.categories
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

  const url = window.location.href;

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.caption,
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    }
  };

  const socialPlatforms = [
    {
      name: "facebook",
      icon: FaFacebookF,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
    },
    {
      name: "twitter",
      icon: FaXTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(post.title)}`,
    },
    {
      name: "linkedin",
      icon: FaLinkedinIn,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
    },
    {
      name: "share",
      icon: FaShare,
      url: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{post.title} - April P. Hernandez</title>
      </Helmet>
      <section className="mb-20 lg:mb-[130px] px-0 lg:px-[30px] flex flex-col w-full pt-24">
        <div
          className="lg:rounded-[20px] z-[revert] text-white relative overflow-hidden w-full flex flex-col items-center text-center justify-center bg-center bg-cover bg-no-repeat min-h-[600px] gap-[30px] shrink before:absolute before:w-full before:h-full before:bg-black/50 before:z-[revert] lg:before:rounded-[20px] *:z-[revert] *:relative"
          style={{ backgroundImage: `url(${post.img})` }}
        >
          <div>
            <Link
              to={`/blogs/category/${slug}`}
              className="text-xs uppercase mb-1.5 hover:text-gray-400 transition-all duration-200 ease-in-out"
            >
              {post.categories}
            </Link>
          </div>
          <h1 className="text-white px-10">{post.title}</h1>
          <p className="m-0 max-w-[800px]">{post.caption}</p>
          <div className="flex text-sm flex-wrap items-center justify-center text-center whitespace-pre-wrap">
            <div className="inline-flex gap-3 items-center justify-center text-center">
              <img
                src={author_1_1}
                className="w-8 h-8 rounded-full border-2"
                alt=""
              />
              <Link
                to="/author"
                className="underline underline-offset-2 decoration-transparent transition-all duration-300 ease-in-out hover:decoration-sndry-300 hover:text-sndry-300"
              >
                April Hernandez
              </Link>
            </div>
            <span className="w-5 h-px bg-neutral-300 mx-4 mt-0.5"></span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>
      <section className="mb-[120px]">
        <div className="flex grow shrink flex-col-reverse lg:flex-row gap-20 max-w-7xl mx-auto h-full w-full">
          <div className="w-full md:w-[22%] gap-2.5 flex-col flex shrink mb-20 relative">
            <div className="sticky top-9 flex flex-col gap-2.5">
              <div className="bg-[#F5F3EF] rounded-[20px] p-5 transition-all duration-300 ease-in-out">
                <Link to="/author" className="mb-5 block w-full">
                  <img
                    src={author_1_1}
                    className="rounded-[20px] w-full"
                    alt=""
                  />
                </Link>
                <div className="text-center">
                  <h5 className="mb-5 text-sndry text-[22px] leading-[1.25em] tracking-[-1px]">
                    April Hernandez
                  </h5>
                  <p className="mb-5 text-base leading-[1.5em]">
                    Come discover how blending therapy with spiritual insight
                    can transform your life from the inside out.
                  </p>
                  <Button btn2 href="/author" className="inline-flex">
                    Open profile
                  </Button>
                </div>
              </div>
              <div className="mt-10 text-center">
                <h5 className="text-sndry">Share:</h5>
              </div>
              <div className="flex justify-center flex-wrap -m-[calc(7px_/_2)]">
                {socialPlatforms.map((social, idx) => {
                  const Icon = social.icon;
                  const Wrapper = social.name === "share" ? "button" : "a";
                  return (
                    <div
                      className="p-[calc(7px_/_2)] rounded-full w-auto"
                      key={idx}
                    >
                      <Wrapper
                        {...(social.url && { href: social.url })}
                        {...(social.name === "share" && {
                          onClick: handleNativeShare,
                        })}
                        target="_blank"
                        rel="noreferrer"
                        className="block relative cursor-pointer transition-all duration-300 ease-in-out group"
                      >
                        <span className="flex rounded-full flex-nowrap items-center break-words overflow-hidden pointer-events-none">
                          <span className="flex items-center justify-center self-stretch w-full text-lg p-3 text-white bg-[#C497A2] group-hover:bg-primary transition-all duration-300 ease-in-out">
                            <Icon />
                          </span>
                        </span>
                      </Wrapper>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <article className="w-full md:w-[78%] flex flex-col shrink gap-[60px]">
            <div className="w-full md:max-w-[820px]">
              <div className="flex items-stretch grow shrink flex-col gap-[30px] w-full mx-auto max-w-full">
                <h3 className="text-sndry">{post.title}</h3>
                {post.text.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
            <div className="bg-[#F5F3EF] w-full md:max-w-[820px] flex flex-col items-stretch gap-[15px] shrink grow-0 py-[30px] lg:py-20 px-5 lg:px-[125px] relative rounded-[20px]">
              <h3 className="text-sndry">Get in Touch with Me</h3>
              <div>
                <p>
                  I’d love to hear from you—share your thoughts or ask a
                  question!
                </p>
              </div>
              <div>
                <form className="blogForm">
                  <div className="md:flex mb-[15px] flex-wrap -mx-2.5">
                    <div className="px-2.5 grow shrink basis-0 max-md:mb-5">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" />
                    </div>
                    <div className="px-2.5 grow shrink basis-0">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" name="email" />
                    </div>
                  </div>
                  <div className="flex mb-[15px] flex-wrap -mx-2.5">
                    <div className="px-2.5 grow shrink basis-0">
                      <label htmlFor="message">Your Message</label>
                      <textarea rows={7} name="message" />
                    </div>
                  </div>
                  <div className="flex mb-[15px] flex-wrap -mx-2.5">
                    <div className="px-2.5 grow shrink basis-0 text-center">
                      <Button btn2 className="w-full md:max-w-2/3">
                        Send Now
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full mdmax-w-[820px]">
              <div className="flex flex-wrap items-center justify-start text-left">
                <div className="flex gap-4 text-sm">
                  <span className="text-sndry">Tag:</span>
                  <ul className="inline-flex gap-4">
                    <li>
                      <Link
                        to={`/blogs/category/${slug}`}
                        className=" text-[#9E9E9E] hover:text-primary underline underline-offset-2 decoration-transparent hover:decoration-primary transition-all duration-300 ease-in-out"
                      >
                        {post.categories}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="mb-[100px]">
        <div className="flex flex-col grow shrink gap-[120px] h-full mx-auto">
          <div className="w-full self-center max-w-[820px]">
            <div className="w-full border border-[#D1D1D1] rounded-[20px]">
              <div className="text-[#D1D1D1] flex flex-col md:flex-row justify-between w-full">
                <div className="transition-all duration-300 p-[15px] lg:p-[30px] flex items-start justify-start bg-transparent md:w-1/2 relative  overflow-hidden">
                  <Link
                    to={prevPost.link}
                    className="flex items-center w-full h-fit justify-start transition-all duration-300 group"
                  >
                    <img
                      src={prevPost.img}
                      className="rounded-[20px] self-center h-20 md:h-[140px] w-20 md:w-[140px] object-cover object-center mr-5"
                      alt=""
                    />
                    <span className="flex flex-col text-left">
                      <span className="text-sm max-md:leading-[1.5em] md:text-base text-[#9E9E9E]">
                        Previous Post
                      </span>
                      <span className="mt-2.5 overflow-visible">
                        <span className="max-md:text-sm font-heading transition-all duration-300 ease-in-out text-sndry-600 group-hover:text-primary leading-[1.3em]">
                          {prevPost.title}
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="flex text-center">
                  <div className="border-t border-[#D1D1D1] h-full mx-5 w-full"></div>
                </div>
                <div className="transition-all duration-300 p-[15px] lg:p-[30px] items-right justify-start flex bg-transparent md:w-1/2 relative  overflow-hidden">
                  <Link
                    to={nextPost.link}
                    className="flex items-center w-full h-fit justify-start transition-all duration-300 group"
                  >
                    <span className="flex flex-col text-right">
                      <span className="text-sm max-md:leading-[1.5em] md:text-base text-[#9E9E9E]">
                        Next Post
                      </span>
                      <span className="mt-2.5">
                        <span className="max-md:text-sm font-heading transition-all duration-300 ease-in-out text-sndry-600 group-hover:text-primary leading-[1.3em]">
                          {nextPost.title}
                        </span>
                      </span>
                    </span>
                    <img
                      src={nextPost.img}
                      className="rounded-[20px] self-center h-20 md:h-[140px] w-20 md:w-[140px] object-cover object-center ml-5"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[100px]">
        <div className="flex flex-col grow shrink gap-[50px] w-full mx-auto h-full">
          <h3 className="text-center text-sndry">Related Posts</h3>
          <div className="relative w-full">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
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
              }}
            >
              {relatedPosts.map((post, idx) => (
                <SwiperSlide key={idx}>
                  <Card post={post} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
