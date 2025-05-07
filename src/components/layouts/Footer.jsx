import React from "react";
import { LuSend } from "react-icons/lu";
import { Link } from "react-router-dom";
import { banners_footer_bg } from "../../assets";
import { navigation, socials } from "../../constant";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer
      className="flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banners_footer_bg})` }}
    >
      <div className="flex flex-col grow shrink h-full">
        <div className="px-10 flex flex-row shrink py-14 relative justify-between items-center border-b border-[#DFE4E126]">
          <div className="w-full max-w-[700px]">
            <h5 className="text-primary-300 text-[28px] font-semibold leading-snug"></h5>
          </div>
          <div className="md:w-[420px] flex gap-[15px] flex-col shrink">
            <h6 className="text-white font-normal uppercase">
              Sign up to Newsletter
            </h6>
            <div>
              <form>
                <div className="flex flex-wrap -mx-[5px]">
                  <div className="px-[5px]">
                    <div className="flex flex-row items-center flex-wrap">
                      <div className="px-[5px] mb-2.5 w-[calc(100%_-_150px_-_10px)]">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email .... "
                        />
                      </div>
                      <div className="px-[5px] mb-2.5 w-[calc(150px_+_10px)]">
                        <Button
                          icon={LuSend}
                          iconClass="text-base! group-hover:rotate-45 transition-all duration-300 ease-in-out"
                          className="bg-primary-500 text-white hover:bg-primary hover:border-primary-500 h-full w-full py-3.5 px-0 group"
                        >
                          sign up
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="px-10 py-10 flex flex-col flex-nowrap shrink bg-black/45">
          <div className="flex items-center self-auto grow shrink justify-between flex-row gap-[60px] h-full">
            <div className="md:w-3/12">
              <div className="flex flex-col gap-[30px]">
                <h2 className="font-bold text-white">April</h2>
              </div>
            </div>
            <div className="md:w-6/12">
              <div className="flex flex-col gap-[30px] text-center">
                <h3 className="text-white text-[22px] leading-[1.25em] tracking-[-1px]">
                  Quick Links
                </h3>
                <ul className="flex flex-row gap-8 justify-center">
                  {navigation.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.href}
                        className="text-white hover:text-primary-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-3/12">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-white text-[22px] leading-[1.25em] tracking-[-1px]">
                  Follow me On
                </h3>
                <ul className="flex gap-4 items-center justify-start">
                  {socials.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <li key={idx}>
                        <Link
                          to={social.href}
                          target="_blank"
                          className="flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary border border-primary-500 text-white text-2xl h-14 w-14 transition-all duration-300 ease-in-out"
                        >
                          <Icon />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 w-full border-t border-[#DFE4E126] py-[30px] bg-black/55">
          <p className="mb-0 text-neutral-400 text-center text-base">
            &copy; {new Date().getFullYear()} -{" "}
            <Link
              to="/"
              className="text-primary-300 underline underline-offset-2 hover:text-primary-500"
            >
              April Hernandez
            </Link>{" "}
            - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
