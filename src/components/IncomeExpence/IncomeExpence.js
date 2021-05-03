import { useContext, useMemo } from 'react';
import { Context } from '../../state/context';
import './incomeExpence.css';

function IncomeExpence() {
    const { state } = useContext(Context);

    let income = useMemo(() => state.transactions.filter((item) => item.amount > 0)
        .reduce((acc, item) => { return acc + item.amount }, 0), [state]);

    let expense = useMemo(() => state.transactions.filter((item) => item.amount < 0)
        .reduce((acc, item) => { return acc + item.amount }, 0), [state]);

    return (
        <div className='income-expence'>
            <div className='income'>
                <h4>Income</h4>
                <div>{income}$</div>
            </div>
            <div className='expence'>
                <h4>Expence</h4>
                <div>{expense}$</div>
            </div>
        </div>
    );
}

export default IncomeExpence;