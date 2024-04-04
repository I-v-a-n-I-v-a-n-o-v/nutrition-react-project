import React, { useEffect, useContext, useState } from "react";
import { FoodItemsContext } from "../App";
import { TableHead, TableList, TableRow, SearchBar } from "./styles/ComponentStyles";

export const TableFood = () => {
    let context = useContext(FoodItemsContext);
    let [items, setItems] = useState(context);
    let [selectedItems, setSelectedItems] = useState([]);
    let [searchItem, setSearchItem] = useState('');

    const handleRowClick = (item) => {
        setSelectedItems(prev => {
            if (prev.find(p => p.id === item.id)) {
                return prev;
            }
            return [...prev, item];
        });
    };

    const calculateTotals = (items) => items.reduce((totals, item) => ({
        calories: totals.calories + Number(item.calories),
        protein: totals.protein + Number(item.protein),
        fat: totals.fat + Number(item.fat),
        carbs: totals.carbs + Number(item.carbs),
    }), { calories: 0, protein: 0, fat: 0, carbs: 0 });

    const totalSelected = calculateTotals(selectedItems);

    useEffect(() => {
        let filteredItems = context.filter(item => item.description.toLowerCase().startsWith(searchItem.toLowerCase()));
        setItems(filteredItems);
    }, [searchItem, context]);

    return (
        <>
            <SearchBar value={searchItem} onChange={e => setSearchItem(e.target.value)} />
            <TableList>
                <thead>
                    <tr>
                        <TableHead>Description</TableHead>
                        <TableHead>Kcal</TableHead>
                        <TableHead>Protein</TableHead>
                        <TableHead>Fat</TableHead>
                        <TableHead>Carbs</TableHead>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} onClick={() => handleRowClick(item)}>
                            <TableRow>{item.description}</TableRow>
                            <TableRow>{item.calories}</TableRow>
                            <TableRow>{item.protein}</TableRow>
                            <TableRow>{item.fat}</TableRow>
                            <TableRow>{item.carbs}</TableRow>
                        </tr>
                    ))}
                </tbody>
            </TableList>

            {/* Selected Foods Table */}
            <TableList >
                <thead>
                    <tr>
                        <TableHead>Selected Foods</TableHead>
                        <TableHead>Kcal</TableHead>
                        <TableHead>Protein</TableHead>
                        <TableHead>Fat</TableHead>
                        <TableHead>Carbs</TableHead>
                    </tr>
                </thead>
                <tbody>
                    {selectedItems.map((item) => (
                        <tr key={item.id}>
                            <TableRow>{item.description}</TableRow>
                            <TableRow>{item.calories}</TableRow>
                            <TableRow>{item.protein}</TableRow>
                            <TableRow>{item.fat}</TableRow>
                            <TableRow>{item.carbs}</TableRow>
                        </tr>
                    ))}
                </tbody>
                {/* Totals for the selected foods */}
                <tfoot>
                    <tr>
                        <TableRow>Total</TableRow>
                        <TableRow>{totalSelected.calories}</TableRow>
                        <TableRow>{totalSelected.protein}</TableRow>
                        <TableRow>{totalSelected.fat}</TableRow>
                        <TableRow>{totalSelected.carbs}</TableRow>
                    </tr>
                </tfoot>
            </TableList>
        </>
    );
};
