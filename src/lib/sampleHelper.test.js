import {addItem, findById, toggleItem, updateItem, removeItem, filterItems} from './sampleHelper'

test('addItem should add the passed item to the list', () => {
    const startList = [
       {id:1, name: 'one', isChecked: false},
       {id:2, name: 'two', isChecked: false}
    ];

    const newItem = {id:3, name: 'three', isChecked: false};

    const expected = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: false},
        {id:3, name: 'three', isChecked: false}
    ];

    const result = addItem(startList, newItem);

    expect(result).toEqual(expected);
});

test('addItem should not mutate the existing list array', () => {
    const startList = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: false}
    ];

    const newItem = {id:3, name: 'three', isChecked: false};

    const expected = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: false},
        {id:3, name: 'three', isChecked: false}
    ];

    const result = addItem(startList, newItem);

    expect(result).not.toBe(startList);
});

test('findById should return the expected item from an array', () => {
    const startList = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: false},
        {id:3, name: 'three', isChecked: false}
    ];

    const expected = {id:2, name: 'two', isChecked: false};

    const result = findById(2, startList);

    expect(result).toEqual(expected);
});

test('toggleItem should toggle the isChecked prop of an item', () => {
    const startItem = {id:2, name: 'two', isChecked: false};
    const expected = {id:2, name: 'two', isChecked: true};
    const result = toggleItem(startItem);
    expect(result).toEqual(expected);
});

test('toggleItem should not mutate the original item', () => {
    const startItem = {id:2, name: 'two', isChecked: false};
    const result = toggleItem(startItem);
    expect(result).not.toBe(startItem);
});

test('updateItem should update an item by id', () => {
    const startList = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: false},
        {id:3, name: 'three', isChecked: false}
    ];

    const updatedItem = {id:2, name: 'two', isChecked: true};

    const expectedList = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: true},
        {id:3, name: 'three', isChecked: false}
    ];

    const result = updateItem(startList, updatedItem);

    expect(result).toEqual(expectedList);
});

test('updateItem should not mutate the original array', () => {
    const startList = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: false},
        {id:3, name: 'three', isChecked: false}
    ];

    const updatedItem = {id:2, name: 'two', isChecked: true};

    const result = updateItem(startList, updatedItem);

    expect(result).not.toBe(startList);
});

test('removeItem should remove an item by id', () => {
    const startList = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: false},
        {id:3, name: 'three', isChecked: false},
        {id:4, name: 'four', isChecked: false},
        {id:5, name: 'five', isChecked: false}
    ];

    const targetId = 2;

    const expectedList = [
        {id:1, name: 'one', isChecked: false},
        {id:3, name: 'three', isChecked: false},
        {id:4, name: 'four', isChecked: false},
        {id:5, name: 'five', isChecked: false}
    ];

    const result = removeItem(startList, targetId);

    expect(result).toEqual(expectedList);
});

test('removeItem should not mutate the original array', () => {
    const startList = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: false},
        {id:3, name: 'three', isChecked: false}
    ];

    const targetId = 2;

    const result = removeItem(startList, targetId);

    expect(result).not.toBe(startList);
});

test('filterItems should return all items for the root route', () => {
    const startList = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: true},
        {id:3, name: 'three', isChecked: false}
    ];

    const result = filterItems(startList, '/');

    expect(result).toEqual(startList);
});

test('filterItems should return only checked items for the complete route', () => {
    const startList = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: true},
        {id:3, name: 'three', isChecked: false}
    ];

    const expected = [
        {id:2, name: 'two', isChecked: true}
    ];

    const result = filterItems(startList, '/complete');

    expect(result).toEqual(expected);
});

test('filterItems should return only unchecked items for the active route', () => {
    const startList = [
        {id:1, name: 'one', isChecked: false},
        {id:2, name: 'two', isChecked: true},
        {id:3, name: 'three', isChecked: false}
    ];

    const expected = [
        {id:1, name: 'one', isChecked: false},
        {id:3, name: 'three', isChecked: false}
    ];

    const result = filterItems(startList, '/active');

    expect(result).toEqual(expected);
});