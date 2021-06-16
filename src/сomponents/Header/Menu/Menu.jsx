import { Component } from "react";
import styles from "./Menu.module.scss"

export class Menu extends Component {
    render() {
        return <ul className={styles.menu}>
            <li>
                <img className="icon-img" src="/assets/icons/shopping_cart.svg" alt="shopping_cart" />
            </li>
            <li>
                <img className="icon-img" src="/assets/icons/account_circle.svg" alt="account" />
            </li>
        </ul>
    }
}