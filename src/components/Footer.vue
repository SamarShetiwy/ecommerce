<template lang="pug">
div.footer-section.bg-custom.p-sm-5.p-2
    div.container
        div.footer
            div.footer-content.d-flex.between.row
                div.text-start.col-md-7.col-12
                    h1 STAY UPTO DATE ABOUT OUR LATEST OFFERS
                div.d-flex.gap-3.flex-column.mt-sm-0.mt-3.col-md-4.col-12
                        .form-footer.d-flex(role="search").gap-2
                            i.bi.bi-envelope
                            input.p-0.form-control(type="text" placeholder="Enter your email address" aria-label="text")
                        button.btn.btn(type='submit') Subscribe to Newsletter
        div.lower.container.mt-0.mt-md-5.d-flex.gap-2
            div.row
                div.footer-section1.col-12.col-md-12.col-lg-4.col-xl-3.mt-5
                    .footer-logo
                        h1 SHOP.CO
                        p.pargraph We have clothes that suits your style and which you’re proud to wear. From women to men.
                        div.footer-icons-div.mt-sm-5.mt-0
                            i.media.bi.bi-twitter
                            i.media.fa-brands.fa-facebook-f.pt-1
                            i.media.bi.bi-instagram
                            i.media.bi.bi-github
                div.footer-section2.col-6.col-md-3.col-lg-3.col-xl-2.mt-5.d-flex.flex-column.gap-md-1.gap-0
                    h5.footer-tittle COMPANY
                    p.details About 
                    p.details Features 
                    p.details Works 
                    p.details Career 
                div.footer-section2.col-6.col-md-3.col-lg-3.col-xl-2.mt-5.d-flex.flex-column.gap-md-1.gap-0
                    h5.footer-tittle Help
                    p.details Customer Support 
                    p.details Delivery Details 
                    p.details Terms & Conditions 
                    p.details Privacy Policy 
                div.footer-section2.col-6.col-md-3.col-lg-4.col-xl-2.mt-5.d-flex.flex-column.gap-md-1.gap-0
                    h5.footer-tittle FAQ
                    p.details Account 
                    p.details Manage Dedivveries 
                    p.details Orders 
                    p.details Payments 
                div.footer-section2.col-6.col-md-3.col-lg-4.col-xl-2.mt-5.d-flex.flex-column.gap-md-1.gap-0
                    h5.footer-tittle Resources
                    p.details Free eBooks 
                    p.details Development Tutorial 
                    p.details How to - Blog 
                    p.details Youtube Playlist 
        .line-footer.mt-5.container
        div.footer-lower.between.container.pt-3.d-flex
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
    border-radius: 20px;
    color:#FFFFFF;
    margin-top: -9rem;
    /* position:absolute; */
    /* z-index: 100; */
    /* left: 140px; */
    padding:36px 64px;
}
.footer-section{
    margin-top: 9rem;
}
.footer-content{
    color: #FFFFFF;
}
.footer-content span{
    color: #FFFFFF;
font-size: 40px;
font-weight: 700;
line-height: 45px;
text-align: left;
font-weight: 700px;

}
.footer-logo{
    margin-top: -1rem;
}
.form-footer{
    border-radius: 62px;
    text-align: start;
    align-items: start;
    color:#00000066;
    padding:12px 16px ;
    background-color: #FFFFFF;
    
}
.footer input{
    color:#00000066;
    border: none;
}
.footer input a:hover{
    border: none;
}

.footer button{
    background-color: #FFFFFF;
    color: #000000;
    padding: 12px 60px ;
    border-radius: 62px;
    box-sizing: border-box;
    
    }
.footer-section{
    /* position: relative; */
    /* z-index: 0; */
    /* top: 190px; */
}

.footer-logo h1{
font-size: 33.45px;
font-weight: 700;
line-height: 40.15px;
text-align: left;
color: #000000;
font-weight: 700px;

    }
.footer-icons-div{
    display: flex;
    gap: 1rem;

}
.footer-section1{
    margin-right: 5rem;
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
.fs {
    color: #FFFFFF;
    background-color: #000000;
    display: flex;

}
.line-footer {
    border: 1px solid #0000001A
}
.footer-lower{
    text-align: center;
}
@media (max-width: 576px) { 
    .promo-code{
        padding: 12px 10px;
        
    }
    .apply-code{
        padding: 12px 5px;
    }
    .footer-content{
        flex-direction: column;
    }
    .footer-content span{
        font-size: 23px;
    }
    .footer{
        padding:20px;
        margin-top: -7rem;
    }
    .lower{

        flex-direction: row;
        flex-wrap: nowrap;
        margin-right: 0;
    }
    
    .copyrights{
        font-size:14px;
    }
    .footer-lower{
        flex-direction: column;
        gap:1rem;
    }
    .footer-section{
        top: 236px;
    }
}

@media (max-width: 767.98px){ 
    .footer-lower{
        flex-direction: column;
        gap:1rem;
    }
    .pargraph, details{
        font-size: 14px;
    }

}
@media (min-width: 768px) and (max-width: 991.98px) {
   
}


</style>