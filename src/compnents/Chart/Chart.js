import BarChart from "./BarChart";
import "./Chart.css";
const Char = (props) => {
  const dataValue = props.expense.map((data) => data.value);
  const totalMax = Math.max(...dataValue);
  return (
    <div className="chart">
      {props.expense.map((ex) => (
        <BarChart
          key={ex.label}
          value={ex.value}
          maxValue={totalMax}
          label={ex.label}
        />
      ))}
    </div>
  );
};

export default Char;
