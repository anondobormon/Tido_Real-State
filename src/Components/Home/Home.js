import React, { useEffect, useState } from "react";
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
  const [rentProperty, setRentProperty] = useState([]);
  const [saleProperty, setSaleProperty] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => {
        let rent = data.filter((property) => property.status == "For Rent");
        let sale = data.filter((property) => property.status == "For Sale");
        setRentProperty(rent);
        setSaleProperty(sale);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <Properties
        category={"Sale"}
        property={saleProperty ? saleProperty : []}
      />
      <UpdateProperty />
      <ChoseUs />
      <Properties
        category={"Rent"}
        property={rentProperty ? saleProperty : []}
      />
      <PopularPlace />
      <Specials />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
};
