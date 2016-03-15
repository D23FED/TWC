<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/'){
	include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php');} 
	?>

	<h3>Non-Chronological Content</h3>

	<div class="pagination">
		<ol>
			<li>
				<div class="cta omega twc-icon-only icon-double-angle-left disabled page_first">
					<a href="" rel="first">
						<span class=""></span>
					</a>
				</div>
			</li>
			<li>
				<div class="cta omega twc-icon-only icon-angle-left page_prev">
					<a href="" rel="prev">
						<span></span>
					</a>
				</div>
			</li>
			<li>
				<div class="cta omega">
					<a href="">
						<span>1</span>
					</a>
				</div>
			</li>
			<li>
				<div class="cta omega">
					<a href="">
						<span>2</span>
					</a>
				</div>
			</li>
			<li>
				<div class="cta omega">
					<a href="">
						<span>3</span>
					</a>
				</div>
			</li>
			<li>
				<div class="cta omega twc-icon-only icon-angle-right page_next">
					<a href="" rel="next">
						<span></span>
					</a>
				</div>
			</li>
			<li>
				<div class="cta omega twc-icon-only icon-double-angle-right page_last">
					<a href="" rel="last">
						<span class=""></span>
					</a>
				</div>
			</li>
		</ol>
	</div>

	<?
	if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
		include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/footer.php');
	} 
	?>