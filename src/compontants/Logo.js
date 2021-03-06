import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <>
      <NavLink to="/" className="uppercase pr-6 text-gray-800" activeClassName="font-medium">
        <div className="bg-yellow-500 rounded p-3 inline-block font-black">
          <span>JS.</span>
        </div>
      </NavLink>
    </>
  );
}
export default Logo;
