import React from "react";
import Navbar from "./Navbar";
import PageContainer from "./PageContainer";

interface Layout {
  children: React.ReactElement;
}

const Layout = ({ children }: Layout) => {
  return (
    <div className="relative max-w-maxWidth bg-main min-w-[320px] flex flex-col mx-auto my-0 min-h-screen text-white font-mont">
      <PageContainer>{children}</PageContainer>
      <Navbar />
    </div>
  );
};

export default Layout;
