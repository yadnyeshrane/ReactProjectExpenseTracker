export default(state,action)=>{
  switch(action.type)
  {
    case 'delete':
      return {
        ...state,
        transaction:state.transaction.filter(trans=>trans.id!=action.payload)
      }
      case 'add':
        return{
          ...state,
          transaction:[action.payload,...state.transaction]
        }
    default:return state;
  }
}