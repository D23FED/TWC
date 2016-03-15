<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
	include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
} 
?>

<style type="text/css">
  body { text-align: center; }
  .loadtime { display: none; }
  .viewport {
    font-size: 2.5rem;
    height: 1.5em;
    padding: 0.125em;
    text-align: center;
    top: 5em;
    width: 100%;
  }
</style>

<h3>This page was created to help with compiling browser size information across many tablets and phones.</h3>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
	include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
} 
?>

