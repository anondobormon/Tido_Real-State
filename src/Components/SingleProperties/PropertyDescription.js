import React from "react";

export const PropertyDescription = ({ description }) => {
  return (
    <div className="my-4 mb-6">
      <div className="text-3xl font-bold">
        <p>Description</p>
        <div className="w-24 h-1 my-2 bg-primary"></div>
        <p className="text-base font-thin">{description}</p>
      </div>
    </div>
  );
};
