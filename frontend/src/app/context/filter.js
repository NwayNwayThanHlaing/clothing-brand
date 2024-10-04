"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { NavbarContext } from "./nav-bar";

export const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [filteredPath, setFilteredPath] = useState("");
  const { searchValue, selectedCategory, selectedCollection } =
    useContext(NavbarContext);

  useEffect(() => {
    const collectionPath = selectedCollection
      ? `?collection=${selectedCollection.id}`
      : "";
    const categoryPath = selectedCategory
      ? `&category=${selectedCategory.id}`
      : "";

    let newPath = "";
    if (searchValue) {
      newPath = `?search=${searchValue}`;
    } else if (selectedSizes.length || minPrice || maxPrice) {
      const filterQuery = `?${selectedSizes
        .map((size) => `size=${size}`)
        .join("&")}${minPrice ? `&minimum=${minPrice}` : ""}${
        maxPrice ? `&maximum=${maxPrice}` : ""
      }`;
      newPath = filterQuery;
    } else {
      newPath = `${collectionPath}${categoryPath}`;
    }

    if (filteredPath !== newPath) {
      setFilteredPath(newPath);
    }
  }, [
    selectedSizes,
    minPrice,
    maxPrice,
    searchValue,
    selectedCategory,
    selectedCollection,
    filteredPath,
  ]);

  return (
    <FilterContext.Provider
      value={{
        selectedSizes,
        setSelectedSizes,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        filteredPath,
        setFilteredPath,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
