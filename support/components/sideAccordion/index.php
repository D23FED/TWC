<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/sideAccordion.php'); ?>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>