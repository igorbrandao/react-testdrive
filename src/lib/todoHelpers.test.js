import {addTodo, findById, toggleTodo, updateTodo, filterTodos} from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false}
    ];
    const newTodo = {id: 3, name: 'three', isComplete: false};
    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const result = addTodo(startTodos, newTodo);

    expect(result).toEqual(expected);
});

test('findById should return the expected item from an array', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const expected = {id: 2, name: 'two', isComplete: false};
    const result = findById(2, startTodos);

    expect(result).toEqual(expected);
});

test('toggleTodo should toggle isComplete prop of a todo', () => {
    const startTodo = {id: 1, name: 'one', isComplete: false};
    const expected = {id: 1, name: 'one', isComplete: true};

    const result = toggleTodo(startTodo);

    expect(result).toEqual(expected)
});

test('toggleTodo should not mutate the original todo', () => {
    const startTodo = {id: 1, name: 'one', isComplete: false};
    const result = toggleTodo(startTodo);

    expect(result).not.toEqual(startTodo)
});

test('filterTodos should return all items for the root route', () => {
    
});