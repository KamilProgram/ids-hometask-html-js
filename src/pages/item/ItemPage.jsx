import { useEffect, useState } from "react";
import { API, baseURL } from "../../api/api";
import { useParams, withRouter } from 'react-router-dom';
import AddToCart from "../../сomponents/add-to-cart/AddToCart";
import s from "./index.module.scss";

const ItemCardPage = () => {

    const [item, setItem] = useState(null);

    const params = useParams();

    useEffect(() => {
        const userId = params.userId;
        if (userId) {
            API.getItem(userId).then(response => {
                setItem(response);
            })
        }
    }, [params]);



    return <>{item && <div className={s.body}>
        <div className={s.imgBlock}>
            {item.picture
                ? <img src={baseURL + item.picture.path} alt={item.picture.alt} />
                : "нет картинки"
            }
        </div>
        <div className={s.description}>
            <h2>{item.name}</h2>
            <p>{item.info}</p>
            <h3>{item.description}</h3>
            <p>{item.details}</p>

            <AddToCart price={item.price} like={item.like} />
        </div>
    </div>

    }</>

}
export default withRouter(ItemCardPage);