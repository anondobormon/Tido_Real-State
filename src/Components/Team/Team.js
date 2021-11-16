import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { TeamCard } from "./TeamCard";

export const Team = () => {
  return (
    <div className="bg-gray-200 py-8">
      <h1 className="text-3xl text-center font-bold">Meet Our Team</h1>
      <p className="text-sm text-center">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <button className="px-4 py-2 bg-pink-500 text-white w-36 mx-auto flex font-bold items-center my-2 lg:my-5 hover-letter-space">
        See All <ArrowRightIcon className="mx-2 w-5 h-5" />
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8 py-8 gap-4">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};
