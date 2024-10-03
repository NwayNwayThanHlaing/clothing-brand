"use client";
import { useState, useEffect, useContext } from "react";
import { FilterContext } from "../context/filter";

export default function Filter() {
  const [allSizes, setAllSizes] = useState([]);
  const { selectedSizes, setSelectedSizes } = useContext(FilterContext);
  const { minPrice, setMinPrice } = useContext(FilterContext);
  const { maxPrice, setMaxPrice } = useContext(FilterContext);

  useEffect(() => {
    fetch("http://localhost:3333/sizes")
      .then((res) => res.json())
      .then((data) => {
        setAllSizes(data.sizes);
      });
  }, [selectedSizes, minPrice, maxPrice]);

  return (
    <div>
      <p className="mt-5 font-semibold">Size</p>
      <ul className="mb-5">
        {allSizes.map((s) => (
          <li key={s.id} className="flex items-center ml-3">
            <input type="checkbox" name="size" value={s.id} className="px-2" />
            <label className="px-2">{s.name}</label>
          </li>
        ))}
      </ul>
      <hr className="text-black" />
      <p className="font-semibold mt-5 mb-3">Price Range</p>
      <div className="flex justify-evenly">
        <input
          type="number"
          name="minimum"
          min={1}
          placeholder="Min"
          className="w-1/2 px-2 mr-2 rounded-md"
        />
        <input
          type="number"
          name="maximum"
          placeholder="Max"
          className="w-1/2 px-2 rounded-md"
        />
      </div>
      <button
        className="bg-black text-white w-full px-3 py-1 mt-10 rounded-md hover:bg-opacity-80"
        onClick={() => {
          const selected = document.querySelectorAll(
            'input[name="size"]:checked'
          );
          const sizeArray = Array.from(selected).map((i) => i.value);
          setSelectedSizes(sizeArray);
          setMinPrice(document.querySelector('input[name="minimum"]').value);
          setMaxPrice(document.querySelector('input[name="maximum"]').value);
        }}
      >
        Apply Filters
      </button>
    </div>
  );
}
