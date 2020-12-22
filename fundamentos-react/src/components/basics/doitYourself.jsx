import React from 'react';

export default function MySelf(props) {
    return (
        <div>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.age}</h2>
                <h3>{props.sex}</h3>
            </div>
        </div>
    )
}
