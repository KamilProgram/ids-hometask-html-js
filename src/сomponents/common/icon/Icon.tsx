import React, { FC } from "react"
import icons from "../../../assets/icons-sprite.svg"

interface IProps {
    id: string
    className?: string
}

const Icon: FC<IProps> = ({ id, className }) => {
    return <svg className={className}>
        <use xlinkHref={`${icons}#${id}`} />
    </svg>
}

export default Icon;