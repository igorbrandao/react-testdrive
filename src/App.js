import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Form, List, LinkFilterNav} from './components/sample';
import {addItem, generateId, findById, toggleItem, updateItem, removeItem, filterItems} from './lib/sampleHelper';
import {pipe, partial} from './lib/utils';
import {loadItems, createItem} from './lib/itemService'

class App extends Component {

    state = {
        list: [],
        currentListItem: ''
    };

    static contextTypes = {
        route: React.PropTypes.string
    };

    componentDidMount(){
        loadItems().then(list => this.setState({list}))
    }

    handleRemove = (id, ev) => {
        ev.preventDefault();
        const updatedItems = removeItem(this.state.list, id);
        this.setState({
            list: updatedItems
        })
    };

    handleToggle = (id) => {
        const getUpdatedItems = pipe(findById, toggleItem, partial(updateItem, this.state.list));
        const updatedItems = getUpdatedItems(id, this.state.list);

        /*

        The two lines above simplify the logic from the commented lines below.

        const item = findById(id, this.state.list);
        const toggled = toggleItem(item);
        const updatedItems = updateItem(this.state.list, toggled);

        */

        this.setState({
            list: updatedItems
        })
    };

    handleInputChange = (ev) => {
        this.setState({
            currentListItem: ev.target.value
        })
    };

    handleEmptySubmit = (ev) => {
        ev.preventDefault();
        this.showTemporaryMessage('Please supply a name for the item.', 'errorMessage', 3000)
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const newId = generateId();
        const newItem = {id: newId, name: this.state.currentListItem, isChecked: false};
        const updatedList = addItem(this.state.list, newItem);
        this.setState({
            list: updatedList,
            errorMessage: '',
            currentListItem: ''
        });
        createItem(newItem).then(() => this.showTemporaryMessage('A new item was successfully added.', 'successMessage', 2500))
    };

    showTemporaryMessage = (msgContent, msgName, msgTimeout) => {
        this.setState({[msgName]: msgContent});
        setTimeout(() => this.setState({[msgName]: ''}), msgTimeout)
    };

    render() {

        const submitHandler = this.state.currentListItem ? this.handleSubmit : this.handleEmptySubmit;
        const displayItems = filterItems(this.state.list, this.context.route);

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>React Component Usages</h2>
                </div>
                <div>
                    <div className="Component-App">
                        {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
                        {this.state.successMessage && <span className="success">{this.state.successMessage}</span>}
                        <Form
                            currentListItem={this.state.currentListItem}
                            handleInputChange={this.handleInputChange}
                            handleSubmit={submitHandler}
                        />
                        <LinkFilterNav/>
                        <List
                            handleToggle={this.handleToggle}
                            handleRemove={this.handleRemove}
                            list={displayItems}
                        />
                    </div>
                    <div>
                        <section>
                            <p>Some paragraph with some content written.</p>
                        </section>
                        <section>
                            <p>Another paragraph with some content written.</p>
                        </section>
                        <section>
                            <p>One more paragraph with some content written.</p>
                        </section>
                        <section>
                            <p>The last paragraph with some content written.</p>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
