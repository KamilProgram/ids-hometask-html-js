import { Component } from "react";
import styles from "./SearchForm.module.scss"

export class SearchForm extends Component {
    state = {
        searchInput: ''
    }

    setSearchInput = (text) => {
        this.setState(() => {
            return { findInput: text }
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
        return <div className={styles.search} id="search-form">
            <input id="text-to-find" type="text"
                onChange={(e) => this.onChangeSearchInput(e)}
                onKeyDown={e => { if (e.key === 'Enter') this.search() }}
                placeholder="Search products"
                value={this.state.searchInput} />

            <button onClick={() => this.search()}></button>
        </div>
    }
}