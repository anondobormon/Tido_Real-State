import React from "react";
import { Footer } from "../Footer/Footer";
import { PropertyHeader } from "../HeaderOpt/PropertyHeader";
import { UpdateProperty } from "../Home/UpdateProperty";
import { Testimonial } from "../Testimonial/Testimonial";
import { PropertyDetails } from "./PropertyDetails";
import "./SingleProperty.css";

export const SingleProperty = () => {
  return (
    <div>
      <PropertyHeader content={"Single Property Header"} />
      <PropertyDetails />
      <UpdateProperty />
      <Testimonial />
      <Footer />
    </div>
  );
};
