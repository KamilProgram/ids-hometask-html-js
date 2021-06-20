import { Component } from "react";
import s from "./index.module.scss"
import icons from "../../../assets/icons-sprite.svg"

export class SearchForm extends Component {
    state = {
        searchInput: ''
    }

    setSearchInput = (text) => {
        this.setState(() => {
            return { searchInput: text }
        })
    }

    onChangeSearchInput = (e) => {
        e.preventDefault();
        const newText = e.target.value;
        this.setSearchInput(newText);
    }

    search() {
        this.props.searchFunction(this.state.searchInput);
    }


    render() {

        return <div className={s.search} id="search-form">
            <input id="text-to-find" type="text"
                onChange={(e) => this.onChangeSearchInput(e)}
                onKeyDown={e => { if (e.key === 'Enter') this.search() }}
                placeholder="Search products"
                value={this.state.searchInput} />

            <button onClick={() => this.search()}>
                <svg>
                    <use xlinkHref={`${icons}#search`} />
                </svg>
            </button>
        </div>
    }
}