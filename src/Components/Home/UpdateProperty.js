import React, { useEffect, useState } from "react";

export const UpdateProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((response) => response.json())
      .then((property) => {
        setProperties(property);
        setLoading(false);
      });
  }, []);
  return (
    <div className="text-center">
      <p className="text-3xl mt-8 font-bold text-black">Top Selling Property</p>
      <p className="text-base mb-8  text-black">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border">
        {properties.map((property) => (
          <div className="sell">
            <div className="top-selling">
              <div className="absolute p-12 text-white text-left w-full h-full top-product-details">
                <div className="h-3/6 ">
                  <p className="text-sm font-bold">Property Name</p>
                  <p className="text-sm font-bold">Property Category</p>
                </div>
                <div className="flex justify-center">
                  <button className="w-30 bg-black px-4 py-1">See More</button>
                </div>
              </div>
              <img src={property.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
