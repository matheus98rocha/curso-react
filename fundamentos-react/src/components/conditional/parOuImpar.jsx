import React from 'react';

const parOuImpar = props => {

    const isPar = props.num % 2 === 0;

    return (
        <div className="parOuImpar">
            <p>{props.num}</p>
            { isPar ?
                <span>Par</span> :
                <span>Impar</span>
            }
        </div>
    );
}

export default parOuImpar;