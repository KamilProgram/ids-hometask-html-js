import *as axios from "axios";

export const baseURL = "http://localhost:3006/";
const instance = axios.create({ baseURL });

export const API = {
    getItems: () => {
        return instance.get(`item`).then(response => response.data.content);
    },
    getItem: (userId) => {
        return instance.get("item/" + userId).then(response => response.data.content);
    }
}

