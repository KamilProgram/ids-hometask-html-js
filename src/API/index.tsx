import axios, { AxiosInstance } from "axios";
import { ApiProducts } from "./products";
export const baseURL = "http://localhost:3006/";

class Api {
  private axios: AxiosInstance;
  products: ApiProducts;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
    this.products = new ApiProducts(axios);
  }
}
//главный объект для запросов
let API: Api;
const createAPI = (headers = {}) => {
  API = new Api(
    axios.create({
      baseURL,
      // withCredentials: true,
      // headers: {
      //   //  "Authorization": "API_KEY"
      // },
    })
  );
};
createAPI({});

export { API, createAPI };

export enum HTTP_STATUS {
  AppError = 100,
  ServerError = 500,
  Access = 200,
  Error = 400,
  Unauthorized = 401,
  Forbidden = 403,
  BadRequest = 400,
  NotFound = 404,
}





/* import *as axios from "axios";

export const baseURL = "http://localhost:3006/";
const instance = axios.create({ baseURL });

export const API = {
    getItems: () => {
        return instance.get(`item`).then(response => response.data.content);
    },
    getItem: (userId) => {
        return instance.get("item/" + userId).then(response => response.data.content);
    },

       getPicture: (path) => {
           return instance.get(path, {
               responseType: 'blob'
           }).then(response => window.URL.createObjectURL(new Blob([response.data])));
       },
} */