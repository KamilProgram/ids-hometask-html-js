import { Component } from "react";
import { FavoriteButton } from "../../common/FavoriteButton";
import { Link } from 'react-router-dom';
import styles from "./ItemPreview.module.scss";

export class ItemPreview extends Component {
    render() {
        return <div className={styles.item}>
            <div className={styles.body}>

                <div className={styles.addToFavorite}>
                    <FavoriteButton active={this.props.like} />
                </div>

                <Link to={'item/' + this.props.id}>
                    <div className={styles.imgBlock}>
                        {this.props.picture
                            ? <img src={this.props.baseUrl + this.props.picture.path} alt={this.props.picture.alt} />
                            : "нет картинки"
                        }
                    </div>
                    <div className={styles.lable}>
                        {this.props.name}
                    </div>
                    <span className={styles.price}>
                        {this.props.price
                            ? `${this.props.price.currency === 'USD' ? '$' : ''}${this.props.price.value}`
                            : "Цена не указана"
                        }
                    </span>
                </Link>
            </div>
        </div>
    }
}