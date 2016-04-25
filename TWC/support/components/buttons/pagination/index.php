<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/'){
	include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');} 
	?>

<h3>Non-Chronological Content</h3>
<div class="twc-box-column">
<div class="pagination">
	<ol>
		<li>
			<div class="cta omega twc-icon-only icon-double-angle-left page_first">
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
			<div class="cta omega disabled">
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
</div>

<h3>Chronological Content</h3>
<div class="twc-box-column">
	<div class="pagination">
		<ol>
			<li>
				<div class="cta omega twc-icon-only icon-double-angle-left page_first">
					<a href="" rel="first">
						<span class=""></span>
					</a>
				</div>
			</li>
			<li>
				<div class="cta omega page_prev">
					<a href="" rel="prev" class="prev">
						<span>Previous</span>
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
				<div class="cta omega disabled">
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
				<div class="cta omega page_next">
					<a href="" rel="next" class="next">
						<span>Next</span>
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
</div>


	<?
	if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
		include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
	} 
	?>