import {
  CreditCardIcon,
  FingerPrintIcon,
  HomeIcon,
  MapIcon,
} from "@heroicons/react/outline";
import React from "react";
import { ChoseCard } from "./ChoseCard";

export const ChoseUs = () => {
  const choseData = [
    {
      title: "Thousand of Trusted",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
      icon: <FingerPrintIcon className="w-20 m-auto color-primary h-20" />,
    },
    {
      title: "World Wide Services",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
      icon: <HomeIcon className="w-20 m-auto color-primary h-20" />,
    },
    {
      title: "Financial Flexibility",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
      icon: <CreditCardIcon className="w-20 m-auto color-primary h-20" />,
    },
    {
      title: "Find from anywhere",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
      icon: <MapIcon className="w-20 m-auto color-primary h-20" />,
    },
  ];
  return (
    <div className="bg-gray-100 py-4 md:py-8 lg:py-20">
      <h1 className="text-3xl mt-4 md:mt-8 font-bold text-center">
        Why Chose Us
      </h1>
      <h1 className="text-base my-2 text-center">
        We are Proud full Server at Every Stapes
      </h1>
      <div className="2xl:max-w-screen-2xl max-w-7xl py-8 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {choseData.map((items) => (
          <ChoseCard items={items} key={items.icon} />
        ))}
      </div>
    </div>
  );
};
