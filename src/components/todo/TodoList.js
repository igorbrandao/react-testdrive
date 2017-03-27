import React from 'react';
import {TodoItem} from './TodoItem';

export const TodoList = (props) => {
    return (
        <div className="Todo-List">
            <ul>
                {props.todos.map(todo => <TodoItem key={todo.id} handleToggle={props.handleToggle} {...todo} handleRemove={props.handleRemove} />)}
            </ul>
        </div>
    )
};

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
};