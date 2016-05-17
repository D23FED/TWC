<!-- Begin Logo-only Header Component -->
<header id="logoHeader" class="twc-header twc-full twc-backgroundGradient-2">
	<div class="twc-container">
		<div class="twc-logo">
			<a class="twc-logo-img" href="../" title="TWC Logo"><img src="/TWC/core/images/small_TWC_EB_Horiz_White_RGB_300.png" title="TWC logo"></a>
		</div>
		<div class="right">
			<ul class="horizontal">
				<li><?php
					if ($header_title_text !='') {
						echo "<div>$header_title_text</div>";
					}
				?></li>
				<li><?php
					if ($chat) {
						echo '
							<div class="cta omega">
								<button><span class="twc-icon-before icon-comments-alt"></span>Need Help? Let\'s Chat</button>
							</div>';
					}
				?></li>
			</ul>
		</div>
	</div>
</header>
<!-- End Header Component -->
