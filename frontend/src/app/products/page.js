"use client";

import ProductCard from "./components/product-card";
import Filter from "./components/filter";
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { NavbarContext } from "../context/nav-bar";
import { FilterContext } from "../context/filter";

export default function ProductPage() {
  const [bool, setBool] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [sorted, setSorted] = useState([]);
  const { searchValue, selectedCategory, selectedCollection } =
    useContext(NavbarContext);
  const { setSelectedCollection, setSelectedCategory } =
    useContext(NavbarContext);
  const { selectedSizes, setSelectedSizes, filteredPath } =
    useContext(FilterContext);
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } =
    useContext(FilterContext);

  function clearFilters() {
    setSelectedSizes([]);
    setMinPrice(null);
    setMaxPrice(null);
  }

  useEffect(() => {
    fetch("http://localhost:3333/products" + (filteredPath ? filteredPath : ""))
      .then((res) => res.json())
      .then((data) => {
        setSorted(data.products);
      });
  }, [
    selectedCollection,
    selectedCategory,
    searchValue,
    selectedSizes,
    minPrice,
    maxPrice,
    filteredPath,
  ]);

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
            {(() => {
              // Check if there are any selected sizes, minPrice, or maxPrice
              if (selectedSizes.length || minPrice || maxPrice) {
                return <span className="text-gray-500">Filtered Result:</span>;
              }
              // Check if there is a search value
              else if (searchValue) {
                return (
                  <span className="text-gray-500">
                    Search results for:
                    <span className="italic"> "{searchValue}"</span>
                  </span>
                );
              }
              // Default case for displaying collection and category
              else {
                return (
                  <div>
                    <span className="cursor-pointer hover:underline">
                      {selectedCollection ? (
                        <span
                          onClick={() => {
                            setSelectedCategory(null);
                            clearFilters();
                          }}
                        >
                          {selectedCollection.name + " "}
                        </span>
                      ) : (
                        "All Products "
                      )}
                    </span>
                    {selectedCategory ? (
                      <span>&gt; &nbsp; {selectedCategory.name}</span>
                    ) : (
                      ""
                    )}
                  </div>
                );
              }
            })()}
          </div>

          <div className="flex flex-row-reverse">
            <button
              onClick={() => {
                setBool(true),
                  setSelectedCollection(null),
                  setSelectedCategory(null);
              }}
              className="border-gray-500 border px-2 rounded-md"
            >
              Filter
            </button>

            {bool && (
              <div className="w-1/6 shadow-md shadow-gray-300 fixed bg-gray-50 bg-opacity-95 right-0 top-20 h-screen z-50">
                <div className="m-2 flex flex-row-reverse">
                  <button onClick={() => setBool(false)}>
                    <FontAwesomeIcon icon={faSquareXmark} cursor={"pointer"} />
                  </button>
                </div>
                <div className="mx-3">
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
