import {
  ColorSwatchIcon,
  CreditCardIcon,
  TemplateIcon,
} from "@heroicons/react/outline";
import React from "react";

export const UserDashboardContent = ({ component }) => {
  return (
    <div className="border p-4 mx-auto w-full md:w-9/12 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="rounded border bg-green-500 h-52 p-8 flex justify-between items-center">
          <div className="text-bold text-5xl text-white font-bold">
            <p>100 +</p>
            <p className="text-2xl font-thin">Total Properties</p>
          </div>
          <TemplateIcon className="w-24 text-gray-100 opacity-20" />
        </div>
        <div className="rounded border bg-yellow-500 h-52 p-8 flex justify-between items-center">
          <div className="text-bold text-5xl text-white font-bold">
            <p>100 +</p>
            <p className="text-2xl  font-thin">Sold Properties</p>
          </div>
          <ColorSwatchIcon className="w-24 text-gray-100 opacity-20" />
        </div>
        <div className="rounded border bg-indigo-500 h-52 p-8 flex justify-between items-center">
          <div className="text-bold text-5xl text-white font-bold">
            <p> $ 100</p>
            <p className="text-2xl  font-thin">Total Earned</p>
          </div>
          <CreditCardIcon className="w-24 text-gray-100 opacity-20" />
        </div>
      </div>

      {component}
    </div>
  );
};
