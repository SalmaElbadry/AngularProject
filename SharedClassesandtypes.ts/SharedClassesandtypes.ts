export interface IProduct{
    ID: number;
    Name: string;
    Quantity: number;
    Price: number;
    img: string;

}

export interface ICategory{
    ID: number;
    Name: string;
}

export enum DiscountOffers {
    NoDiscount ,
     "10%",
     "15%",
}
