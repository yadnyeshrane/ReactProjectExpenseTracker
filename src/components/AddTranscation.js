import React,{useState,useContexts, useContext} from 'react';
import {GloablContext} from '../context/GlobalState';
const AddTranscation = () => {
  const [text,setText]=useState('');
  const [amount,setAmount]=useState('');
  const{addTransction}=useContext(GloablContext)
  const submitts=((e)=>{
    e.preventDefault();

console.log('hey')
const newTransction={
  id:Math.floor(Math.random()*1000),
  text,
  amount:+amount,
  
}
setText();
setAmount();
console.log(newTransction)

addTransction(newTransction);
  })
  return (
    <>
    <h3 className="form-control">Ad new Transcation</h3>
    <form >
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)}></input > 
      </div>
      <div className="form-control">
       <label htmlFor="Amount">
         Amount<br/>
         (negative-expense,positive-income)
       </label>
         <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount....">
         </input>

      </div>
      <button className="btn" onClick={submitts}>Add Transcation</button>
    </form>

    </>
  )
}


export default AddTranscation;