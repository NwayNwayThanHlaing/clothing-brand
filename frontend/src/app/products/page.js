"use client";

import ProductCard from "./components/product-card";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { NavbarContext } from "../context/nav-bar";
import { useContext } from "react";
import Filter from "../components/filter";

export default function ProductPage() {
  const [bool, setBool] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [sorted, setSorted] = useState([]);
  const { searchValue } = useContext(NavbarContext);
  const { selectedCollection } = useContext(NavbarContext);
  const { selectedCategory, setSelectedCategory } = useContext(NavbarContext);

  const collectionPath = selectedCollection
    ? `?collection=${selectedCollection.id}`
    : "";
  const categoryPath = selectedCategory
    ? `&category=${selectedCategory.id}`
    : "";
  const searchPath = searchValue ? `?search=${searchValue}` : "";

  let path = "";
  if (searchPath) {
    path = `${searchPath}`;
  } else {
    path = `${collectionPath}${categoryPath}`;
  }

  useEffect(() => {
    fetch("http://localhost:3333/products" + path)
      .then((res) => res.json())
      .then((data) => {
        setSorted(data.products);
      });
  }, [selectedCollection, selectedCategory, searchValue]);

  // Sorting
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sortBy === "ascending") {
        setSorted([...sorted].sort((a, b) => a.price - b.price));
      } else if (sortBy === "descending") {
        setSorted([...sorted].sort((a, b) => b.price - a.price));
      } else {
        setSorted(sorted);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [sortBy, sorted]);

  return (
    <div className="flex flex-row px-2 pt-2">
      <div className="w-full">
        <div className="py-3 px-5 grid-cols-2 flex justify-between">
          <div>
            {searchValue ? (
              <span className="text-gray-500">
                Search results for:
                <span className="italic"> "{searchValue}"</span>
              </span>
            ) : (
              <div>
                <span className="cursor-pointer hover:underline">
                  {selectedCollection ? (
                    <span onClick={() => setSelectedCategory(null)}>
                      {selectedCollection.name + " "}
                    </span>
                  ) : (
                    "All Products "
                  )}
                </span>
                {selectedCategory ? (
                  <span>
                    &gt; &nbsp;
                    {selectedCategory.name}
                  </span>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>

          <div className="flex flex-row-reverse">
            <button
              onClick={() => setBool(true)}
              className="border-gray-500 border px-2 rounded-md"
            >
              Filter
            </button>

            {bool && (
              <div className="w-1/6 fixed bg-gray-200 bg-opacity-95 right-0 top-20 h-screen z-50">
                <div className="m-2 flex flex-row-reverse">
                  <button onClick={() => setBool(false)}>
                    <FontAwesomeIcon icon={faSquareXmark} cursor={"pointer"} />
                  </button>
                </div>
                <div className=" mx-7">
                  <Filter />
                </div>
              </div>
            )}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="mr-5 rounded-md"
            >
              <option unselectable="on">Sort by</option>
              <option value="default">Recommended</option>
              <option value="ascending">Price Ascending</option>
              <option value="descending">Price Descending</option>
            </select>
          </div>
        </div>
        <div className="py-2 grid grid-cols-5 z-40">
          {sorted.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
