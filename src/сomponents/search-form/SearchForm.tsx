import { useState, FC } from "react";
import s from "./index.module.scss"
import Icon from "../common/icon/Icon";
import { debounce } from "../../utils/debounce";

export interface ISearchFunction {
    (value: string): void;
}

interface IProps {
    searchFunction: ISearchFunction
}

const SearchForm: FC<IProps> = ({ searchFunction }) => {


    const [searchInput, setSearchInput] = useState('')

    const onChangeSearchInput = (value: string) => {
        setSearchInput(value);
        search(value);
    }

    const search = (value: string) => debounce(searchFunction(value), 500);

    return <div className={s.search} id="search-form">
        <input id="text-to-find" type="text"
            onChange={(e) => onChangeSearchInput(e.currentTarget.value)}
            placeholder="Search products"
            value={searchInput} />
        <button>
            <Icon id="search" />
        </button>
    </div>
}

export default SearchForm;