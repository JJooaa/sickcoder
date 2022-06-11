import Header from "./Header";
import React from "react";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
