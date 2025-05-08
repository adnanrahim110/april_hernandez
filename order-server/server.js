require("dotenv").config();
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const checkoutNodeJssdk = require("@paypal/checkout-server-sdk");

const app = express();
app.use(express.json());
app.use(cors());

const environment = process.env.PAYPAL_ENV === "live"
  ? new checkoutNodeJssdk.core.LiveEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  )
  : new checkoutNodeJssdk.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  );
const paypalClient = new checkoutNodeJssdk.core.PayPalHttpClient(environment);

app.post("/api/orders", (req, res) => {
  const ordersFile = path.join(__dirname, "orders.json");
  const newOrder = {
    id: Date.now(),
    date: new Date().toISOString(),
    ...req.body,
  };

  fs.readFile(ordersFile, "utf8", (err, data) => {
    let orders = [];
    if (!err) {
      try { orders = JSON.parse(data); } catch { }
    }
    orders.push(newOrder);
    fs.writeFile(
      ordersFile,
      JSON.stringify(orders, null, 2),
      "utf8",
      (err) => {
        if (err) return res.status(500).json({ success: false, message: "Could not save order." });
        res.json({ success: true });
      }
    );
  });
});

// 2) Create a PayPal order
app.post("/api/orders/create-paypal-order", async (req, res) => {
  const { total } = req.body;
  const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [{ amount: { currency_code: "USD", value: total.toFixed(2) } }],
  });

  try {
    const order = await paypalClient.execute(request);
    res.json({ orderID: order.result.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating PayPal order" });
  }
});

app.post("/api/orders/capture-paypal-order", async (req, res) => {
  const { orderID } = req.body;
  const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const capture = await paypalClient.execute(request);
    res.json({ captureID: capture.result.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error capturing PayPal order" });
  }
});

// serve
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
