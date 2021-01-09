import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store/index';
import { add2ToNumber, remove2toNumber, mult7toNumber, div25toNumber, parseIntNumber, reset } from '../../store/actions/number'
import { login } from '../../store/actions/user'



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
                        onClick={() => login(dispatch, "Matheus")}>Conectar</button>

                    <button className="btn"
                        onClick={() => dispatch({ type: 'logout', payload: null })}>Desconectar</button>

                    <div>
                        <div className="center">
                            <span className="text">{state.number}</span>

                        </div>

                        <button className="btn"
                            onClick={() => add2ToNumber(dispatch)}> +2</button>

                        <button className="btn"
                            onClick={() => remove2toNumber(dispatch)}>-2</button>

                        <button className="btn"
                            onClick={() => mult7toNumber(dispatch)}>*7</button>

                        <button className="btn"
                            onClick={() => div25toNumber(dispatch)}>/25</button>

                        <button className="btn"
                            onClick={() => parseIntNumber(dispatch)}>Inteiro</button>

                        <button className="btn"
                            onClick={() => dispatch({ type: 'newNumber', payload: 7 })}>Adicionar N</button>

                        <button className="btn"
                            onClick={() => reset(dispatch)}>Resetar</button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default UseReducer
