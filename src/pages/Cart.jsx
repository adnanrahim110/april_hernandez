import { motion } from "motion/react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { IoIosTrash } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "../components/layouts/Hero";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";

import { MdDeleteForever } from "react-icons/md";
import coupons from "../data/coupons";

const Cart = () => {
  const [labelActive, setLabelActive] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");

  const {
    cart,
    removeItem,
    updateQty,
    clearCart,
    applyCoupon,
    removeCoupon,
    appliedCoupon,
    discountAmount,
  } = useCart();

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal - discountAmount;
  const couponDef = appliedCoupon ? coupons[appliedCoupon] : null;

  const handleUpdateCart = () => {
    setLoading(true);
    setTimeout(() => {
      setHasChanges(false);
      setLoading(false);
      toast.success(
        <span className="text-base text-black">
          Cart is updated successfully
        </span>
      );
    }, 500);
  };

  const onApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();

    if (!code) {
      setCouponError("Please enter the coupon code to apply. *");
      return;
    }

    if (appliedCoupon === code) {
      toast.warning(
        <span className="text-base text-black">
          The Coupon is already applied
        </span>
      );
      return;
    }

    const found = coupons[code];
    if (!found) {
      setCouponError("Entered coupon code is not valid.");
      return;
    }

    setCouponError("");

    let disc = 0;
    if (found.type === "percent") {
      disc = (subtotal * found.amount) / 100;
    } else {
      disc = found.amount;
    }

    applyCoupon(code, disc);

    toast.success(
      <span>
        Coupon <strong className="text-primary text-base">{code}</strong>{" "}
        applied
      </span>
    );
    setHasChanges(false);
  };

  const onRemoveDiscount = () => {
    removeCoupon();
    setCouponCode("");
    setCouponError("");
    setHasChanges(false);
    toast.info(
      <span className="text-base text-black">
        Discount removed successfully
      </span>
    );
  };

  return (
    <>
      <Helmet>
        <title>Cart - April P. Hernandez</title>
      </Helmet>
      <Hero hero2 title="Cart" />
      <section className="mb-[120px]">
        <div className="flex grow shrink flex-col w-full h-full mx-auto">
          {cart.length > 0 ? (
            <div>
              <div className="grid grid-cols-[60%_auto] items-stretch gap-[50px]">
                <div>
                  <table>
                    <thead>
                      <tr>
                        {[
                          null,
                          null,
                          "Product",
                          "Price",
                          "Quantity",
                          "Subtotal",
                        ].map((h, idx) => (
                          <th
                            key={idx}
                            className={`text-white outline-none font-normal text-base align-middle border-l border-[#D1D1D1] bg-sndry-500 py-[18px] ${
                              h === null ? "px-4" : "px-[30px]"
                            }`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr
                          key={item.id}
                          className="*:border-[#D1D1D1] *:border-b *:border-l *:text-[#40304B] *:bg-white *:px-[30px] *:py-[18px] *:align-middle"
                        >
                          <td className="px-2.5!">
                            <div className="relative inline-block group">
                              <button
                                onClick={() => {
                                  removeItem(item.id);
                                  toast.success(
                                    "Item removed from cart successfully",
                                    { autoClose: 3000 }
                                  );
                                }}
                                className="text-base text-center -indent-[9999px] text-sndry block w-4 h-4 mx-auto transition-colors duration-200 ease-in-out hover:text-red-500"
                              >
                                <RxCross2 />
                              </button>
                              <div className="pointer-events-none absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="bg-red-500 text-white text-xs font-medium rounded py-1 px-2 relative whitespace-nowrap">
                                  Remove item
                                  <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-red-500" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2!">
                            <img
                              src={item.img}
                              className="w-[55px] min-w-[55px] h-auto block mx-auto"
                              alt={item.title}
                            />
                          </td>
                          <td>
                            <Link to="/books" className="text-sndry">
                              <div
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              />
                            </Link>
                          </td>
                          <td>
                            <span>
                              <bdi>
                                <span>$</span>
                                {item.price.toFixed(2)}
                              </bdi>
                            </span>
                          </td>
                          <td>
                            <div className="flex items-stretch justify-center gap-2 rounded-4xl border border-[#D1D1D1]">
                              <button
                                type="button"
                                onClick={() => {
                                  const newQ = Math.max(1, item.quantity - 1);
                                  if (newQ !== item.quantity) {
                                    updateQty(item.id, newQ);
                                    setHasChanges(true);
                                  }
                                }}
                                className="text-base p-2.5 border-r border-r-[#D1D1D1] rounded-l-4xl text-black/70 font-bold hover:text-primary hover:bg-amber-50 cursor-pointer transition-all duration-300 ease-in-out"
                              >
                                <FaMinus />
                              </button>
                              <span className="w-6 text-center self-center">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  updateQty(item.id, item.quantity + 1);
                                  setHasChanges(true);
                                }}
                                className="text-base p-2.5 border-l border-l-[#D1D1D1] rounded-r-4xl text-black/70 font-bold hover:text-primary hover:bg-amber-50 cursor-pointer transition-all duration-300 ease-in-out"
                              >
                                <FaPlus />
                              </button>
                            </div>
                          </td>
                          <td className="border-r">
                            <span>
                              <bdi>
                                <span>$</span>
                                {(item.price * item.quantity).toFixed(2)}
                              </bdi>
                            </span>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="pt-10" colSpan={6}>
                          <div className="flex w-full gap-2 items-center justify-end">
                            <form
                              className="cntform2 grow relative"
                              onSubmit={onApplyCoupon}
                            >
                              <div className="flex items-center justify-end relative group">
                                <input
                                  type="text"
                                  name="coupon"
                                  value={couponCode}
                                  onChange={(e) => {
                                    setCouponCode(e.target.value);
                                    setCouponError("");
                                  }}
                                  placeholder={
                                    labelActive
                                      ? "e.g SAVE40"
                                      : "Coupon Code: e.g SAVE40"
                                  }
                                  className={`pr-36! pl-6 text-sm ${
                                    couponError ? "border-red-500" : ""
                                  }`}
                                  maxLength={30}
                                  onFocus={() => setLabelActive(true)}
                                  onBlur={() => setLabelActive(false)}
                                />
                                <label
                                  htmlFor="coupon"
                                  className={`absolute text-sm z-[1] px-1.5 rounded-md transition-all duration-500 pointer-events-none ease-in-out ${
                                    labelActive
                                      ? "text-primary -top-3 left-[18px] font-semibold bg-white opacity-100"
                                      : "text-black/5 left-[19px] opacity-0"
                                  }`}
                                >
                                  Coupon Code:
                                </label>
                                <Button
                                  onClick={onApplyCoupon}
                                  className="bg-primary text-white hover:bg-sndry hover:border-sndry absolute text-xs px-4 py-3 right-1"
                                >
                                  Apply coupon
                                </Button>
                              </div>
                              {couponError && (
                                <p className="text-red-500 text-xs mt-1 absolute left-3 font-semibold">
                                  {couponError}
                                </p>
                              )}
                            </form>
                            <Button
                              btn2
                              className="text-xs py-3.5 disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-400 disabled:after:bg-gray-400"
                              disabled={!hasChanges}
                              onClick={handleUpdateCart}
                            >
                              Update Cart
                            </Button>
                            <Button
                              onClick={() => setShowConfirm(true)}
                              aria-label="Empty cart"
                              className="flex gap-2 px-4 py-3.5 text-xs bg-red-500 border-red-500 text-white hover:bg-red-700 hover:border-red-700"
                            >
                              <IoIosTrash className="text-base" />
                              <span>Empty Cart</span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-full">
                  <div className="p-5 w-full bg-[#fbfaf7] rounded-[20px] border border-[#D1D1D1] -mt-1 relative">
                    <div className="w-full">
                      <h4 className="mb-4 text-sndry font-semibold">
                        Cart Summary
                      </h4>
                      <table className="w-full text-sndry" cellSpacing={0}>
                        <tbody>
                          <tr className="*:py-1.5">
                            <td>Subtotal</td>
                            <td className="text-right">
                              ${subtotal.toFixed(2)}
                            </td>
                          </tr>
                          {discountAmount > 0 && (
                            <tr className="*:py-1.5 bg-red-50 border border-red-200 text-sm text-red-500 font-semibold font-heading">
                              <td className="pl-10 py-0! relative">
                                <button
                                  type="button"
                                  onClick={onRemoveDiscount}
                                  className="absolute top-1/2 -translate-y-1/2 left-0 bg-red-500 h-full text-white px-2 group cursor-pointer"
                                >
                                  <div className="relative">
                                    <MdDeleteForever className="text-lg" />
                                    <div className="pointer-events-none absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                      <div className="bg-red-500 text-white text-xs font-medium rounded py-1 px-2 relative whitespace-nowrap">
                                        Remove Discount
                                        <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-red-500" />
                                      </div>
                                    </div>
                                  </div>
                                </button>

                                <span className="uppercase pr-2">
                                  {couponDef.amount}%
                                </span>
                                <span>Discount</span>
                                <span className="pl-2 uppercase">
                                  ({appliedCoupon})
                                </span>
                              </td>
                              <td className="text-right pr-2">
                                -${discountAmount.toFixed(2)}
                              </td>
                            </tr>
                          )}
                          <tr className="*:py-1.5 text-primary font-semibold">
                            <td>Total</td>
                            <td className="text-right">${total.toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex flex-col flex-wrap items-stretch mt-4">
                        <Button href="/checkout" className="mt-5 text-center">
                          Proceed to checkout
                        </Button>
                      </div>
                    </div>
                    {loading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/10 backdrop-blur-xs rounded-[20px]"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="flex-col gap-4 w-full flex items-center justify-center">
                            <div className="w-16 h-16 border-4 border-transparent text-primary-400 text-4xl animate-spin [animation-duration:1s]! flex items-center justify-center border-t-primary-400 rounded-full">
                              <div className="w-12 h-12 border-4 border-transparent text-primary text-2xl animate-spin [animation-duration:1s]! flex items-center justify-center border-t-primary rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-12 py-4 pl-16 pr-8 relative bg-[#F5F3EF] text-orange-400 font-bold border-t-[3px] border-t-primary w-auto break-words">
                <HiOutlineExclamationCircle className="inline-block text-center leading-4 text-3xl text-primary m-auto absolute top-0 left-5 bottom-0 right-auto" />
                Your cart is currently empty.
              </div>
              <div>
                <Button href={"/books"} btn2>
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {showConfirm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-[0_0_40px_10px_rgba(0,0,0,0.2)] p-6 max-w-lg w-full text-center">
            <p className="mb-6 text-lg font-semibold font-heading">
              Are you sure you want to empty your cart?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  clearCart();
                  toast.success("🗑️ Cart emptied");
                  setShowConfirm(false);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition uppercase text-sm font-semibold"
              >
                Yes, empty it
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition uppercase text-sm font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Cart;
