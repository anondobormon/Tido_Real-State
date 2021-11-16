import { StarIcon } from "@heroicons/react/solid";
import React from "react";

export const TestimonialCard = () => {
  return (
    <div className="grid grid-cols-1 m-2 bg-white md:grid-cols-3 border">
      <div className="col-span-1 max-h-48 mx-auto rounded bg-gray-200 overflow-hidden ">
        <img
          className=""
          src="https://i.ibb.co/N9yHSyz/pexels-andrea-piacquadio-842567.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2 py-2 px-4 sm:px-2">
        <p className="text-2xl font-bold">Thomson Json</p>
        <p className="text-md font-semibold text-pink-500">Lorem, ipsum.</p>
        <p className="text-sm font-thin py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolor
          pariatur quaerat, vitae esse, unde quod tempore impedit necessitatibus
          doloribus reprehenderit non facilis dolore laudantium, nemo iusto
          mollitia eum dolores.
        </p>
        <div className="flex">
          <StarIcon className="w-7 h-7 mr-1 text-yellow-500" />
          <StarIcon className="w-7 h-7 mr-1 text-yellow-500" />
          <StarIcon className="w-7 h-7 mr-1 text-yellow-500" />
          <StarIcon className="w-7 h-7 mr-1 text-yellow-500" />
          <StarIcon className="w-7 h-7 mr-1 text-yellow-500" />
        </div>
      </div>
    </div>
  );
};
