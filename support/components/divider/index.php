<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>

<style>
  .box { margin: 0; }
</style>

<div class="50-50 section columnControl">
  <div class="parsys_column twc-col2_5050 marginless">
    <div class="parsys parsys0 twc-col2_5050-c0 parsys_column bordered-right">
      <div class="parbase section">

        <div class="box">
          left column - this column has a '.bordered-right' class
        </div>

      </div>
      <div class="new section"></div>
    </div>
    <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
      <div class="parbase section">

        <div class="box">
          right column
        </div>

      </div>
      <div class="new section"></div>
    </div>
  </div>
  <div class="columnClear"></div>
</div>

<pre class="prettyprint">
&lt;div class="50-50 section columnControl"&gt;
  &lt;div class="parsys_column twc-col2_5050 marginless"&gt;
    &lt;div class="parsys parsys0 twc-col2_5050-c0 parsys_column bordered-right"&gt;
      &lt;div class="parbase section"&gt;

        &lt;div class="box"&gt;
          left column - this column has a '.bordered-right' class
        &lt;/div&gt;

      &lt;/div&gt;
      &lt;div class="new section"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="parsys parsys1 twc-col2_5050-c1 parsys_column"&gt;
      &lt;div class="parbase section"&gt;

        &lt;div class="box"&gt;
          right column
        &lt;/div&gt;

      &lt;/div&gt;
      &lt;div class="new section"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="columnClear"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<hr>

<div class="50-50 section columnControl">
  <div class="parsys_column twc-col2_5050 marginless">
    <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
      <div class="parbase section">

        <div class="box">
          left column
        </div>

      </div>
      <div class="new section"></div>
    </div>
    <div class="parsys parsys1 twc-col2_5050-c1 parsys_column bordered-left">
      <div class="parbase section">

        <div class="box">
          right column - this column has a '.bordered-left' class
        </div>

      </div>
      <div class="new section"></div>
    </div>
  </div>
  <div class="columnClear"></div>
</div>

<pre class="prettyprint">
&lt;div class="50-50 section columnControl"&gt;
  &lt;div class="parsys_column twc-col2_5050 marginless"&gt;
    &lt;div class="parsys parsys0 twc-col2_5050-c0 parsys_column"&gt;
      &lt;div class="parbase section"&gt;

        &lt;div class="box"&gt;
          left column
        &lt;/div&gt;

      &lt;/div&gt;
      &lt;div class="new section"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="parsys parsys1 twc-col2_5050-c1 parsys_column bordered-left"&gt;
      &lt;div class="parbase section"&gt;

        &lt;div class="box"&gt;
          right column - this column has a '.bordered-left' class
        &lt;/div&gt;

      &lt;/div&gt;
      &lt;div class="new section"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="columnClear"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>