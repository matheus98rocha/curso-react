import React from 'react';
import If from './if'

const userInfo = props => {
    const user = props.user || {};
    return (
        <div>
            <If test={user && user.name}>
                Olá <strong>{user.name}</strong> !
            </If>

            <If test={!user || !user.name}>
                Olá <strong>Anonimo</strong> !
            </If>
        </div>
    )
}

export default userInfo;