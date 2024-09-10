<template lang="pug">
div.signup.bg-black
    div.flex.justify-content-center.align-items-center
        p Sign up and get 20% off to your first order  
        span.ml-2
            a.text-white(href="#") Sign Up Now
div.container.mt-4
    navbar.navbar.navbar-expand-lg.bg-custom
        .container-fluid
            router-link(to="/home").navbar-brand SHOP.CO
            button.navbar-toggler(type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation")
                span.navbar-toggler-icon
            .collapse.navbar-collapse(id="navbarSupportedContent") 
                ul.navbar-nav.me-auto.mb-2.mb-lg-0
                    li.nav-item.dropdown
                        a.nav-link.dropdown-toggle(href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false") Dropdown
                        ul.dropdown-menu
                            li
                                a.dropdown-item(href="#") Action
                            li
                                a.dropdown-item(href="#") Another action
                    li.nav-item 
                        a.nav-link.active(aria-current="page" href="#") home 
                    li.nav-item 
                        a.nav-link.active(aria-current="page" href="#") home 
                    li.nav-item
                        a.nav-link.active(aria-current="page" href="#") home 
                    form.d-flex(role="search")
                    icon
                        input.form-control.me-2(type="search" placeholder="Search" aria-label="Search")
            i.bi.bi-person.bg-black.w-24.h-24
            
</template>

<script setup>

</script>

<style lang="css" scoped>

.signup {
  height: 38px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>