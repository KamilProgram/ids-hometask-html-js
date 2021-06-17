import { Component } from "react";
import { FavoriteButton } from "../favorite-button/FavoriteButton";
import { Link } from 'react-router-dom';
import s from "./index.module.scss";

class ItemPreview extends Component {
    render() {
        return <div className={s.item}>
            <div className={s.body}>

                <div className={s.addToFavorite}>
                    <FavoriteButton active={this.props.like} />
                </div>

                <Link to={'item/' + this.props.id}>
                    <div className={s.imgBlock}>
                        {this.props.picture
                            ? <img src={this.props.baseUrl + this.props.picture.path} alt={this.props.picture.alt} />
                            : "нет картинки"
                        }
                    </div>
                    <div className={s.lable}>
                        {this.props.name}
                    </div>
                    <span className={s.price}>
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

export default ItemPreview;