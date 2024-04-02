export const setLocalStorage = (key, value) => {
    const newValue = JSON.stringify(value);
    localStorage.setItem(key, newValue);
}

export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

export const setRemoteStorage = (key) => {
    localStorage.removeItem(key);
}
