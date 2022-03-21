import React from "react";

import Footer from "@components/Global/Footer";
import Header from "@components/Global/Header";
import CustomHead from "@components/Global/CustomHead";
import GoogleTagManager from "@components/Global/GoogleTagManager";

const Layout = ({ children }) => {
  return (
    <>
      <CustomHead />
      <Header />

      <main>
        <GoogleTagManager />
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
