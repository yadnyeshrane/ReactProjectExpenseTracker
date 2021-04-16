import React,{useContext} from 'react';
import {GloablContext} from '../context/GlobalState';

const Balance = () => {
  const {transaction}=useContext(GloablContext)
  const amounts=transaction.map(trans=>trans.amount)
  const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
  return (<>
  <h4>YouR Balance</h4>
  <h1 id="balance">${total}</h1>
  </>)
}


export default Balance;