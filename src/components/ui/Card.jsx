import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post, ...props }) => {
  const slug = post.categories
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

  return (
    <div className="flex flex-col bg-white hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer shrink rounded-[20px] overflow-hidden h-[470px]">
      <div className="flex flex-col self-stretch grow relative">
        <div className="h-full">
          <Link to={post.link} className="w-full h-full flex relative">
            <img src={post.img} className="h-full" alt={post.title} />
          </Link>
        </div>
        <div className="absolute z-[1] left-0 -bottom-3.5 w-full flex items-center justify-start">
          <Link
            to={`/blogs/category/${slug}`}
            className="text-xs ml-10 cursor-pointer leading-none tracking-[1px] text-white flex items-center flex-wrap bg-[#C497A2] hover:bg-primary transition-all duration-300 ease-in-out uppercase rounded-4xl px-4 p-2"
          >
            {post.categories}
          </Link>
        </div>
      </div>
      <div className="bg-[#F5F3EF] flex flex-col p-10 gap-[25px]">
        <h4 className="text-left text-primary-950 hover:text-primary transition-all duration-300 ease-in-out">
          <Link
            to={post.link}
            className="bg-gradient-to-l from-primary to-primary bg-no-repeat relative transition-all duration-300 ease-in-out z-[1] [background-size:_0_0] [background-position:_50%_calc(100%_-_6px)] hover:[background-size:_100%_1px]"
          >
            {post.title}
          </Link>
        </h4>
        <Link className="flex justify-between items-center text-xs text-primary fill-primary hover:text-primary-500 hover:fill-primary-500">
          <span className="uppercase mr-2.5 font-body text-left grow">
            Read More
          </span>
          <span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 114.96 114.96"
              xmlns="http://www.w3.org/2000/svg"
              style={{ enableBackground: "new 0 0 114.96 114.96" }}
            >
              <g>
                <path d="M112.72,55.24c-19.11-1.38-28.37-11.86-35.15-24.93c-1.79,0.5-3.41,0.95-5.95,1.65c3.02,4.49,5.32,8.8,8.62,12.54 c3.34,3.78,7.67,6.99,11.95,10.8H2.24v4.68h90.13c-10.9,6.35-16.2,13.93-20.03,23.18c1.01,0.39,1.71,0.73,2.46,0.93 c0.89,0.24,1.83,0.35,2.88,0.55c6.68-13.12,16.18-23.48,35.04-24.84V55.24z" />
              </g>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
