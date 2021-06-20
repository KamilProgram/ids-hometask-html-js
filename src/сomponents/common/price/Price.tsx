import React, { FC } from "react"
import { IPrice } from '../../../models/product';

interface IProps extends IPrice {
    className?: string
}

const Price: FC<IProps> = ({ currency, value, className }) => {
    return <span className={className}>
        {value ? `${currency === 'USD' ? '$' : ''}${value}` : "Цена не указана"}
    </span>
}

export default Price;