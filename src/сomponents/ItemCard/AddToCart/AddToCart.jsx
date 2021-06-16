import { Component } from "react"
import { FavoriteButton } from "../../common/FavoriteButton";
import styles from "./AddToCart.module.scss";


export class AddToCart extends Component {
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



        return <div className={styles.body}>
            <span className={styles.price}>
                {this.props.price
                    ? `${this.props.price.currency === 'USD' ? '$' : ''}${this.props.price.value}`
                    : "Цена не указана"
                }
            </span>

            <div className={styles.quantity} >
                <button onClick={() => this.subCount()} className={styles.minusBtn}>
                    <img src="/assets/icons/remove.svg" alt="remove" />
                </button>

                <input onChange={e => onChangeCount(e)} id="countValue" type="text" value={this.state.count} />

                <button onClick={() => this.addCount()} className={styles.plusBtn} >
                    <img src="/assets/icons/add.svg" alt="add" />
                </button>
            </div>

            <div className={styles.addBtn}>
                <button> Add to cart </button>
            </div>

            <div className={styles.addToFavorite} >
                <FavoriteButton active={this.props.like} />
            </div>
        </div>
    }
}