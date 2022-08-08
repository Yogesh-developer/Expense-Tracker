import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isClick, setClickValue] = useState(false);
  const onSubmitHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.getNewExpenseValue(newExpense);
    setClickValue(false);
  };
  const startEditingHandler = () => {
    setClickValue(true);
  };
  const stopEditingHandler = () => {
    setClickValue(false);
  };
  return (
    <div className="new-expense">
      {!isClick && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isClick && (
        <ExpenseForm
          onSubmitValue={onSubmitHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
