import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
