interface IProduct{
    ID: number;
    Name: string;
    Quantity: number;
    Price: number;
    img: string;

}

interface ICategory{
    ID: number;
    Name: string;
}

enum DiscountOffers {
    NoDiscount ,
     "10%",
     "15%",
}
