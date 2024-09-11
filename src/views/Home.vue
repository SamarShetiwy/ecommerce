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
.container.dress-style.bg-custom.mt-5.py-5
    h1.pt-1.pb-4.center BROWSE BY DRESS STYLE
    div.p-3.upper-section.row.center
            .item.item1.col-4
                h2.px-4.py-4 Casual
                img(src="../assets/images/dress-style-section/1.png" alt="")
            .item.item2.col-7
                h2.px-4.py-4 Formal
                img(src="../assets/images/dress-style-section/2.png" alt="" style="height: 90%")
    div.px-3.upper-section.row.center.gap-3
            .item.item1.col-7
                h2.px-4.py-4 Party
                img(src="../assets/images/dress-style-section/3.png" alt="")
            .item.item2.col-4
                h2.px-4.py-4 Gym
                img(src="../assets/images/dress-style-section/4.png" alt="" style="height: 90%")

                //- OUR HAPPY CUSTOMERS
div.slider.mt-5
    Slider

            //-    footer

Footer

</template>
<script setup lang="ts">
import Products from '../components/Products.vue';
import Slider from '../components/slider.vue';
import Footer from '../components/Footer.vue';

</script>

<style scoped>

.box-tittle{
font-size: 64px;
line-height: 64px;
text-align: left;
font-weight: 900;

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
h1{
    font-weight: 900;

}
.dress-style{
    border-radius: 40px;
}
.dress-style h1{
font-size: 48px;
line-height: 57.6px;
text-align: center;
font-weight: 900;
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




</style>
