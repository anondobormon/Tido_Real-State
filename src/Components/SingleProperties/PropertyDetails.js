import { LocationMarkerIcon, StarIcon } from "@heroicons/react/solid";
import React from "react";
import { PropertyDescription } from "./PropertyDescription";
import { PropertySummery } from "./PropertySummery";
import { PropertyVideo } from "./PropertyVideo";

export const PropertyDetails = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-2xl py-8 m-auto">
        <div className="grid p-4 md:p-0  grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="md:flex border bg-white md:col-span-2 justify-between items-center">
              <div className="bg-white rounded p-4">
                <div>
                  <h1 className="text-3xl uppercase font-semibold  pb-3">
                    Real Housing Luxery House
                  </h1>
                  <p className="text-sm text-gray-400 flex items-center">
                    <LocationMarkerIcon className="w-5 mr-2" />
                    55W Jackson Blvd, Chicago, IL 60604, England
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-3xl text-pink-500 font-bold">$ 140,000</p>
                <p className="text-3xl flex text-yellow-500">
                  <StarIcon className="w-6 mt-1 mr-1" />
                  <StarIcon className="w-6 mt-1 mr-1" />
                  <StarIcon className="w-6 mt-1 mr-1" />
                  <StarIcon className="w-6 mt-1 mr-1" />
                  <StarIcon className="w-6 mt-1 mr-1" />
                </p>
              </div>
            </div>
            <div className="">
              <div className="md:col-span-2 pr-1 rounded">
                <PropertyDescription />
                <PropertySummery />
                <PropertyVideo />
              </div>
            </div>
          </div>
          <div className=" w-full bg-white rounded  md:h-2/6 p-4">
            <p className="text-3xl font-bold">Agent Details</p>
            <div className="w-24 h-1 my-2 bg-primary"></div>
            <div className="mx-auto w-36 h-36 rounded-full border-4 overflow-hidden">
              <img src="https://i.ibb.co/60m08Mf/1-4.png" alt="" />
            </div>
            <div className="py-4 md:mt-4 text-center">
              <p className="text-2xl font-semibold">Clarck Thomson</p>
              <p className="text-base text-semibold">Agent of Property</p>
              <p className="text-base py-2">502 Los Angeles, America</p>
              <p className="text-sm text-gray-500">+88123456789</p>
              <p className="text-sm text-gray-500">abcdefg@mail.com</p>
            </div>
            <button className="px-4 py-2 text-center bg-primary w-36 text-white mx-auto flex font-bold items-center my-2 lg:my-5 hover-letter-space">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
