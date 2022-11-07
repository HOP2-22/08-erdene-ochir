import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/Header";
export const Layout = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <NavigationBar
        color={
          offsetY <= window.innerHeight ? "transparent" : "rgb(235, 235, 235)"
        }
        ccolor={offsetY <= window.innerHeight ? "white" : "black"}
      />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
