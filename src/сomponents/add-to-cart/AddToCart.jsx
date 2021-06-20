import { Component } from "react"
import FavoriteButton from "../favorite-button/FavoriteButton"
import s from "./index.module.scss";
import icons from "../../assets/icons-sprite.svg"

class AddToCart extends Component {
    state = {
        count: 1
    }

    setCount = (newCount) => {

        this.setState(() => {
            return { count: newCount }
        })
    }

    addCount = () => {
        let value = this.state.count;
        if (value < 100) {
            this.setCount(value + 1);
        }

    }

    subCount = () => {
        const value = this.state.count;
        if (value > 0) {
            this.setCount(value - 1);
        };

    }
    render() {
        const onChangeCount = (e) => {
            e.preventDefault();
            this.setCount(e.target.value);
        }



        return <div className={s.body}>
            <span className={s.price}>
                {this.props.price
                    ? `${this.props.price.currency === 'USD' ? '$' : ''}${this.props.price.value}`
                    : "Цена не указана"
                }
            </span>

            <div className={s.quantity} >
                <button onClick={() => this.subCount()} className={s.minusBtn}>
                    {/*    <img src="/assets/icons/remove.svg" alt="remove" /> */}
                    <svg>
                        <use xlinkHref={`${icons}#remove`} />
                    </svg>
                </button>

                <input onChange={e => onChangeCount(e)} id="countValue" type="text" value={this.state.count} />

                <button onClick={() => this.addCount()} className={s.plusBtn} >
                    {/*  <img src="/assets/icons/add.svg" alt="add" /> */}
                    <svg>
                        <use xlinkHref={`${icons}#add`} />
                    </svg>
                </button>
            </div>

            <div className={s.addBtn}>
                <button> Add to cart </button>
            </div>

            <div className={s.addToFavorite} >
                <FavoriteButton active={this.props.like} />
            </div>
        </div>
    }
}

export default AddToCart;