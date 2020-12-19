import React from 'react';

import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/fragmento';
import Desafio from './components/basics/aleatorio';
import NewComponent from './components/basics/aulaComponent'

const Props = () => {
    return (
        <div id="app">

            <NewComponent />

            <h1>Matheus</h1>

            <Desafio
                min={2}
                max={60}
            />

            <Fragmento />

            <ComParametro
                titulo=" Segundo componente "
                aluno=" Matheus "
                nota=" 10 " />

            <Primeiro></Primeiro>
        </div>
    );
}

export default Props;