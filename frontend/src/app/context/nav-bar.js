"use client";
import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [type, setType] = useState(1);
  const [subType, setSubType] = useState(null);

  return (
    <NavbarContext.Provider value={{ type, setType, subType, setSubType }}>
      {children}
    </NavbarContext.Provider>
  );
};
