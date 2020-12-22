import React from 'react';

import DoitYourSelf from './doitYourself';

const Children = () => {
    return (
        <div>
            <DoitYourSelf name="Matheus Gonçalves Rocha" />
            <DoitYourSelf age={22} />
            <DoitYourSelf sex="Masculino" />
            <DoitYourSelf bool={false} />
        </div>
    )
}

export default Children;