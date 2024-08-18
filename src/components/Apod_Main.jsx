import React from "react";

function ApodMain({ data }) {
  return (
    <div className="flex flex-col max-h-screen w-full">
      <img
        src={
          data.hdurl &&
          (data.hdurl.endsWith(".jpg") ||
            data.hdurl.endsWith(".png") ||
            data.hdurl.endsWith(".jpeg"))
            ? data.hdurl
            : "https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        alt={data.title || "Oops.!"}
        className=" w-full h-full flex-1 object-cover"
      />
    </div>
  );
}

export default ApodMain;
