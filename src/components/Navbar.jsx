import React from "react";
import img from "../assets/download.png";
import { Link } from "react-router-dom";

const Navbar = ({ darkTheme }) => {
  return (
    <nav
      className={`py-4 px-6 flex justify-between items-center ${
        darkTheme ? "bg-white": "bg-blue-950"
      }`}>
      <div className="flex items-center">
        <img src={img} alt="GitHub Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-white text-lg font-semibold">GitHub Discover</h1>
      </div>
      <div>
        <Link to={"/"} className="text-white font-medium mr-4 hover:text-gray-300">
          Home
        </Link>
        <button className="text-white font-medium hover:text-gray-300">
          About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
