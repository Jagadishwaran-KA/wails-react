import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./services/Navbar";
import Sidebars from "./services/Sidebar";
function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex h-full">
        <div className="space-x-1 space-y-1">
          <Sidebars />
        </div>
        <div className="relative ml-52">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
