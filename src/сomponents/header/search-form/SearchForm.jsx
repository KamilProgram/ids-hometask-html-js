import { Component } from "react";
import s from "./index.module.scss"
import icons from "../../../assets/icons-sprite.svg"
import { debounce } from "../../../utils/debounce";


export class SearchForm extends Component {
    state = {
        searchInput: ''
    }

    setSearchInput = (text) => {
        this.setState(() => {
            return { searchInput: text }
        })
    }

    onChangeSearchInput = (value) => {
        this.setSearchInput(value);
        this.search();
    }

    search = debounce(() => this.props.searchFunction(this.state.searchInput), 1000);

    render() {

        return <div className={s.search} id="search-form">
            <input id="text-to-find" type="text"
                onChange={(e) => this.onChangeSearchInput(e.target.value)}
                value={this.state.searchInput}
                placeholder="Search products" />
            <button>
                <svg>
                    <use xlinkHref={`${icons}#search`} />
                </svg>
            </button>
        </div>
    }
}