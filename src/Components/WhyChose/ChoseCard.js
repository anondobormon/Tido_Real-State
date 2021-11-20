import React from "react";

export const ChoseCard = ({ items }) => {
  return (
    <div className="border rounded cursor-pointer py-4 px-4 text-center bg-white">
      <div className="w-40 h-40 rounded-full hover:bg-pink-100 mx-auto flex justify-between items-center">
        {items.icon}
      </div>
      <h1 className="my-4 text-2xl font-bold text-center">{items.title}</h1>
      <h1 className="my-2 text-base text-center">{items.description}</h1>
    </div>
  );
};
