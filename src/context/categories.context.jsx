import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../Utils/firebase.utils";


export const CategoriesContext = createContext({
    categories: {},
  });
  
  export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState({});

    useEffect( () => {
      const getCategoriesData = async () => {
      const categorieData =await getCategoriesAndDocuments('categories')
      console.log(categorieData);
      setCategories(categorieData);
    };
     getCategoriesData();
  },[])

    const value = { categories };
    return (
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    );
  };