import React, { cloneElement } from 'react';

const Family = props => {
    return (
        <div className="family">
            {

                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i });
                })
            }
        </div>
    )
}

export default Family;

