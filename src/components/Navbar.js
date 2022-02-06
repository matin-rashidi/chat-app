import React from "react";

const Navbar = ({ logoutHandler }) => {
  return (
    <div className="w-full h-14 bg-violet-50 flex justify-between items-center py-2 px-10 border-b">
      <div className="text-violet-800 font-bold text-lg">Matinogram</div>
      <div
        className="bg-violet-100 ring-2 ring-violet-300 h-fit
        text-violet-800 font-semibold py-1 px-3 rounded-md
        cursor-pointer hover:bg-violet-200 transition-all"
        onClick={logoutHandler}
      >
        Logout
      </div>
    </div>
  );
};

export default Navbar;
