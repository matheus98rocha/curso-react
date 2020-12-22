import React from 'react';
import diretaFilho from './diretaFilho'

const diretaPai = props => {
    return (
        <div>
            <diretaFilho texto="Filho 1" num={20} bool={true} />
        </div>
    )
}

export default diretaPai;