<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php');
}
?>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/sideAccordion.php'); ?>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/footer.php');
}
?>