import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PropertyHeader } from "../HeaderOpt/PropertyHeader";
import { Properties } from "../Home/Properties";
import { Navbar } from "../Navbar/Navbar";

export const PlaceProperty = () => {
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(true);
  const { city } = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => {
        let AllPropertyInCity = data.filter(
          (property) => property.city === city
        );
        console.log(AllPropertyInCity);
        setProperty(AllPropertyInCity);
        setLoading(false);
      });
  }, []);

  console.log(city);
  return (
    <div>
      <Navbar />
      <PropertyHeader content={"Popular Properties in City"} />
      <Properties
        category={"Popular City"}
        property={property ? property : []}
      />
    </div>
  );
};
