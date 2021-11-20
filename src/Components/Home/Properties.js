import React, { useState } from "react";
import { PropertiesCard } from "./PropertiesCard";

export const Properties = ({ category, property }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-3xl text-center font-bold  py-1">
        Properties For {category}
      </h1>
      <p className="text-base mb-4 md:mb-10 text-center">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="max-w-screen-2xl my-2 m-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {property.map((property) => (
          <PropertiesCard key={property.data} ppt={property ? property : []} />
        ))}
      </div>
    </div>
  );
};
