<template lang="pug">
div.container.line
div.container
    div.pages.d-flex.gap-3.align-items-center.py-3
        router-link.active(to="/") Home
        i.fa-solid.fa-angle-right
        a(href="") Cart
div.container
    h2.mb-4 YOUR CART
div.container.mb-5
  div.row.cart.d-flex.gap-3.p-3.p-md-0
    div.cart-products.col.col-lg-7.col-12.p-3
      div(v-for="(item, index) in cartStore.cartItems" :key="index")
        div.cart-product.d-flex.gap-3
          div.card-img
            img(:src="item.product.image")
          div.card-description.card-body
            div.product-name.d-flex.between
              h5 {{item.product.title}}
              i.fa-solid.fa-trash-can.delete(@click="removeProduct(item.product.id),cartStore.cartItems.splice(index, 1)")
            div.d-flex
              p.mb-0 Size:
              span Large
            div.d-flex
              p.mb-0 Color: 
              span White
            div.d-flex.between.cart-price
              span ${{item.product.price}}
              div.div.counter.between.bg-custom.gap-md-4.gap-2
                  i.count.bi.bi-plus-lg(@click="plusQuantity(item.product.id)")
                  span {{item.quantity }}
                  i.count.bi.bi-dash-lg(@click="minusQuantity(item.product.id)")
        .div.cart-line.my-4(v-if="index < cartStore.cartItems.length - 1") 
    div.cart-products.col.col-lg-4.p-3
      div
        h3.h3 Order Summary
        div.order-Summary.mt-4.d-flex.flex-column.gap-2
          div.d-flex.between.order
            p.mb-0 Subtotal
            span ${{subtotal.toFixed(2)}}
          div.d-flex.between.Discount.order
            p.mb-0 Discount (-20%)
            span -${{discount.toFixed(2)  }}
          div.d-flex.between.order
            p.mb-0 Delivery Fee
            span $15
        div.cart-line.my-3 
        div.d-flex.between.order
            p.total.mb-0 Total
            span ${{total.toFixed(2)}} 
        div.d-flex.mt-3.between.gap-2
          div.d-flex.promo-code.bg-custom.center.gap-2
            i.center.pl-2.fas.fa-tag
            input.apply.bg-custom(placeholder="Add promo code") 
          div.apply-code
            button.btn(type='submit') Apply
        div.checkout.mt-4.center.gap-3.align-items-center 
          button Go to Checkout  
          i.fa-solid.fa-arrow-right
</template>
    
<script setup lang="ts">
import { useCartStore } from '../stores/cartStore';
import {computed} from 'vue'

const cartStore = useCartStore();

const removeProduct = (productId: number) => {
  cartStore.removeProduct(productId);
};

const plusQuantity = (productId: number) => {
  cartStore.plusQuantity(productId);
};

const minusQuantity = (productId: number) => {
  cartStore.minusQuantity(productId);
};

const subtotal = computed(() => {
  return cartStore.cartItems .reduce((sum, item) => sum + (item.product.price * item.quantity), 0);});

const discount = computed(() => {
  return subtotal.value * 0.20; 
});

const total = computed(() => {
  return subtotal.value - discount.value + 15; 
});
</script>
    
<style scoped>
.line{
  border: 1px solid #0000001A;
}
.pages router-link, a{
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}
.active{
  color:#00000099;
}
.counter{
  padding: 12px 20px ;
  border-radius: 62px;
}
.count{
  cursor: pointer;

}
.delete{
  color: #FF3333;
  cursor: pointer !important;
}

.card-img{
  width: 124px;
  height: auto;
}
img{
  width: 124px;
}
.h3{
  font-weight: 700;
}

.cart-products{
  border: 1px solid #0000001A;
  border-radius: 20px;
  height: 100%;

}

.cart-line{
  border: 1px solid #0000001A;
}
h5, .cart-price span{
  color: #000000;
  font-weight: 700;
}
.order span{
  color: #000000;
font-size: 24px;
font-weight: 700;

}
.total{
  color:#000000;
}
.Discount span{
  color: #FF3333;
}
.promo-code{
  border-radius: 62px; 
}
.promo-code i{
  color:#00000066;
  width: 21px;
  height: 21px;
  padding-top: 0.2rem;
  padding-left: 1rem;
}

.apply{
  padding: 12px 16px ;
  border-radius: 62px;
}

.apply-code button{
  color: #FFFFFF;
  padding: 12px 16px;
  border-radius: 62px;
  background-color: #000000;
}
.apply{
  border: none; 
  outline: none;

}

.checkout{
  padding:16px 54px;
  background-color: #000000;
  border-radius: 62px;
  color: #FFFFFF;
}
.checkout button{
  background-color: #000000;
  border: none;
  color: #FFFFFF;
}
.checkout i{
  color: #FFFFFF;
  
}
.cart{
  margin-bottom: 7rem;
}
@media (max-width: 576px) {
   
  .product-name h5 {
    font-size: 16px;
    text-align: start;
  }
  p, span{
    font-size: 12px;
  }
  .cart-price span{
    font-size: 20px;
  }
  .counter {
   padding: 8px 20px;
    
  }
  .card-body{
    padding: 0.5rem 0;
  }
}
@media (max-width: 767.98px) {
   
   }
</style>
    