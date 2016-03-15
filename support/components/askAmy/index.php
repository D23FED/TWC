<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>
  <div class="askAmy right">
    <div class="amy">
      <figure>
        <img src="includes/amy.png" alt="">
      </figure>
    </div>
    <div class="amyButtons">
      <div class="cta omega icon-after icon-angle-right">
        <a href="#">
          <span class="arialBold fs16">Ask Amy</span>
        </a>
      </div>
      <div class="cta virtualAssistant">
        <a href="#" class="tooltip below">
          <span>Virtual Assistant</span>
          <span class="tooltip-text">Tooltip text goes here!</span>
        </a>
      </div>
    </div>
  </div>

    <?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/tileList.php'); ?>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>