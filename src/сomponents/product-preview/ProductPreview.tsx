import React, { FC } from "react";
import FavoriteButton from "../favorite-button/FavoriteButton";
import { Link } from 'react-router-dom';
import s from "./index.module.scss";
import { IProductPreview } from "../../models/product";
import Picture from "../common/picture/Picture";
import Price from "../common/price/Price";


const ProductPreview: FC<IProductPreview> = ({ like, picture, name, price, id }) => {

    return <div className={s.item}>
        <div className={s.body}>

            <div className={s.addToFavorite}>
                <FavoriteButton like={like} />
            </div>

            <Link to={'catalog/' + id}>
                <Picture {...picture} className={s.imgBlock} />
                <div className={s.lable}>
                    {name}
                </div>
                <Price {...price} className={s.price} />
            </Link>
        </div>
    </div>

}

export default ProductPreview;