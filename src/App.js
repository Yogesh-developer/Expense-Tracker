import ExpenseItem from "./compnents/Expense/ExpenseItem";
import NewExpense from "./compnents/NewExpense/NewExpense";
import React, { useState } from "react";
const item = [
  { id: "e1", title: "New car", amount: 290, date: new Date(2020, 2, 28) },
  {
    id: "e2",
    title: "Insurance",
    amount: 200,
    date: new Date(2021, 3, 28),
  },
  { id: "e3", title: "Work", amount: 490, date: new Date(2022, 2, 18) },
];

function App() {
  const [data, setNewItem] = useState(item);
  const getNewExpenseValueHandler = (newExpenseValue) => {
    setNewItem((prevItem) => {
      return [newExpenseValue, ...prevItem];
    });
  };
  return (
    <div>
      <NewExpense getNewExpenseValue={getNewExpenseValueHandler} />
      <ExpenseItem data={data} />
    </div>
  );
}

export default App;
