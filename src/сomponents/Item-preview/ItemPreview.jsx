import React from "react";
import FavoriteButton from "../favorite-button/FavoriteButton";
import { Link } from 'react-router-dom';
import s from "./index.module.scss";

const ItemPreview = ({ like, picture, name, price, id, baseUrl }) => {

    return <div className={s.item}>
        <div className={s.body}>

            <div className={s.addToFavorite}>
                <FavoriteButton active={like} />
            </div>

            <Link to={'item/' + id}>
                <div className={s.imgBlock}>
                    {picture
                        ? <img src={baseUrl + picture.path} alt={picture.alt} />
                        : "нет картинки"
                    }
                </div>
                <div className={s.lable}>
                    {name}
                </div>
                <span className={s.price}>
                    {price
                        ? `${price.currency === 'USD' ? '$' : ''}${price.value}`
                        : "Цена не указана"
                    }
                </span>
            </Link>
        </div>
    </div>

}

export default ItemPreview;