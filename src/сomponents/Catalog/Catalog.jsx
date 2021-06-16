import { Component } from "react"
import styles from "./Catalog.module.scss";
import { ItemPreview } from "./ItemPreview/ItemPreview";

export class Catalog extends Component {
    render() {
        return <section className={styles.catalog}>
            {this.props.items && this.props.items.length ? (
                this.props.items.map(item => {
                    return <ItemPreview key={item.id} baseUrl={this.props.baseUrl} {...item} />
                })
            ) : "Items not found"


            }
        </section>
    }
}