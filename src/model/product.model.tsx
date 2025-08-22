export interface ProductVO  {
    id: number;
    rating: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    taxPercentage:number;
    shippingCharge:number;
    payableAmount:number;

}