import { IProduct } from "../../models/product";

export enum IProductActionTypes {
  Product__SET_DATA = "[Product] SET_DATA",
}

// Типы ActionCreators
interface SetDataAction {
  type: IProductActionTypes.Product__SET_DATA;
  payload: IProduct | null;
}
// Общий тип Action
export type ProductAction =
  | SetDataAction;
