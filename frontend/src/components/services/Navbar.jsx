import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="" href="#" className="text-white text-xl font-bold">
            Nethunters
          </Link>
          <div className="space-x-4">
            <Link to="/" href="#" className="text-white">
              Home
            </Link>
            <Link to="upload" href="#" className="text-white">
              Upload
            </Link>
            <Link to="services" href="#" className="text-white">
              Services
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
