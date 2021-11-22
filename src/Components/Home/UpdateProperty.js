import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UpdateProperty = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("https://calm-garden-61691.herokuapp.com/properties")
      .then((response) => response.json())
      .then((property) => {
        setProperties(property.slice(1, 9));
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
          <div key={property._id} className="sell">
            <div className="top-selling">
              <div className="absolute p-12 text-white text-left w-full h-full top-product-details">
                <div className="h-3/6 ">
                  <p className="text-sm font-bold">{property.title}</p>
                  <p className="text-sm font-bold">{property.type}</p>
                </div>
                <div className="flex justify-center">
                  <Link
                    to={`/property/${property._id}`}
                    className="w-30 bg-black px-4 py-1"
                  >
                    See More
                  </Link>
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
