import { Component } from "react";
import { withRouter } from "react-router-dom";
import { API, baseUrl } from "../../api/api";
import { ItemCard } from "./ItemCard";

class ItemCardContainer extends Component {
    state = {
        item: null,
    }
    setItem = (newItem) => {
        this.setState(() => {
            return { item: newItem, }
        });
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        if (userId) {
            API.getItem(userId).then(response => {
                console.log(response.content);
                this.setItem(response.content);
            })
        }
    }

    render() {
        return <ItemCard baseUrl={baseUrl} {...this.state.item} />
    }
}

export default withRouter(ItemCardContainer);