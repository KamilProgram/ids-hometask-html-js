import { Component } from "react";
import { SearchForm } from "./search-form/SearchForm";
import { Menu } from "./menu/Menu";
import s from "./index.module.scss"

class Header extends Component {
    search = (text) => {
        const path = `/catalog?${text}`;
        this.props.history.push(path);
    }

    render() {
        return <header className={s.header}>
            <SearchForm searchFunction={this.search} />
            <Menu />
        </header>
    }
}
export default Header;