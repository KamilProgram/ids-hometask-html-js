import { combineReducers } from "redux";
import { catalogReducer } from "./catalog/reducer";
import { productReducer } from "./product/reducer";

export enum StoreSection {
  catalog = "catalog",
  product = "product",
}

export const rootReducer = combineReducers({
  [StoreSection.catalog]: catalogReducer,
  [StoreSection.product]: productReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
