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
import ParOuImpar from './components/conditional/parOuImpar';
import User from './components/conditional/userInfo';
import Children from './components/basics/children';
import CatchInfo from './components/comunication/catchInfo';
import Form from './components/form/input';

const mainApp = () => {
    return (
        <div className="app">

            <NewComponent />

            <div className="all-content">

                <Card titulo="Introdução" className="cards" color="#080">
                    <Fragmento />
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="Olá" className="cards" color="#4b005e">
                    <Form />
                </Card>

                <Card titulo="Estados" className="cards" color="#4f009e">
                    <CatchInfo />
                </Card>

                <Card titulo="Produtos" className="cards" color="#080">
                    <Products />
                </Card>

                <Card titulo="Renderização Condicional" className="cards" color="#982395">
                    <ParOuImpar num={21} />
                    <User user={{ name: "Matheus" }} />
                    <User user={{}} />
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

                <Card titulo="Do it by myself" className="cards" color="#854545">
                    <Children />
                </Card>

                <Card titulo="Familia de Componentes" className="cards" color="#00C8F8">
                    <Family sobrenome="Rocha">
                        <FamilyMember nome="Matheus " />
                        <FamilyMember nome="Bruno " />
                        <FamilyMember nome="Lola " />
                    </Family>
                </Card>

            </div>

        </div >
    );
}

export default mainApp;