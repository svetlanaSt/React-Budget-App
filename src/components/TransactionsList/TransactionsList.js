import { useContext } from 'react';
import { Context } from '../../state/context';
import TransactionItem from './TransactionItem/TransactionItem';
import './transactionsList.css';



function TransactionList() {
    const { state } = useContext(Context);

    return (
        <ul className='list'>
            {state.transactions.map((item) => <TransactionItem key={item.id} id={item.id} text={item.text} amount={'$' + item.amount} />)}
        </ul>
    );
}

export default TransactionList;