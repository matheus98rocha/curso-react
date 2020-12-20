import React from 'react';

import Produtos from '../../data/produto';

import './repeticao.css';


const Prods = props => {

    const prodsValues = Produtos.map((produto, i) => {

        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>

                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>

            </tr>
        );
    })

    return (
        <div className="tableProducts">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Prohuto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>

                    {prodsValues}

                </tbody>
            </table>
        </div>
    )
}

export default Prods;