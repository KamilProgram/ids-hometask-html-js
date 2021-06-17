import { Component } from "react";
import s from "./index.module.scss"
import icons from "../../../assets/icons-sprite.svg"

export class Menu extends Component {
    render() {
        return <ul className={s.menu}>
            <li>
                <svg> <use xlinkHref={`${icons}#shopping_cart`} /> </svg>
            </li>
            <li>
                <svg> <use xlinkHref={`${icons}#account_circle`} /> </svg>
            </li>
        </ul>
    }
}