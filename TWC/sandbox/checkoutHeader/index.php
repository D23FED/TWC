<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<!-- HTML Start -->

<!-- Begin Logo-only Header Component -->
<header id="logoHeader" class="twc-header twc-full twc-backgroundGradient-2">
  <div class="twc-container">
    <div class="twc-logo">
      <a class="twc-logo-img" href="../" title="TWC Logo">
        <img src="/TWC/core/images/small_TWC_EB_Horiz_White_RGB_300.png" title="TWC logo">
      </a>
    </div>
    <div class="right logoHeaderCTA">
        <ul class="horizontal">
          <li>
            <a href="">
              <div class="imageWrapper">
                <img src="images/icon-chat.png" alt="Chat">
              </div>
              <div class="contentWrapper">
                <p class="mobile-hidden">Chat</p>
              </div>
            </a>
          </li>
          <li>
            <a href="tel://18552438892">
              <div class="imageWrapper">
                <img src="images/icon-phone-blue.png" alt="Phone">
              </div>
              <div class="contentWrapper">
                <p class="mobile-hidden">Call to Order</p>
                <p class="mobile-hidden">1-855-243-8892</p>
              </div>
            </a>
          </li>
          <li>
            <a id="cart" href="">
              <div class="imageWrapper empty">
                <img class="emptyCart" src="images/icon-cart-empy-blue-25x18.png" alt="Empty Cart">
                <img class="fullCart" src="images/icon-cart-full-blue-25x18.png" alt="Full Cart">
              </div>
              <div class="contentWrapper">
                <p class="mobile-hidden">Cart</p>
              </div>
            </a>
          </li>
        </ul>
        <div class="clear"></div>
    </div>
  </div>
</header>
<!-- End Header Component -->
<div class="twc-container">
  <div class="cta omega icon-after icon-angle-right">
    <a href="ebf.php">
      <span>EBF User</span>
    </a>
  </div>
</div>
<!-- HTML Finish -->

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>