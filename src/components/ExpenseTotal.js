
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

const  ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const { currency } = useContext(CurrencyContext);


    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far:  {getCurrencySymbol(currency)}{totalExpenses}</span>
        </div>
    )


;
};
export default ExpenseTotal;