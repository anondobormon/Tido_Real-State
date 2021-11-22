import React, { useEffect, useState } from "react";

export const UserProfile = () => {
  const [infoData, setInfoData] = useState([]);
  const userId = localStorage.getItem("uid");
  console.log(userId);

  useEffect(() => {
    fetch("https://calm-garden-61691.herokuapp.com/userinfo")
      .then((res) => res.json())
      .then((data) => {
        let userData = data.find((user) => user.uid === userId);
        setInfoData(userData);
      });
  }, []);
  const { buyProperty, username } = infoData ? infoData : {};

  return (
    <div className="p-4 rounded">
      <h1 className="text-3xl font-bold">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <p className="text-base font-bold py-2">Your Name</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your Name "
            value={infoData ? infoData.username : ""}
            name="name"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Your Email</p>
          <input
            type="email"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your Email "
            value={infoData ? infoData.email : ""}
            name="email"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Your Profession</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your Profession "
            value="Web Developer"
            name="profession"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Your Phone</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your Phone "
            value="12345678910"
            name="phone"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Your Address</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your Address "
            value="552, Avenue, Canada"
            name="address"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Your City</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your City "
            value="Losangeles"
            name="city"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Zip Code</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your Zip Code "
            value="5512"
            name="zipcode"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">State</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your State "
            value="Canada"
            name="state"
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-base mt-2 font-bold py-2">About Yourself</p>
        <textarea
          type="text"
          className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
          placeholder="About"
          value="Canada"
          name="about"
        ></textarea>
      </div>
      <button className=" my-8 px-8 py-3 rounded font-bold bg-pink-100 text-xl">
        Save Change
      </button>
    </div>
  );
};
