import { useContext } from 'react';
import { Context } from '../../../state/context';
import  trashIcon  from './../../../img/delete.png';
import './transactionItem.css';

function TransactionItem({ text, amount, id }) {
    const { dispatch } = useContext(Context);

    const deleteItem = (id) => {        
        dispatch({ type: 'DELETE-TRANSACTION', payload: id })
    };

    return (
        <li className='item'>
            <div>
                <span>{text}</span>
                <span className='amount'>{amount}</span>
            </div>
            <button className='btn-delete' onClick={() => deleteItem(id)}>
                <img src={trashIcon}></img>
            </button>
        </li>
    );
}

export default TransactionItem;