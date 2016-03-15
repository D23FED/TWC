<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<style>

  .prettyprint {
    position: relative;
  }

  .selectSource {
    position: absolute;
    top: 0;
    right: 0;
    padding: .5em;
    border-radius: 0 0 0 3px;
    background: grey;
    color: #333;
    cursor: pointer;
  }
</style>



<pre class="prettyprint">
<code id="source">&lt;ul&gt;
  &lt;li&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/li&gt;
  &lt;li&gt;Quo tenetur necessitatibus pariatur iusto id beatae dolore.&lt;/li&gt;
  &lt;li&gt;Consectetur, obcaecati, soluta architecto voluptas dolore saepe velit!&lt;/li&gt;
  &lt;li&gt;Et, corporis ratione quae adipisci commodi similique ducimus.&lt;/li&gt;
  &lt;li&gt;Totam, rerum sapiente neque quidem enim consequatur natus.&lt;/li&gt;
  &lt;li&gt;Illo, nesciunt officiis nemo adipisci optio quidem minima.&lt;/li&gt;
  &lt;li&gt;Minima, vero sapiente quod natus tempore nihil iure!&lt;/li&gt;
  &lt;li&gt;Porro, saepe error quam consequuntur maiores voluptates velit.&lt;/li&gt;
&lt;/ul&gt;</code><div class="selectSource">Select Source</div>
</pre>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>

<script type="text/javascript">
    jQuery(document).ready(function(){
    function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

$(function() {
    $('.selectSource').click(function() {
        SelectText('source');
    });
  });
});
</script>