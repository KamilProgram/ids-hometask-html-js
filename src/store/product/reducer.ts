import { IProduct } from "../../models/product";
import { ProductAction, IProductActionTypes } from "./types";

const initialState = {
  data: null as IProduct | null,
};

type IProductState = typeof initialState;

export const productReducer = (
  state = initialState,
  action: ProductAction
): IProductState => {
  switch (action.type) {
    case IProductActionTypes.Product__SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
