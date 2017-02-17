import React from 'react'
import {Item} from './Item'

export const List = (props) => (
    <div className="Component-List">
        <ul>
            {props.list.map(item => <Item
                handleToggle={props.handleToggle}
                handleRemove={props.handleRemove}
                key={item.id}
                {...item} />)}
        </ul>
    </div>
);

List.propTypes = {
    list: React.PropTypes.array.isRequired,
    handleToggle: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired
};