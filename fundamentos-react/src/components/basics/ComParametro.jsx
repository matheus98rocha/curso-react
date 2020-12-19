import React from 'react'

export default function comParametro(props) {
    const status = props.note >= 7 ? ' Aprovado' : ' Reprovado';
    return (
        <div>
            <h2>{props.titulo}</h2>

            <h3>
                {props.aluno }
                tem nota
                {props.nota}
                e está
                {status }
            </h3>
        </div>
    )
}