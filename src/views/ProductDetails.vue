<template lang="pug">
div.container
      div.pages.d-flex.gap-2.align-items-center.p-3
          router-link(to="/") Home
          i.fa-solid.fa-angle-right
          a(href="") Shop
          i.fa-solid.fa-angle-right
          a(href="") Men
          i.fa-solid.fa-angle-right
          a(href="") T-shirts
div.container.mt-4
      .div.row.container-product.d-flex.gap-3.gap-lg-0.px-3
            div.col.col-lg-6.product-img
                div.row.gap-3.gap-xl-0.images.d-flex-column.d-xl-flex
                      div.image-div.col-4.col-md-4.d-flex.flex-xl-column.gap-3
                          img.img-fluid(src="../assets/images/products/image 2.png")
                          img.img-fluid(src="../assets/images/products/image 5.png")
                          img.img-fluid(src="../assets/images/products/image 6.png")
                      div.col.col-md-7.main-image
                          img.img-fluid(src="../assets/images/products/image 1.png")
            div.col.col-lg-6.d-flex.flex-column.gap-1
              div.heading-font
                h1.h1.title ONE LIFE GRAPHIC T-SHIRT
              div.product-rate.d-flex.gap-2
                  img(src="../assets/images/Frame 10.png")
                  span 4.5/5
              div.d-flex.gap-2.align-items-center
                  span.price1 $260
                  span.price2 $300
                  div.price-circle
                    span.price3 -40%
              p This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.    
              div.line
              div.d-flex.flex-column.gap-2.py-2
                  span Select Colors
                  div.color-options.d-flex.gap-3.pb-2
                      div.color.color-option1
                        i.bi.bi-check
                      div.color.color-option2
                      div.color.color-option3
              div.line
              div.size-options.d-flex.flex-column.gap-2.py-2
                  span Select Size
                  div.d-flex.gap-3
                      div.center.bg-custom.size.size-option1 
                          span Small
                      div.center.bg-custom.size.size-option2
                          span Medium
                      div.center.bg-custom.bg-custom.size.size-option3 
                          span Large
                      div.center.bg-custom.size.size-option3 
                          span X-Large
              div.line            
              div.quantity.row.d-flex.gap-4.mt-3
                  div.counter.between.bg-custom.col-4
                      i.bi.bi-plus-lg
                      span 0
                      i.bi.bi-dash-lg
                  div.col-7.add-to-cart.center
                      a(href="") Add To Cart

                      //- Rating & Reviews  
div.container.mt-0.mt-sm-5.px-sm-5.px-0
  div.tabs.between.px-2.px-md-5.py-3
      div.tab1 
        span  Product Details  
      div.tab2
        span  Rating & Reviews
      div.tab3 
        span  FAQs
  div.line.line-tabs.mx-4.mx-sm-0
                            //- All Reviews
div.reviews.between.container.mt-sm-5.p-3.p-md-0
    div.review.d-flex.align-items-center.gap-1.gap-md-2
        h3.mb-0 All Reviews
        span.mt-1.num (451)
    div.review-choice.d-flex.gap-3
        div.review.bg-custom
          i.fa-solid.fa-sliders
        div.review.latest.bg-custom.d-flex.gap-3.d-none.d-md-block
          span.pe-2 Latest
          i.bi.bi-chevron-down
        div.review.review-write
          span Write a Review
div.container
    AllReviews
.trending.mt-5
    h1.trending-tittle.center YOU MIGHT ALSO LIKE
    products

</template>

<script setup>
import AllReviews from  '../components/AllReviews.vue';
import products from  '../components/products.vue';

</script>

<style scoped>
.pages router-link, a{
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}
.pages{
  color:#00000099;
}
.title{
  font-size:34px;
}
/* .container-product .col{
  flex: 1 1 100%;
  gap:2rem;
} */
.images{

  height: 100%;
}
.main-image{
  width: 65%;
}
.img-fluid {
    max-width: 100%; 
    display: block;
    height: 100%;
    aspect-ratio: 1 / 1;
  }
.tittle{
font-size: 40px;
font-weight: 900;
line-height: 48px;
text-align: left;
}

.product-rate span {
  color: #000000;
}
.price1{
font-size: 32px;
font-weight: 700;
line-height: 43.2px;
text-align: left;
color: #000000;
}
.price2{
font-size: 32px;
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
font-size: 16px;
font-weight: 500;
line-height: 21.6px;
text-align: left;
color: #FF3333;
}
.line{
  border: 1px solid #0000001A;
  color:#0000001A;
}
.bi-check{
  color: #FFFFFF;
}
.color{
width: 37px;
height: 37px;
border-radius: 50%;
}
.color-option1{
  background-color: #4F4631;
  color:#FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-option1 i{
  width: 13px;
}
.color-option2{
  background-color: #314F4A;
}
.color-option3{
  background-color: #31344F;
}
.size{
  padding:12px 24px 12px 24px;
  border-radius: 64px;

}
.counter{
  padding: 16px 20px 16px 20px;
  border-radius: 64px;
  
}
.add-to-cart{
  padding: 16px 20px 16px 20px;
  border-radius: 64px;
  background-color:#000000;
  color: #FFFFFF;
font-size: 16px;
font-weight: 500;
line-height: 21.6px;
text-align: left;

}
.tabs{
  padding: 0 5rem;
  cursor: pointer;
}
.tab2{
  color:#000000;
  border-bottom: 2px solid #000000;
  width: 414px;
  padding:2rem 0;
}
.tab2 span{
  color: #000000;
}
.line-tabs{
  margin-top:-1.1rem;
}
.review{
  padding:16px 20px 16px 20px;
  border-radius:62px ;
}

.review-write{
  background-color: #000000;
  color:#FFFFFF;

}
.review-write span{
  color:#FFFFFF;
}
.latest span, i{
  color: #000000;
}

@media (max-width: 576px) {
  .pages a{
    font-size: 14px;
  }
  .price {
    font-size: 24px;
}
.title{
  font-size: 24px;
}
.heading-font{
  width: 267px;
}
  .trending{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .trending-tittle{
    width: 234px;
  }
  .review{
    padding: 11px 12px ;
  }

  .tabs{
    margin: 0 1rem;
    
  }
  .size{
    padding: 10px 20px;
  }
  .size span{
    font-size: 12px;
  }
  

  }
  
  @media (max-width: 768px){
  .latest{
    display: none;
  }
  .review h3{
  font-size:20px;
}

.images {
  flex-direction: column-reverse;
}
.main-image{
  width: 100%;
}

  }
  @media (max-width: 992){
   
  .tab2{
    width: 123px;
  }
  .main-image{
  width: 100%;
}

  }

  @media (max-width: 1199.98px){
    .images {
  flex-direction: column-reverse;
}

.main-image{
  width: 100%;
}
  }



</style>