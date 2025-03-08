import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const data = {
    server: "http://localhost:3000/api",
    age: 25,
    address: "USA",
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
