import React, { useEffect } from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../constant";

const Sidebar = ({ isSidebar, setIsSidebar }) => {
  const location = useLocation();
  useEffect(() => {
    setIsSidebar(false);
  }, [location]);
  return (
    <div
      className={`fixed flex w-full h-full top-0 left-0 z-[999999] ${
        isSidebar ? "translate-x-0 pointer-events-auto" : " pointer-events-none"
      }`}
    >
      <div
        className={`relative flex flex-col items-start w-full h-full text-[#212529] bg-ivory transition-transform ease-[cubic-bezier(0.7,0,0.2,1)] duration-500 overflow-y-auto z-[1] ${
          isSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex items-center justify-between w-full py-3 px-5">
          <h3 className="mb-0">April</h3>
          <div className="inline-flex items-center shrink-0">
            <button
              className="inline-flex items-center justify-center text-[22px] w-8 h-8 text-current rounded-full"
              onClick={() => setIsSidebar(false)}
            >
              <svg
                className="w-[22px] h-[22px] transition-[transform_0.45s_cubic-bezier(0.42,0,0.58,1)]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="currentColor"
                fill="none"
              >
                <path
                  d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="grow shrink-0 basis-0 w-full py-5">
          <nav>
            <ul className="w-full flex flex-col">
              {navigation.map((item, idx) => (
                <li key={idx} className="w-full">
                  <Link
                    to={item.path}
                    className={`px-5 w-full h-12 text-base font-medium tracking-[-0.01em] flex items-center flex-wrap gap-2 hover:bg-gray-50 transition-all duration-200 ease-in-out hover:text-primary ${
                      location.pathname === item.path
                        ? "bg-gray-100 text-primary"
                        : "text-current bg-white"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 text-current">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-5 mt-14">
            {[
              {
                title: "+1 (423) 2195 - 6789",
                text: "Call our team Mon-Fri from 8am to 5am.",
                link: "tel:+142321956789",
                icon: PiPhoneCallThin,
              },
              {
                title: "help@asheric.com",
                text: "Stay connected with us on social media.",
                link: "mailto:help@asheric.com",
                icon: CiMail,
              },
              {
                title: "Los Angeles",
                text: "1116 Wilshire Blvd, Santa Monica",
                link: false,
                icon: CiLocationOn,
              },
            ].map((item, i) => {
              const Dicon = item.icon;
              const Wrapper = item.link ? "a" : "span";
              return (
                <Wrapper
                  {...(item.link ? { href: item.link } : {})}
                  key={i}
                  className="flex items-start gap-5 not-first:mt-[30px]"
                >
                  <div className="inline-flex items-center justify-center w-[30px] h-[30px]">
                    <Dicon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold leading-none mb-0.5">
                      {item.title}
                    </h5>
                    <span className="text-[13px] opacity-40">{item.text}</span>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
