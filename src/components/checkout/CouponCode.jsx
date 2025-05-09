import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import coupons from "../../data/coupons";

const CouponCode = () => {
  const { appliedCoupon } = useCart();
  const couponDef = appliedCoupon ? coupons[appliedCoupon] : null;

  return (
    <div className="border border-[#D1D1D1] p-[30px] mt-[50px]">
      {appliedCoupon && couponDef ? (
        <p className="mb-0 inline-flex items-center gap-1.5">
          <span className="inline-flex items-center text-primary">
            <span> Coupon</span>
            <strong className="text-primary bg-primary-50 px-1 mx-1 border border-primary-300">
              {appliedCoupon}
            </strong>
            <span>applied:</span>
          </span>
          <span className="text-sndry-500">
            You have saved
            <span className="px-2 mx-0.5 bg-sndry-50 border border-sndry-300">
              {couponDef.type === "percent" ? (
                <span>{couponDef.amount}%</span>
              ) : (
                <span>${couponDef.amount}</span>
              )}
            </span>
          </span>
        </p>
      ) : (
        <p className="mb-0 inline-flex items-center gap-1.5">
          <span>Have a code? </span>
          <Link
            to="/cart"
            className="relative inline-block text-primary overflow-hidden before:absolute before:left-0 before:bottom-0 before:w-full before:h-px before:bg-primary before:-translate-x-full before:transition-transform before:duration-200 before:ease-linear hover:before:translate-x-0 transition-all duration-300 hover:text-primary-900"
          >
            <span>Click here to enter your coupon code</span>
          </Link>
        </p>
      )}
    </div>
  );
};

export default CouponCode;
