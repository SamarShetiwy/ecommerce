<template lang="pug">
div.row.mt-2.d-flex.gap-4.p-2
        .customer.card
            .card-body.d-flex.flex-column.gap-2
                div.customer-rate.between
                    img.card-img-star(src='../assets/images/slider-section/stars.png')
                    i.fa.fa-ellipsis-h
                div.done.d-flex.align-items-center.gap-1
                    h3.mb-0.card-tittle Samantha D.
                    img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
                p.card-text "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.”
                div
                    p Posted on August 14, 2023
        .customer.card
            .card-body.d-flex.flex-column.gap-2
                div.customer-rate.between
                    img.card-img-star(src='../assets/images/slider-section/stars.png')
                    i.fa.fa-ellipsis-h
                div.done.d-flex.align-items-center.gap-1
                    h3.mb-0.card-tittle Alex M.
                    img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
                p.card-text "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
                div
                    p Posted on August 15, 2023
        .customer.card
            .card-body.d-flex.flex-column.gap-2
                div.customer-rate.between
                    img.card-img-star(src='../assets/images/slider-section/stars.png')
                    i.fa.fa-ellipsis-h
                div.done.d-flex.align-items-center.gap-1
                    h3.mb-0.card-tittle Ethan R.
                    img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
                p.card-text "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."”
                div
                    p Posted on August 16, 2023
        .customer.card
            .card-body.d-flex.flex-column.gap-2
                div.customer-rate.between
                    img.card-img-star(src='../assets/images/slider-section/stars.png')
                    i.fa.fa-ellipsis-h
                div.done.d-flex.align-items-center.gap-1
                    h3.mb-0.card-tittle Olivia P.
                    img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
                p.card-text ""As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
                div
                    p Posted on August 17, 2023
        .customer.card
            .card-body.d-flex.flex-column.gap-2
                div.customer-rate.between
                    img.card-img-star(src='../assets/images/slider-section/stars.png')
                    i.fa.fa-ellipsis-h
                div.done.d-flex.align-items-center.gap-1
                    h3.mb-0.card-tittle Liam K.
                    img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
                p.card-text "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.”
                div
                    p Posted on August 18, 2023
        .customer.card
            .card-body.d-flex.flex-column.gap-2
                div.customer-rate.between
                    img.card-img-star(src='../assets/images/slider-section/stars.png')
                    i.fa.fa-ellipsis-h
                div.done.d-flex.align-items-center.gap-1
                    h3.mb-0.card-tittle Ava H.
                    img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
                p.card-text ""I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
                div
                    p Posted on August 19, 2023
div.card-btn.center.mt-5
    .btn Load More Reviews  
        
</template>

<script setup>

</script>

<style lang="css" scoped>
.customer{
    border-radius: 20px;
}
.card-btn .btn{
    padding:16px 54px 16px 54px;
    border: 1px solid #0000001A;
    border-radius: 62px;
}
.h3{
    font-size: 18px;
    color:#000000;
}
.customer{
    flex-basis: 48%;
}
.customer.card {
    flex-grow: 1; 
}
.row{
    flex-wrap: wrap;
    justify-content: center; 
}
@media (max-width: 576px) {
    .row{
    margin:3px;
    flex-direction: column; 

}
    .customer {
        flex-basis: 100%; 
}

    .customer:nth-child(n+4) {
        display: none;

}
}
</style>