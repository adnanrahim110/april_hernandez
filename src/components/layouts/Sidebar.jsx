import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo_h } from "../../assets";
import { navigation } from "../../constant";
import Button from "../ui/Button";

const Sidebar = ({ isSidebar, setIsSidebar }) => {
  const location = useLocation();
  useEffect(() => {
    setIsSidebar(false);
  }, [location]);

  const isActive = (href) => {
    if (href === "/blogs" && location.pathname.startsWith("/blogs")) {
      return true;
    }
    return location.pathname === href;
  };

  return (
    <div
      className={`fixed flex w-full h-full top-0 left-0 z-[999999] ${
        isSidebar ? "translate-x-0 pointer-events-auto" : " pointer-events-none"
      }`}
    >
      <div
        className={`relative flex flex-col gap-20 px-10 pb-10 pt-[50px] items-start w-full h-full text-[#212529] bg-ivory transition-transform ease-[cubic-bezier(0.7,0,0.2,1)] duration-500 overflow-y-auto z-[1] ${
          isSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex items-center">
          <img src={logo_h} alt="April P. Hernandez" className="max-w-xs" />
        </div>
        <div className="grow shrink-0 basis-0 w-full">
          <nav>
            <ul className="flex flex-col overflow-hidden flex-wrap">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col items-start relative not-first:mt-[calc(30px_/_2)] not-first:pt-[calc(30px_/_2)]"
                >
                  <Link
                    to={item.href}
                    className={`text-3xl leading-[1.2em] tracking-[-1px] font-heading relative overflow-hidden inline-block after:absolute after:w-full after:h-px after:bg-primary-950 hover:after:translate-x-0 after:bottom-0 after:left-0 after:-translate-x-full ${
                      isActive(item.href)
                        ? "text-primary after:translate-x-0 after:bg-primary"
                        : "text-primary-950"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-full">
          <Button btn2 className="w-full inline-flex text-center">
            Buy now
          </Button>
        </div>

        <button
          className="absolute block cursor-pointer top-[30px] right-[30px] p-2.5 text-primary"
          onClick={() => setIsSidebar(false)}
        >
          <svg
            className="size-full text-[1em] transition-[transform_0.45s_cubic-bezier(0.42,0,0.58,1)]"
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
  );
};

export default Sidebar;
