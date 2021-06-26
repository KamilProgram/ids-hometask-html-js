import { API } from "../../API";
import { GetState } from "../index";
import { product__setProducts } from "./actions";


/**
 * Получили все товары
 */
export const product__getProducts = (id: string) => async (dispatch: any, getState: GetState) => {
  try {
    const product = await API.products.getById(id);
    dispatch(product__setProducts(product))
  } catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};
