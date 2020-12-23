import React, { useState } from 'react';

import './input.css';

const Form = props => {

    const [name, setName] = useState('');
    const [lastName, setLast] = useState('');

    function setFirstName(e) {
        setName(e.target.value);
    }

    function setLastName(e) {
        setLast(e.target.value)
    }

    return (
        // Componente controlado
        <div className="input">
            <div>
                <input value={name} onChange={setFirstName} placeholder="Nome" />
                <input value={lastName} onChange={setLastName} placeholder="Sobrenome" />
                <div className="result">
                    <p className="space">{name} </p>
                    <p>{lastName}</p>
                </div>
            </div>
        </div>
    )
}

export default Form;