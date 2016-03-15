<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>
<style>
	.showContent {
		display: none;
	}
	.styleguide-cta {
		text-align: right;
		float: right;
	}
	@media (max-width: 40em) {
		.styleguide-expand {
			display: none;
		}
		.showContent {
			display: block;
		}
	}
</style>
<span id="top-anchor"></span>
<div class="style-guide">
	<div class="twc-box-column">
		<p class="light fs20">
			A style guide and code standards document as a way of ensuring brand and code consistency. By maintaining all of TWC Residential's primary elements on a single page; we can see how we can modularly reuse components, as well as how changes to our semantic elements will effect the site overall. This style guide also serves as a curated, archival collection for design and UX/UI decisions made during the course of the sites' development. Bonus points for making cross-browser testing simpler by putting everything in one place.
		</p>
	</div>

	<hr class="divider-shadow" />
	<span class="h2 jumpTo-anchor" id="breakpoints-anchor">Breakpoints</span>
	<div class="vertical lined">
    <ul>
        <li>Mobile: Up to 640px or 40em</li>
        <li>Tablet: 640px - 768px or 48em</li>
        <li>Desktop: 769px+</li>
    </ul>
	</div>

	<hr/>

	<span class="h2 jumpTo-anchor" id="colors-anchor">Colors</span>
	<div class="styleguide-cta">
		<div class="cta omega styleguide-expand icon-after icon-angle-down">
		  <a href="">
		    <span>Expand This</span>
		  </a>
		</div>
		<div class="cta omega twc-icon-after icon-angle-right">
			<a href="/TWC/support/components/colors">
				<span>See this</span>
			</a>
		</div>
	</div>
	<hr>
	<div class="showContent">
		<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/colors/index.php'); ?>
		<hr class="divider-shadow" />
	</div>

	<span class="h2 jumpTo-anchor" id="typography-anchor">Typography</span>
	<div class="styleguide-cta">
		<div class="cta omega styleguide-expand icon-after icon-angle-down">
		  <a href="">
		    <span>Expand This</span>
		  </a>
		</div>
		<div class="cta omega twc-icon-after icon-angle-right right">
			<a href="/TWC/support/components/typography">
				<span>See this</span>
			</a>
		</div>
	</div>
	<hr>
	<div class="showContent">
		<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/typography/index.php'); ?>
		<hr class="divider-shadow" />
	</div>

	<span class="h2 jumpTo-anchor" id="hr-anchor">Horizontal Rule</span>
	<div class="styleguide-cta">
		<div class="cta omega styleguide-expand icon-after icon-angle-down">
		  <a href="">
		    <span>Expand This</span>
		  </a>
		</div>
		<div class="cta omega twc-icon-after icon-angle-right right">
			<a href="/TWC/support/components/horizontalRule">
				<span>See this</span>
			</a>
		</div>
	</div>
	<hr>
	<div class="showContent">
		<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/horizontalRule/index.php'); ?>
		<hr class="divider-shadow" />
	</div>

	<span class="h2 jumpTo-anchor" id="lists-anchor">Lists</span>
	<div class="styleguide-cta">
		<div class="cta omega styleguide-expand icon-after icon-angle-down">
		  <a href="">
		    <span>Expand This</span>
		  </a>
		</div>
		<div class="cta omega twc-icon-after icon-angle-right right">
			<a href="/TWC/support/components/lists">
				<span>See this</span>
			</a>
		</div>
	</div>
	<hr>
	<div class="showContent">
		<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/lists/index.php'); ?>
		<hr class="divider-shadow" />
	</div>

	<span class="h2 jumpTo-anchor" id="buttons-anchor">Buttons</span>
	<div class="styleguide-cta">
		<div class="cta omega styleguide-expand icon-after icon-angle-down">
		  <a href="">
		    <span>Expand This</span>
		  </a>
		</div>
		<div class="cta omega twc-icon-after icon-angle-right right">
			<a href="/TWC/support/components/buttons">
				<span>See this</span>
			</a>
		</div>
	</div>
	<hr>
	<div class="showContent">
		<h3>Omega</h3>
		<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/index.php'); ?>
		<hr class="divider-shadow" />
	</div>

	<span class="h2 jumpTo-anchor" id="promoSlider-anchor">Promo Slider</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/promoSlider">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<h3>Horizontal</h3>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/promoSlider/horizontal/index.php'); ?>
	<hr>
	<h3>Vertical</h3>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/promoSlider/vertical/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="bottomBoxes-anchor">Bottom Boxes</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/bottom-boxes">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/bottom-boxes.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="tabs-anchor">Tabs</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/tabs">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/tabs/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="accordion-anchor">Accordion</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/accordion">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/accordion/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="list-anchor">List Accordion</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/listAccordion">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/listAccordion/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="forms-anchor">Forms</span>
	<div class="styleguide-cta">
		<div class="cta omega styleguide-expand icon-after icon-angle-down">
		  <a href="">
		    <span>Expand This</span>
		  </a>
		</div>
		<div class="cta omega twc-icon-after icon-angle-right right">
			<a href="/TWC/support/components/forms">
				<span>See this</span>
			</a>
		</div>
	</div>
	<hr>
	<div class="showContent">
		<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/forms/index.php'); ?>
		<hr class="divider-shadow" />
	</div>

	<span class="h2 jumpTo-anchor" id="feedback-anchor">Feedback Survey</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/feedback-survey">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/feedback-survey.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="pricing-anchor">Pricing</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/pricing">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/pricing/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="compare-anchor">Compare Tables</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/compareTable">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/compareTable/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="checkbox-anchor">Checkbox Tables</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/checkboxTables">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/checkboxTables/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="pushPull-anchor">Push/Pull</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/order">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/order/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="tile-anchor">Tilelist</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/tileList">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/tileList.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="leftRail-anchor">Leftrail</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/leftRail-list">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/leftRail-list.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="side-anchor">Side Accordion</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/sideAccordion">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/sideAccordion.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="wrappingColumns-anchor">Wrapping Columns</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/wrappingColumns">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/wrappingColumns/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="image-anchor">Image Content Panel</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/image-content-panel">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/image-content-panel/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="modal-anchor">Modal</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/modal">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/modal/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="video-anchor">Video</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/video">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/video/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="rollover-anchor">Roll Over Captions</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/rolloverCaptions">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/rolloverCaptions/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="operational-anchor">Operational Message</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/operationalMessage">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/operationalMessage/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="share-anchor">Share</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/share">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/share.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="flyout-anchor">Flyout</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/flyout">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/flyout.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="truncate-anchor">Truncate</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/truncate">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/truncate/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="tooltips-anchor">Tooltips</span>
	<div class="cta omega twc-icon-after icon-angle-right right">
		<a href="/TWC/support/components/tooltips">
			<span>See this</span>
		</a>
	</div>
	<hr>
	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/tooltips/index.php'); ?>
	<hr class="divider-shadow" />

	<span class="h2 jumpTo-anchor" id="column-anchor">Column Control</span>
	<div class="styleguide-cta">
		<div class="cta omega styleguide-expand icon-after icon-angle-down">
		  <a href="">
		    <span>Expand This</span>
		  </a>
		</div>
		<div class="cta omega twc-icon-after icon-angle-right right">
			<a href="/TWC/support/components/columnControl">
				<span>See this</span>
			</a>
		</div>
	</div>
	<hr>
	<div class="showContent">
		<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/columnControl/index.php'); ?>
		<hr class="divider-shadow" />
	</div>

	<span class="h2 jumpTo-anchor" id="best-anchor">Best Practices</span>
	<div class="styleguide-cta">
		<div class="cta omega styleguide-expand icon-after icon-angle-down">
		  <a href="">
		    <span>Expand This</span>
		  </a>
		</div>
		<div class="cta omega twc-icon-after icon-angle-right right">
			<a href="/TWC/support/components/bestPractices">
				<span>See this</span>
			</a>
		</div>
	</div>
	<hr>
	<div class="showContent">
		<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/bestPractices/index.php'); ?>
	</div>

</div>



<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>