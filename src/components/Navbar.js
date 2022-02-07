import React from "react";

const Navbar = ({ logoutHandler }) => {
  return (
    <div className="w-full h-14 flex justify-between items-center py-2 px-10 border-b">
      <div className="text-violet-800 font-bold text-lg">Matinogram</div>
      <div
        className="ring-2 h-fit
        font-semibold py-1 px-3 rounded-sm
        cursor-pointer
        ring-red-700 text-red-700
        hover:opacity-70"
        onClick={logoutHandler}
      >
        Logout
      </div>
    </div>
  );
};

export default Navbar;
