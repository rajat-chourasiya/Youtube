import React from "react";
import loadingGif from "../assets/gif.gif"; // Ensure correct path

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <img src={loadingGif} alt="Loading..." className="w-50 h-40 lg:w-90 lg:h-80 " />
    </div>
  );
}

export default Loading;
