import { AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./components/common/Loader";
import OpenAtTop from "./components/common/OpenAtTop";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import { CartProvider } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    const timer = setTimeout(() => {
      const mainContent = document.querySelector("main");
      if (!mainContent) {
        return void setProgress(100);
      }
      const assets = mainContent.querySelectorAll("img, video");
      if (assets.length === 0) {
        return void setProgress(100);
      }

      let loadedCount = 0;
      const total = assets.length;
      const onAssetEvent = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / total) * 100));
      };

      assets.forEach((asset) => {
        const tag = asset.tagName.toLowerCase();
        if (tag === "img") {
          asset.complete
            ? onAssetEvent()
            : asset.addEventListener("load", onAssetEvent, { once: true });
          asset.addEventListener("error", onAssetEvent, { once: true });
        } else if (tag === "video") {
          asset.readyState >= 3
            ? onAssetEvent()
            : asset.addEventListener("loadeddata", onAssetEvent, {
                once: true,
              });
          asset.addEventListener("error", onAssetEvent, { once: true });
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => setLoading(false), 200);
      return () => clearTimeout(t);
    }
  }, [progress]);

  return (
    <CartProvider>
      {loading ? (
        <Loader progress={progress} />
      ) : (
        <AnimatePresence>
          <Header />
          <ToastContainer position="top-right" autoClose={3000} />
          <ScrollToTop />
          <Sidebar />
          <OpenAtTop />
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </AnimatePresence>
      )}
    </CartProvider>
  );
};

export default App;
