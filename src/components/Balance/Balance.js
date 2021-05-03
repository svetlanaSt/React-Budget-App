import { useContext, useMemo } from 'react';
import { Context } from '../../state/context';
import './balance.css';

function Balance() {
    const { state } = useContext(Context);

    const balance = useMemo(() => state.transactions.reduce((acc, transaction) => { return acc + transaction.amount }, 0), [state]);
    
    return (
        <div className='balance'>
            <h4>Balance</h4>
            <div>${balance}</div>
        </div>
    );
}

export default Balance;