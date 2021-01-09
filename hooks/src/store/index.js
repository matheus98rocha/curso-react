 export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}


export function reducer(state, action) {
    switch (action.type) {
        case 'add2ToNumber':
            return { ...state, number: state.number + 2 }

        case 'remove2toNumber':
            return { ...state, number: state.number - 2 }

        case 'mult7toNumber':
            return { ...state, number: state.number * 7 }

        case 'div25toNumber':
            return { ...state, number: state.number / 7 }

        case 'parseIntNumber':
            return { ...state, number: parseInt(state.number) }

        case 'newNumber':
            return { ...state, number: state.number + action.payload }

        case 'reset':
            return { ...state, number: state.number = 0 }


        case 'login':
            return { ...state, user: { name: action.payload } }

        case 'logout':
            return { ...state, user: { payload: action.name } }

        default:
            return state;
    }
}
