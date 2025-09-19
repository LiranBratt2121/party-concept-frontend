import { Catagory } from "./catagory";

export interface Product {
    id: string;
    name: string;
    priceShekel: number;
    description: string;
    imageUrl: string;
    category: Catagory;
}

