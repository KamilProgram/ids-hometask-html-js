import { Component } from "react";
import { AddToCart } from "./AddToCart/AddToCart";
import styles from "./ItemCard.module.scss";

export class ItemCard extends Component {
    render() {
        return <div className={styles.body}>
            <div className={styles.imgBlock}>
                {this.props.picture
                    ? <img src={this.props.baseUrl + this.props.picture.path} alt={this.props.picture.alt} />
                    : "нет картинки"
                }
            </div>
            <div className={styles.description}>
                <h2>{this.props.name}</h2>
                <p>{this.props.info}</p>
                <h3>{this.props.description}</h3>
                <p>{this.props.details}</p>

                <AddToCart price={this.props.price} like={this.props.like} />
            </div>
        </div>



    }
}