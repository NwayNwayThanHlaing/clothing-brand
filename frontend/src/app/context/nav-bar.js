"use client";
import { createContext, useState, useEffect } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [collections, setCollections] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3333/collections")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data.collections);
        setSelectedCollection(data.collections[0]);
      });
  }, []);

  return (
    <NavbarContext.Provider
      value={{
        selectedCollection,
        setSelectedCollection,
        selectedCategory,
        setSelectedCategory,
        collections,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
