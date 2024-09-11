<template lang="pug">
div.container.footer.mt-5
    div.footer-content.d-flex.between.p-5
        div.text-start
            span STAY UPTO DATE ABOUT
            br 
            span OUR LATEST OFFERS
        div.input-icon.d-flex.gap-3.flex-column
            form.form-footer.d-flex(role="search").bg-custom.gap-5.flex-column.bg-black
                i.bi.bi-envelope
                input.form-control.bg-custom(type="text" placeholder="Enter your email address" aria-label="text")
            button.btn.btn(type='submit') Subscribe to Newsletter
div.footer-section.bg-custom.p-5
        div.container.mt-5.d-flex.gap-2
            div.footer-section1.col-3.mt-5.mr-5
                .footer-logo
                    h1 SHOP.CO
                    p.pargraph We have clothes that suits your style and which you’re proud to wear. From women to men.
                    div.footer-icons-div.mt-5
                        i.media.bi.bi-twitter
                        i.media.fs.bg-black.fa-facebook-f
                        i.media.bi.bi-instagram
                        i.media.bi.bi-github
            div.footer-section2.col-2.mt-5
                h5.footer-tittle COMPANY
                p.details About 
                p.details Features 
                p.details Works 
                p.details Career 
            div.footer-section2.col-2.mt-5
                h5.footer-tittle Help
                p.details Customer Support 
                p.details Delivery Details 
                p.details Terms & Conditions 
                p.details Privacy Policy 
            div.footer-section2.col-2.mt-5
                h5.footer-tittle FAQ
                p.details Account 
                p.details Manage Dedivveries 
                p.details Orders 
                p.details Payments 
            div.footer-section2.col-2.mt-5
                h5.footer-tittle Resources
                p.details Free eBooks 
                p.details Development Tutorial 
                p.details How to - Blog 
                p.details Youtube Playlist 
        .line-footer.mt-5.container
        div.footer-lower.between.container.pt-3
            .p.copyrights Shop.co © 2000-2023, All Rights Reserved
            .div.payment-methods
                img(src="../assets/images/payments-methods/Badge (1).png")
                img(src="../assets/images/payments-methods/Badge (2).png")
                img(src="../assets/images/payments-methods/Badge (3).png")
                img(src="../assets/images/payments-methods/Badge (4).png")
                

            
</template>

<script setup>

</script>

<style lang="css" scoped>
.footer{
    background-color: #000000;
    height: 180px;
    border-radius: 20px;
    color:#FFFFFF;
    position: absolute;
    z-index: 100;
    buttom:2px;
    left: 103px;
}
.footer-content{
    color: #FFFFFF;
}
.footer-content span{
    color: #FFFFFF;
font-size: 40px;
font-weight: 900;
line-height: 45px;
text-align: left;
font-weight: 900px;

}
.form-footer{
    border-radius: 62px;
    text-align: center;
    align-items: center;
    color:#FFFFFF;
    
}
.input-icon{
    position: relative;
}
.input-icon i{
    position: absolute;
    z-index: 100;
    text-align: center;
    top: 22%;
    left: 16px; 
    transform: translateY(-50%);
    color:#00000066
}
.footer input{
    background-color: #FFFFFF;
    color:#000000;
    padding: 12px 16px;
    border-radius: 62px;
    width: 349px;
}

.footer button{
    background-color: #FFFFFF;
    color: #000000;
    padding: 12px 16px 12px 48px;;
    border-radius: 62px;
    width: 349px;
    box-sizing: border-box;
    
    }
.footer-section{
    position: relative;
    z-index: 0;
    top: 150px;
    

}
.footer-logo h1{
font-size: 33.45px;
font-weight: 700;
line-height: 40.15px;
text-align: left;
color: #000000;
font-weight: 900px;

    }
.footer-icons-div{
    display: flex;
    gap: 1rem;

}
.footer-section1{
    margin-right: 6rem;
}
.media{
    border: 1px solid #00000033;
    width: 28px;
    height: 28px;
    text-align: center;
    border-radius: 20px;
    background-color: #FFFFFF;
    color: #000000;
}
.fs{
    color: #FFFFFF;
    background-color: #000000;
}
.line-footer {
    border: 1px solid #0000001A
}
.footer-lower{
    text-align: center;
}

</style>