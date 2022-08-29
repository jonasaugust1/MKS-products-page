export interface GetProductResults {
    products: Product[];
}

export type Product = {
    id:          number;
    name:	     string;
    brand:	     string
    description: string;
    photo:       string;
    price:       number;
    quantity:    number;
}

