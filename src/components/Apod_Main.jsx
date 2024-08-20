import React from "react";

function ApodMain({ data }) {
  return (
    <div className="flex flex-col max-h-screen w-full justify-center items-center overflow-hidden">
      <img
        src={
          data.hdurl &&
          (data.hdurl.endsWith(".jpg") ||
            data.hdurl.endsWith(".png") ||
            data.hdurl.endsWith(".jpeg"))
            ? data.hdurl
            : "https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        alt={data.title || "Oops.!"}
        className=" w-full h-[calc(100vh-var(--header-height)-var(--footer-height))] object-cover transform scale-x-[1.01] scale-y-[0.8]"
      />
    </div>
  );
}

export default ApodMain;
// <div className="flex flex-col max-h-screen w-full">
// className=" w-full h-full flex-1 object-cover"