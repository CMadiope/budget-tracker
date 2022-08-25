import React from "react";
import ExpenseItem from "../components/ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 12, name: "shopping", cost: 500 },
    { id: 13, name: "holiday", cost: 10000 },
    { id: 12, name: "car service", cost: 3000 },
  ];

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
