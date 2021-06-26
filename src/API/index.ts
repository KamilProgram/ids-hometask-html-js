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
