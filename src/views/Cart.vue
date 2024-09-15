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
      div.cart-product.d-flex.gap-3
          div.card-img
            img(src="../assets/images/products/Frame 33 (1).png")
          div.card-description.card-body
            div.product-name.d-flex.between
              h5  Gradient Graphic T-shirt
              i.fa-solid.fa-trash-can.delete
            div.d-flex
              p.mb-0 Size:
              span Large
            div.d-flex
              p.mb-0 Color: 
              span White
            div.d-flex.between.cart-price
              span $145
              div.div.counter.between.bg-custom.gap-md-4.gap-2
                  i.bi.bi-plus-lg
                  span 1
                  i.bi.bi-dash-lg
      .div.cart-line.my-4
      div.cart-product.d-flex.gap-3
          div.card-img
            img(src="../assets/images/products/gggg.png")
          div.card-description.card-body
            div.product-name.d-flex.between
              h5 Checkered Shirt 
              i.fa-solid.fa-trash-can.delete
            div.d-flex
              p.mb-0 Size:
              span Medium
            div.d-flex
              p.mb-0 Color: 
              span Red
            div.d-flex.between.cart-price
              span $180
              div.div.counter.between.bg-custom.gap-md-4.gap-2
                  i.bi.bi-plus-lg
                  span 1
                  i.bi.bi-dash-lg
      .div.cart-line.my-4
      div.cart-product.d-flex.gap-3
          div.card-img
            img(src="../assets/images/products/Frame 33 (2).png")
          div.card-description.card-body
            div.product-name.d-flex.between
              h5 Skinny Fit Jeans
              i.fa-solid.fa-trash-can.delete
            div.d-flex
              p.mb-0 Size:
              span large
            div.d-flex
              p.mb-0 Color: 
              span Blue
            div.d-flex.between.cart-price
              span $240
              div.div.counter.between.bg-custom.gap-md-4.gap-2
                  i.bi.bi-plus-lg
                  span 1
                  i.bi.bi-dash-lg
            
    div.cart-products.col.col-lg-4.p-3
      div
        h3.h3 Order Summary
        div.order-Summary.mt-4.d-flex.flex-column.gap-2
          div.d-flex.between.order
            p.mb-0 Subtotal
            span $565
          div.d-flex.between.Discount.order
            p.mb-0 Discount (-20%)
            span -$113
          div.d-flex.between.order
            p.mb-0 Delivery Fee
            span $15
        div.cart-line.my-3 
        div.d-flex.between.order
            p.total.mb-0 Total
            span $467 
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
    
<script lang="ts">
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
.delete{
  color: #FF3333;
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
    