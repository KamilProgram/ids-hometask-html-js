import { IProductPreview } from "../../models/product";

export enum ICatalogActionTypes {
  Catalog__SET_PRODUCTS = "[Catalog] SET_PRODUCTS",
}

// Типы ActionCreators
interface SetProductsAction {
  type: ICatalogActionTypes.Catalog__SET_PRODUCTS;
  payload: Array<IProductPreview> | null;
}
// Общий тип Action
export type CatalogAction =
  | SetProductsAction;
