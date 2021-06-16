import { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import { Menu } from "./Menu/Menu";
import styles from "./Header.module.scss"

export class Header extends Component {
    render() {
        return <header className={styles.header}>
            <SearchForm searchFunction={this.props.searchFunction} />
            <Menu />
        </header>
    }
}