import React, { useState } from "react";
import GoogleIcon from "../../Img/google.png";
import { Footer } from "../Footer/Footer";
import { PropertyHeader } from "../HeaderOpt/PropertyHeader";
import { Specials } from "../Home/Specials";

export const LoginResister = () => {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({});

  const handleBlur = (e) => {
    let newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  console.log(formData);

  const toggleLogin = () => {};
  return (
    <div>
      <PropertyHeader content={"Login/Resister"} />
      <div className="max-w-screen-2xl m-auto py-8">
        <p className="text-3xl font-bold p-2 md:p-0">Login Here</p>
        <div className="w-24 ml-2 md:m-0 h-1 my-2 bg-primary"></div>
        <div className="md:w-2/4 w-full p-2 md:px-20 m-auto ">
          <div className="w-full border p-3 font-semibold bg-gray-100 my-4 rounded flex items-center justify-center flex items-center justify-center">
            <img src={GoogleIcon} className="w-9 mr-2" />
            Google Sign In
          </div>
          {toggle ? (
            <div>
              <p className="font-semibold text-lg mt-6 mb-1">Username</p>
              <input
                className="w-full border p-4 font-thin rounded"
                type="text"
                onBlur={handleBlur}
                name="username"
                placeholder="Enter Your Name"
                required
              />
            </div>
          ) : (
            ""
          )}
          <p className="font-semibold text-lg mt-6 mb-1">Email</p>
          <input
            className="w-full border p-4 font-thin rounded"
            type="email"
            onBlur={handleBlur}
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <p className="font-semibold text-lg mt-6 mb-1">Password</p>
          <input
            className="w-full border p-4 font-thin rounded"
            name="password"
            type="password"
            onBlur={handleBlur}
            placeholder="Enter Your Password"
            required
          />
          <button
            onClick={handleSubmit}
            className="mx-auto md:my-8 my-4 bg-pink-500 font-bold text-white w-36 p-3 flex justify-center items-center"
          >
            Sign In
          </button>

          {!toggle ? (
            <p className="font-semibold text-lg">
              Are you a new User !
              <span
                onClick={() => toggleLogin(setToggle(true))}
                className="font-bold hover:text-blue-600 cursor-pointer"
              >
                Sign Up Here!
              </span>
            </p>
          ) : (
            <p className="font-semibold text-lg">
              Already Have an Account !
              <span
                onClick={() => toggleLogin(setToggle(false))}
                className="font-bold hover:text-blue-600 cursor-pointer"
              >
                Sign In Here!
              </span>
            </p>
          )}
        </div>
      </div>
      <Specials />
      <Footer />
    </div>
  );
};
