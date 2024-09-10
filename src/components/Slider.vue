<template lang="pug">
div.container.between
    h1 OUR HAPPY CUSTOMERS
    div.center.icons.gap-2
        i.bi.bi-arrow-left
        i.bi.bi-arrow-right
div.row.mt-5.scroll.d-flex.gap-3
    .customer.card.col-3
        .card-body.d-flex.flex-column.gap-2.mt-2
            img.card-img-star(src='../assets/images/slider-section/stars.png')
            div.done.d-flex.align-items-center
                h3.card-tittle Sarah M.
                img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
            p.card-text  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”

    .customer.card.col-3
        .card-body.d-flex.flex-column.gap-2.mt-2
            img.card-img-star(src='../assets/images/slider-section/stars.png')
            div.done.d-flex.align-items-start
                h3.card-tittle Sarah M.
                img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
            p.card-text  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”

    .customer.card.col-3
        .card-body.d-flex.flex-column.gap-2.mt-2
            img.card-img-star(src='../assets/images/slider-section/stars.png')
            div.done.d-flex.align-items-start
                h3.card-tittle Sarah M.
                img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
            p.card-text  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”

    .customer.card.col-3
        .card-body.d-flex.flex-column.gap-2.mt-2
            img.card-img-star(src='../assets/images/slider-section/stars.png')
            div.done.d-flex.align-items-start
                h3.card-tittle Sarah M.
                img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
            p.card-text  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
    .customer.card.col-3
        .card-body.d-flex.flex-column.gap-2.mt-2
            img.card-img-star(src='../assets/images/slider-section/stars.png')
            div.done.d-flex.align-items-start
                h3.card-tittle Sarah M.
                img.mt-1.card-img-done(src='../assets/images/slider-section/done.png')
            p.card-text  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
</template>

<script>

</script>

<style scoped>
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