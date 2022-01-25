import Axios from "axios";
import React, { useEffect, useState } from "react";

export const UserProfile = () => {
  const [infoData, setInfoData] = useState([]);
  const [formData, setFormData] = useState({});
  const [updateStatus, setUpdateStatus] = useState(false);
  const [show, setShow] = useState(false);

  const userId = localStorage.getItem("uid");

  useEffect(() => {
    fetch("https://calm-garden-61691.herokuapp.com/userinfo")
      .then((res) => res.json())
      .then((data) => {
        let userData = data.find((user) => user.uid === userId);
        setInfoData(userData);
      });
  }, []);
  const { buyProperty, username } = infoData ? infoData : {};

  const handleChange = (e) => {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
  };

  const handleClick = (e) => {
    e.preventDefault();
    formData &&
      Axios.put(
        `https://calm-garden-61691.herokuapp.com/user/update/${infoData._id}`,
        formData
      )
        .then((data) => {
          setUpdateStatus(true);
          setShow(true);
        })
        .catch((err) => {
          setUpdateStatus(false);
          setShow(true);
        });
  };

  return (
    <form className="p-4 rounded">
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
            name="profession"
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Your Phone</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your Phone "
            name="mobile"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Your Address</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your Address "
            name="address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Your City</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your City "
            name="city"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Zip Code</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your Zip Code "
            name="zip"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">State</p>
          <input
            type="text"
            className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
            placeholder="Enter Your State "
            name="state"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-base mt-2 font-bold py-2">About Yourself</p>
        <textarea
          type="text"
          className="py-3 px-4 w-full rounded border text-lg focus:outline-none"
          placeholder="About"
          name="about"
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button
        onClick={handleClick}
        type="submit"
        className=" my-8 px-8 py-3 rounded font-bold bg-pink-100 text-xl"
      >
        Save Change
      </button>

      {/* Modal */}

      {show && (
        <div
          className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
          id="modal"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
              <div className="w-full flex justify-center text-green-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-check"
                  width={56}
                  height={56}
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={12} r={9} />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </div>
              <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
                {updateStatus ? "Update Successful!" : "Update Failed!"}
              </h1>
              {/* <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">
                  Thank you for your payment. An automated payment receipt will
                  be sent to your email. Check the action below for more
                  details.
                </p> */}
              <div className="flex items-center justify-center w-full">
                <button
                  className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                  onClick={() => setShow(!show)}
                >
                  {updateStatus ? "Okay" : "Back"}
                </button>
              </div>
              <div
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
                onClick={() => setShow(!show)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Close"
                  className="icon icon-tabler icon-tabler-x"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};
