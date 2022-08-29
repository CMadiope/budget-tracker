import React from "react";
import { useContext } from "react";
import ExpenseItem from "../components/ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.name} id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
