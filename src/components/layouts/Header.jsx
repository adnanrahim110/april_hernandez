import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../constant";
import { useCart } from "../../context/CartContext";
import Button from "../ui/Button";

const Header = () => {
  const [lastY, setLastY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastY;

      setAtTop(currentY === 0);
      setShowHeader(currentY === 0 || scrollingUp);

      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const { cart } = useCart();
  const itemCount = cart.reduce((sum, itm) => sum + itm.quantity, 0);

  return (
    <motion.header
      initial={false}
      animate={{ y: showHeader ? 0 : "-100%" }}
      transition={{ type: "tween", duration: 0.2 }}
      className={`
        ${atTop ? "absolute shadow-none" : "fixed shadow-md"}
        top-0 left-0 right-0 z-50 bg-white
      `}
    >
      <nav className={`px-[30px] ${showHeader ? "py-0.5" : "py-2.5"} relative`}>
        <div className="flex items-center justify-between font-rare">
          <div>
            <h1 className="leading-none my-2 text-primary font-bold text-6xl">
              april
            </h1>
          </div>
          <ul className="flex items-center justify-center flex-wrap -mx-[calc(50px_/_2)]">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className={`mx-[calc(50px_/_2)] relative group ${
                  idx !== 0
                    ? "before:w-1 before:h-1 before:absolute before:-left-[calc(50px_/_2)] before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-black"
                    : ""
                }`}
              >
                <Link to={item.href}>
                  <span className="flex justify-center items-center overflow-hidden">
                    <span
                      className={`relative ${
                        location.pathname === item.href
                          ? "text-primary before:left-px"
                          : "text-black group-hover:text-primary group-hover:before:left-0"
                      } transition-all duration-300 ease-in-out before:absolute before:w-[calc(100%_-_3px)] before:h-0.5 before:bottom-0 before:bg-primary before:-left-full before:transition-all before:duration-300 before:ease-in-out`}
                    >
                      {item.name}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link
              to={"/cart"}
              className={`relative mt-1 transition-all duration-300 ease-in-out rounded-md p-1 border group ${
                location.pathname === "/cart"
                  ? "bg-primary-50 border-primary-300"
                  : " border-transparent hover:bg-primary-50 hover:border-primary-300"
              }`}
            >
              <span className="text-4xl text-primary relative">
                <span
                  className={`absolute text-[10px] font-bold -right-2 border-2 border-white -top-2 bg-primary rounded-full w-[26px] h-[26px] inline-flex items-center justify-center text-center text-white transition-all duration-300 ease-linear ${
                    location.pathname === "/cart"
                      ? "-translate-y-1 translate-x-1"
                      : "group-hover:-translate-y-1 group-hover:translate-x-1"
                  }`}
                >
                  {itemCount > 0 ? String(itemCount).padStart(2, "0") : 0}
                </span>
                <IoCartOutline />
              </span>
            </Link>
            <Button>Buy Now</Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
