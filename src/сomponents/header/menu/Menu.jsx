import React from "react";
import s from "./index.module.scss"
import icons from "../../../assets/icons-sprite.svg"

const Menu = () => {

    return <ul className={s.menu}>
        <li>
            <svg> <use xlinkHref={`${icons}#shopping_cart`} /> </svg>
        </li>
        <li>
            <svg> <use xlinkHref={`${icons}#account_circle`} /> </svg>
        </li>
    </ul>

}

export default Menu