// import React, { createContext, useContext, useState } from "react";
// const DataContext = createContext();
// export const useData = () => useContext(DataContext);
// export const DataProvider = ({ children }) => {
//   const [userData, setUserData] = useState({
//     name: "",
//     address: "",
//     email: "",
//     phone: ""
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };
//   return (
//     <DataContext.Provider value={{ userData, handleChange }}>
//       {children}
//     </DataContext.Provider>
//   );
// };


// DataContext.js

// DataContext.js



import React, { createContext, useContext, useState, useEffect } from "react";
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : {
      name: "",
      address: "",
      email: "",
      phone: ""
    };
  });  
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <DataContext.Provider value={{ userData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
   }; 
export const useData = () => useContext(DataContext);