import React from "react";

// importing icons
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold"> It All starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Delhi NCR <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8 ">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}
function NavMd() {
  return (
    <>
      <div className="flex items-center w-1/2 gap-3">
        <div className="w-10 h-10">
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus: outline-none"
          />
        </div>
      </div>
    </>
  );
}
function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <Link to="/">
              <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
                className="w-full h-full"
              />
            </Link>
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus: outline-none"
              placeholder="Search from movies , events, plays, Sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Delhi NCR <BiChevronDown />
          </span>
          <Link
            to="/plays"
            className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
          >
            Events
          </Link>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

function NavMenu() {
  return (
    <div className="bg-darkBackground-800 w-full p-0 ">
      <div className=" w-4/5 bg-darkBackground-750 mx-auto">
        <div className=" flex justify-center h-full">
          <div className="flex items-center gap-4 text-sm text-gray-300 w-3/4 h-10">
            <Link to="/plays">Movie</Link>
            <Link to="/plays">Stream</Link>
            <Link to="/plays">Events</Link>
            <Link to="/plays">Plays</Link>
            <Link to="/plays">Sports</Link>
            <Link to="/plays">Activities</Link>
            <Link to="/plays">Buzz</Link>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-300  ">
            <Link to="/plays">ListYourShow</Link>
            <Link to="/plays">Corporates</Link>
            <Link to="/plays">Offers</Link>
            <Link to="/plays">Gift Cards</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component
const Navbar = () => {
  return (
    <>
      <nav className="bg-darkBackground-700 px-4 py-3">
        {/* Mobile screen Navbar  */}
        <div className="md:hidden">
          <NavSm />
        </div>

        {/* Medium screen Navbar  */}
        <div className="hidden lg:hidden md:flex  ">
          <NavMd />
        </div>

        {/* Large Screen Navbar */}
        <div className="hidden md:hidden lg:flex ">
          <NavLg />
        </div>
      </nav>
      <NavMenu />
    </>
  );
};

export default Navbar;
