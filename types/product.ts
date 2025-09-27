import { Catagory } from "./catagory";

export interface Product {
    id: string;
    name: string;
    priceShekel: number;
    description: string;
    headImageUrl: string;
    additionalImageUrls: string[];
    category: Catagory;
}

