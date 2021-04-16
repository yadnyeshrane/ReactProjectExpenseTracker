import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance';
import Income from './components/IncomeExpense';
import Transactionlist from './components/Transactionlist'
import './App.css'
import AddTranscation from './components/AddTranscation'
import {GLoabalProvider}from './context/GlobalState'
function App() {
 
  return (
    <GLoabalProvider>
     <Header></Header>
     <div className="container">
<Balance></Balance>
<Income></Income>
<Transactionlist></Transactionlist>
<AddTranscation></AddTranscation>
     </div>
     </GLoabalProvider>
  );
}

export default App;
