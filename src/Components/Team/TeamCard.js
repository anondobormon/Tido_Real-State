import {
  DocumentAddIcon,
  LocationMarkerIcon,
  MailOpenIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import React from "react";

export const TeamCard = ({ name, designation, image }) => {
  return (
    <div className="border text-center">
      <div className="w-36 h-36 my-4 rounded-full mx-auto border-4 border-white overflow-hidden">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="rounded pt-16 px-4 pb-2 bg-white -mt-16">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-xs font-semibold">{designation}</p>
        <p className="text-sm my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          ipsam dignissimos eius molestias, quisquam officia dolore in
          cupiditate! Mollitia deserunt quas, repellat est modi magnam.
        </p>
        <div className="flex justify-between items-center px-10 py-4 lg:px-20">
          <a href="mailto:anondokpi@gmail.com">
            <MailOpenIcon className="w-6 cursor-pointer h-6 text-pink-500" />
          </a>
          <a href="mailto:anondokpi@gmail.com">
            <PhoneIcon className="w-6 h-6 cursor-pointer text-pink-500" />
          </a>
          <a href="mailto:anondokpi@gmail.com">
            <LocationMarkerIcon className="w-6 cursor-pointer h-6 text-pink-500" />
          </a>
          <a href="mailto:anondokpi@gmail.com">
            <DocumentAddIcon className="w-6 h-6 cursor-pointer text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  );
};
