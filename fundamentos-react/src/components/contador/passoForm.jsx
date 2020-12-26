import React from 'react';

const passsoForm = props => {
    return (

        <div>


            <label htmlFor="passoInput">Valor:</label>

            <input
                id="passoInput"
                type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value) }
            />

        </div>

    );
}

export default passsoForm;
;