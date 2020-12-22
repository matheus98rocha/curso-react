import React from 'react';

const diretaFilho = props => {
    return (
        <div>
            <div>{props.text}</div>
            <div>{props.num}</div>
            <div>{props.bool ? 'Verdadeiro' : 'Falso'}</div>
        </div>
    )
}

export default diretaFilho;