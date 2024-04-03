import React, { useEffect, useContext, useState } from "react";
import { FoodItemsContext } from "../App";
import { TableHead, TableList, TableRow, SearchBar } from "./styles/ComponentStyles";

export const TableFood = () => {
    let context = useContext(FoodItemsContext);
    let [items, setItems] = useState(context);
    let [searchItem, setSearchItem] = useState('');
    let [totalCalories, setTotalCalories] = useState(0);
    let [totalProtein, setTotalProtein] = useState(0);
    let [totalFat, setTotalFat] = useState(0);
    let [totalCarbs, setTotalCarbs] = useState(0);

    useEffect(() => {
        setItems(items.filter(item => item.description.toLowerCase().startsWith(searchItem)));
        if (searchItem === '') {
            setItems([...context]);
        }
        setTotalCalories(items.reduce((prev, cur) => prev + +(cur.calories), 0));
        setTotalProtein(items.reduce((prev, cur) => prev + +(cur.protein), 0));
        setTotalFat(items.reduce((prev, cur) => prev + +(cur.fat), 0));
        setTotalCarbs(items.reduce((prev, cur) => prev + +(cur.carbs), 0));
    }, [searchItem, items, context]);

    return (
        <>
            <SearchBar value={searchItem} onChange={e => setSearchItem(e.target.value)} />
            <TableList>
                <thead>
                    <tr>
                        <TableHead>Descritpion</TableHead>
                        <TableHead>Kcal</TableHead>
                        <TableHead>Protein</TableHead>
                        <TableHead>Fat</TableHead>
                        <TableHead>Carbs</TableHead>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr key={item.id}>
                                <TableRow>{item.description}</TableRow>
                                <TableRow>{item.calories}</TableRow>
                                <TableRow>{item.protein}</TableRow>
                                <TableRow>{item.fat}</TableRow>
                                <TableRow>{item.carbs}</TableRow>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableRow>Total</TableRow>
                        <TableRow>{totalCalories}</TableRow>
                        <TableRow>{totalProtein}</TableRow>
                        <TableRow>{totalFat}</TableRow>
                        <TableRow>{totalCarbs}</TableRow>
                    </tr>
                </tfoot>
            </TableList>
        </>
    )
};