<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<!-- HTML Start -->
<div id="1" class="cta omega twc-icon-after icon-angle-right modal-button">
  <a href="" analyticsname="test">
    <span>Clear Cart Modal</span>
  </a>
</div>
<div id="2" class="cta omega twc-icon-after icon-angle-right modal-button">
  <a href="" analyticsname="test">
    <span>Session Timeout Warning Modal</span>
  </a>
</div>
<div id="3" class="cta omega twc-icon-after icon-angle-right modal-button">
  <a href="" analyticsname="test">
    <span>Session Timeout Modal</span>
  </a>
</div>

<!-- Modal -->
<div class="modal">

  <div id="modal1" class="modal-container">
    <div class="modal-close"></div>
    <div id="modal-content">
      <a name="modalTop"></a>
      <div class="modal-header">
      </div>

      <div class="modal-body">
        <p>To clear your cart and begin again, select Start Over. To keep your current choices, select Continue Order. If you need further assistance, please call 1-855-243-8892.</p>

      </div>

      <div class="modal-footer">
        <div class="cta omega twc-icon-after icon-angle-right">
          <a href="">
            <span>Start Over</span>
          </a>
        </div>
        <div class="cta omega icon-after icon-angle-right">
          <a href="#">
            <span>Continue Order</span>
          </a>
        </div>
      </div>

    </div>
  </div>
  <div class="modal-overlay"></div>
  <div id="modal2" class="modal-container">
    <div class="modal-close"></div>
    <div id="modal-content">
      <a name="modalTop"></a>
      <div class="modal-header">
        <p class="h2">Session timeout warning</p>
      </div>

      <div class="modal-body">
        <p>Your session will expire in 2 minutes</p>
      </div>

      <div class="modal-footer">
        <div class="cta omega twc-icon-after icon-angle-right">
          <a href="">
            <span>Ok</span>
          </a>
        </div>
      </div>

    </div>
  </div>
  <div class="modal-overlay"></div>
  <div id="modal3" class="modal-container">
    <div class="modal-close"></div>
    <div id="modal-content">
      <a name="modalTop"></a>
      <div class="modal-header">
        <p class="h2">Session Timeout</p>
      </div>

      <div class="modal-body">
        <p>The order process timed out. For your security, our order process will time out within approximately 15 minutes of inactivity.</p>
        <p>Please try again. If you continue to experience difficulty, please call us at 1-855-243-8892</p>

      </div>

      <div class="modal-footer">
        <div class="cta omega twc-icon-after icon-angle-right">
          <a href="">
            <span>Start Over</span>
          </a>
        </div>
      </div>

    </div>
  </div>
  <div class="modal-overlay"></div>
</div>
<!-- .Modal -->
<!-- HTML Finish -->

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>