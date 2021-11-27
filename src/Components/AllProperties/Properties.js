import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { PropertyHeader } from "../HeaderOpt/PropertyHeader";
import { PropertiesCard } from "../Home/PropertiesCard";
import { Loading } from "../Loading/Loading";
import { Navbar } from "../Navbar/Navbar";

export const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((response) => response.json())
      .then((property) => {
        setProperties(property);
        console.log(property);
        setLoading(false);
      });
  }, []);
  return (
    <div className="bg-gray-100">
      <Navbar />
      <PropertyHeader content={"Properties"} />

      <div className="max-w-screen-2xl py-8 md:py-20 m-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold">Property Summery</p>
            <div className="w-24 h-1 my-2 bg-primary"></div>
          </div>
          <div className="h-12 w-72 border rounded bg-white px-4 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search By Type"
              className="w-full outline-none border-0"
            />
            <ChevronDownIcon className="w-6" />
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 py-8 md:grid-cols-4 gap-2 my-2">
            {properties.map((property) => (
              <PropertiesCard ppt={property} />
            ))}
            {properties.map((property) => (
              <PropertiesCard ppt={property} />
            ))}
          </div>
        )}

        <button className="mx-auto px-4 py-2 rounded text-white bg-pink-600">
          Load More
        </button>
      </div>
      <Footer />
    </div>
  );
};
