import {
  HomeIcon,
  LogoutIcon,
  MenuIcon,
  PencilAltIcon,
  TemplateIcon,
  UserCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const DashboardSidebar = () => {
  const { pathname } = useLocation();
  const [background, setBackground] = useState(
    pathname === "/user/dashboard"
      ? "dashboard"
      : "" || pathname === "/user/profile"
      ? "profile"
      : "" || pathname === "/user/properties"
      ? "properties"
      : "" || pathname === "/user/add-property"
      ? "add-property"
      : "" || pathname === "/user"
      ? "dashboard"
      : ""
  );

  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [handleSidebar, setHandleSidebar] = useState();
  const [show, setShow] = useState(false);
  const bgAndText = "bg-pink-100 text-pink-500";

  const handleBackground = () => {};
  const toggleButton = () => {
    if (toggleSidebar) {
      setHandleSidebar("absolute block");
    } else if (!toggleSidebar) {
      setHandleSidebar("hidden");
    }
  };

  const handleLogout = () => {
    const userId = localStorage.getItem("uid");
    console.log(userId);
    if (userId) {
      localStorage.removeItem("uid");
      window.location.reload();
    }
  };
  return (
    <>
      <div className="block w-14 flex justify-center items-center mx-2 h-12 lg:hidden border cursor-pointer">
        <MenuIcon
          onClick={() => toggleButton(setToggleSidebar(false))}
          className={`w-8 cursor-pointer ${toggleSidebar ? "block" : "hidden"}`}
        />
        <XCircleIcon
          onClick={() => toggleButton(setToggleSidebar(true))}
          className={`w-8 cursor-pointer ${
            !toggleSidebar ? "block" : "hidden"
          }`}
        />
      </div>
      <div
        className={`${
          handleSidebar ? handleSidebar : "hidden"
        } lg:block bg-white w-full md:w-96 pt-8 border`}
      >
        <XCircleIcon
          onClick={() => toggleButton(setToggleSidebar(true))}
          className={`w-8 mx-2 cursor-pointer ${
            !toggleSidebar ? "block" : "hidden"
          }`}
        />
        <div className="m-auto w-36 mt-8 h-36 border rounded-full overflow-hidden flex-justify-center items-center">
          <img
            src="https://i.ibb.co/qNrP5rw/pexels-andrea-piacquadio-842567.jpg"
            alt=""
          />
        </div>
        <p className="font-bold mt-4 text-center text-2xl">Jason Thomsom</p>
        <p className="font-thin mb-4 text-lg text-center">Canada USA</p>

        <Link
          to="/user/dashboard"
          onClick={() => handleBackground(setBackground("dashboard"))}
          className={`w-full ${
            background === "dashboard" ? bgAndText : ""
          } p-4 font-bold border-t cursor-pointer flex items-center`}
        >
          <HomeIcon className="w-5 mr-2" />
          <p className="text-base">Dashboard</p>
        </Link>

        <Link
          to="/user/profile"
          onClick={() => handleBackground(setBackground("profile"))}
          className={`w-full ${
            background === "profile" ? bgAndText : ""
          } p-4 font-bold border-t cursor-pointer flex items-center`}
        >
          <UserCircleIcon className="w-5 mr-2" />
          <p className="text-base">My Profile</p>
        </Link>

        <Link
          to="/user/properties"
          onClick={() => handleBackground(setBackground("properties"))}
          className={`w-full ${
            background === "properties" ? bgAndText : ""
          } p-4 font-bold border-t cursor-pointer flex items-center`}
        >
          <TemplateIcon className="w-5 mr-2" />
          <p className="text-base">My Properties</p>
        </Link>

        <Link
          to="/user/add-property"
          onClick={() => handleBackground(setBackground("add-property"))}
          className={`w-full ${
            background === "add-property" ? bgAndText : ""
          } p-4 font-bold border-t cursor-pointer flex items-center`}
        >
          <PencilAltIcon className="w-5 mr-2" />
          <p className="text-base">Add New Properties</p>
        </Link>

        <div
          onClick={
            (() => handleBackground(setBackground("Logout")),
            () => setShow(!show))
          }
          className={`w-full ${
            background === "Logout" ? bgAndText : ""
          } p-4 font-bold border-t cursor-pointer flex items-center`}
        >
          <LogoutIcon className="w-5 mr-2" />
          <p onClick={() => setShow(!show)} className="text-base">
            Logout
          </p>
        </div>

        {/* Modal */}
        <div>
          <div>
            {show && (
              <div
                className="py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
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
                      Logout Successful !
                    </h1>
                    <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">
                      If you want to login again, please enter the login button!
                    </p>
                    <div className="flex items-center justify-center w-full">
                      <button
                        onClick={() => setShow(!show)}
                        className="focus:outline-none transition duration-150 ease-in-out hover:bg-pink-600 bg-pink-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                        onClick={handleLogout}
                      >
                        Logout
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
          </div>
        </div>
      </div>
    </>
  );
};
