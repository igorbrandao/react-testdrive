const baseUrl = 'http://localhost:8090/list';

export const loadItems = () => {
     return fetch(baseUrl).then(res => res.json())
};

export const createItem = (item) => {
    return fetch (baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then(res => res.json())
};