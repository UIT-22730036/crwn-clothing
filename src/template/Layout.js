import React from "react";
import Header from "../components/Header/Header";

const Layout = ({ Component }) => {
  return (
    <>
      <Header />
      <Component />
    </>
  );
};

export default Layout;
