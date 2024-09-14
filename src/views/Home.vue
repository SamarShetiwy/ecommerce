<template lang="pug">
div.hero-section-parent.bg-custom.d-flex-gap-5
    .hero-section.container.mt-md-5.d-flex.pt-md-3.gap-5.pt-0.mt-1
        .col-md-6.col.pt-5.d-flex.flex-column.gap-5
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
                .box-line.d-none.d-md-block       
                .info.text-start 
                    span +30,000
                    p Happy Customers
        .col-md-6.col         
            .hero-img.position-relative.d-flex 
                img.star1(src="../assets/images/hero-section/Vector.png" alt="")
                img.hero-bg(src="../assets/images/hero-section/Rectangle 2.png" alt="")
                img.star2(src="../assets/images/hero-section/Vector.png" alt="")

                //-    section brand
            
.brand.bg-black.py-4.px-1
    .row.brand-box.center.gap-lg-5.gap-2
            img.col-4.col-sm-5.col-md-2(src="../assets/images/brand/Vector.png" alt="")
            img.img-brand.col-5.col-md-2(src="../assets/images/brand/Vector (1).png" alt="")
            img.col-4.col-sm-5.col-md-2(src="../assets/images/brand/gucci-logo-1 1.png" alt="")
            img.col-4.col-sm-5.col-md-2(src="../assets/images/brand/Group.png" alt="")
            img.col-4.col-sm-5.col-md-2(src="../assets/images/brand/Vector (2).png" alt="")

              //-    section trending 

.trending.mt-5
    h1.trending-tittle.center NEW ARRIVALS
    Products 
.trending-line
.trending.mt-5
    h1.trending-tittle.center TOP SALLING
    Products
div.card-btn.center.mt-5
    .btn View All               

            //-    BROWSE BY dress STYLE 
.container.dress-style.bg-custom.mt-5.py-5.center.flex-column
    h1.pt-1.pb-4 BROWSE BY DRESS STYLE
    div.py-0.p-sm-3.upper-section.row.center.gap-3
            .item.item1.col-sm-4.col-12
                h2.px-4.py-md-3.py-0 Casual
                img(src="../assets/images/dress-style-section/1.png" alt="")
            .item.item2.col-sm-7.col-12
                h2.px-4.py-md-3.py-0 Formal
                img(src="../assets/images/dress-style-section/2.png" alt="" style="height: 90%")
    div.px-0.px-sm-3.upper-section.row.center.gap-3
            .item.item1.col-sm-7.col-12
                h2.px-4.py-md-3.py-0 Party
                img(src="../assets/images/dress-style-section/3.png" alt="")
            .item.item2.col-sm-4.col-12
                h2.px-4.py-md-3.py-0 Gym
                img(src="../assets/images/dress-style-section/4.png" alt="" style="height: 90%")

                //- OUR HAPPY CUSTOMERS
div.slider.mt-5
    Slider


</template>
<script setup lang="ts">
import Products from '../components/Products.vue';
import Slider from '../components/slider.vue';
import Footer from '../components/Footer.vue';

</script>

<style scoped>

.box-tittle{
font-size: 62px;
line-height: 64px;
text-align: left;
font-weight: 700;

}
.item h2{
    font-size: 36px;
}
.brand-box img{
    max-width:194px;
}
.img-brand{
   width:150px;
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
.box-tittle{
    font-size: 36px;
    line-height: 34px;
}
.box-line{
    border: 1px solid #0000001A;
    height: 74px;
}
.box-btn[data-v-2dc54a20] {
    width: 100%;
}
.hero-bg{
    width: 100%;
    aspect-ratio: 1 /1.1;
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
.box-line{
    height: 45px;
}
h1{
    font-weight: 700;

}
.dress-style{
    border-radius: 40px;
}
.dress-style h1{
font-size: 48px;
line-height: 57.6px;
text-align: center;
font-weight: 700;
}
.item img {
    width: 100%; 
    height: auto;
    border-radius: 20px;
    position:relative; 
}

h2{
    position: absolute;
    font-family: Satoshi;
font-size: 36px;
font-weight: 700;
line-height: 48.6px;
text-align: left;
color: #000000;
z-index: 100;
}

@media (max-width: 576px) {

.hero-section{
    flex-direction: column;
}
.item {
    height: 200px;

}
.item img{
    height: 100%;
}
.info span, p{
    font-size: 12px;
}
.box-info{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.info{
    flex:1 1 33,33%;
    max-width: 33,33%;
}

.dress-style h1{
    font-size: 30px;
    line-height: 36px;
    width: 246px;
}

.img-brand{
    width: 110px;
}
.star1 {
    top: 7rem;
    left: 14px;
}
.star2 {
    top: 1rem;
    right: 10px;
}
}


@media (min-width: 575.98px) and (max-width: 992px) {
.box-tittle{
    font-size: 38px;
}
.item h2{
    font-size: 24px;
    
}
.item {
    height: 190px;
    height: fit-content;
}
.item img{
    height: 100%;
}
/* div .row{
    display: flex;
    flex-direction: column;
} */
}




</style>
