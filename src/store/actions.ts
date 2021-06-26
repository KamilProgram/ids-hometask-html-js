import * as CatalogActionCreators from "./catalog/thunks";
import * as CatalogThunkCreators from "./catalog/actions";
import * as ProductActionCreators from "./product/thunks";
import * as ProductThunkCreators from "./product/actions";

export const ActionCreators = {
  ...CatalogActionCreators,
  ...CatalogThunkCreators,
  ...ProductActionCreators,
  ...ProductThunkCreators
};
