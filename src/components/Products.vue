<template lang="pug">
div.branding-box.d-flex.mt-5.container.gap-3.overflow-scroll
    .row.flex-nowrap 
        .card.col-3
            img.card-img-top(src='../assets/images/products/Frame 32.png')
            .card-body.text-black
                p.card-tittle Polo with Contrast Trims
                .product-rate.d-flex.gap-2
                    img.card-img-star(src='../assets/images/Frame 10.png')
                    span.card-span 4.0/5
                div.d-flex.gap-2.align-items-center
                    span.price1 $212
                    span.price2 $242
                    div.price-circle
                        span.price3 -20% 
        .card.col-3
            img.card-img-top(src='../assets/images/products/Frame 33 (1).png')
            .card-body
                p.card-tittle Gradient Graphic T-shirt
                .product-rate.d-flex.gap-2
                    img.card-img-star(src='../assets/images/Frame 10.png')
                    span.card-span 3.5/5
                div.d-flex.gap-2.align-items-center
                    span.price1 $145
        .card.col-3
            img.card-img-top(src='../assets/images/products/Frame 34.png')
            .card-body
                p.card-tittle Polo with Tipping Details
                .product-rate.d-flex.gap-2
                    img.card-img-star(src='../assets/images/Frame 10.png')
                    span.card-span 4.0/5
                div.d-flex.gap-2.align-items-center
                    span.price1 $180
        .card.col-3
            img.card-img-top(src='../assets/images/products/Frame 38.png')
            .card-body
                p.card-tittle Black Striped T-shirt
                .product-rate.d-flex.gap-2
                    img.card-img-star(src='../assets/images/Frame 10.png')
                    span.card-span 5.0/5
                div.d-flex.gap-2.align-items-center
                    span.price1 $120
                    span.price2 $160
                    div.price-circle
                        span.price3 -50%        
</template>

<script setup>
</script>

<style lang="css" scoped>
.branding-box{
    
}
.card{
    border: none;
}
.card-img-top{
    border-radius: 1rem;
    max-width: 295px;
}
.card-tittle{
    color: black; 
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