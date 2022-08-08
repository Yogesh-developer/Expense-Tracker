import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: title,
      date: new Date(date),
      amount: amount,
    };
    props.onSubmitValue(data);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-containers">
        <div className="container">
          <label>Title</label>
          <input type="text" value={title} onChange={changeTitleHandler} />
        </div>
        <div className="container">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="container">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-10"
            max="2022-01-09"
            value={date}
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="form-button">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
