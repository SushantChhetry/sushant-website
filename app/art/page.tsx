import React from "react";
import ImageGallery from "../components/ImageGallery";

function Art() {
  return (
    <div className="flex justify-center items-center flex-col h-fit">
      <div className="flex-1 flex justify-center items-center flex-col">
        <h1 className="text-6xl font-extrabold my-5 transition duration-500 hover:text-blue-600">
          art.
        </h1>
        <p className="md:text-xl text-center text-block m-4 md:m-9 md:p-14">
          Explore my artsy side and see what happens when creativity meets a
          canvas or a screen
        </p>
      </div>
      <div className="flex">
        <ImageGallery />
      </div>
    </div>
  );
}

export default Art;
