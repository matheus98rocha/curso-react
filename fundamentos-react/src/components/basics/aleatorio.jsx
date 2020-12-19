import React from 'react';

const Desafio = (props) => {

    const { min, max } = props;

    const aleatorio = Math.floor((Math.random() * (max - min + 1) + min))

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                Valor Mínimo: {min}
            </p>
            <p>
                Valor Máximo: {max}
            </p>

            <p>
                Valor Aleatório: {aleatorio}
            </p>

        </div>
    )
}

export default Desafio;