import React, { useState } from 'react'


const Mega = props => {

    function NgenerateValues(min, max, array) {

        const random = parseInt(Math.random() * (max + 1 - min) + min);

        return array.includes(random) ?
            NgenerateValues(min, max, array) :
            random
    }

    function generateValues(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = NgenerateValues(1, 60, nums)
                return [...nums, novoNumero];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numeros;
    }

    const [qtdInicial, setQtd] = useState(props.qtde || 6)
    const numIniciais = Array(qtdInicial).fill(0)
    const [numeros, setNumeros] = useState(numIniciais);

    return (
        <div>
            <h3>{numeros.join(' - ')}</h3>
            <input type="number" value={qtdInicial}
                onChange={e => setQtd(+e.target.value)}
                min="6"
                max="17"
            />

            <button onClick={
                () => setNumeros(generateValues(qtdInicial))
            }>
                Gerar Números
            </button>
        </div>
    );
}

export default Mega;