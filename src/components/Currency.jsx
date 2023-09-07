import React, { useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';

const Currency = () => {


    const { currency, setCurrency } = useContext(CurrencyContext);

const ChangeCurrency = (selectedCurrency ) => {
    
    setCurrency(selectedCurrency)
}

return(


<div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Currency ({currency})
  </button>
  <ul className="dropdown-menu" style={{background: "green"}}>
    <li><a className="dropdown-item " href="#" style={{background: "green"}}  onClick={() => ChangeCurrency("$ Dollar")} >$ Dollar</a></li>
    <li><a className="dropdown-item" href="#"  onClick={() => ChangeCurrency("£ Pound")}>£ Pound</a></li>
    <li><a className="dropdown-item" href="#"  onClick={() => ChangeCurrency("€ Euro")}>€ Euro</a></li>
    <li><a className="dropdown-item" href="#"  onClick={() => ChangeCurrency("₹ Ruppee")}>₹ Ruppee</a></li>
  </ul>
</div>



)


};
export default Currency;