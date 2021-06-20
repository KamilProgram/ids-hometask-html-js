import { IProductPreview } from "../../models/product";
import { CatalogAction, ICatalogActionTypes } from "./types";

const initialState = {
  products: null as Array<IProductPreview> | null,
};

type ICatalogState = typeof initialState;

export const catalogReducer = (
  state = initialState,
  action: CatalogAction
): ICatalogState => {
  switch (action.type) {
    case ICatalogActionTypes.Catalog__SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
