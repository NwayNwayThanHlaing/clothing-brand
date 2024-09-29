"use client";

import { NavbarContext } from "../context/nav-bar";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { type, setType } = useContext(NavbarContext);
  const { subType, setSubType } = useContext(NavbarContext);
  const [collections, setCollections] = useState([]);

  const handleType = (value) => {
    setType(value);
    setSubType(null);
  };
  const handleSubType = (value, value1) => {
    setSubType(value);
    setType(value1);
  };

  useEffect(() => {
    fetch("http://localhost:3333/collections")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data.collections);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 items-center fixed w-full text-black py-5 px-6 z-50 bg-white bg-opacity-85">
      <div className="flex space-x-1 justify-start relative">
        {collections?.map((collection) => (
          <div className="relative inline-block group">
            <Link
              href="/products"
              className="ml-5"
              onClick={() => handleType(collection.id)}
            >
              <span>{collection.name}</span>
            </Link>
            <ul className="absolute left-0 w-48 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
              {collection.categories?.map((c) => {
                return (
                  <li
                    key={c.id}
                    className="text-gray-700 hover:bg-gray-100 px-3 py-2"
                  >
                    <Link
                      href="/products"
                      onClick={() => handleSubType(c.categoryId, collection.id)}
                    >
                      {c.category.name}
                    </Link>
                  </li>
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
              hover:text-gray-600
              transition-all
              duration-300
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
