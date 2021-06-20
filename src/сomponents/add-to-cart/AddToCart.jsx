import React, { useState } from "react"
import FavoriteButton from "../favorite-button/FavoriteButton"
import s from "./index.module.scss";
import icons from "../../assets/icons-sprite.svg"

const AddToCart = ({ price, like }) => {
    const [count, setCount] = useState(1);

    const addCount = () => {
        if (count < 100) {
            setCount(Number(count) + 1);
        }
    }

    const subCount = () => {
        if (count > 0) {
            setCount(Number(count) - 1);
        };
    }

    const onChangeCount = (value) => {
        if (!isNaN(value)) setCount(value);
    }

    return <div className={s.body}>
        <span className={s.price}>
            {price
                ? `${price.currency === 'USD' ? '$' : ''}${price.value}`
                : "Цена не указана"
            }
        </span>

        <div className={s.quantity} >
            <button onClick={() => subCount()} className={s.minusBtn}>
                <svg>
                    <use xlinkHref={`${icons}#remove`} />
                </svg>
            </button>

            <input onChange={e => onChangeCount(e.target.value)} id="countValue" type="text" value={count} />

            <button onClick={() => addCount()} className={s.plusBtn} >
                <svg>
                    <use xlinkHref={`${icons}#add`} />
                </svg>
            </button>
        </div>

        <div className={s.addBtn}>
            <button> Add to cart </button>
        </div>

        <div className={s.addToFavorite} >
            <FavoriteButton active={like} />
        </div>
    </div>
}


export default AddToCart;