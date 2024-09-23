import { defineStore } from 'pinia';
import type { DataProduct } from '../api/api';

interface CartItem {
  product: DataProduct;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as CartItem[],
  }),
  actions: {
    addToCart(product: DataProduct, quantity: number) {
      const existingItem = this.cartItems.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cartItems.push({ product, quantity });
      }
    },
    async FetchCartItems() {
      try {
          const cartsResponse = await fetch('https://fakestoreapi.com/carts');
          const productsResponse = await fetch('https://fakestoreapi.com/products');
          const carts = await cartsResponse.json();
          const products = await productsResponse.json();
            this.cartItems = carts.flatMap(cart => 
              cart.products.map(product => {
                  const productDetails = products.find(p => p.id === product.productId);
                  return {
                      product: productDetails,
                      quantity: product.quantity,
                  };
              })
          );
  
          console.log(this.cartItems);
      } catch (error) {
          console.error('Error fetching cart items', error);
      }
  
  },
    updateQuantity(productId: number, quantity: number) {
      const item = this.cartItems.find(item => item.product.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeProduct(productId: number) {
      this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
      // cartStore.$reset();
    },
    plusQuantity(productId: number) {
      const item = this.cartItems.find(item => item.product.id === productId);
      if (item) {
        item.quantity += 1; 
      }
    },
    minusQuantity(productId: number) {
      const item = this.cartItems.find(item => item.product.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
  getters: {
      totalQuantity: (state) => {
        return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  },
  
  persist: true,
}
});
