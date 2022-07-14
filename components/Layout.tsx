import Header from "./Header";
import React from "react";

const Layout = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div className="flex flex-col relative">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
