import React from "react";
import { Footer } from "../Footer/Footer";
import { PropertyHeader } from "../HeaderOpt/PropertyHeader";
import { UpdateProperty } from "../Home/UpdateProperty";
import { Navbar } from "../Navbar/Navbar";
import { Testimonial } from "../Testimonial/Testimonial";
import { AboutDetails } from "./AboutDetails";

export const About = () => {
  return (
    <div>
      <Navbar />
      <PropertyHeader content={"About Us"} />
      <AboutDetails />
      <UpdateProperty />
      <Testimonial />
      <Footer />
    </div>
  );
};
