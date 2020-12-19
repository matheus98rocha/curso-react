import React from 'react';

const Desafio = (props) => {

    const { min, max } = props;

    const aleatorio = Math.floor((Math.random() * (max - min + 1) + min))

    return (
        <div>
            <p>
                Valor Mínimo: {min}
            </p>
            <p>
                Valor Máximo: {max}
            </p>
            
            <p>
                Valor Aleatório: Não sei dizer {aleatorio}
            </p>

        </div>
    )
}

export default Desafio;