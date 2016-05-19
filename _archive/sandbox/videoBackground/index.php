<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<!-- HTML Start -->
<div class="h-100">
  <div class="absolute">
    <video autoplay loop class="tablet-hidden">
      <source src="images/Traffic-blurred2.mp4" type="video/mp4" />
      <source src="images/Traffic-blurred2.webm" type="video/webm" />
    </video>
    <figure class="desktop-hidden">
      <img src="images/Traffic-blurred2.jpg" alt="">
    </figure>
  </div>
  <div class="twc-container relative text-white">
    <div class="opaque-dark">
      <h2 class="text-center">Find a location near you!</h2>
      <form action="submit">
      <div class="33-33-33 section columnControl">
        <div class="parsys_column twc-col3_333333">
          <div class="parsys parsys0 twc-col3_333333-c0 parsys_column">
            <div class="parbase section">
              <label for="streetAddress">Street Address:</label>
              <input type="text" name="streetAddress">
            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col3_333333-c1 parsys_column">
            <div class="parbase section">
            <label for="city">City:</label>
            <input type="text" name="city">
            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col3_333333-c2 parsys_column">
            <div class="parbase section">
              <label for="zipCode">Zip Code:</label>
              <input type="text" name="zipCode">
              <hr class="spacer">
              <div class="cta omega icon-after icon-angle-right mobile-full right">
                <a href="#">
                  <span>Find a Store</span>
                </a>
              </div>
            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      </form>
    </div>
  </div>
</div>

<!-- HTML Finish -->

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>