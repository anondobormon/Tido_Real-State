import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { TeamCard } from "./TeamCard";

export const Team = () => {
  const team = [
    {
      id: 1,
      image: "https://i.ibb.co/dMhWhz1/pexels-teddy-joseph-2955375.jpg",
      name: "TM Jonson",
      designation: "CEO of NetronSot",
    },
    {
      id: 3,
      image: "https://i.ibb.co/qNrP5rw/pexels-andrea-piacquadio-842567.jpg",
      name: "AB Json",
      designation: "CFO of NetronSot",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co/SPmPJ6Z/behrouz-sasani-HKr-KHg-Xwavk-unsplash.jpg",
      name: "SB Smith",
      designation: "CE of NetronSot",
    },
  ];
  return (
    <div className="bg-gray-200 py-8">
      <h1 className="text-3xl text-center font-bold">Meet Our Team</h1>
      <p className="text-sm text-center">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <button className="px-4 py-2 bg-pink-500 text-white w-36 mx-auto flex font-bold items-center my-2 lg:my-5 hover-letter-space">
        See All <ArrowRightIcon className="mx-2 w-5 h-5" />
      </button>
      <div className="2xl:max-w-screen-2xl max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 gap-4">
        {team.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            designation={team.designation}
            image={team.image}
          />
        ))}
      </div>
    </div>
  );
};
