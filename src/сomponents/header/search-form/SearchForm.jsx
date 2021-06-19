import React, { useState } from "react";
import s from "./index.module.scss"
import icons from "../../../assets/icons-sprite.svg"
import { debounce } from "../../../utils/debounce";


const SearchForm = ({ searchFunction }) => {

    const [searchInput, setSearchInput] = useState('')

    const onChangeSearchInput = (value) => {
        setSearchInput(value);
        search();
    }

    const search = debounce(() => searchFunction(searchInput), 1000);


    return <div className={s.search} id="search-form">
        <input id="text-to-find" type="text"
            onChange={(e) => onChangeSearchInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') search() }}
            placeholder="Search products"
            value={searchInput} />

        <button onClick={() => search()}>
            <svg>
                <use xlinkHref={`${icons}#search`} />
            </svg>
        </button>
    </div>
}

export default SearchForm;