"use client";
import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [type, setType] = useState(1);

  return (
    <NavbarContext.Provider value={{ type, setType }}>
      {children}
    </NavbarContext.Provider>
  );
};
