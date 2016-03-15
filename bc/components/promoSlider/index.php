<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php');
}
?>

<div class="cta omega twc-icon-after icon-angle-right mobile-full">
  <a href="horizontal" analyticsname="test">
    <span>Horizontal</span>
  </a>
</div>

<div class="cta omega twc-icon-after icon-angle-right mobile-full">
  <a href="vertical" analyticsname="test">
    <span>Vertical</span>
  </a>
</div>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/footer.php');
}
?>