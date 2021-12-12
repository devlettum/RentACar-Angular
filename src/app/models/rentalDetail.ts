export interface RentalDetail{
    id:number;
    carName:string;
    customerName:string;
    brandName:string;
    dailyPrice:number;
    totalPrice:number;
    rentDate:Date;
    returnDate?:Date;
}