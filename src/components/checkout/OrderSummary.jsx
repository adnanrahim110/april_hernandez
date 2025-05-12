import React from "react";
import { useCart } from "../../context/CartContext";
import coupons from "../../data/coupons";

const OrderSummary = () => {
  const { cart, appliedCoupon, discountAmount } = useCart();
  const couponDef = appliedCoupon ? coupons[appliedCoupon] : null;

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal - discountAmount;

  return (
    <div className="border border-[#D1D1D1] p-5 lg:p-[30px]">
      <h3 className="mb-8">Your Order Summary</h3>
      <table className="border-separate border-spacing-0 w-full">
        <thead>
          <tr>
            {["Product", "Price"].map((h, idx) => (
              <th
                key={idx}
                className="text-white text-left outline-none font-normal text-base align-middle border-l border-[#D1D1D1] bg-sndry-500 px-[30px] py-[18px]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="max-w-[150px] pr-10 text-base p-[18px_30px] border-l border-[#D1D1D1]">
                <div dangerouslySetInnerHTML={{ __html: item.title }} />
              </td>
              <td className="pr-10 text-base p-[18px_30px] border-r border-l border-[#D1D1D1]">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-[18px_30px] text-sndry-600 bg-neutral-100 border-t border-l border-[#D1D1D1]">
              Subtotal
            </td>
            <td className="p-[18px_30px] text-sndry-600 bg-neutral-100 border-t border-l border-r border-[#D1D1D1]">
              ${subtotal.toFixed(2)}
            </td>
          </tr>

          {discountAmount > 0 && couponDef && (
            <tr>
              <td className="p-[18px_25px] text-red-600 bg-red-50 border-y border-l border-red-200 text-base">
                {couponDef.type === "percent" && `${couponDef.amount}% `}{" "}
                Discount <strong className="ml-1">({appliedCoupon})</strong>
              </td>
              <td className="p-[18px_30px] text-red-600 bg-red-50 border border-red-200">
                ${discountAmount.toFixed(2)}
              </td>
            </tr>
          )}

          <tr>
            <td
              className={`p-[18px_30px] text-sndry-600 font-bold bg-neutral-100 border border-r-0 ${
                discountAmount > 0 && couponDef ? "border-t-0" : "border-t"
              } border-[#D1D1D1]`}
            >
              Total
            </td>
            <td
              className={`p-[18px_30px] text-sndry-600 font-bold bg-neutral-100 border ${
                discountAmount > 0 && couponDef ? "border-t-0" : "border-t"
              } border-[#D1D1D1]`}
            >
              ${total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderSummary;
