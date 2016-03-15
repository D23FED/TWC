<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
	include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php');
} 
?>

<label for="form_field">
  <input id="date" class="datepicker" type="text" value="10/01/2013" readonly="" name="date">
</label>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
	include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/footer.php');
} 
?>