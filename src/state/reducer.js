
export const initialState = {
    transactions: []
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD-TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };
        case 'DELETE-TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            };

        default:
            return state;
    }
}