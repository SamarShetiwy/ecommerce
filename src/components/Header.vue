<template lang="pug">
div.signup.bg-black
    div.center.gap-3.offer
        p.head.mb-0 Sign up and get 20% off to your first order  
        span.ml-2
            a.text-white(href="#") Sign Up Now
div.container.mt-4
    navbar.navbar.navbar-expand-lg
        .container-fluid.gap-3
            router-link(to="/home").navbar-brand 
                h2 SHOP.CO
            button.navbar-toggler(type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation")
                span.navbar-toggler-icon
            .collapse.navbar-collapse(id="navbarSupportedContent") 
                ul.navbar-nav.me-auto.mb-2.mb-lg-0
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
            form.form-header.d-flex(role="search").bg-custom.gap-1.px-3
                        i.bi.bi-search
                        input.form-control.me-2.bg-custom(type="search" placeholder="Search for products..." aria-label="Search")
            div.center.gap-3      
                i.bi.bi-cart.w-24.h-24
                i.bi.bi-person-circle.w-24.h-24
            
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
.head{
    color: #FFFFFF;
}
.navbar h1{
    font-weight: 900;
font-size: 32px;
line-height: 38.4px;
text-align: left;
color: #000000;

}
input{
    /* width: 577px; */
    background-color: #F0F0F0;
    border:none;
    padding: 12px, 16px, 12px, 16px;
    color:#00000066

}
.form-header{
    border-radius: 62px;
    width: 515px;
    text-align: center;
    align-items: center;
    color:#00000066
}

</style>