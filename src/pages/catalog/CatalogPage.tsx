import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import s from "./index.module.scss";
import ProductPreview from "../../сomponents/product-preview/ProductPreview";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

const CatalogPage = () => {

    const { catalog } = useTypedSelector(state => state);
    const { catalog__getProducts } = useActions();

    useEffect(() => {
        catalog__getProducts();
    }, []);

    const location = useLocation();

    const getSearchParams = () => {
        return decodeURIComponent(location.search.slice(1));
    }

    let reg = new RegExp(getSearchParams(), 'i');
    let hasProducts = false;

    return <section className={s.catalog}>
        {catalog.products && catalog.products.map(product => {
            if (reg.test(product.name)) {
                hasProducts = true;
                return <ProductPreview key={product.id} {...product} />
            } else return null;
        })
        }
        {!hasProducts && "No products found"}
    </section>
}


export default CatalogPage;