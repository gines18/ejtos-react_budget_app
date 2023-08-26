import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "./Budget.css";

const Budget = () => {
  const { budget, expenses } = useContext(AppContext);
  const [editableBudget, setEditableBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setEditableBudget(event.target.value);
  };

  const budgetChangeIncrease = () => {
    const newBudget = parseInt(editableBudget) + 10;
    setEditableBudget(newBudget);
  };

  const budgetChangeDecrease = () => {
    const newBudget = parseInt(editableBudget) - 10;
    setEditableBudget(newBudget);
    if (newBudget < expenses.reduce((total, item) => total + item.cost, 0)) {
      alert("You cannot reduce the budget value lower than ehe spending!");
    }
  };

  return (
    <div id="container-budget" className="alert alert-secondary">
      Budget: £
      <input
        type="text"
        name="myInput"
        value={editableBudget}
        onChange={handleBudgetChange}
      />
      <div>
        <div>
          <button onClick={budgetChangeIncrease}>
            {" "}
            <img src="./up.png" style={{ width: "7px" }} alt="Up Arrow" />
          </button>
          <button onClick={budgetChangeDecrease}>
            {" "}
            <img src="./down.png" style={{ width: "7px" }} alt="Down Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
