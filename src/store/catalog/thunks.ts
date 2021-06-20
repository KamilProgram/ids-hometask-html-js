import { API } from "../../API";
import { GetState } from "../index";
import { catalog__setProducts } from "./actions";

/**
 * Получили все товары
 */
export const catalog__getProducts = () => async (dispatch: any, getState: GetState) => {
  try {
    const catalog = await API.products.getAll();
    dispatch(catalog__setProducts(catalog));
  } catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};

