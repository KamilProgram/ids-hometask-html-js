import { Component } from "react";
import styles from "./FavoriteButton.module.scss"

export class FavoriteButton extends Component {
    componentDidMount() {
        this.setState((state) => {
            return { active: this.props.active, }
        });
    }
    state = {
        active: false
    }

    handlerButton = () => {
        this.setState((state) => {
            return { active: !state.active, }
        });
    }

    render() {
        return <button onClick={() => this.handlerButton()} className={`${styles.favoriteButton} ${this.state.active ? styles.active : ''}`}></button>
    }
}