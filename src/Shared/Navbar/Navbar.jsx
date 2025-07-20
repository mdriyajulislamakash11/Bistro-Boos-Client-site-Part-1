import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "hover:text-yellow-300"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "hover:text-yellow-300"
          }
        >
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "hover:text-yellow-300"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold underline"
              : "hover:text-yellow-300"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 z-50 max-w-screen-2xl bg-black bg-opacity-40 text-white px-5 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className=" normal-case text-xl font-bold">
          <div className="">
            <h2>BISTRO BOOS</h2>{" "}
            <h2>
              <span className="text-sm">R E S T A U R A N T</span>{" "}
            </h2>
          </div>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
          Reserve Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
