"use client";
import { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  return (
    <FilterContext.Provider
      value={{
        selectedSizes,
        setSelectedSizes,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
