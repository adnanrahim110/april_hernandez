import { toast } from "react-toastify";

export async function checkoutSubmit(
  e,
  formData,
  setErrors,
  setLoading,
  setFormData,
  initialFormData,
  setIsProcessing,
  setShowPayPal
) {
  e.preventDefault();
  // 1. validate
  const validationErrors = {};
  if (!formData.first_name)
    validationErrors.first_name = "First name is required *";
  if (!formData.last_name)
    validationErrors.last_name = "Last name is required *";
  if (!formData.country)
    validationErrors.country = "Country is required *";
  if (!formData.address_1)
    validationErrors.address_1 = "Street address is required *";
  if (!formData.state)
    validationErrors.state = "State / Province is required *";
  if (!formData.zipcode)
    validationErrors.zipcode = "Postcode is required *";
  if (!formData.phone)
    validationErrors.phone = "Phone number is required *";
  if (!formData.email) {
    validationErrors.email = "Email is required *";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    validationErrors.email = "Please enter a valid email address!";
  }

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setLoading(false);
    return;
  }

  // 2. submit
  setLoading(true);
  try {
    const resp = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await resp.json();

    if (!result.success) {
      toast.error(result.message || "Failed to save order");
      return;
    }

    // disable the Place Order btn & swap its text
    setIsProcessing(true);
    toast.success("Order saved! Please complete payment below.");

    // show PayPal buttons
    setShowPayPal(true);

    // reset the form if you like
    setFormData(initialFormData);
  } catch (err) {
    console.error(err);
    toast.error("An error occurred. Please try again later.");
  } finally {
    setLoading(false);
  }
}
