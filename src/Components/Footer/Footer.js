import {
  BadgeCheckIcon,
  CheckIcon,
  HomeIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import TestimonialModal from "../Modals/TestimonialModal";

export const Footer = () => {
  const [reviewPopup, setReviewPopup] = useState(true);

  const handleReview = () => {
    setReviewPopup(!reviewPopup);
  };

  return (
    <div className="text-white bg-black  md:pt-16">
      <div className="2xl:max-w-screen-2xl max-w-7xl py-8 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <HomeIcon className="w-20 h-20 " />
          {/* <App /> */}
          <div className="md:flex my-4 md:my-0">
            <h1 className="text-2xl font-bold mx-4 py-2">Subscribe Us</h1>

            <div className="mx-4">
              <input
                type="text"
                className=" py-2 px-4 rounded-tl-md rounded-bl-md  w-72"
                placeholder="Enter Your Email"
              />
              <button className="bg-pink-500 font-bold text-white rounded-tr-md rounded-br-md py-2 px-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="grid mx-4 md:mx-0 grid-cols-1 md:grid-cols-6 gap-4  rounded">
          <div className=" md:col-span-3">
            <p className="text-white font-bold text-2xl pb-1 mb-4 w-40 underline-button">
              About Us
            </p>
            <p className="text-white font-thin py-4 text-base ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised
            </p>
            <button
              onClick={handleReview}
              className="bg-pink-500 font-bold text-white rounded-tr-md rounded-br-md py-2 px-4"
            >
              Review
            </button>
          </div>
          <div className="">
            <p className="text-white font-bold pb-1 mb-4 text-2xl w-44 underline-button">
              Contact Us
            </p>
            <p className="text-white hover:text-pink-700  font-semibold mt-2 flex items-center text-base">
              <LocationMarkerIcon className="w-5 h-5 mr-2 " /> Address
            </p>
            <p className="text-white hover:text-pink-700  font-semibold mt-2 flex items-center text-base">
              <MailIcon className="w-5 h-5 mr-2 " /> Email
            </p>
            <p className="text-white hover:text-pink-700  font-semibold mt-2 flex items-center text-base">
              <PhoneIcon className="w-5 h-5 mr-2 " /> Phone
            </p>
            <p className="text-white hover:text-pink-700  font-semibold mt-2 flex items-center text-base">
              <PhoneIcon className="w-5 h-5 mr-2 " /> Phone
            </p>
          </div>

          <div className="">
            <p className="text-white font-bold pb-1 mb-4 text-2xl w-36 underline-button">
              Services
            </p>
            <p className="text-white hover:text-pink-700  font-semibold mt-2 flex items-center text-base">
              <HomeIcon className="w-5 h-5 mr-2 " /> Apartments
            </p>
            <p className="text-white hover:text-pink-700  font-semibold mt-2 flex items-center text-base">
              <BadgeCheckIcon className="w-5 h-5 mr-2 " /> Houses
            </p>
            <p className="text-white hover:text-pink-700  font-semibold mt-2 flex items-center text-base">
              <CheckIcon className="w-5 h-5 mr-2 " /> Office{" "}
            </p>
            <p className="text-white hover:text-pink-700  font-semibold mt-2 flex items-center text-base">
              <LocationMarkerIcon className="w-5 h-5 mr-2 " /> Retail
            </p>
            <p className="text-white hover:text-pink-700  font-semibold mt-2 flex items-center text-base">
              <LocationMarkerIcon className="w-5 h-5 mr-2 " /> Village
            </p>
          </div>

          <div className="">
            <p className="text-white font-bold pb-1 mb-4 text-xl underline-button">
              Download Mobile App
            </p>

            <div className="border mx-8 md:mx-0 bg-gray-100 py-2 cursor-pointer rounded flex items-center justify-center text-black">
              <img
                src="https://i.ibb.co/N6zhx4B/2553044-logo-market-marketplace-play-playstore-icon.png"
                alt=""
                className="w-8 h-8"
              />
              <span className="text-black mx-2 font-semibold">Play Store</span>
            </div>
            <div className="border mx-8 md:mx-0 my-2 bg-gray-100 py-2 cursor-pointer rounded flex items-center justify-center text-black">
              <img
                src="https://i.ibb.co/BcmvX61/4202029-apple-logo-social-social-media-icon.png"
                alt=""
                className="w-8 h-8"
              />
              <span className="text-black mx-2 font-semibold ">
                Apple Store
              </span>
            </div>
          </div>
        </div>
        <p className="text-white font-thin-text-base flex items-center justify-center mt-5 md:mt-10">
          <img
            src="https://i.ibb.co/mGC1fVg/3669366-copyright-ic-icon-1.png"
            className="w-4 h-4"
            alt=""
          />
          DecodeSoft 2022 . All rights reserved.
        </p>
      </div>
      <div>
        <TestimonialModal popups={reviewPopup} />
      </div>
    </div>
  );
};
