export const setLocalStorage = (key, value) => {
    const newValue = JSON.stringify(value);
    localStorage.setItem(key, newValue);
}

export const getLocalStorage = (key) => {
    try{
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    }
    catch (err) {
        return null;
    }
}

export const setRemoteStorage = (key) => {
    localStorage.removeItem(key);
}
