import React from "react";
import s from "./index.module.scss"
import Icon from "../common/icon/Icon";

const Menu = () => {

    return <ul className={s.menu}>
        <li> <Icon id="shopping_cart" /> </li>
        <li><Icon id="account_circle" /> </li>
    </ul>

}

export default Menu