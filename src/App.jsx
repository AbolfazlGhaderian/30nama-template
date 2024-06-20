import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routs from "./Routs";
import "./style/output.css";
import Navbar from "./components/Navbar/Navbar";
import MobileCategory from "./components/MobileCategory/MobileCategory";

export default function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="cursor-context-menu">
      <Header />
      <Routs />
      <Navbar
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <MobileCategory
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <Footer />
    </div>
  );
}
