import React from 'react';

import './app.css';

import Card from './components/layout/card'
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/fragmento';
import Desafio from './components/basics/aleatorio';
import NewComponent from './components/basics/aulaComponent'

const Props = () => {
    return (
        <div className="app">

            <NewComponent />

            <div className="all-content">

                <Card titulo="Exemplo de card" className="cards" color="#080">
                    <Fragmento />
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="Exemplo de card" className="cards" color="#008">
                    <Desafio min={2} max={60} />
                </Card>

                <Card titulo="Exemplo de card" className="cards" color="#097">
                    <ComParametro
                        titulo=" Verificando Nota do Aluno "
                        aluno=" Matheus "
                        nota=" 22 " />
                </Card>
            </div>

        </div>
    );
}

export default Props;