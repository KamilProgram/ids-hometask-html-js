import { useEffect, useState } from "react";
import { API, baseURL } from "../../api/api";
import { useLocation, withRouter } from 'react-router-dom';
import s from "./index.module.scss";
import ItemPreview from "../../сomponents/Item-preview/ItemPreview";

const CatalogPage = () => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        API.getItems().then(response => {
            setItems(response);
        });
    }, []);

    const location = useLocation();

    const getSearchParams = () => {
        return decodeURIComponent(location.search.slice(1));
    }


    let reg = new RegExp(getSearchParams(), 'i');
    let hasItems = false;

    return <section className={s.catalog}>
        {items && items.map(item => {
            if (reg.test(item.name)) {
                hasItems = true;
                return <ItemPreview key={item.id} baseUrl={baseURL} {...item} />
            } else return null;
        })
        }
        {!hasItems && "No products found"}
    </section>

}

export default withRouter(CatalogPage);