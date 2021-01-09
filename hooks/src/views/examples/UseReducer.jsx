import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState } from 'react';

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
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

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className='text'>{state.user.name}</span>
                    : <span className="text"></span>}

                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Conectar</button>

                    <button className="btn"
                        onClick={() => dispatch({ type: 'logout', payload: null })}>Desconectar</button>

                    <div>
                        <div className="center">
                            <span className="text">{state.number}</span>

                        </div>

                        <button className="btn"
                            onClick={() => dispatch({ type: 'add2ToNumber' })}>+2</button>

                        <button className="btn"
                            onClick={() => dispatch({ type: 'remove2toNumber' })}>-2</button>

                        <button className="btn"
                            onClick={() => dispatch({ type: 'mult7toNumber' })}>*7</button>

                        <button className="btn"
                            onClick={() => dispatch({ type: 'div25toNumber' })}>/25</button>

                        <button className="btn"
                            onClick={() => dispatch({ type: 'parseIntNumber' })}>Inteiro</button>
                        <button className="btn"
                            onClick={() => dispatch({ type: 'newNumber', payload: 7 })}>Adicionar N</button>

                        <button className="btn"
                            onClick={() => dispatch({ type: 'reset' })}>Resetar</button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default UseReducer
