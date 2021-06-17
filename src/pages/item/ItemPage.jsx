import { Component } from "react";
import { API, baseURL } from "../../api/api";
import { withRouter } from 'react-router-dom';
import AddToCart from "../../сomponents/add-to-cart/AddToCart";
import s from "./index.module.scss";

class ItemCardPage extends Component {
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
                this.setItem(response);

            })
        }
    }

    render() {
        return <>{this.state.item && <div className={s.body}>
            <div className={s.imgBlock}>
                {this.state.item.picture
                    ? <img src={baseURL + this.state.item.picture.path} alt={this.state.item.picture.alt} />
                    : "нет картинки"
                }
            </div>
            <div className={s.description}>
                <h2>{this.state.item.name}</h2>
                <p>{this.state.item.info}</p>
                <h3>{this.state.item.description}</h3>
                <p>{this.state.item.details}</p>

                <AddToCart price={this.state.item.price} like={this.state.item.like} />
            </div>
        </div>

        }</>






    }
}

export default withRouter(ItemCardPage);