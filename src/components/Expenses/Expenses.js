import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setyear] = useState("2020");
  const selectYearHandler = (selectedYear) => {
    setyear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectYear={selectYearHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
