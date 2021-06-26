import { IProductPreview } from "../../models/product";
import { CatalogAction, ICatalogActionTypes } from "./types";

/**
 * Записать PRODUCTS в store
 * @param products
 */
export const catalog__setProducts = (products: Array<IProductPreview> | null): CatalogAction => ({
  type: ICatalogActionTypes.Catalog__SET_PRODUCTS,
  payload: products,
});
