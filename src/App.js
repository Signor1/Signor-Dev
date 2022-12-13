import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { animateScroll } from "react-scroll";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header";
import Preloader from "./components/preloader/Preloader";
const LazyHome = React.lazy(() => import("./components/home/Home"));
const LazyAbout = React.lazy(() => import("./components/about/Container"));
const LazyPortfolio = React.lazy(() =>
  import("./components/portfolio/Container")
);
const LazyContact = React.lazy(() => import("./components/contact/Contact"));

function App() {
  const directory = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="bg-gray-900">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyPortfolio />
            </React.Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <React.Suspense fallback={<Preloader />}>
              <LazyContact />
            </React.Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
