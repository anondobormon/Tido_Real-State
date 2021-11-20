import React from "react";
import "./PropertyHeader.css";

export const PropertyHeader = ({ content }) => {
  return (
    <div className="bg-property-header pt-10 md:pt-20 custom-bg h-64">
      <div className="2xl:max-w-screen-2xl max-w-7xl py-8 m-auto">
        <div className="py-4 text-white">
          <p className="text-3xl font-bold p-4 md:p-0">{content}</p>
        </div>
      </div>
    </div>
  );
};
