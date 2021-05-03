import './App.css';
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import AddTransactions from './components/AddTransactions/AddTransactions';
import { useReducer } from 'react';
import TransactionList from './components/TransactionsList/TransactionsList';
import { Context } from './state/context';
import { reducer, initialState } from './state/reducer';
import IncomeExpence from './components/IncomeExpence/IncomeExpence';



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='app'>
      <div className='container'>
      <Context.Provider value={{ state, dispatch }}>
        <Header />
        <AddTransactions />
        <TransactionList />
        <IncomeExpence/>
        <Balance />
      </Context.Provider>
      </div>     
    </div>
  );
}

export default App;
