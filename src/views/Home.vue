<template lang="pug">
div.hero-section-parent.bg-custom.d-flex-gap-5
    .hero-section.container.d-flex.pt-md-3.gap-5.pt-0.mt-1
        .col-md-6.col.pt-5.d-flex.flex-column.gap-5
            .hero-box.d-flex.flex-column.gap-3
                h1.box-tittle FIND CLOTHES THAT MATCHES YOUR STYLE
                p.box-text Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                button.btn.box-btn.center.shop  Shop Now
            .box-info.d-flex.align-items-start.gap-3
                .info.text-start 
                    span +200
                    p International Brands
                .box-line
                .info.text-start 
                    span +2,000
                    p High-Quality Products
                .box-line.d-none.d-sm-block       
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
    .row.mx-0.my-2.brand-box.center.gap-lg-5.gap-md-3.gap-1.px-1.px-sm-3
            img.col-4.col-sm-5.col-md-2.p-2(src="../assets/images/brand/Vector.png" alt="")
            img.img-brand2.col-5.col-md-2.p-2(src="../assets/images/brand/Vector (1).png" alt="")
            img.col-4.col-sm-5.col-md-2.p-2(src="../assets/images/brand/gucci-logo-1 1.png" alt="")
            img.col-4.col-sm-5.col-md-2.p-2(src="../assets/images/brand/Group.png" alt="")
            img.col-4.col-sm-5.col-md-2.p-2(src="../assets/images/brand/Vector (2).png" alt="")

              //-    section trending 

.trending.mt-5
    h1.trending-tittle.center NEW ARRIVALS
    div.d-flex.mt-5.container.gap-3
        .row.center.text-start.branding-box
            Products(v-for=" product in ViewProducts" :key="product.id" :product="product")
.container.center.gap-2.my-3
    //- Pagination(:current-page="currentPage" :total-products="totalProducts" @update:currentPage="handlePageChange") 
div.card-btn.container.center.mt-5
    button.btn( @click="loadMoreProducts") View All 
.trending-line.my-5.mx-3
.trending.mt-2
    h1.trending-tittle.center TOP SALLING
    div.d-flex.mt-5.container.gap-3
        .row.center.text-start.branding-box
            Products(v-for=" product in sortedProducts" :key="product.id" :product="product")
div.card-btn.container.center.mt-5
    button.btn View All               

            //-    BROWSE BY dress STYLE 
.container.dress-style.bg-custom.mt-5.py-5.center.flex-column
    h1.pt-1.pb-4 BROWSE BY DRESS STYLE
    div.py-0.p-sm-3.upper-section.row.center.gap-3
            .item.item1.col-sm-4.col-12
                h4.px-4.py-md-3.py-0 {{ categories[1] }}
                img(src="../assets/images/dress-style-section/1.png" alt="")
            .item.item2.col-sm-7.col-12
                h4.px-4.py-md-3.py-0 {{ categories[0] }}
                img(src="../assets/images/dress-style-section/2.png" alt="" style="height: 90%")
    div.px-0.px-sm-3.upper-section.row.center.gap-3
            .item.item1.col-sm-7.col-12
                h4.px-4.py-md-3.py-0 {{ categories[3] }}
                img(src="../assets/images/dress-style-section/3.png" alt="")
            .item.item2.col-sm-4.col-12
                h4.px-4.py-md-3.py-0 {{ categories[2] }}
                img(src="../assets/images/dress-style-section/4.png" alt="" style="height: 90%")

                //- OUR HAPPY CUSTOMERS
div.slider.mt-5
    Slider


</template>

<script setup lang="ts">
import Products from '../components/Products.vue';
import Slider from '../components/Slider.vue';
import Pagination from '../components/Pagination.vue';
import { ref , onMounted ,computed} from 'vue';
import type {DataProduct} from '../api/api'


const products =ref([]);
const limit=ref(4);
const ViewProducts = computed(() => products.value.slice(0, limit.value));
// const currentPage = ref<number>(1);
// const itemsPerPage = 4; 
// const totalProducts = computed(() => products.value.length);
const categories =ref([]);



async function getAllProducts() {
    try {
        const response=await fetch(`https://fakestoreapi.com/products?limit=${limit.value}`)
        const data= await response.json();
        products.value = data;
        // console.log(products.value);
    } catch(error) {
    console.error(error);
    }
}

