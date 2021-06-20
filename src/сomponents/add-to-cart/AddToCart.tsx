import React, { useState, FC } from "react"
import FavoriteButton from "../favorite-button/FavoriteButton"
import s from "./index.module.scss";
import { IPrice } from "../../models/product";
import Icon from "../common/icon/Icon";
import Price from "../common/price/Price";

interface IProps {
    like: boolean,
    price: IPrice
}


const AddToCart: FC<IProps> = ({ price, like }) => {
    const [count, setCount] = useState<number>(1);

    const addCount = () => {
        if (count < 100) {
            setCount(count + 1);
        }
    }

    const subCount = () => {
        if (count > 0) {
            setCount(count - 1);
        };
    }


    const onChangeCount = (value: string) => {
        const num = Number(value)
        if (num >= 0 && num <= 100) setCount(num);
    }

    return <div className={s.body}>
        <Price {...price} className={s.price} />

        <div className={s.quantity} >
            <button onClick={() => subCount()} className={s.minusBtn}>
                <Icon id="remove" />
            </button>

            <input onChange={e => onChangeCount(e.currentTarget.value)} id="countValue" type="text" value={count} />

            <button onClick={() => addCount()} className={s.plusBtn} >
                <Icon id="add" />
            </button>
        </div>

        <div className={s.addBtn}>
            <button> Add to cart </button>
        </div>

        <div className={s.addToFavorite} >
            <FavoriteButton like={like} />
        </div>
    </div>
}


export default AddToCart;