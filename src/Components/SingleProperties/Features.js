import React from "react";

export const Features = ({ title }) => {
  return (
    <div className="flex my-4 items-center">
      <img
        className="w-10"
        src="https://i.ibb.co/QdNxbCQ/7787569-correct-checklist-list-document-extension-icon.png"
        alt=""
      />
      <div className="ml-2 text-xl font-semibold">{title}</div>
    </div>
  );
};
