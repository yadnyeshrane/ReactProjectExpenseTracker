import React,{useContext} from 'react';
import {GloablContext} from '../context/GlobalState';

const TranList = ({data}) => {
const{delet}=useContext(GloablContext)
  const sign=data.amount<0?'-':'+';

  return(
    <li class={data.amount<0?"minus":"plus"}>{data.text}
        <span>{sign}${Math.abs(data.amount)}</span>
        <button class="delete-btn" onClick={()=>delet(data.id)}>x</button>
        </li>
  );
}


export default TranList;