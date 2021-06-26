import { AxiosInstance } from "axios";
import { IProduct, IProductPreview } from "../models/product";

type ICatalogResponse = { content: Array<IProductPreview> }
type IProductResponse = { content: IProduct }



export class ApiProducts {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getAll = () =>
    this.axios
      .get<ICatalogResponse>(`/item`)
      .then((d) => d.data.content);

  getById = (id: string) =>
    this.axios.get<IProductResponse>(`/item/${id}`).then((d) => d.data.content);
}
