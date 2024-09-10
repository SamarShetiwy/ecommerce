<template lang="pug">
div.hero-section-parent.bg-custom.d-flex-gap-5
    .hero-section.container.mt-5.d-flex.pt-3.gap-5
        .col-md-6.col-sm-12.py-5.d-flex.flex-column.gap-5
            .hero-box.d-flex.flex-column.gap-3
                h1.box-tittle FIND CLOTHES THAT MATCHES YOUR STYLE
                p.box-text Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                btn.box-btn.center  Shop Now
            .box-info.d-flex.align-items-start.gap-3 
                .info.text-start 
                    span +200
                    p International Brands
                .box-line
                .info.text-start 
                    span +2,000
                    p High-Quality Products
                .box-line       
                .info.text-start 
                    span +30,000
                    p Happy Customers
                .box-line
        .col-6          
            .hero-img.position-relative.d-flex 
                img.star1(src="../assets/images/hero-section/Vector.png" alt="")
                img.hero-bg(src="../assets/images/hero-section/Rectangle 2.png" alt="")
                img.star2(src="../assets/images/hero-section/Vector.png" alt="")

                //-    section brand
            
.brand.bg-black.py-4.px-1
    .brand-box.between.container
        img(src="../assets/images/brand/Vector.png" alt="")
        img(src="../assets/images/brand/Vector (1).png" alt="")
        img(src="../assets/images/brand/gucci-logo-1 1.png" alt="")
        img(src="../assets/images/brand/Group.png" alt="")
        img(src="../assets/images/brand/Vector (2).png" alt="")

              //-    section trending 

.trending.mt-5
    h1.trending-tittle.center NEW ARRIVALS
    Products 
.trending-line
.trending.mt-5
    h1.trending-tittle.center TOP SALLING
    Products    

            //-    BROWSE BY dress STYLE                  

        
</template>

<script setup lang="ts">
import Products from '../components/Products.vue'

</script>

<style scoped>

.box-tittle{
font-size: 64px;
font-weight: 700;
line-height: 64px;
text-align: left;
}
.box-btn{
width:210px;
padding: 1rem;
gap: 12px;
border-radius: 62px;
opacity: 0px;
background-color: #000000;
color: #FFFFFF;
}
.bx-line{
  border: 1px solid #0000001A;
  height: 74px;
}
.hero-bg{
    width: 100%;
    height: 100%;
}
.star1{
    position: absolute;
    top: 16rem;
    left:0;
    width: 3rem;
}
.star2{
    position: absolute;
    top: 5rem;
    right: 0;
    width: 5rem;
}
.info span{
    color:#000000;
    font-size: 40px;
    font-weight: 700;
}



</style>
