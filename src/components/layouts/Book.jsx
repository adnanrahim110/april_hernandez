import React from "react";
import { FaAmazon } from "react-icons/fa";
import { book1 } from "../../assets";
import Button from "../ui/Button";
import SecHeader from "../ui/SecHeader";

const Book = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:max-w-8/12 basis-8/12 text-center">
            <SecHeader
              subtitle="Books"
              title="About the books"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit.."
            />
          </div>
        </div>
        <div className="row justify-center gap-10 mt-10">
          {[
            { title: "Book 1", img: book1 },
            { title: "Book 2", img: book1 },
          ].map((item, idx) => (
            <div key={idx} className="lg:max-w-5/12 basis-5/12">
              <div className="group flex flex-col items-start justify-center gap-2">
                <div className="relative">
                  <img
                    src={item.img}
                    className="border border-neutral-600 grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    alt=""
                  />
                  <span className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <Button
                      children="buy on amazon"
                      className="border-neutral-200"
                      icon={FaAmazon}
                      iconClass="text-primary-500"
                    />
                  </span>
                </div>
                <div className="flex items-center justify-between w-full p-2 bg-primary-800">
                  <h2 className="font-bold m-0 text-xl">{item.title}</h2>
                  <Button
                    children="read more"
                    className="rounded-none border-neutral-100 py-2 text-base"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Book;
