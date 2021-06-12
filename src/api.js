export const baseUrl = "http://localhost:3006/";


const makeRequest = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, baseUrl + url);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({ status: e.status, statusText: xhr.statusText });
            }
        };

        xhr.onerror = () => { reject({ status: xhr.status, statusText: xhr.statusText }); };
        xhr.send();
    });
}



export const API = {
    getItems: () => {
        return makeRequest("GET", "item");
    },
    getItem: (id) => {
        return makeRequest("GET", "item/" + id);
    }
}
