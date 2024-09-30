"use client";

import { NavbarContext } from "../context/nav-bar";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { setSelectedCollection, setSelectedCategory, collections } =
    useContext(NavbarContext);

  const handleCollection = (col) => {
    setSelectedCollection(col);
    setSelectedCategory(null);
  };
  const handleCategory = (cat, col) => {
    setSelectedCategory(cat);
    setSelectedCollection(col);
  };

  return (
    <div className="grid grid-cols-3 items-center fixed w-full text-black py-5 px-6 z-50 bg-white bg-opacity-85">
      <div className="flex space-x-1 justify-start relative">
        {collections?.map((collection) => (
          <div key={collection.id} className="relative inline-block group">
            <Link
              href="/products"
              className="ml-5"
              onClick={() => handleCollection(collection)}
            >
              <span>{collection.name}</span>
            </Link>
            <ul className="absolute left-0 w-48 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
              {collection.categories?.map((c) => {
                return (
                  <Link
                    href="/products"
                    onClick={() => handleCategory(c.category, collection)}
                  >
                    <li
                      key={c.id}
                      className="text-white bg-neutral-700 bg-opacity-85 px-3 py-2 hover:bg-opacity-70"
                    >
                      {c.category.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex-1 flex justify-center flex-shrink-0">
        <Link href="/">
          <p
            className="
              text-4xl
              font-bold
              text-black
              hover:text-opacity-65
              hover:cursor-pointer
              transition-all
              duration-600
              ease-in-out
            "
          >
            ECHO
          </p>
        </Link>
      </div>
      <div className=" space-x-1 justify-end hidden md:flex">
        <Link className="nav-btn" href="/search">
          Search
        </Link>
        <Link className="nav-btn" href="/cart">
          Cart
        </Link>
        <Link className="nav-btn" href="/account">
          Sign In
        </Link>
      </div>
    </div>
  );
}
