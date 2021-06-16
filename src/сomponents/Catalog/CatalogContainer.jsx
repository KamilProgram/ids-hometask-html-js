import { Component } from "react";
import { API, baseUrl } from "../../api/api";
import { Catalog } from "./Catalog";
import { withRouter } from "react-router-dom";

class CatalogContainer extends Component {
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
            this.setItems(response.content);
        });
    }

    getSearchParams = () => {
        let searchParam = this.props.location.search;
        return decodeURIComponent(searchParam.slice(1));
    }

    render() {
        const searchParam = this.getSearchParams();
        let items = this.state.items;

        if (searchParam && items) {
            let reg = new RegExp(searchParam, 'i');
            items = items.filter(item => reg.test(item.name));
        }

        return <Catalog items={items} baseUrl={baseUrl} />
    }
}


export default withRouter(CatalogContainer);