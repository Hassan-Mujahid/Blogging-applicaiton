import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1920px]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
