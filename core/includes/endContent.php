        	</div>
        </div>
    </div>
    <!-- End Content Wrapper -->
    <?php if ( (isset($jumpTo)) &&  ($jumpTo === true) ) {
    	echo '<select id="anchor" class="jumpTo"></select>';
    } ?>
    <?php if ( (isset($scrollTo)) && ($scrollTo === true) ) {
    	echo '<a href="" id="scrollToTop" class="scrollToTop">Scroll to top</a>';
    } ?>
    <div class="loadtime">loadtime</div>
    <div class="viewport">viewport</div>