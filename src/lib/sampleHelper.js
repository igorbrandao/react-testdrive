export const addItem = (list, item) => [...list, item];

export const findById = (id, list) => list.find(item => item.id === id);

export const toggleItem = (item) => ({...item, isChecked: !item.isChecked});

export const updateItem = (list, newItem) => {
    const index = list.findIndex(item => item.id === newItem.id);
    return [
        ...list.slice(0, index),
        newItem,
        ...list.slice(index + 1)
    ]
};

export const removeItem = (list, targetId) => {
    const index = list.findIndex(item => item.id === targetId);
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ]
};

export const filterItems = (list, route) => {
    switch (route){
        case '/active': return list.filter(item => !item.isChecked);
        case '/complete': return list.filter(item => item.isChecked);
        default: return list
    }
};

export const generateId = () => Math.floor(Math.random()*100000);