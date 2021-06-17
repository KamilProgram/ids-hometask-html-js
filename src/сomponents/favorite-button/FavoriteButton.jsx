import { Component } from "react";
import s from "./index.module.scss"
import icons from "../../assets/icons-sprite.svg"

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
        return <button onClick={() => this.handlerButton()} className={`${s.favoriteButton} ${this.state.active ? s.active : ''}`}>
            <svg className={s.iconActive}>
                <use xlinkHref={`${icons}#favorite`} />
            </svg>
            <svg className={s.iconDisable}>
                <use xlinkHref={`${icons}#favorite_border`} />
            </svg>
        </button>
    }
}
export default FavoriteButton;