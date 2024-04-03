import React, { useEffect, useState } from "react";
import { NavigationBar } from './components/NavigationBar';
import { Routes, Route } from "react-router-dom";
import { FormAddItem } from "./components/FormAddItem";
import { TableFood } from "./components/TableFood";
import { useFetch } from "./hooks/useFetch";

export const FoodItemsContext = React.createContext(null);

export const App = () => {
  const { data } = useFetch("http://localhost:3005/items");
  const [items, setItems] = useState(data);
  useEffect(() => {
    setItems(data);
  }, [data]);


  return (
    <FoodItemsContext.Provider value={items}>
      <Routes>
        <Route path='' element={<NavigationBar />}>
          <Route path="form" element={<FormAddItem />} />
          <Route path="list" element={<TableFood />} />
        </Route>
      </Routes>
    </FoodItemsContext.Provider>
  );
}