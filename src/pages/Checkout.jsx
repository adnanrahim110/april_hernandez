import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Country, State } from "country-state-city";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ok } from "../assets";
import CouponCode from "../components/checkout/CouponCode";
import fields from "../components/checkout/fields";
import OrderSummary from "../components/checkout/OrderSummary";
import SelectField from "../components/checkout/SelectField";
import TextField from "../components/checkout/TextField";
import Hero from "../components/layouts/Hero";
import Button from "../components/ui/Button";
import LoadingBtn from "../components/ui/LoadingBtn";
import { useCart } from "../context/CartContext";

const initialFormData = {
  first_name: "",
  last_name: "",
  country: "",
  address_1: "",
  address_2: "",
  city: "",
  state: "",
  zipcode: "",
  email: "",
  phone: "",
  order_notes: "",
};

const Checkout = () => {
  const { cart, discountAmount, appliedCoupon, clearCart, removeCoupon } =
    useCart();

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const navigate = useNavigate();

  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const initialOptions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
    "disable-funding": "paylater",
  };

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal - discountAmount;

  useEffect(() => {
    if (!discountAmount && appliedCoupon) {
      removeCoupon();
    }
  }, [discountAmount, appliedCoupon, removeCoupon]);

  useEffect(() => {
    const countries = Country.getAllCountries().map((c) => ({
      id: c.isoCode,
      text: c.name,
    }));
    setCountryOptions(countries);
  }, []);

  useEffect(() => {
    if (formData.country) {
      const states = State.getStatesOfCountry(formData.country).map((s) => ({
        id: s.isoCode,
        text: s.name,
      }));
      setStateOptions(states);
    } else {
      setStateOptions([]);
    }
    setFormData((fd) => ({ ...fd, state: "" }));
  }, [formData.country]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vErrors = [];
    if (!formData.first_name) vErrors.first_name = "First name is required *";
    if (!formData.last_name) vErrors.last_name = "Last name is required *";
    if (!formData.country) vErrors.country = "Country is required *";
    if (!formData.address_1) vErrors.address_1 = "Street address is required *";
    if (!formData.state) vErrors.state = "State / Province is required *";
    if (!formData.zipcode) vErrors.zipcode = "Postcode is required *";
    if (!formData.phone) vErrors.phone = "Phone number is required *";
    if (!formData.email) {
      vErrors.email = "Email is required *";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      vErrors.email = "Please enter a valid email address!";
    }

    if (Object.keys(vErrors).length > 0) {
      setErrors(vErrors);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const resp = await fetch("/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          cart,
          subtotal,
          discountAmount,
          total,
          coupon_code: appliedCoupon,
        }),
      });

      if (!resp.ok) {
        const text = await resp.text();
        console.error(`Order API error ${resp.status}:`, text);
        toast.error("Failed to place order. Please try again.");
        return;
      }

      const { orderId: newOrderId } = await resp.json();
      setOrderId(newOrderId);

      setShowPayPal(true);
      removeCoupon();
    } catch (err) {
      console.error("Order creation failed:", err);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const onCreateOrder = async () => {
    const resp = await fetch("/paypal/createorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId }),
    });
    if (!resp.ok) {
      const err = await resp.text();
      console.error("Create order failed:", resp.status, err);
      throw new Error("Could not create PayPal order");
    }
    const { orderId: paypalOrderId } = await resp.json();
    return paypalOrderId;
  };

  const onApprove = async (data) => {
    try {
      const paypalOrderId = data.orderID || data.orderId;

      await fetch(`/paypal/capturepayment/${paypalOrderId}`, { method: "GET" });

      clearCart();
      setPaymentSuccess(true);
      showPayPal(false);
    } catch (error) {
      console.error("Error verifying Paypal order:", error);
      toast.error("Payment verification failed.");
      showPayPal(false);
    }
  };

  const onError = (error) => {
    console.error("Paypal error", error);
    toast.error("Payment was canceled or failed.");
    showPayPal(false);
  };

  return (
    <>
      <Helmet>
        <title>Checkout - April P. Hernandez</title>
      </Helmet>
      <Hero hero2 title="Checkout" />
      <section className="mb-[150px]">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-[50%_auto]  gap-[50px]">
            <div>
              <div className="w-auto bg-white border border-[#D1D1D1] px-5 py-10 lg:p-[30px] overflow-hidden">
                <h3 className="mb-10">Billing Details</h3>
                <div className="flex flex-wrap justify-between items-center *:relative">
                  {fields.map((field, idx) => {
                    return field.select ? (
                      <SelectField
                        key={idx}
                        field={field}
                        formData={formData}
                        stateOptions={stateOptions}
                        countryOptions={countryOptions}
                        onChange={handleChange}
                        errors={errors}
                      />
                    ) : (
                      <TextField
                        key={idx}
                        field={field}
                        formData={formData}
                        onChange={handleChange}
                        errors={errors}
                      />
                    );
                  })}
                </div>
              </div>
              <div>
                <div className="mt-[50px] p-5 lg:p-[30px] bg-white border border-[#D1D1D1] overflow-hidden">
                  <p className="-mx-[5px] px-[5px] mb-0 w-full">
                    <label htmlFor="order_notes">Order Notes (optional)</label>
                    <span className="mb-[3px]">
                      <textarea
                        name="order_notes"
                        value={formData.order_notes}
                        onChange={handleChange}
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        rows={2}
                        cols={5}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <OrderSummary />
              <CouponCode />
              <div className="border border-[#D1D1D1] p-5 lg:p-[30px] mt-[50px]">
                {loading ? (
                  <LoadingBtn />
                ) : (
                  <Button className="w-full" btn2>
                    Place Order
                  </Button>
                )}
              </div>
            </div>
          </div>
        </form>
      </section>

      {showPayPal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-[0_0_40px_10px_rgba(0,0,0,0.2)] p-6 max-w-sm w-full text-center">
            <p className="m-0 text-xl font-semibold font-heading text-primary leading-snug">
              Please complete your payment below to finalize your order.
            </p>
            <div className="mt-4 pt-4 relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[calc(100%_-_10px)] before:h-px before:bg-neutral-200">
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  style={{ layout: "vertical", tagline: false }}
                  createOrder={onCreateOrder}
                  onApprove={onApprove}
                  onError={onError}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </motion.div>
      )}

      {paymentSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-[0_0_40px_10px_rgba(0,0,0,0.2)] p-6 pb-8 max-w-md w-full text-center flex flex-col items-center justify-center">
            <img src={ok} alt="" />

            <p className="text-2xl font-semibold font-heading text-primary mb-2">
              Thank you! <br /> Your payment was successful.
            </p>
            <p className="text-base text-sndry-600 mb-0">
              We’re processing your order now and will email you a confirmation
              shortly.
            </p>
            <div className="mt-5 pt-5 relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[calc(100%_-_10px)] before:h-px before:bg-neutral-200">
              <Button btn2 href="/books" className="block">
                Continue Shopping
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Checkout;
