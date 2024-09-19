
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
    updateQuantity(productId: number, quantity: number) {
      const item = this.cartItems.find(item => item.product.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    persist: {
      storage: localStorage ,
      paths: ['cartItems'],
  },
  },
});
