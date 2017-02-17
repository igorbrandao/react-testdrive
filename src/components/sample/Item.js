import React from 'react'
import {partial} from '../../lib/utils'

export const Item = (props) => {

    const handleToggle = partial(props.handleToggle, props.id);
    const handleRemove = partial(props.handleRemove, props.id);

    return (
        <li>
            <span className="delete-item">
                <a href="#" onClick={handleRemove}> X </a>
            </span>
            <input
                type="checkbox"
                onChange={handleToggle}
                checked={props.isChecked}/>
            {props.name}
        </li>
    )
};

Item.propTypes = {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    isChecked: React.PropTypes.bool
};