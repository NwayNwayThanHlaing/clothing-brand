"use client";
import { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../context/filter";
import { NavbarContext } from "../../context/nav-bar";

export default function Filter() {
  const [allSizes, setAllSizes] = useState([]);
  const { selectedSizes, setSelectedSizes } = useContext(FilterContext);
  const { minPrice, setMinPrice } = useContext(FilterContext);
  const { maxPrice, setMaxPrice } = useContext(FilterContext);
  const { filteredPath, setFilteredPath } = useContext(FilterContext);
  const { setSearchValue, setSelectedCategory, setSelectedCollection } =
    useContext(NavbarContext);

  useEffect(() => {
    fetch("http://localhost:3333/sizes")
      .then((res) => res.json())
      .then((data) => {
        setAllSizes(data.sizes);
      });
  }, [selectedSizes, minPrice, maxPrice]);

  return (
    <div className="text-sm">
      <p className="px-2 font-bold text-base">FILTER</p>
      <hr className="border-gray-300 p-0" />
      <div className="px-2">
        <p className="mt-8 font-semibold">SIZE</p>
        <ul className="mb-6">
          {allSizes.map((s) => (
            <li key={s.id} className="flex items-center ml-3">
              <input type="checkbox" name="size" value={s.id} />
              <label className="px-2">{s.name}</label>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-gray-300 p-0 my-8" />
      <div className="px-2">
        <p className="font-semibold mb-3">PRICE RANGE</p>
        <div className="flex justify-evenly">
          <input
            type="number"
            name="minimum"
            min={1}
            placeholder="Min"
            className="w-1/2 px-4 py-1 mr-2 rounded-md shadow-inner shadow-gray-300"
          />
          <input
            type="number"
            name="maximum"
            placeholder="Max"
            className="w-1/2 px-4 py-1 rounded-md shadow-inner shadow-gray-300"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-neutral-300 mt-10 font-semibold text-sm text-black w-11/12 px-3 py-2 rounded-md hover:shadow-inner hover:shadow-gray-500"
          onClick={() => {
            setSearchValue(null);
            setSelectedCollection(null);
            setSelectedCategory(null);
            const selected = document.querySelectorAll(
              'input[name="size"]:checked'
            );
            const sizeArray = Array.from(selected).map((i) => i.value);
            setSelectedSizes(sizeArray);
            setMinPrice(document.querySelector('input[name="minimum"]').value);
            setMaxPrice(document.querySelector('input[name="maximum"]').value);
          }}
        >
          APPLY FILTER
        </button>
      </div>
    </div>
  );
}
