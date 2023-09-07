
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
import { CurrencyContext } from './CurrencyContext';


const getCurrencySymbol = (currency) => {
    switch (currency) {
      case "$ Dollar":
        return "$";
      case "£ Pound":
        return "£";
      case "€ Euro":
        return "€";
      case "₹ Rupee":
        return "₹";
      default:
        return "";
    }
  };


const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const { currency } = useContext(CurrencyContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining:  {getCurrencySymbol(currency)}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;