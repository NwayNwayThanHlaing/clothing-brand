"use client";

import ProductCard from "./components/product-card";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { NavbarContext } from "../context/nav-bar";
import Link from "next/link";
import { useContext } from "react";

export default function ProductPage() {
  const [bool, setBool] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [sorted, setSorted] = useState([]);
  const { type } = useContext(NavbarContext);
  const { subType } = useContext(NavbarContext);
  const selectedCollection = type ? `?collection=${type}` : "";
  const selectedCategory = subType ? `&category=${subType}` : "";

  useEffect(() => {
    fetch(
      "http://localhost:3333/products" + selectedCollection + selectedCategory
    )
      .then((res) => res.json())
      .then((data) => {
        setSorted(data.products);
      });
  }, [type, subType]);

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
        <div className="py-3 px-5 grid-cols-2">
          <Link href="/products" className="hover:underline">
            <span>Menswear</span>
          </Link>

          <div className="flex flex-row-reverse">
            <button
              onClick={() => setBool(true)}
              className="border-gray-500 border px-2 rounded-md"
            >
              Filter
            </button>

            {bool && (
              <div className="w-1/6 fixed bg-gray-200 bg-opacity-95 right-0 top-20 flex flex-row-reverse h-screen">
                <div className="m-2">
                  <button onClick={() => setBool(false)}>
                    <FontAwesomeIcon icon={faSquareXmark} cursor={"pointer"} />
                  </button>
                </div>
              </div>
            )}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="mr-5 rounded-md border border-gray-500"
            >
              <option unselectable="on">Sort by</option>
              <option value="default">Recommended</option>
              <option value="ascending">Price Ascending</option>
              <option value="descending">Price Descending</option>
            </select>
          </div>
        </div>
        <div className="py-2 grid grid-cols-5">
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
