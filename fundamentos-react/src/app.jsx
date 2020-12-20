import React from 'react';

import './app.css';

import Card from './components/layout/card'
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/fragmento';
import Desafio from './components/basics/aleatorio';
import NewComponent from './components/basics/aulaComponent';
import FamilyMember from './components/basics/familiaMembro';
import Family from './components/basics/familia';
import List from './components/repeticao/listaAlunos';
import Products from './components/repeticao/tabelaProduto';


const Props = () => {
    return (
        <div className="app">

            <NewComponent />

            <div className="all-content">

                <Card titulo="Introdução" className="cards" color="#080">
                    <Fragmento />
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="Produtos" className="cards" color="#FF432E">
                    <Products />
                </Card>


                <Card titulo="Repetição" className="cards" color="#FF4C65">
                    <List />
                </Card>

                <Card titulo="Número Aleatório" className="cards" color="#008">
                    <Desafio min={2} max={60} />
                </Card>

                <Card titulo="Verificando Nota" className="cards" color="#097">
                    <ComParametro
                        titulo=" Verificando Nota do Aluno "
                        aluno=" Matheus "
                        nota=" 22 " />
                </Card>

                <Card titulo="Familia de Componentes" className="cards" color="#00C8F8">
                    <Family sobrenome="Rocha">
                        <FamilyMember nome="Matheus " />
                        <FamilyMember nome="Bruno " />
                        <FamilyMember nome="Lola " />
                    </Family>
                </Card>

            </div>

        </div>
    );
}

export default Props;