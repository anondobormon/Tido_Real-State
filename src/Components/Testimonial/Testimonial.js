import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonial = () => {
  return (
    <div className="2xl:max-w-screen-2xl max-w-7xl py-8 m-auto">
      <div className="py-8 mx-auto">
        <h1 className="text-3xl text-center font-bold">Testimonials</h1>
        <p className="text-sm text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <button className="px-4 py-2 bg-pink-500 w-36 text-white mx-auto flex font-bold items-center my-2 lg:my-5 hover-letter-space">
          See All <ArrowRightIcon className="mx-2 w-5 h-5" />
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-8 gap-4">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};
