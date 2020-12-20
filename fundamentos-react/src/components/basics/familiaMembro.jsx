import React from 'react';

const FamilyMember = (props) => {

    return <span>{props.nome}<strong>{props.sobrenome}</strong></span>
}

export default FamilyMember;