import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  className,
  href,
  onClick,
  children,
  type,
  icon,
  btn2,
  iconClass,
  disabled,
  ...props
}) => {
  let activeClass = "btn_main";
  if (btn2) {
    activeClass = "btn_2";
  }
  const combinedClassName = className
    ? `${className} ${activeClass}`
    : `${activeClass}`;
  const BtnIcon = icon;
  const renderButton = () => (
    <button
      onClick={onClick}
      type={type}
      {...props}
      disabled={disabled}
      className={`${
        icon ? "flex items-center justify-center gap-3" : ""
      } ${combinedClassName}`}
    >
      {children}
      {icon && <BtnIcon className={`text-xl ${iconClass}`} />}
    </button>
  );

  const renderLink = () => (
    <Link
      to={href}
      {...props}
      className={`${
        icon ? "flex items-center justify-center gap-3" : ""
      } ${combinedClassName}`}
    >
      {children}
      {icon && (
        <BtnIcon
          className={`text-xl transition-all duration-300 ease-linear ${iconClass}`}
        />
      )}
    </Link>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
