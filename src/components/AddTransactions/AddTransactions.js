import { useContext, useState } from 'react';
import { Context } from '../../state/context';
import './addtransactions.css';

function AddTransactions() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    const { dispatch } = useContext(Context);

    const onSubmit = (e) => {
        e.preventDefault();

        let transaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: + amount
        };

        dispatch({type: 'ADD-TRANSACTION', payload: transaction});        
    };

    return (
        <div className='form'>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='description' value={text} onChange={(e) => {setText(e.target.value)}}/>
                <input type="number"  value={amount} onChange={(e) => {setAmount(e.target.value)}}/>                
                <button className='add-btn'>Add</button>
            </form>
        </div>
    )
}

export default AddTransactions;