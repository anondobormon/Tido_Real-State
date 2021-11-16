import React from "react";

export const Specials = () => {
  return (
    <div className="bg-special h-96 w-full text-center flex justify-center items-center">
      <div>
        <p className="text-xs my-4 text-white font-bold">SPECIAL</p>
        <p className="text-xl text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          earum voluptates totam nisi ea, aperiam est error <br /> sapiente nemo
          molestias?
        </p>
        <button className="px-4 py-2 text-center bg-pink-500 w-36 text-white mx-auto flex font-bold items-center my-2 lg:my-5 hover-letter-space">
          Read More
        </button>
      </div>
    </div>
  );
};
