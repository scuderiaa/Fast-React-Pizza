import React from "react";

const Header = ({ userName }) => {
  return (
    <>
      <header className="flex items-center justify-between bg-yellow-400 px-4 py-2 w-full h-16 font-roboto text-stone-700">
        <div className="flex items-center">
          <a href="/" className="uppercase tracking-[5px] mx-3">
            Fast React Pizza Co.
          </a>
        </div>
        <input
          type="text"
          placeholder="Search Order #"
          className="border-b focus:outline-none rounded-full px-3 w-1/5 focus:w-1/4 h-9 focus:ring focus:ring-yellow-500 text-sm bg-yellow-100 mx-3 transition-all duration-300"
        />
        {userName && (
          <span className="text-sm font-medium ml-4">
            Welcome, {userName}! 🍕
          </span>
        )}
      </header>
    </>
  );
};

export default Header;
