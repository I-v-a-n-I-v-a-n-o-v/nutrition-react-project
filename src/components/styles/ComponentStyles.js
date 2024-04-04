import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
    width:100%;
    background-color:#f0f0f0;
    display:flex;
    justify-content:center;
`;

export const NavigationButton = styled.div`
    width:5rem;
    height:3rem;
    background-color:#f3f3f3;
    text-align:center;
`;

export const NavigationLink = styled(Link)`
    text-decoration:none;
    color:#000;
`;

export const AddForm = styled.form`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:3rem;
    gap:1rem;
`;

export const InputForm = styled.input`
    border-radius:25px;
    border-color:blue;
    border: 1.5px solid;
`;

export const TableList = styled.table`
  margin-bottom: 5rem;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableRow = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;


export const SearchBar = styled.input`
border: 1px solid red;
margin:10px;
width:10rem;
height:2rem;
border-radius:25px;
`;
