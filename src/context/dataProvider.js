import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const data = {
    server: "https://server-gallery.onrender.com/api",
    address: "USA",
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
