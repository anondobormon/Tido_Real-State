import React from "react";
import { Header } from "./Header";
import { Properties } from "./Properties";
import { PropertyForm } from "./PropertyForm";

export const Home = () => {
  return (
    <div>
      <Header />
      <Properties />
      <PropertyForm />
    </div>
  );
};
