import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

//intail states
const initialstate={
  transaction:[
    {id:1,text:'Flower',amount:-20},
     ]
}
export const GloablContext=createContext(initialstate)

//Provider
export const GLoabalProvider=({children})=>{
const[state,dispatch]=useReducer(AppReducer,initialstate);
//Actions
function delet(id)
{
  dispatch({
    type:'delete',
    payload:id,
  })
}
function addTransction(transaction)
{
  dispatch({
    type:"add",
    payload:transaction,
  })
}
return (<GloablContext.Provider value={{
  transaction:state.transaction,delet,addTransction
}}>
  {children}
</GloablContext.Provider>)
}