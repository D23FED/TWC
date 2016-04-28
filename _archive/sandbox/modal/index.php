<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>

        <!-- Modal Buttons -->
        <div id="1" class="cta omega twc-icon-after icon-angle-right modal-button">
          <a href="" analyticsname="test">
            <span>Modal 1</span>
          </a>
				</div>

        <!-- .Modal Buttons -->

        <!-- Modal -->
        <div class="modal">

          <div id="modal1" class="modal-container">
				    <div class="modal-close"></div>
            <div id="modal-content">
              <form action="submit">
                <label for="name">Name</label>
                <input id="name" type="text">
                <label for="Date">Date</label>
                <input id="Date" type="text">
                <label for="Address">Address</label>
                <input id="Address" type="text">
                <div class="cta omega icon-after icon-angle-right mobile-full">
                  <a href="#">
                    <span>Submit</span>
                  </a>
                </div>
              </form>
              <form action="submit">
                <label for="name">Name</label>
                <input id="name" type="text">
                <label for="Date">Date</label>
                <input id="Date" type="text">
                <label for="Address">Address</label>
                <input id="Address" type="text">
                <div class="cta omega icon-after icon-angle-right mobile-full">
                  <a href="#">
                    <span>Submit</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-overlay"></div>
        </div>
				<!-- .Modal -->


<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>