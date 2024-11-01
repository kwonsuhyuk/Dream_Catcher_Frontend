import React from "react";
import { useLocation } from "react-router-dom";

interface PageContainerProps {
  children: React.ReactElement;
}

const PageContainer = ({ children }: PageContainerProps) => {
  const location = useLocation();

  return (
    <div
      className={`w-full flex-1 flex flex-col ${
        location.pathname !== "/" && "py-3 px-5"
      } text-base overflow-y-scroll scroll-none`}>
      {children}
    </div>
  );
};

export default PageContainer;
