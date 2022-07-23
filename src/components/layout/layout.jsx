import React from "react";
import Navbar from "./nav-bar";
const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main className="overflow--x-auto">{props.children}</main>
    </>
  );
};

export default Layout;
