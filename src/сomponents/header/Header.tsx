import React from "react";
import { useHistory } from 'react-router-dom';
import SearchForm, { ISearchFunction } from "../search-form/SearchForm";
import Menu from "../menu/Menu";
import s from "./index.module.scss"

const Header = () => {

    const history = useHistory();

    const search: ISearchFunction = (value) => {
        const path = `/catalog?${value}`;
        history.push(path);
    }

    return <header className={s.header}>
        <SearchForm searchFunction={search} />
        <Menu />
    </header>

}
export default Header;