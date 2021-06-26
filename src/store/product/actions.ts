import { IProduct } from "../../models/product";
import { ProductAction, IProductActionTypes } from "./types";

/**
 * Записать DATA в store
 * @param products
 */
export const product__setProducts = (data: IProduct | null): ProductAction => ({
  type: IProductActionTypes.Product__SET_DATA,
  payload: data,
});
