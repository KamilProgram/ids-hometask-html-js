import React, { FC } from "react"
import { baseURL } from "../../../API";
import { IPicture } from '../../../models/product';

interface IProps extends IPicture {
    className?: string
}

const Picture: FC<IProps> = ({ path, alt, className }) => {
    return <div className={className}>
        {path ? <img src={baseURL + path} alt={alt} /> : "нет картинки"}
    </div>
}

export default Picture;