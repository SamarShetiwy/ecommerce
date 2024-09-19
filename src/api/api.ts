
export interface DataProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    category: string; 
    description: string; 
}

 export interface CartItem {
    product: DataProduct;
    quantity: number;
  }
