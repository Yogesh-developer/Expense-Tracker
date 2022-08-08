import React, { useState } from "react";
import Expense from "./Expense";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
const ExpenseItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onChangeFilterHandler = (year) => {
    setFilteredYear(year);
  };

  const filterExpensevalue = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenseItem">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={onChangeFilterHandler}
      />
      <ExpenseChart expense={filterExpensevalue} />
      {filterExpensevalue.length === 0 ? (
        <h2 className="result-text">Record Not Found</h2>
      ) : (
        filterExpensevalue.map((item) => (
          <Expense
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}
    </Card>
  );
};
export default ExpenseItem;
