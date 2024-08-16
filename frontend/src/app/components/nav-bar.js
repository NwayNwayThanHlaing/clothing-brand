import React from "react";
import "../globals.css";

export default function Navbar() {
  return (
    <div>
      <div className="grid grid-cols-3 items-center w-full border-2 text-black py-3 px-6 ">
        <div className="flex space-x-1 justify-start">
          <div class="relative inline-block group">
            <a className="nav-btn cursor-pointer" href="/womens">
              Womens
            </a>
            <ul className="absolute left-0 w-48 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-100">Item 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Item 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Item 3</li>
            </ul>
          </div>
          <div className="relative inline-block group">
            <a className="nav-btn cursor-pointer" href="/womens">
              Womens
            </a>
            <ul className="absolute left-0 w-48 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
              <li className="px-4 py-2 hover:bg-gray:100">Item 1</li>
              <li className="px-4 py-2 hover:bg-gray:100">Item 2</li>
              <li className="px-4 py-2 hover:bg-gray:100">Item 3</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center flex-shrink-0">
          <a href="/">
            <p
              className="
              text-4xl
              font-bold
              text-black
              hover:text-gray-600
              transition-all
              duration-300
              ease-in-out
            "
            >
              ECHO
            </p>
          </a>
        </div>
        <div className=" space-x-1 justify-end hidden md:flex">
          <a className="nav-btn" href="/cart">
            Cart
          </a>
          <a className="nav-btn" href="/search">
            Search
          </a>
          <a className="nav-btn" href="/account">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
