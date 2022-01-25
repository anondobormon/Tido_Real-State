import React from "react";
import { Footer } from "../Footer/Footer";
import { PropertyHeader } from "../HeaderOpt/PropertyHeader";
import { UpdateProperty } from "../Home/UpdateProperty";
import { Navbar } from "../Navbar/Navbar";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
import Contact from "./Contact";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <PropertyHeader content={"Contact With Us"} />
      <Contact />
      <UpdateProperty />
      <TestimonialSlider />
      <Footer />
    </div>
  );
}
