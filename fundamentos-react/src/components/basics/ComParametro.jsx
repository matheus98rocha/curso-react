import React from 'react'

export default function comParametro(props) {
    const status = props.nota > 20 ? ' Aprovado' : ' Reprovado';
    return (
        <div>
            <h2>{props.titulo}</h2>

            <h3>
                <strong> {props.aluno} </strong>
                tirou
                {props.nota}
                e está
                {status}
            </h3>
        </div>
    )
}