<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php'); ?>

<body>

  <!-- Modal Buttons -->
  <div id="1" class="cta omega twc-icon-after icon-angle-right chatModal-button">
    <a href="#" analyticsname="test">
      <span>Modal 1</span>
    </a>
  </div>
  <!-- .Modal Buttons -->

  <!-- Modal -->
  <div class="chatModal">

    <div id="modal1" class="chatModal-container">
      <div id="chatModal-content">

        <div class="chatModal-header text-center">
          <div class="twc-icon-before icon-exclamation-sign blue-icon">
            <span class="h3">We Need More Information</span>
          </div>
        </div>
        <form>
          <div class="chatModal-body text-left">
            <h5>Your ZIP code <b>47533</b> Covers a wide area. Please lorem ipsum dolor sit amet.</h5>
            <div class="bordered-solid w60">
              <p>Please select the correct location:</p>
              <fieldset>
                <input type="radio" name="location">Location 1<br>
                <input type="radio" name="location">Location 2
              </fieldset>
            </div>
          </div>

          <div class="chatModal-footer text-center">
            <div class="cta omega mobile-full">
              <a href="http://google.com" analyticsname="test">
                <span>Enter</span>
              </a>
            </div>
          </div>
        </form>

      </div>
    </div>
    <div class="chatModal-overlay"></div>
  </div>
  <!-- .Modal -->

</body>

<?php
include ($_SERVER['DOCUMENT_ROOT'] . '/TWC/bc/core/includes/footer.php'); ?>