
<!-- Share Component -->
<div class="share">
	<!-- Print / Email Component -->
		<div class="share-social">
			<div style="display: inline-block; float: left;">
				<?php if(($linkedInButton) || !isset($linkedInButton))
					echo ' <div class="cta bc-omega share twc-icon-only icon-linkedin">
						<a id="linkedin">
							<span></span>
						</a>
					</div>'
				?>

				<?php if(($facebookButton) || !isset($facebookButton))
					echo '<div class="cta bc-omega share twc-icon-only icon-facebook">
						<a id="facebook">
							<span></span>
						</a>
					</div>'
				?>

				<?php if(($twitterButton) || !isset($twitterButton))
					echo '<div class="cta bc-omega share twc-icon-only icon-twitter">
						<a id="twitter">
							<span></span>
						</a>
					</div>'
				?>
			</div>
			<div style="display: inline-block; float: none;">

			</div>
			<div style="display: inline-block; float: right;">
				<?php if(($printButton) || !isset($printButton))
					echo '<div class="cta bc-omega share twc-icon-before icon-print">
						<a id="print" onClick="window.print()">
							<span></span>
						</a>
					</div>'
				?>

				<!-- <div id="email" class="cta bc-omega share twc-icon-before icon-envelope-alt">
					<a href="mailto:spencerjw@gmail.com?subject=your subject&body=your body">
						<span></span>
					</a>
				</div> -->
				<?php if(($emailButton) || !isset($emailButton))
					echo '<div id="email" class="cta bc-omega share twc-icon-before icon-envelope-alt">
						<a href="">
							<span></span>
						</a>
					</div>'
				?>
			</div>
		</div>
	<!-- // .Print / Email Component-->

	<!-- // Email Module -->
 		<div class="email-module">
			<div class="close"></div>
			<b>Enter Your Email Address</b>
			<form>
				<div class="formrow">
					<div class="form-item">
						<label for="email">Your Email Address:</label>
						<input id="email_addr" type="email" autocomplete="email" name="email">
					</div>
				</div>

				<div class="formrow">
					<div class="form-item">
						<label for="send">Send To:</label>
						<input id="to_email_addr" type="text" name="to_email">
					</div>
				</div>

				<div class="formrow">
					<div class="form-item">
						<label for="text">Add Note:</label>
						<textarea></textarea>
					</div>
				</div>

				<div class="formrow">
					<div class="form-item">
						<div class="cta gray">
							<button type="submit">Send</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	<!-- .Email Module -->
</div>
<!-- .Share Component -->
<div id="b77f83b7-6912-40cd-bd3f-589ef89122cf">
<h3>Abstract</h3>
<p>In support of their business continuity and disaster recovery plans, many midsized companies endeavor to avoid putting all their eggs in one basket.</p>
<p>Understanding the critical role of last-mile connectivity and always available Internet access for their enterprises, savvy firms utilize redundant connections from multiple service providers. Despite the good intentions, their Internet connectivity risk may still be in a single basket. That is because internet service providers (ISPs) and competitive local exchange carriers (CLECs) may operate using leased infrastructure from the same incumbent local exchange carrier (ILEC). When the ILEC network fails, so do the services of alternative providers utilizing the same network.</p>
<p>Internet service outages may result from myriad causes: from sabotage, natural disasters or terrorist attacks, to unexpected utility line cuts and regularly scheduled network repairs, as well as equipment or application software failures. Additionally, IP network configuration errors, hacker attacks or congestion can severely degrade Internet services, undermining service availability. Whatever the cause, when the flow of Internet data stops, business does too. Mediums-size firms experience an average of 32 hours of network downtime each year due to service provider failures with an estimated cost of $189,000 in lost revenue and productivity.</p>
<p>Increasingly, companies are turning to cable providers to ensure business continuity. Cable’s infrastructure is physically separate from the telephone company networks at the local last mile, metro and regional levels, enabling genuine network redundancy and diversity. Additionally, by owning and operating their networks and construction teams, cable operators may more quickly provision and better monitor services than can CLECs or ISPs that merely resell ILEC capacity.</p>
<p>To support business continuity and disaster recovery companies need to select multiple providers which reduce risk resulting from a single point of failure. Furthermore, providers that can rapidly scale extra bandwidth when needed and deliver cloud-based backup, storage and alternate site support are preferred partners.</p>

</div>