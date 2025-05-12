import React from "react";
import { LuSend } from "react-icons/lu";
import { Link } from "react-router-dom";
import { banners_footer_bg, banners_nl, logo_w } from "../../assets";
import { navigation, socials } from "../../constant";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer
      className="flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banners_nl})` }}
    >
      <div className="flex flex-col grow shrink h-full">
        <div
          className="px-5 lg:px-10 flex flex-col gap-y-10 lg:flex-row shrink pt-[60px] pb-[30px] lg:py-14 relative justify-between items-center bg-cover bg-center bg-no-repeat max-lg: text-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(255,255,255, 0.5), rgba(255,255,255, 0.5)),url(${banners_nl})`,
          }}
        >
          <div className="w-full max-w-[700px]">
            <h2 className="text-primary drop-shadow-md drop-shadow-white font-semibold leading-snug">
              Love, Loss, & Rising
            </h2>
            <p className="tex mb-0">
              To love fiercely, lose deeply, and choose yourself—always.
            </p>
          </div>
          <div className="w-full md:w-[420px] flex gap-[15px] flex-col shrink">
            <h6 className="text-black font-normal uppercase">
              Sign up to Newsletter
            </h6>
            <div>
              <form>
                <div className="flex flex-wrap -mx-[5px]">
                  <div className="px-[5px] w-full">
                    <div className="flex flex-col lg:flex-row items-center flex-wrap">
                      <div className="px-[5px] mb-2.5 w-full lg:w-[calc(100%_-_150px_-_10px)]">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email .... "
                          className="focus:shadow-[0_0_8px_4px_rgba(0,0,0,0.1)]"
                        />
                      </div>
                      <div className="px-[5px] mb-2.5 w-full lg:w-[calc(150px_+_10px)]">
                        <Button
                          icon={LuSend}
                          iconClass="text-base! group-hover:rotate-45 transition-all duration-300 ease-in-out"
                          className="max-lg:w-full inline-flex bg-primary text-white hover:bg-primary-900 h-full w-full py-3.5 px-0 group"
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
        <div className="px-5 lg:px-10 pt-10 pb-5 flex flex-col flex-nowrap shrink bg-black/45">
          <div className="flex flex-col items-center max-lg:text-center lg:items-stretch self-auto grow shrink justify-between lg:flex-row gap-[60px] h-full">
            <div className="md:w-3/12">
              <div className="flex flex-col gap-[30px]">
                <img
                  src={logo_w}
                  alt="April P. Hernandez"
                  className="max-h-36 h-full w-auto object-contain"
                />
              </div>
            </div>
            <div className="md:w-6/12">
              <div className="flex flex-col justify-between gap-11 text-center">
                <h3 className="text-sndry-300 text-3xl font-semibold leading-[1.25em] tracking-[-1px]">
                  Quick Links
                </h3>
                <ul className="flex flex-row gap-8 justify-center">
                  {navigation.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.href}
                        className="text-white hover:text-sndry-300"
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
                <h3 className="text-sndry-300 font-semibold text-[26px] leading-[1.25em] tracking-[-1px]">
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
                          className="flex items-center justify-center rounded-full backdrop-blur-xs bg-sndry/20 border border-sndry/50 hover:bg-sndry-600 text-white text-2xl h-14 w-14 transition-all duration-300 ease-in-out"
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
          <p className="mb-0 text-neutral-400 text-center text-sm lg:text-base">
            &copy; {new Date().getFullYear()} -{" "}
            <Link
              to="/"
              className="text-ivory-200 underline underline-offset-2 hover:text-sndry-200"
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
