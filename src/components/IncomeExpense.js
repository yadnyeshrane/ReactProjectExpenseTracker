import React,{useContext} from 'react';
import {GloablContext} from '../context/GlobalState';
const IncomeExpense = () => {
  const {transaction}=useContext(GloablContext)
  const amounts=transaction.map(trans=>trans.amount)
  // console.log(amounts);
  const income=amounts.filter(item=>item>0);
  console.log(income)
  const totalicome=income.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  // console.log(totalicome)
  const expense=amounts.filter(item=>item<0);
  console.log(expense)
  const totalexpense=expense.reduce((acc,item)=>(acc+=item),0);
  console.log(totalexpense)
  
  return <div className="inc-exp-container">
<div>
<h4>Income</h4>
<p id="money-plus" class="money plus">${totalicome}</p>
</div>
<div>
  <h4>Expense</h4>
  <p id="money-plus" class="money minus">${totalexpense}</p>

</div>
  </div>;
}


export default IncomeExpense;