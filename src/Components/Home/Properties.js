import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import { PropertiesCard } from "./PropertiesCard";

export const Properties = ({ category, property }) => {
  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-3xl text-center font-bold  py-1">
        Properties For {category}
      </h1>
      <p className="text-base mb-4 md:mb-10 text-center">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="2xl:max-w-screen-2xl max-w-7xl my-2 m-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {property.map((property) => (
          <PropertiesCard key={property._id} ppt={property ? property : []} />
        ))}
      </div>
      <Link
        to="/properties"
        className="px-4 py-2 bg-pink-500 text-white w-36 mx-auto flex font-bold items-center my-2 lg:my-5 hover-letter-space"
      >
        See All <ArrowRightIcon className="mx-2 w-5 h-5" />
      </Link>
    </div>
  );
};
