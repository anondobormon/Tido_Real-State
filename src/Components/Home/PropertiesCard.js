import { BadgeCheckIcon, NewspaperIcon } from "@heroicons/react/solid";
import React from "react";

export const PropertiesCard = ({ ppt }) => {
  return (
    <div className="bg-white border mx-2 md:m-0 rounded">
      <div className="max-h-72 md:max-h-64 w-full overflow-hidden relative">
        <div className="w-full flex justify-between absolute py-4 px-4 z-index">
          <p className="px-2 text-center rounded bg-green-600 camelCase text-white ">
            {ppt.status}
          </p>
          <p className="px-2 text-center rounded bg-pink-600 text-white camelCase">
            {ppt.type}
          </p>
        </div>

        <img src={ppt.image} alt="" className="w-full scale-image " />
      </div>

      <div className="pb-2 px-4">
        <h1 className="text-2xl font-bold my-2">{ppt.title}</h1>
        <p className="text-xs font-bold text-gray-500">{ppt.address}</p>
        <p className="text-base my-2 text-shorter">{ppt.description}</p>
        <div className="my-2 font-semibold flex justify-between py-2">
          <div className="w-22 flex">
            <BadgeCheckIcon className="w-6 h-6 mr-2" /> {ppt.bathrooms}
          </div>
          <div className="w-22 flex">
            <NewspaperIcon className="w-6 h-6 mr-2" />
            {ppt.bathrooms}
          </div>
          <div className="w-22 flex">
            <NewspaperIcon className="w-6 h-6 mr-2" />
            {ppt.area}
          </div>
        </div>
        <hr />
        <div className="my-2 flex font-bold text-gray-400 justify-between py-2">
          <div className="w-22 flex">$ {ppt.price}</div>
          <div className="w-22 text-pink-600 flex">Read More</div>
          <div className="w-22 text-pink-600 flex">Buy Now</div>
        </div>
      </div>
    </div>
  );
};
