import {
  DocumentAddIcon,
  LocationMarkerIcon,
  MailOpenIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import React from "react";

export const TeamCard = () => {
  return (
    <div className="border text-center px-4">
      <div className="w-36 h-36 my-4 rounded-full mx-auto border-4 border-white overflow-hidden">
        <img
          src="https://i.ibb.co/N9yHSyz/pexels-andrea-piacquadio-842567.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="rounded pt-16 px-4 pb-2 bg-white -mt-16">
        <h1 className="text-xl font-bold">Thomas Json</h1>
        <p className="text-xs font-semibold">Chef Executive Officer</p>
        <p className="text-sm my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          ipsam dignissimos eius molestias, quisquam officia dolore in
          cupiditate! Mollitia deserunt quas, repellat est modi magnam.
        </p>
        <div className="flex justify-between items-center px-10 lg:px-20">
          <MailOpenIcon className="w-6 h-6 text-pink-500" />
          <PhoneIcon className="w-6 h-6 text-pink-500" />
          <LocationMarkerIcon className="w-6 h-6 text-pink-500" />
          <DocumentAddIcon className="w-6 h-6 text-pink-500" />
        </div>
      </div>
    </div>
  );
};
