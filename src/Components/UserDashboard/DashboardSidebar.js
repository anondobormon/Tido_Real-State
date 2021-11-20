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
    pathname == "/user/dashboard"
      ? "dashboard"
      : "" || pathname == "/user/profile"
      ? "profile"
      : "" || pathname == "/user/properties"
      ? "properties"
      : "" || pathname == "/user/add-property"
      ? "add-property"
      : "" || pathname == "/user"
      ? "dashboard"
      : ""
  );

  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [handleSidebar, setHandleSidebar] = useState();
  const bgAndText = "bg-pink-100 text-pink-500";

  const handleBackground = () => {};
  const toggleButton = () => {
    if (toggleSidebar) {
      setHandleSidebar("absolute block");
    } else if (!toggleSidebar) {
      setHandleSidebar("hidden");
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
            background == "dashboard" ? bgAndText : ""
          } p-4 font-bold border-t cursor-pointer flex items-center`}
        >
          <HomeIcon className="w-5 mr-2" />
          <p className="text-base">Dashboard</p>
        </Link>

        <Link
          to="/user/profile"
          onClick={() => handleBackground(setBackground("profile"))}
          className={`w-full ${
            background == "profile" ? bgAndText : ""
          } p-4 font-bold border-t cursor-pointer flex items-center`}
        >
          <UserCircleIcon className="w-5 mr-2" />
          <p className="text-base">My Profile</p>
        </Link>

        <Link
          to="/user/properties"
          onClick={() => handleBackground(setBackground("properties"))}
          className={`w-full ${
            background == "properties" ? bgAndText : ""
          } p-4 font-bold border-t cursor-pointer flex items-center`}
        >
          <TemplateIcon className="w-5 mr-2" />
          <p className="text-base">My Properties</p>
        </Link>

        <Link
          to="/user/add-property"
          onClick={() => handleBackground(setBackground("add-property"))}
          className={`w-full ${
            background == "add-property" ? bgAndText : ""
          } p-4 font-bold border-t cursor-pointer flex items-center`}
        >
          <PencilAltIcon className="w-5 mr-2" />
          <p className="text-base">Add New Properties</p>
        </Link>

        <div
          onClick={() => handleBackground(setBackground("Logout"))}
          className={`w-full ${
            background == "Logout" ? bgAndText : ""
          } p-4 font-bold border-t cursor-pointer flex items-center`}
        >
          <LogoutIcon className="w-5 mr-2" />
          <p className="text-base">Logout</p>
        </div>
      </div>
    </>
  );
};
