import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = {
  categories: [
    {
      id: "home",
      name: "Home",
      href: "",
    },
    {
      id: "dashboard",
      name: "Dashboard",
      href: "user/dashboard",
    },
    {
      id: "property",
      name: "Property",
      href: "properties",
    },
  ],
  pages: [
    { name: "About Us", href: "about" },
    { name: "Contact Us", href: "contact" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(1);

  const updateScroll = () => {
    setHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <div className="bg-black ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <NavLink
                    className={({ isActive }) => {
                      return "bg-red-600";
                    }}
                    to="/"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Home
                  </NavLink>
                </div>
                <div className="flow-root">
                  <NavLink
                    className={({ isActive }) => {
                      return "bg-red-600";
                    }}
                    to="/about"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    About
                  </NavLink>
                </div>
                <div className="flow-root">
                  <NavLink
                    className={({ isActive }) => {
                      return "bg-red-600";
                    }}
                    to="/contact"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Contact Us
                  </NavLink>
                </div>
                <div className="flow-root">
                  <NavLink
                    className={({ isActive }) => {
                      return "bg-red-600";
                    }}
                    to="/properties"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Properties
                  </NavLink>
                </div>
                <div className="flow-root">
                  <NavLink
                    className={({ isActive }) => {
                      return "bg-red-600";
                    }}
                    to="/login"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Sign In
                  </NavLink>
                </div>
                <div className="flow-root">
                  <NavLink
                    className={({ isActive }) => {
                      return "bg-red-600";
                    }}
                    to="/login"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Create account
                  </NavLink>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className={height > 1 ? "sticky-nav bg-pink-600" : "top-navbar"}>
        <p className="bg-pink-600 h-12 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Get 50% OFF
        </p>

        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-white lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-white ",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                              )}
                            >
                              <NavLink to={`/${category.href}`}>
                                {category.name}
                              </NavLink>
                            </Popover.Button>
                          </div>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <NavLink
                      className={({ isActive }) => {
                        return "bg-red-600";
                      }}
                      to={"/" + page.href}
                      className="flex items-center text-sm font-medium text-white "
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <NavLink
                    to="/login"
                    className="text-sm font-medium text-white"
                  >
                    Sign in
                  </NavLink>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <NavLink
                    to="/login"
                    className="text-sm font-medium text-white"
                  >
                    Create account
                  </NavLink>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-white hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-white group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
