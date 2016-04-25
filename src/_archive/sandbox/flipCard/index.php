<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>
<div class="sandbox-flipper">
  <h6>Flip card utilizing hover (tap on touch devices) - Not supported in IE9</h6>
  <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
    <div class="flipper">
      <div class="front">
        <!-- front content -->
        <h1 class="text-center fs48 text-white">This is the front</h1>
      </div>
      <div class="back">
        <!-- back content -->
        <h1 class="text-center fs48 text-white">This is the back </h1>
      </div>
    </div>
  </div>
<br><br>
  <h6>Flip card utilizing click (tap on touch devices) - Supported in IE9</h6>
  <div class="flip-container-2">
    <div class="flipper">
      <input id="flipToggle" type="checkbox">
      <label for="flipToggle">
        <div class="front">
          <!-- front content -->
          <h1 class="text-center fs48 text-white">This is the front</h1>
        </div>
        <div class="back">
          <!-- back content -->
          <h1 class="text-center fs48 text-white">This is the back </h1>
        </div>
      </label>
    </div>
  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>