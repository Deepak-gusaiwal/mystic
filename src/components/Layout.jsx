import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle,theme } from "./GlobalStyle";


const Layout = ({ children }) => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </ThemeProvider>
    </>
  );
};

export default Layout;
