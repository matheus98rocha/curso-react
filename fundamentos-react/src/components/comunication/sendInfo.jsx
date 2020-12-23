import React from 'react';

const SendInfo = props => {

    const execute = props.clickButton;

    return (
        <div>
            <button onClick={e => execute('Matheus', 22, true)}>
               Clique aqui!
            </button>
        </div >

    )
}

export default SendInfo;