import React,{useContext}from 'react';
import {GloablContext} from '../context/GlobalState';
import TranList from './TranList'
const Transactionlist = () => {
  const {transaction}=useContext(GloablContext)
  
  return (
  <>
  <h3>History</h3>
  <ul id="list" class="list">
    {transaction.map(data=>(
      <TranList key={data.id} data={data}></TranList>
    ))}
        
  </ul>
  </>
  )
}


export default Transactionlist;