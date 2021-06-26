export interface IProduct {
    id: string
    name: string
    description: string
    info: string
    details: string
    like: boolean
    picture: IPicture
    price: IPrice
}
export interface IProductPreview {
    id: string
    name: string
    description: string
    like: boolean
    picture: IPicture
    price: IPrice
}
export interface IPrice {
    currency: "USD" | "RUB"
    value: number
}
export interface IPicture {
    path: string,
    alt: string,
    src: string
}