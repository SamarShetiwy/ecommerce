
 export interface DataProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    productData: object,
    SingleProduct :object
}
