"use client";

import { NavbarContext } from "../context/nav-bar";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [searchBool, setSearchBool] = useState(false);
  const { setSearchValue } = useContext(NavbarContext);
  const { setSelectedCollection, setSelectedCategory, collections } =
    useContext(NavbarContext);

  const handleCollection = (col) => {
    setSelectedCollection(col);
    setSelectedCategory(null);
    setSearchValue(null);
  };
  const handleCategory = (cat, col) => {
    setSelectedCategory(cat);
    setSelectedCollection(col);
    setSearchValue(null);
  };

  return (
    <div className="grid grid-cols-3 items-center fixed w-full text-black py-5 px-8 z-50 bg-white bg-opacity-85">
      <div className="flex space-x-1 justify-start relative">
        <Link
          href="/products"
          onClick={() => {
            setSelectedCollection(null);
            setSelectedCategory(null);
          }}
        >
          All
        </Link>
        {collections?.map((collection) => (
          <div key={collection.id} className="relative inline-block group">
            <Link
              href="/products"
              className="ml-5"
              onClick={() => handleCollection(collection)}
            >
              <span>{collection.name}</span>
            </Link>
            <ul className="absolute left-4 w-48 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
              {collection.categories?.map((c) => {
                return (
                  <Link
                    key={c.id}
                    href="/products"
                    onClick={() => handleCategory(c.category, collection)}
                  >
                    <li className="text-black bg-white bg-opacity-85 px-3 py-2 hover:underline">
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
      <div className="space-x-1 justify-end flex">
        {searchBool ? (
          <div className="flex items-center">
            <input
              name="search"
              type="text"
              placeholder="Search"
              size={14}
              className="border border-gray-300 text-gray-500 text-sm rounded-tl-xl rounded-bl-xl px-2 h-7"
            />
            <Link
              className=" border border-gray-300 bg-gray-100 border-l-0 rounded-tr-xl rounded-br-xl px-2 h-7"
              onClick={() => {
                setSearchBool(!searchBool);
                setSearchValue(
                  document.querySelector("input[name='search']").value
                );
              }}
              href="/products"
            >
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </Link>
          </div>
        ) : (
          <button onClick={() => setSearchBool(!searchBool)}>Search</button>
        )}
        <Link className="nav-btn" href="/cart">
          Cart
        </Link>
        <Link className="nav-btn" href="/login">
          Sign In
        </Link>
      </div>
    </div>
  );
}
