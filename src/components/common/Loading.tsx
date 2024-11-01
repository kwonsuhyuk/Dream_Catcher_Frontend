import React from "react";
import { AiOutlineMoon } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-3">
      <AiOutlineMoon className="text-8xl animate-bounce" />
      <p>
        Loading <span className="text-3xl">...</span>
      </p>
    </div>
  );
};

export default Loading;
