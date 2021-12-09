import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleIcon from "../../Img/google.png";
import { Footer } from "../Footer/Footer";
import { PropertyHeader } from "../HeaderOpt/PropertyHeader";
import { Specials } from "../Home/Specials";
import { Navbar } from "../Navbar/Navbar";
import firebaseConfig from "./firebase.config";
const app = initializeApp(firebaseConfig);

export const LoginResister = () => {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({});
  const [newUser, setNewUser] = useState({});
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const auth = getAuth();

  // Resister with email Password
  const handleResister = () => {
    let email = formData.email;
    let password = formData.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setNewUser(user);

        // Send user data to data database
        let userData = { ...formData };
        userData["uid"] = user.uid;

        fetch("http://localhost:5000/add-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        })
          .then((res) => {
            console.log("show toast");
          })
          .catch((error) => {
            console.log(error);
          });
        // Sava data in LocalStorage
        localStorage.setItem("uid", user.uid);

        // show toast
        toast.success("Resister Successful !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setEmailError(errorMessage);

        // show toast
        toast.error("Authentication Failed !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  // Login with email Password
  const handleLogin = () => {
    // Login in firebase with email password
    let email = formData.email;
    let password = formData.password;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // Sava data in LocalStorage
        localStorage.setItem("uid", user.uid);

        // show toast
        toast.success("Login Success !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setPasswordError(errorMessage);

        // show toast
        toast.error("Authentication Failed !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  // get data form input field
  const handleBlur = (e) => {
    let newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
    setEmailError("");
    setPasswordError("");
  };

  const toggleLogin = () => {};
  return (
    <div>
      <Navbar />
      <PropertyHeader content={"Login/Resister"} />
      <div className="2xl:max-w-screen-2xl max-w-7xl m-auto py-8">
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
          <p className="font-md text-base mt-4 text-red-600 mb-1">
            {emailError ? emailError : ""}
          </p>

          <p className="font-semibold text-lg mt-6 mb-1">Password</p>
          <input
            className="w-full border p-4 font-thin rounded"
            name="password"
            type="password"
            onBlur={handleBlur}
            placeholder="Enter Your Password"
            required
          />
          <p className="font-md text-base mt-4 text-red-600 mb-1">
            {passwordError ? passwordError : ""}
          </p>
          {toggle ? (
            <button
              onClick={handleResister}
              className="mx-auto md:my-8 my-4 bg-pink-500 font-bold text-white w-36 p-3 flex justify-center items-center"
            >
              Resister
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="mx-auto md:my-8 my-4 bg-pink-500 font-bold text-white w-36 p-3 flex justify-center items-center"
            >
              Login
            </button>
          )}

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
      <div>
        <ToastContainer />
      </div>
      <Specials />
      <Footer />
    </div>
  );
};
