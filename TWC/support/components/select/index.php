<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>

<select name="" class="selectLink">
  <option>Select a link</option>
  <option value="http://google.com">Go</option>
  <option value="http://google.com">Goo</option>
  <option value="http://google.com">Goog</option>
  <option value="http://google.com">Googl</option>
  <option value="http://google.com">Google</option>
</select>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>