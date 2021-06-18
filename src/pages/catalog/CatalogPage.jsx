import { Component } from "react";
import { API, baseURL } from "../../api/api";
import { withRouter } from 'react-router-dom';
import s from "./index.module.scss";
import ItemPreview from "../../сomponents/Item-preview/ItemPreview";

class CatalogPage extends Component {
    state = {
        items: null,
    }

    setItems = (newItems) => {
        this.setState(() => {
            return { items: newItems, }
        });
    }

    componentDidMount() {
        API.getItems().then(response => {
            this.setItems(response);
        });
    }

    getSearchParams = () => {
        let searchParam = this.props.location.search;
        return decodeURIComponent(searchParam.slice(1));
    }

    render() {
        let items = this.state.items;
        const searchParam = this.getSearchParams();

        if (searchParam && items) {
            let reg = new RegExp(searchParam, 'i');
            items = items.filter(item => reg.test(item.name));
        }

        return <section className={s.catalog}>
            {items && items.length ? (
                items.map(item => {
                    return <ItemPreview key={item.id} baseUrl={baseURL} {...item} />
                })
            ) : "Items not found"
            }
        </section>
    }
}

export default withRouter(CatalogPage);