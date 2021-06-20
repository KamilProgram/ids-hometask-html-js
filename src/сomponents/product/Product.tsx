import { IProduct } from './../../models/product';
import React, { FC } from "react";
import s from './index.module.scss';
import AddToCart from '../add-to-cart/AddToCart';
import Picture from '../common/picture/Picture';


const Product: FC<IProduct> = ({ picture, name, info, description, details, price, like }) => {

    return <div className={s.body}>
        <Picture {...picture} className={s.imgBlock} />
        <div className={s.description} >
            <h2>{name}</h2>
            <p>{info}</p>
            <h3>{description}</h3>
            <p>{details}</p>

            <AddToCart price={price} like={like} />
        </div>
    </div>

};
export default Product;

