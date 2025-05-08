import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Country, State } from "country-state-city";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CouponCode from "../components/checkout/CouponCode";
import fields from "../components/checkout/fields";
import OrderSummary from "../components/checkout/OrderSummary";
import PaymentSuccess from "../components/checkout/PaymentSuccess";
import SelectField from "../components/checkout/SelectField";
import TextField from "../components/checkout/TextField";
import Hero from "../components/layouts/Hero";
import Button from "../components/ui/Button";
import LoadingBtn from "../components/ui/LoadingBtn";
import { checkoutSubmit } from "../utils/checkoutSubmit";

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
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);

  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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

  const handleSubmit = (e) =>
    checkoutSubmit(
      e,
      formData,
      setErrors,
      setLoading,
      setFormData,
      initialFormData,
      setIsProcessing,
      setShowPayPal
    );

  if (paymentSuccess) {
    return <PaymentSuccess />;
  }

  return (
    <>
      <Helmet>
        <title>Checkout - April P. Hernandez</title>
      </Helmet>
      <Hero hero2 title="Checkout" />
      <section className="mb-[150px]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-[50%_auto]  gap-[50px]">
            <div>
              <div className="w-auto bg-white border border-[#D1D1D1] p-[30px] overflow-hidden">
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
                <div className="mt-[50px] p-[30px] bg-white border border-[#D1D1D1] overflow-hidden">
                  <p className="-mx-[5px] px-[5px] mb-8 w-full">
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
              <div className="border border-[#D1D1D1] p-[30px] mt-[50px]">
                {loading ? (
                  <LoadingBtn />
                ) : (
                  <Button className="w-full" btn2 disabled={isProcessing}>
                    {isProcessing ? "Processing..." : "Place Order"}
                  </Button>
                )}
                {showPayPal && (
                  <PayPalScriptProvider
                    options={{
                      "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                      currency: "USD",
                    }}
                  >
                    <div className="mt-4">
                      <PayPalButtons
                        createOrder={async (_, actions) => {
                          const orderResp = await fetch(
                            "/api/orders/create-paypal-order",
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                total: Number(
                                  (
                                    formData.cartSubtotal -
                                    formData.cartDiscount
                                  ).toFixed(2)
                                ),
                              }),
                            }
                          );
                          const { orderID } = await orderResp.json();
                          return orderID;
                        }}
                        onApprove={async (data, actions) => {
                          /* capture payment on backend */
                          const capResp = await fetch(
                            "/api/orders/capture-paypal-order",
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ orderID: data.orderID }),
                            }
                          );
                          const { captureID } = await capResp.json();
                          // show toast AND swap to the success component
                          toast.success("Payment successful!");
                          setPaymentSuccess(true);
                        }}
                        onError={(err) => {
                          console.error(err);
                          toast.error("Payment could not be processed.");
                        }}
                      />
                    </div>
                  </PayPalScriptProvider>
                )}
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Checkout;