function loadMoreProducts() {
  limit.value += 4; 
  getAllProducts(); 
}



// const paginatedProducts = computed(() => {
//   const startIndex = (currentPage.value - 1) * itemsPerPage;
//     return products.value.slice(startIndex, startIndex + itemsPerPage);
// });

// const handlePageChange = (page: number) => {
//     // console.log(page);
//     currentPage.value = +page;
// };

const sortedProducts = computed(() => {
    return products.value.slice().sort((a, b) => a.rate - b.rate);
});


async function getCategories() {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    categories.value = data;
    // console.log(categories.value);
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
    getAllProducts();
    getCategories(); 
})

</script>

<style scoped>

.box-tittle{
font-size: 62px;
line-height: 64px;
text-align: left;
font-weight: 700;

}
.item h4{
    font-size: 36px;
}
.brand-box img{
    max-width:194px;
}
.img-brand2{
   width:110px;
}

.shop{
width:210px;
padding: 1rem;
gap: 12px;
border-radius: 62px;
opacity: 0px;
background-color: #000000;
color: #FFFFFF;
text-decoration: none;
}
.shop:hover{
    opacity: 1;
    transform: scale(1); 
    border: #0d6efd solid 2px;
    color: #000000;

}
.box-tittle{
    font-size: 62px;
    line-height: 64px;
}
.box-line{
    border: 1px solid #0000001A;
    height: 74px;
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
.paginate{
    border: #000000 solid 2px;
    border-radius: 20px;
    padding:0.2rem  0.6rem;
}
h4{
    position: absolute;
font-size: 36px;
font-weight: 700;
line-height: 48.6px;
text-align: left;
color: #000000;
z-index: 100;
}

.card-btn .btn{

    padding:16px 64px 16px 64px;
    border: 1px solid #0000001A;
    border-radius: 62px;
}

.trending-line{
    border: 1px solid #0000001A;
}
.box-line{
    height: 74px;
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
    font-size: 24px;
}
.item h4{
    font-size: 24px;
}
.info p{
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
.hero-bg{
    margin-top:-4rem;
}

.dress-style h1{
    font-size: 28px;
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
.box-tittle{
    font-size: 38px;
    line-height: 38px;
}
.box-btn {
    width: 100%;
}
.box-tittle{
    font-size: 51px;
    line-height: 50px;
}
.box-tittle{
    font-size: 36px;
    line-height: 34px;
}
.box-text{
    font-size:14px;
}
.box-line{
    height: 45px;
}
.card-btn{
    width: 100%;
}

.branding-box {
        display: flex;
        overflow-x: auto; 
        flex-wrap: nowrap;
        padding: 0 2rem;
    }

    .branding-box .row {
        display: inline-flex; 
        gap: 1rem; 
    }
   .branding-box .row {
        display: inline-flex; 
        gap: 1rem; 
    }

    .branding-box::-webkit-scrollbar {
        height: 8px; 
    }

    .branding-box::-webkit-scrollbar-thumb {
        background-color: var(--accent-color); 
        border-radius: 4px;
    }
}

@media (min-width: 576px) and (max-width: 767.98px){
    .box-tittle {
    font-size: 45px;
    line-height: 45px;
}
.info span{
        font-size: 40px;
    }
    .info p{
        font-size: 11px;
    }
    .hero-section{
        padding-bottom: 2rem;
    }

    .item h4{
    font-size: 22px;
    
}
}

@media (min-width: 768px) and (max-width: 991.98px){
    .hero-bg {
        aspect-ratio: 1 / 1.3;
    }
    .box-tittle {
    font-size: 29px;
    line-height: 27px;
}
    .info span{
        font-size: 20px;
    }
    .info p{
        font-size: 10px;
    }
    .box-line {
        height: 45px;
}
.item h4{
    font-size: 25px;
    
}

}

@media (min-width: 992px) and (max-width: 1200px) {
.box-tittle{
    font-size: 38px;
}
.item h4{
    font-size: 35px;
    
}
.item {
    height: 190px;
    height: fit-content;
}
.item img{
    height: 100%;
}
.box-tittle {
    font-size: 37px;
    line-height: 50px;

}
.info span, p{
    font-size: 25px;
}
p{
    font-size: 15px;
}
.hero-bg {
    aspect-ratio: 1 / 1.1;
    width: 100%;

}
.box-line{
    height: 45px;
}
}




</style>
