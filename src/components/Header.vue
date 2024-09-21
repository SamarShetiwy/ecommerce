<template lang="pug">
div.signup.bg-black
    div.container.gap-3.offer.d-flex.p-3.justify-content-sm-between.justify-content-center
        div.d-none.d-md-block 
        div.center.gap-2.head
            p.mb-0 Sign up and get 20% off to your first order  
            span.ml-2
                a.text-white(href="#") Sign Up Now
        div.offer-icon.d-none.d-md-block 
            i.fas.fa-times           
div.container.p-0
    nav.navbar.container-fluid.gap-lg-4.gap-1.navbar-expand-lg.d-flex.p-3
        div.logo.d-flex.gap-2.center
          button.navbar-toggler(type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" :aria-expanded="hidden" aria-label="Toggle navigation" @click.prevent="hidden =! hidden")
            span.navbar-toggler-icon
          router-link(to="/" class="navbar-brand")
            h1.pb-0 SHOP.CO
        .collapse.navbar-collapse(:class="{show: hidden }" id="").center
          ul.navbar-nav.mb-2.mb-lg-0.d-flex
            li.nav-item.dropdown
              a.nav-link.dropdown-toggle(href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false") Shop
              ul.dropdown-menu
                li
                  a.dropdown-item(href="#") Action
                li
                  a.dropdown-item(href="#") Another action
            li.nav-item
              a.nav-link.active(aria-current="page" href="#") On Sale
            li.nav-item
              a.nav-link.active(aria-current="page" href="#") New Arrivals
            li.nav-item
              a.nav-link.active(aria-current="page" href="#") Brands
        div.form-group.has-search.bg-custom.d-none.d-md-block.px-3
            span
              i.bi.bi-search.input-group-text
            input(type="text" class="form-control" placeholder="Search")
        div.icons-header.center.gap-2.gap-md-2
              i.bi.bi-search.w-24.h-24.d-block.d-md-none
              router-link(to="/Cart")
                  div.d-flex.flex-column.mb-0.cart
                    span.text-red.absolute {{totalQuantity}}
                    i.bi.bi-cart.w-24.h-24 
              i.bi.bi-person-circle.w-24.h-24
//- div.container.line
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cartStore';
import { ref ,computed} from 'vue';

const cartStore = useCartStore();
const hidden =ref (false);

const totalQuantity = computed(() => {
  return cartStore.cartItems.reduce((sum, item) => sum + item.quantity, 0);
});



</script>

<style lang="css" scoped>

.text-red {
  color: red;
}
.signup {
  height: 38px;
  margin: 0 ;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

}
.line{
  border: 1px solid #0000001A;
}
.navbar-brand h1{
  font-size: 32px;
}
.nav-item a{
  font-size: 16px;
}
.navbar-toggler{
  border: none;
  outline: none;
}
.icons-header i {
  color:#000000;
  font-weight: bold;
}

.head p,
.head span,
.offer-icon {
    font-size: 16px;
    color: #FFFFFF;
  }

.navbar h1{
    
font-size: 32px;
line-height: 38.4px;
text-align: left;
color: #000000;

}

.has-search .form-control {
    padding-left: 2.5rem;
    background-color:#F0F0F0;

}
.form-control{
    border: none;
    padding: 10px;
    background-color: #F0F0F0;
    color: #000;
    border-radius: 64px;
}
.form-group{
  border-radius:64px;
  background-color: #F0F0F0;
  

}
.has-search{
  width: 500px;
  background-color:#F0F0F0;
  border-radius:64px;
}
.input-group-text{
    position: absolute;
    z-index: 2;
    display: block;
    border: none;
    width: 2rem;
    height: 2rem;
    line-height: 2.2rem;
    text-align: center;
    pointer-events: none;
    color: #00000066;
    background-color:#F0F0F0;
}
.cart{
  cursor: pointer !important;
  position: relative;
}

.cart span{
  position: absolute;
  top:-16px;
}
.cart:hover{
  transform: scale(1.5);
  cursor: pointer;
}


@media (max-width: 576px) { 
  .head p,
  .head span {
    font-size: 12px;
  }
  .navbar-brand h1 {
    font-size: 25.2px;
  }
  .navbar-toggler-icon {
    width: 28px;
  }
}

@media(min-width: 768px) and (max-width: 991.98px){
  .has-search{
     width: 300px;
  }
    
}
@media(min-width: 992px) and (max-width: 1199.98px){
  .has-search{
     width: 250px;
  }
    
}



</style>