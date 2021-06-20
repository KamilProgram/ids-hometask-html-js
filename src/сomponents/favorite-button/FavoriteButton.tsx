import { useEffect, useState, FC } from "react";
import s from "./index.module.scss"
import Icon from "../common/icon/Icon";

interface IProps {
    like: boolean
}

const FavoriteButton: FC<IProps> = ({ like }) => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(like);
    }, [like])

    const handlerButton = () => {
        setActive(!active);
    }

    return <button onClick={() => handlerButton()} className={`${s.favoriteButton} ${active ? s.active : ''}`}>
        <Icon id="favorite" className={s.iconActive} />
        <Icon id="favorite_border" className={s.iconDisable} />
    </button>

}
export default FavoriteButton;