import React, { useEffect, useState } from "react";
import { PropertiesCard } from "./PropertiesCard";

export const Properties = () => {
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
    <div className="bg-gray-100 py-8">
      <div className="max-w-screen-2xl m-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {properties.map((property) => (
          <PropertiesCard ppt={property} />
        ))}
      </div>
    </div>
  );
};
