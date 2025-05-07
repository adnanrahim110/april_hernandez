import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OpenAtTop from "./components/common/OpenAtTop";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import { CartProvider } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        <ToastContainer position="top-right" autoClose={3000} />

        <Sidebar />

        <OpenAtTop />

        <main>
          <AppRoutes />
        </main>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
