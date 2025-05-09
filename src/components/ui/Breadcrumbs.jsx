import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex text-sm leading-[22px] flex-col">
      <div className="flex justify-center items-center flex-wrap text-[15px]">
        <Link
          to="/"
          className="text-primary hover:text-primary-500 transition-all duration-300 ease-in-out"
        >
          Home
        </Link>

        {segments.map((seg, i) => {
          const to = "/" + segments.slice(0, i + 1).join("/");
          const isLast = i === segments.length - 1 || i === segments.length - 2;

          const name = decodeURIComponent(seg).replace(/-/g, " ");
          const label = name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <span key={to} className="flex items-center">
              <span className="text-[#9E9E9E] mx-2.5">/</span>
              {isLast ? (
                <span>{label}</span>
              ) : (
                <Link
                  to={to}
                  className="text-primary hover:text-primary-500 transition-all duration-300 ease-in-out"
                >
                  {label}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
};
