import React, { useState } from 'react';

import './input.css';

const Form = props => {

    const [value, setValue] = useState('');

    function whenChange(e) {
        setValue(e.target.value);
    }

    return (
        // Componente controlado
        <div className="input">
            <div>
                <input value={value} onChange={whenChange} placeholder="Digite algo" />
                <p>{value}</p>
            </div>

            <div>
                <input value={value} onChange={whenChange} placeholder="Digite algo" />
                <p>{value}</p>
            </div>
        </div>


    )
}

export default Form;