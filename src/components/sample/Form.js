import React from 'react'

export const Form = (props) => (
    <form className="item-form" onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleInputChange} value={props.currentListItem}/>
    </form>
);

Form.propTypes = {
    currentListItem: React.PropTypes.string.isRequired,
    handleInputChange: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
};