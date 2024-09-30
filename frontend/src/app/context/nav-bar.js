"use client";
import React, { createContext, useState, useEffect } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [selectedCollection, setSelectedCollection] = useState({
    id: 1,
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [collections, setCollections] = useState([]);

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
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
