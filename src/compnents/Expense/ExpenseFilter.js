import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const onChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="label">
        <label>Filter By Year</label>
      </div>
      <div className="select-year">
        <select name={props.selected} onChange={onChangeHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
