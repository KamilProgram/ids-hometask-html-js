import React, { useEffect, useState } from "react";
import s from "./index.module.scss"
import icons from "../../assets/icons-sprite.svg"

const FavoriteButton = (props) => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active])

    const handlerButton = () => {
        setActive(!active);
    }


    return <button onClick={() => handlerButton()} className={`${s.favoriteButton} ${active ? s.active : ''}`}>
        <svg className={s.iconActive}>
            <use xlinkHref={`${icons}#favorite`} />
        </svg>
        <svg className={s.iconDisable}>
            <use xlinkHref={`${icons}#favorite_border`} />
        </svg>
    </button>

}
export default FavoriteButton;