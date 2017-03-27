import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {pipe, partial} from './lib/utils';
import {TodoForm, TodoList, Footer} from './components/todo';
import {loadTodos, createTodo, saveTodo, destroyTodo} from './lib/todoServer';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers';

class App extends Component {
    state = {
        todos: [],
        currentTodo: ''
    };

    static contextTypes = {
        route: React.PropTypes.string
    };

    componentDidMount() {
        loadTodos().then(todos => this.setState({todos}))
    }

    handleInputChange = (evt) => {
        this.setState({
            currentTodo: evt.target.value
        });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newId = generateId();
        const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
        const updatedTodo = addTodo(this.state.todos, newTodo);
        this.setState({
            todos: updatedTodo,
            currentTodo: '',
            errorMessage: ''
        });

        createTodo(newTodo).then(res => this.showTempMessage('Todo Added'))
    };

    showTempMessage = (msg) => {
        this.setState({message: msg});
        setTimeout(() => this.setState({message: ''}), 2500)
    };

    handleEmptySubmit = (evt) => {
        evt.preventDefault();
        this.setState({
            errorMessage: 'Please supply'
        })

    };

    handleToggle = (id) => {
        const getToggleTodo = pipe(findById, toggleTodo);
        const updated = getToggleTodo(id, this.state.todos);
        const getUpdatedTodos = partial(updateTodo, this.state.todos);
        const updatedTodos = getUpdatedTodos(updated);
        this.setState({todos: updatedTodos});
        saveTodo(updated)
            .then(() => this.showTempMessage('Todo Updated'))

    };

    handleRemove = (id, evt) => {
        evt.preventDefault();

        const updatedTodos = removeTodo(this.state.todos, id);

        this.setState({
            todos: updatedTodos
        });

        destroyTodo(id).then(() => this.showTempMessage('Todo Deleted'))
    };

    render() {
        const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
        const displayTodos = filterTodos(this.state.todos, this.context.route);

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>React TODO</h2>
                </div>
                <div className="Todo-App">
                    {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
                    {this.state.message && <span className="success">{this.state.message}</span>}
                    <TodoForm handleInputChange={this.handleInputChange}
                              currentTodo={this.state.currentTodo}
                              handleSubmit={submitHandler}/>
                    <TodoList handleToggle={this.handleToggle}
                              todos={displayTodos}
                              handleRemove={this.handleRemove}/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
