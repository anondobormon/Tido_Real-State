import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { BoxLoading } from "../Loading/BoxLoading";
import { Navbar } from "../Navbar/Navbar";
import { PopularPlace } from "../PopulerPlace/PopularPlace";
import { Team } from "../Team/Team";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
import { ChoseUs } from "../WhyChose/ChoseUs";
import { Header } from "./Header";
import { Properties } from "./Properties";
import { Specials } from "./Specials";
import { UpdateProperty } from "./UpdateProperty";

export const Home = () => {
  const [rentProperty, setRentProperty] = useState([]);
  const [saleProperty, setSaleProperty] = useState([]);
  const [loading, setLoading] = useState(true);
  // https://calm-garden-61691.herokuapp.com
  useEffect(() => {
    fetch("https://calm-garden-61691.herokuapp.com/properties")
      .then((res) => res.json())
      .then((data) => {
        let rent = data.filter((property) => property.status === "For Rent");

        let sale = data
          .filter((property) => property.status === "For Sale")
          .slice(0, 8);
        setRentProperty(rent);
        setSaleProperty(sale);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <BoxLoading />
      ) : (
        <div>
          <Navbar />
          <Header />
          <Properties
            category={"Sale"}
            property={saleProperty ? saleProperty : []}
          />
          <UpdateProperty />
          <ChoseUs />
          <Properties
            category={"Rent"}
            property={rentProperty ? rentProperty : []}
          />
          <PopularPlace />
          <Specials />
          <Team />
          <TestimonialSlider />
          <Footer />
        </div>
      )}
    </div>
  );
};
