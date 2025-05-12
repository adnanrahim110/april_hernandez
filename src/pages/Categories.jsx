import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Hero from "../components/layouts/Hero";
import { posts } from "../constant";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const humanize = (slug) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const Categories = () => {
  const { category } = useParams();

  const filteredPosts = posts.filter(
    (post) => slugify(post.categories) === category
  );

  return (
    <>
      <Helmet>
        <title>{humanize(category)} - April P. Hernandez</title>
      </Helmet>
      <Hero hero2 title={`Category: ${humanize(category)}`} />
      <section className="mb-[150px]">
        <div className="flex flex-col items-stretch justify-between grow shrink basis-auto lg:flex-row gap-[50px] w-full mx-auto h-full">
          <div className="flex flex-col shrink relative w-full md:w-[70%]">
            <div className="grid relative grid-cols-1 gap-y-[60px] gap-x-[30px]">
              {filteredPosts.map((post, idx) => (
                <article
                  key={idx}
                  className="flex flex-nowrap items-stretch justify-stretch relative w-full"
                >
                  <div className="flex gap-[50px] mx-auto w-full flex-col lg:flex-row shrink">
                    <div className="w-full md:w-[36%] flex flex-col pb-[300px] relative">
                      <div className="absolute h-full left-px -top-px overflow-hidden z-[1]">
                        <img
                          src={post.img}
                          className="w-full h-full object-cover rounded-[10px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-[64%] flex justify-center rounded-[0_10px_10px_0] flex-col shrink gap-5 text-left">
                      <div>
                        <span className="text-primary-500 uppercase text-[13px] tracking-[1px]">
                          {post.categories}
                        </span>
                      </div>
                      <h4>
                        <Link
                          to={post.link}
                          className="bg-gradient-to-l from-primary to-primary bg-no-repeat relative transition-all duration-300 ease-in-out z-[1] [background-size:_0_0] [background-position:_50%_calc(100%_-_6px)] hover:[background-size:_100%_1px]"
                        >
                          {post.title}
                        </Link>
                      </h4>
                      <p className="m-0 line-clamp-2 md:pr-5">{post.text[0]}</p>
                      <div className="flex flex-row items-center gap-[10px] text-sm text-[#9E9E9E]">
                        <span>
                          by{" "}
                          <Link
                            to="/author"
                            className="text-sndry underline underline-offset-2 decoration-transparent hover:decoration-sndry transition-all duration-300 ease-in-out"
                          >
                            April P. Hernandez
                          </Link>
                        </span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[27%] flex justify-center items-start">
            <div className="flex flex-col gap-5 border border-[#D1D1D1] rounded-[20px] p-[30px] w-full">
              <h5 className="text-primary-950 text-center">Featured Posts</h5>
              <div>
                <div className="grid grid-cols-1 relative gap-y-6 gap-x-[30px]">
                  {posts.slice(0, 2).map((post, idx) => (
                    <article className="flex text-left flex-nowrap items-stretch justify-stretch relative w-full">
                      <div className="w-full flex flex-col">
                        <div>
                          <div className="flex flex-col w-full shrink relative">
                            <div className="absolute right-0 -top-px text-right mr-0 ml-auto max-w-full max-h-full overflow-hidden min-w-0 z-[1]">
                              <Link
                                to={post.link}
                                className="relative inline-flex w-20 h-20"
                              >
                                <img
                                  src={post.img}
                                  className="rounded-[8%] w-full h-full object-cover"
                                  alt={post.title}
                                />
                              </Link>
                            </div>
                            <div className="w-[60%] max-w-full">
                              <Link
                                to={post.link}
                                className="text-primary text-lg hover:text-sndry leading-[1.35em] block transition-all duration-300 ease-in-out"
                              >
                                {post.title}
                              </Link>
                              <span className="relative block text-left text-[15px] text-[#9E9E9E] mt-2">
                                {post.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
