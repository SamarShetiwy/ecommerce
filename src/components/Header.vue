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
          button.navbar-toggler(type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation")
            span.navbar-toggler-icon
          router-link(to="/home" class="navbar-brand")
            h1.pb-0 SHOP.CO
        .collapse.navbar-collapse(id="navbarSupportedContent")
          ul.navbar-nav.me-auto.mb-2.mb-lg-0.d-flex.gap-2
            li.nav-item.dropdown
              a.nav-link.dropdown-toggle(href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false") Shop
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
        div.d-flex.bg-custom.justify-content-center.text-align-center
          i.bi.bi-search.w-24.h-24
          form.form-header.d-flex.bg-custom.gap-1.px-3.d-none.d-md-block.d-sm-flex.align-items-center(role="search")
              input.form-control.bg-custom.d-none.d-lg-block(type="search" placeholder="Search for products..." aria-label="Search")
        div.icons-header.center.gap-2.gap-md-3
          i.bi.bi-search.w-24.h-24.d-block.d-md-none
          i.bi.bi-cart.w-24.h-24
          i.bi.bi-person-circle.w-24.h-24
//- div.container.line
</template>

<script setup>

</script>

<style lang="css" scoped>

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
input{
    /* width: 577px; */
  
    border:none;
    padding: 12px 16px 12px 16px;
    color:#00000066;
    border: none;
    background-color: #F0F0F0;
}

.form-header{
    border-radius: 62px;
    padding: 7px 64px ;
    background-color: #F0F0F0;
    /* width: 515px; */
    text-align: center;
    align-items: center;
    color:#00000066;
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

@media (max-width: 768px){

}



</style>