import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => (
  <div className="text-center p-10">
    <h2 className="text-2xl font-semibold mb-4">Thank you for your payment!</h2>
    <p className="mb-6">Your order has been successfully processed.</p>
    <Link
      to="/"
      className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-primary-700 transition"
    >
      Continue Shopping
    </Link>
  </div>
);

export default PaymentSuccess;
