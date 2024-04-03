import React, { useState, useContext, useEffect } from "react";
import { FoodItemsContext } from "../App";
import { useNavigate } from 'react-router-dom';
import { AddForm, InputForm } from "./styles/ComponentStyles";
import axios from "axios";

export const FormAddItem = () => {

    let context = useContext(FoodItemsContext);
    //change the location.
    let navigate = useNavigate();

    let [description, setDescription] = useState('');
    let [calories, setCalories] = useState('');
    let [protein, setProtein] = useState('');
    let [fat, setFat] = useState('');
    let [carbs, setCarbs] = useState('');
    let newIndex = context.length == 0 ? 1 : context[context.length - 1].id++;

    const fetchPost = (foodEdit) => {
        axios.post("http://localhost:3005/items", {
            id: foodEdit.id,
            description: foodEdit.description,
            protein: foodEdit.protein,
            fat: foodEdit.fat,
            calories: foodEdit.calories
        });
    }

    let foodEdit = {};
    useEffect(() => {
        foodEdit = {
            id: newIndex,
            description: description,
            protein: protein,
            fat: fat,
            calories: calories,
            carbs: carbs
        }
    }, [description, calories, protein, fat, carbs])

    let handleSubmit = (e) => {
        e.preventDefault();
        fetchPost(foodEdit);
        context = [...context, foodEdit];
        navigate("/list");
    }

    return (
        <AddForm onSubmit={handleSubmit}>
            <InputForm type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Desc" required />
            <InputForm type="number" value={calories} onChange={e => setCalories(e.target.value)} placeholder="Calories" required />
            <InputForm type="number" value={protein} onChange={e => setProtein(e.target.value)} placeholder="Protein" />
            <InputForm type="number" value={fat} onChange={e => setFat(e.target.value)} placeholder="Fat" required />
            <InputForm type="number" value={carbs} onChange={e => setCarbs(e.target.value)} placeholder="Carbs" required />
            <InputForm type="submit" value="Create Item" />
        </AddForm>
    )
};