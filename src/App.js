import React, { useState, useEffect } from "react";
import "./assets/css/tailwind.css";
import "./assets/scss/tailwind.scss";

import "./assets/scss/icons.scss";

import { Route, Routes } from "react-router-dom";

import Index from "./pages/index.js";
import Loader from "./component/Loader";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    const canonicalHref = `${window.location.origin}${window.location.pathname}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", canonicalHref);

    handleRouteChange();
  }, []);

  // Route change method
  const handleRouteChange = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </>
  );
}
