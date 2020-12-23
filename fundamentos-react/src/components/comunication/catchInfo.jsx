import React, { useState } from 'react';
import SendInfo from './sendInfo';


const CatchInfo = props => {

    const [nome, setNome] = useState('Clique no botão');
    const [idade, setIdade] = useState();
    const [nerd, setNed] = useState();

    function getInformation(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNed(nerd);
    }

    return (
        <div>
            <div>
                <h1>{nome}</h1>
                <h2>{idade}</h2>
                <p>É um nerd ?</p><p>{nerd ? 'Verdadeiro' : 'Falso'}</p>
            </div>

            <SendInfo clickButton={getInformation} />
        </div>
    )
}

export default CatchInfo;