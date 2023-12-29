export const saveToLocalStorage = (key, data) => {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
};

export const getFromLocalStorage = (key) => {
    const jsonData = localStorage.getItem(key);
    return JSON.parse(jsonData);
};
export const clearLocalStorage = ()=>{
    localStorage.clear();
}
