import React from "react";
import SearchForm from "./search-form/SearchForm";
import Menu from "./menu/Menu";
import s from "./index.module.scss"

const Header = ({ history }) => {
    const search = (text) => {
        const path = `/catalog?${text}`;
        history.push(path);
    }

    return <header className={s.header}>
        <SearchForm searchFunction={search} />
        <Menu />
    </header>

}
export default Header;