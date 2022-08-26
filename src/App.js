import "./App.css";
import { expenses } from "./Components/Expenses/ExpensesData/ExpensesData";
import ExpenseItem from "./Components/Expenses/ExpenseItem/ExpenseItem";
import AddExpense from "./Components/NewExpense/AddExpense/AddExpense";

function App() {
  return (
    <div className="App">
      <AddExpense />
      {expenses.map((el, i, arr) => {
        return (
          <ExpenseItem
            key={el.id}
            date={el.date}
            title={el.title}
            amount={el.amount}
          />
        );
      })}
    </div>
  );
}

export default App;
