import React from "react";
import { Footer } from "../Footer/Footer";
import { PropertyHeader } from "../HeaderOpt/PropertyHeader";
import { UpdateProperty } from "../Home/UpdateProperty";
import { Testimonial } from "../Testimonial/Testimonial";
import { AboutDetails } from "./AboutDetails";

export const About = () => {
  return (
    <div>
      <PropertyHeader content={"About Us"} />
      <AboutDetails />
      <UpdateProperty />
      <Testimonial />
      <Footer />
    </div>
  );
};
