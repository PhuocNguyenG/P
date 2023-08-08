import React from "react";
import NavContent from "./nav-top";
import { ModeToggle } from "../theme-toggle";
import { User } from "./user";

const Navbar = () => {
  return (
    <div className="m-3 mt-2 mb-0 rounded-xl shadow-for-all bg-sky">
      <div className="flex h-12 items-center px-4 gap-6">
        <div>Logo here</div>
        <div className="m-auto">
          <NavContent />
        </div>
        <div className=" flex items-center space-x-4">
          <ModeToggle />
          <User/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
