<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<form id="initialAddrForm">
  <div class="100 section columnControl">
    <div class="parsys_column twc-col1_100">
      <div class="parsys parsys0 twc-col1_100-c0 parsys_column">
        <div class="parbase section">
          <label for="streetAddress">Street Address</label>
          <input type="text" id="streetAddress" tabindex="1" list="suggestedInput">
        </div>
        <div class="new section"></div>
      </div>
    </div>
    <div class="columnClear"></div>
  </div>
  <div class="100 section columnControl">
    <div class="parsys_column twc-col1_100">
      <div class="parsys parsys0 twc-col1_100-c0 parsys_column">
        <div class="parbase section">
          <div class="unit">
            <label for="unit">Unit Number</label>
            <input id="unit" type="text" tabindex="2">
          </div>
          <div class="zip">
            <label for="zip">Zip Code</label>
            <input id="zip" tabindex="5" type="text">
          </div>
        </div>
        <div class="new section"></div>
      </div>
    </div>
    <div class="columnClear"></div>
  </div>
  <div class="cta omega icon-after icon-angle-right mobile-full right">
    <a href="#">
      <span>Submit</span>
    </a>
  </div>

</form>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>