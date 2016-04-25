<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<!-- HTML Start -->

<div class="twc-price text-black fs-100 light">
    <div class="text-center">
        <sup>$</sup>
        <span>89</span>
        <span class="patern">
            <sup>99</sup><br>
            <sub class="terms">per mo<br>per 1 year<br>
                <span class="plus">plus taxes & fees</span>
            </sub>
        </span>
    </div>
</div>

<style>
.twc-price { position; relative; padding-bottom: 20px;}
.twc-price > div {
    word-spacing: -0.7rem;
}
.twc-price sup {
    line-height: 180%;
    font-size: 40%;
    
}
.twc-price .patern {
    position: relative;
    word-spacing: initial;
    }

.twc-price .terms { 
    position: absolute;
    font-size: 13%;
    left: 0.2rem;
    bottom: 1rem;
    top: 5rem;
    display: block;
    text-align: left;
    line-height: 1em;
    min-width: 80px;
}
.twc-price .terms .plus {
    font-size: 85%;
}


</style>
<!-- HTML Finish -->

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>