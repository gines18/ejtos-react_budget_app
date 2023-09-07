
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
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

const ExpenseItem = (props) => {
    const { currency } = useContext(CurrencyContext);
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
          name: name,
          cost: -10,
        };
    
        dispatch({
          type: 'ADD_EXPENSE',
          payload: expense,
        });
      };

    return (
        <tr>
        <td>{props.name}</td>
        <td> {getCurrencySymbol(currency)}{props.cost}</td>
        <td><img src='./plus.png' style={{width: "30px", cursor: "pointer"}} onClick={event=> increaseAllocation(props.name)}/></td>
        <td><img src='./minus.png' style={{width: "30px", cursor: "pointer" }} onClick={event=> decreaseAllocation(props.name)}/></td>
       
       
        <td><TiDelete size='1.5em' style={{ cursor: "pointer" }} onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;