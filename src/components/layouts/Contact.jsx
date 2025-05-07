import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { home_1_15 } from "../../assets";
import Button from "../ui/Button";

const Contact = ({ form2 = false }) => {
  const treatments = [
    { value: "reiki_healing", label: "Reiki Healing" },
    { value: "meditation", label: "Meditation" },
    { value: "life_coaching", label: "Life Coaching" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    time_hour: "",
    time_min: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate
    const validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required *";
    if (!formData.phone) validationErrors.phone = "Phone number is required *";
    if (!formData.email) validationErrors.email = "Email is required *";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address!";
    }
    if (!formData.treatment)
      validationErrors.treatment = "Please select a treatment *";
    if (!formData.date) validationErrors.date = "Please select a date *";
    if (!formData.time_hour || !formData.time_min)
      validationErrors.time = "Please select appointment time *";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://aprilhernandez.vercel.app/api/sendEmail.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData),
        }
      );
      const result = await response.json();

      if (result.status === "success") {
        toast.success(result.message, { position: "top-right" });
        // reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          treatment: "",
          date: "",
          time_hour: "",
          time_min: "",
        });
      } else {
        toast.error(result.message, { position: "top-right" });
      }
    } catch (error) {
      console.error("Error: ", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
      });
    }

    setLoading(false);
  };

  return (
    <section className={`px-0 ${form2 ? "my-[150px]" : ""}`}>
      <div
        className={`flex grow shrink w-full mx-auto ${
          form2 ? "gap-5 max-w-[940px]" : ""
        }`}
      >
        {!form2 && (
          <div
            className="flex bg-cover bg-center bg-no-repeat md:w-[70%] flex-col p-[30px] relative gap-10"
            style={{ backgroundImage: `url(${home_1_15})` }}
          />
        )}
        <div
          className={`${
            form2
              ? "border border-[#D1D1D1] bg-neutral-50/50 rounded-[30px] px-20 flex-col"
              : "bg-primary-800 px-10"
          } shrink flex relative w-full`}
        >
          <div
            className={`flex flex-col py-20 justify-center text-center grow shrink mx-auto ${
              form2 ? "gap-2.5" : "max-w-[600px] gap-5"
            }`}
          >
            {form2 && (
              <div className="text-center flex items-center justify-center gap-3">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="text-sm uppercase font-normal text-primary">
                  Step Into Connection
                </span>
                <span className="w-1 h-1 rounded-full bg-primary" />
              </div>
            )}
            <h2
              className={`text-[42px] ${
                form2 ? "text-primary mb-[70px] mt-5" : "text-white"
              }`}
            >
              {form2
                ? "Books aren’t just stories — they are journeys back to ourselves."
                : "Reach Out, Rise Up"}
            </h2>
            {!form2 && (
              <p className={`mb-10 ${form2 ? "text-primary" : "text-white"}`}>
                Awaken Your Healing Journey—Contact April and Begin Today!
              </p>
            )}
            <form
              className={`*:not-last:mb-[15px] ${
                form2 ? "cntform2" : "contactForm"
              }`}
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div className="md:flex md:flex-wrap md:-mx[2.5px]">
                <div className="grow shrink basis-0 px-[2.5px] relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "not-focus:border-red-500" : ""}
                  />
                  {errors.name && (
                    <small className="text-red-500 text-xs absolute -top-2.5 right-5 bg-red-50 border border-red-200 rounded-xl py-0.5 px-2">
                      {errors.name}
                    </small>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="md:flex md:flex-wrap md:-mx[2.5px]">
                <div className="grow shrink basis-0 px-[2.5px] relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "not-focus:border-red-500" : ""}
                  />
                  {errors.email && (
                    <small className="text-red-500 text-xs absolute -top-2.5 right-5 bg-red-50 border border-red-200 rounded-xl py-0.5 px-2">
                      {errors.email}
                    </small>
                  )}
                </div>
                <div className="grow shrink basis-0 px-[2.5px] relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "not-focus:border-red-500" : ""}
                  />
                  {errors.phone && (
                    <small className="text-red-500 text-xs absolute -top-2.5 right-5 bg-red-50 border border-red-200 rounded-xl py-0.5 px-2">
                      {errors.phone}
                    </small>
                  )}
                </div>
              </div>

              {/* Treatment */}
              <div className="md:flex md:flex-wrap md:-mx[2.5px]">
                <div className="grow shrink basis-0 px-[2.5px] relative">
                  <div className="sw">
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className={`
                        w-full
                        ${errors.treatment ? "not-focus:border-red-500" : ""}
                      `}
                    >
                      <option value="" disabled>
                        Choose a treatment
                      </option>
                      {treatments.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.treatment && (
                    <small className="text-red-500 text-xs absolute -top-2.5 right-5 bg-red-50 border border-red-200 rounded-xl py-0.5 px-2">
                      {errors.treatment}
                    </small>
                  )}
                </div>
              </div>

              {/* Date */}
              <div className="md:flex md:flex-wrap md:-mx[2.5px]">
                <div className="grow shrink basis-0 px-[2.5px] relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={errors.date ? "not-focus:border-red-500" : ""}
                  />
                  {errors.date && (
                    <small className="text-red-500 text-xs absolute -top-2.5 right-5 bg-red-50 border border-red-200 rounded-xl py-0.5 px-2">
                      {errors.date}
                    </small>
                  )}
                </div>

                <div className="grow shrink basis-0 px-[2.5px] relative">
                  <div className="md:flex md:flex-wrap md:-mx[2.5px]">
                    <div className="grow shrink basis-0 px-[2.5px]">
                      <div className="sw">
                        <select
                          name="time_hour"
                          value={formData.time_hour}
                          onChange={handleChange}
                          className={`
                            w-full
                            ${errors.time ? "not-focus:border-red-500" : ""}
                          `}
                        >
                          <option value="" disabled>
                            Hour
                          </option>
                          {Array.from({ length: 12 }, (_, i) => ({
                            value: String(i + 8).padStart(2, "0"),
                            label: String(i + 8).padStart(2, "0"),
                          })).map((h) => (
                            <option key={h.value} value={h.value}>
                              {h.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 px-[2.5px]">
                      <div className="sw">
                        <select
                          name="time_min"
                          value={formData.time_min}
                          onChange={handleChange}
                          className={`
                            w-full
                            ${errors.time ? "not-focus:border-red-500" : ""}
                          `}
                        >
                          <option value="" disabled>
                            Min
                          </option>
                          {["00", "10", "20", "30", "40", "50"].map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  {errors.time && (
                    <small className="text-red-500 text-xs absolute -top-2.5 right-5 whitespace-pre bg-red-50 border border-red-200 rounded-xl py-0.5 px-2">
                      {errors.time}
                    </small>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="md:flex md:flex-wrap md:-mx[2.5px] justify-start text-start mt-10">
                <div className="grow shrink basis-0 px-[2.5px]">
                  <Button
                    type="submit"
                    btn2={form2}
                    disabled={loading}
                    className={
                      form2
                        ? "w-full"
                        : `bg-white text-primary w-full group hover:bg-[#C497A2] hover:text-white hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] ${
                            loading ? "opacity-50 cursor-not-allowed" : ""
                          }`
                    }
                  >
                    {loading ? "Sending..." : "Send now"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
