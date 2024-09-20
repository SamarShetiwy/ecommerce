<template lang="pug">
div.container.between
    h1 OUR HAPPY CUSTOMERS
    div.center.icons.gap-2
        i.bi.bi-arrow-left
        i.bi.bi-arrow-right
div.row.mt-5.scroll.d-flex.gap-3.mx-3
    .customer.card.col-lg-3.col-md-4.col-sm-6.col-11.px-md-2.p-2
        .card-body.d-flex.flex-column.gap-2.mt-2
            img.card-img-star(src='../assets/images/slider-section/stars.png')
            div.done.d-flex.align-items-center
                h3.card-tittle Sarah M.
                img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
            p.card-text  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
    .customer.card.col-lg-3.col-md-4.col-sm-6.col-11.px-md-2.p-2
        .card-body.d-flex.flex-column.gap-2.mt-2
            img.card-img-star(src='../assets/images/slider-section/stars.png')
            div.done.d-flex.align-items-start
                h3.card-tittle Alex K.
                img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
            p.card-text "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
    .customer.card.col-lg-3.col-md-4.col-sm-6.col-11.px-md-2.p-2
        .card-body.d-flex.flex-column.gap-2.mt-2
            img.card-img-star(src='../assets/images/slider-section/stars.png')
            div.done.d-flex.align-items-start
                h3.card-tittle James L.
                img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
            p.card-text "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
    .customer.card.col-lg-3.col-md-4.col-sm-6.col-11.px-md-2.p-2
        .card-body.d-flex.flex-column.gap-2.mt-2
            img.card-img-star(src='../assets/images/slider-section/stars.png')
            div.done.d-flex.align-items-start
                h3.card-tittle Mooen 
                img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
            p.card-text  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
    .customer.card.col-lg-3.col-md-4.col-sm-6.col-11.px-md-2.p-2
        .card-body.d-flex.flex-column.gap-2.mt-2
            img.card-img-star(src='../assets/images/slider-section/stars.png')
            div.done.d-flex.align-items-start
                h3.card-tittle James L.
                img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
            p.card-text  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
</template>

<script>

</script>

<style scoped>
h1{
 text-align: start;
}
.icons{
    color: #000000;
    font-weight: bold;
    
}
h1, i{
    font-weight: 900;
}
.img-done{
    width: 24px;
    height: 24px;
}
.scroll{
    overflow-y: auto;
    flex-wrap: nowrap;
}

</style>