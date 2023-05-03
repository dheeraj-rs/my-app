import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-600 w-screen h-screen">
      <nav className="bg-red-900 flex flex-row text-left  justify-center h-16">
        <ul className="flex flex-row items-center justify-center gap-[100px]">
          <li>home</li>
          <li>Deatiles</li>
          <li>Experience</li>
          <li>contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
