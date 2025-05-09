import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/layouts/Hero";
import Card from "../components/ui/Card";
import { posts } from "../constant";

const Blogs = () => {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <>
      <Helmet>
        <title>Blogs - April P. Hernandez</title>
      </Helmet>
      <Hero hero2 title="Blogs" text="Learn, Share, Grow, Connect, Inspire" />
      <section className="mb-[150px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-[30px] items-start relative">
          {sortedPosts.map((post, idx) => (
            <article
              key={idx}
              className="flex flex-nowrap items-stretch justify-stretch relative w-full"
            >
              <div className="w-full flex flex-col">
                <Card post={post} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
