import React from "react";
import { Footer } from "../Footer/Footer";
import { PopularPlace } from "../PopulerPlace/PopularPlace";
import { Team } from "../Team/Team";
import { Testimonial } from "../Testimonial/Testimonial";
import { ChoseUs } from "../WhyChose/ChoseUs";
import { Header } from "./Header";
import { Properties } from "./Properties";
import { Specials } from "./Specials";
import { UpdateProperty } from "./UpdateProperty";

export const Home = () => {
  return (
    <div>
      <Header />
      <Properties category={"Sale"} />
      <UpdateProperty />
      <ChoseUs />
      <Properties category={"Rent"} />
      <PopularPlace />
      <Specials />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
};
