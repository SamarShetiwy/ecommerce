<template lang="pug">
.card.col.col-md-3.col-lg-3.mt-2
    div(v-if='product')  
        router-link(:to="`/product/${product.id}`")
            img.card-img-top(:src="product?.image")
        .card-body.text-black
            p.card-tittle {{product?.title}}
            .product-rate.d-flex.gap-2
                img.card-img-star(src='../assets/images/Frame 10.png')
                span.card-span  {{product?.rating.rate}}
            div.d-flex.gap-2.align-items-center
                span.price1 ${{product?.price}}
                span.price2 {{ (product?.price * 0.20).toFixed(2) }}
                div.price-circle
                    span.price3 -20%                     
</template>

<script setup lang="ts">


import { defineProps } from 'vue';
import type {DataProduct} from '../api/api'

const props = defineProps({
    products: Array,
    product: Object
});
// const props = defineProps<{ products: any[] }>();

</script>

<style lang="css" scoped>

.card{
    border: none;
}
.card-img-top{
    /* border-radius: 1rem;
    max-width: 295px; */
    border-radius: 1rem;
    width: 100%;
    max-width: 170px;
    aspect-ratio: 2 / 2;
}
.card-tittle{
    color: black;
    font-size: 20px;
    font-weight: 700; 
    /* ----------- */
    height: 3rem;
}
.card-span{
    font-size:14px;
}
.card-body{
    color: black;
}
.product-rate span {
  color: #000000;
}
.price1{
font-size: 24px;
font-weight: 700;
line-height: 43.2px;
text-align: left;
color: #000000;
}
.price2{
font-size: 24px;
font-weight: 700;
line-height: 43.2px;
text-align: left;
color: #0000004D;
}
.price-circle{
padding: 6px 14px;
border-radius: 64px;
background-color: #FF33331A;
}
.price3{
font-size: 12px;
font-weight: 500;
line-height: 21.6px;
text-align: left;
color: #FF3333;
}
.trending-tittle{
    font-size: 32px;
}
.card-tittle{
    font-size: 14px;
}
.price{
    font-size: 20px;
}
.btn{
    padding:16px 54px;
    border-radius: 2rem;
    border-color: #0000001A;
    
}
@media (max-width: 576px) { 
    .trending{
        width: 234px;
        
    }
}

</style>