import React, { useEffect } from "react";
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import Product from "../../сomponents/product/Product";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import s from "./index.module.scss";

interface MatchParams {
  userId?: string;
}
const ProductPage = () => {
  const { product } = useTypedSelector(state => state);
  const { product__getProducts } = useActions();

  const { params } = useRouteMatch<MatchParams>()

  useEffect(() => {
    const userId = params.userId;
    if (userId) {
      product__getProducts(userId);
    }
  }, [params.userId, product__getProducts]);

  const history = useHistory()

  return <>
    <div className={s.breadCrumbs}>
      <Link to="/catalog">Catalog</Link>

      {product.data && <span onClick={() => history.go(0)} >{product.data.name}</span>}
    </div>
    {product.data && <Product {...product.data} />}
  </>

}

export default ProductPage;