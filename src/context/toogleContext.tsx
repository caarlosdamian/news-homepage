import { createContext } from "react";

export const toggle = {
  active: false,
};

export const ToogleContext = createContext(toggle.active);
