<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>


				<h3>A Basic Unordered List</h3>

				<ul>
					<li>This is a list item in an unordered list</li>
					<li>An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line. </li>
					<li>
						Lists can be nested inside of each other
						<ul>
							<li>This is a nested list item</li>
							<li>This is another nested list item in an unordered list</li>
						</ul>
					</li>
					<li>This is the last list item</li>
				</ul>

<pre class="prettyprint">
&lt;ul&gt;
    &lt;li&gt;This is a list item in an unordered list&lt;/li&gt;
    &lt;li&gt;An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line. &lt;/li&gt;
    &lt;li&gt;
	Lists can be nested inside of each other
	    &lt;ul&gt;
	        &lt;li&gt;This is a nested list item&gt;/li&gt;
	        &lt;li&gt;This is another nested list item in an unordered list&lt;/li&gt;
	    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;This is the last list item&lt;/li&gt;
&lt;/ul&gt;
</pre>

				<hr>

				<h3>A Vertical Bulleted Unordered List</h3>
				<div class="vertical bulleted">
                    <ul>
                        <li>This is a list item in an unordered list</li>
                        <li>An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line. </li>
                        <li>
                            Lists can be nested inside of each other
                            <ul>
                                <li>This is a nested list item</li>
                                <li>This is another nested list item in an unordered list</li>
                            </ul>
                        </li>
                        <li>This is the last list item</li>
                    </ul>
				</div>
<pre class="prettyprint">
&lt;div class="vertical bulleted"&gt;
    &lt;ul&gt;
        &lt;li&gt;This is a list item in an unordered list&lt;/li&gt;
        &lt;li&gt;An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line. &lt;/li&gt;
        &lt;li&gt;
    	Lists can be nested inside of each other
    	    &lt;ul&gt;
    	        &lt;li&gt;This is a nested list item&gt;/li&gt;
    	        &lt;li&gt;This is another nested list item in an unordered list&lt;/li&gt;
    	    &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;This is the last list item&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre>

                <hr>

                <h3>A Vertical Unordered List</h3>

                <div class="vertical list">
                    <ul>
                        <li>
                            <div class="smartLink parbase">
                                   <a href="">Lorem</a>
                            </div>
                        </li>
                        <li>
                            <div class="smartLink parbase">
                                   <a href="">Ipsum</a>
                            </div>
                        </li>
                                                <li>
                            <div class="smartLink parbase">
                                   <a href="">Dolor</a>
                            </div>
                        </li>
                                                <li>
                            <div class="smartLink parbase">
                                   <a href="">Amet</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr>
                <div class="vertical list">
                    <ul>
                        <li>
                            <span>Lorem</span>
                        </li>
                        <li>
                            <span>Ipsum</span>
                        </li>
                        <li>
                            <span>Dolor</span>
                        </li>
                        <li>
                            <span>Amet</span>
                        </li>
                        <li>
                            <span>Set</span>
                        </li>
                    </ul>
                </div>


<pre class="prettyprint">
&lt;div class="vertical"&gt;
    &lt;ul&gt;
        &lt;li&gt;Lorom&lt;/li&gt;
        &lt;li&gt;Ipsum&lt;/li&gt;
        &lt;li&gt;Dolor&lt;/li&gt;
        &lt;li&gt;Amet&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre>

				<hr>

				<h3>Ordered List</h3>

				<ol>
					<li>This is a list item in an ordered list</li>
					<li>An ordered list is a list in which the sequence of items is important. An ordered list does not necessarily contain sequence characters.</li>
					<li>
						Lists can be nested inside of each other
						<ol>
							<li>This is a nested list item</li>
							<li>This is another nested list item in an ordered list</li>
						</ol>
					</li>
					<li>This is the last list item</li>
				</ol>

<pre class="prettyprint">
&lt;ol&gt;
    &lt;li&gt;This is a list item in an ordered list&lt;/li&gt;
    &lt;li&gt;An ordered list is a list in which the sequence of items is important. An ordered list does not necessarily contain sequence characters.&lt;/li&gt;
    &lt;li&gt;
    Lists can be nested inside of each other
        &lt;ol&gt;
            &lt;li&gt;This is a nested list item&lt;/li&gt;
            &lt;li&gt;This is another nested list item in an ordered list&lt;/li&gt;
        &lt;/ol&gt;
    &lt;/li&gt;
    &lt;li&gt;This is the last list item&lt;/li&gt;
&lt;/ol&gt;
</pre>

				<hr>

				<h3>Definition List</h3>

				<dl>
					<dt>Definition List</dt>
						<dd>A number of connected items or names written or printed consecutively, typically one below the other.</dd>
				    <dt>This is a term.</dt>
				    <dd>This is the definition of that term, which both live in a dl.</dd>
				    <dt>Here is another term.</dt>
				    <dd>And it gets a definition too, which is this line.</dd>
				    <dt>Here is term that shares a definition with the term below.</dt>
				    <dd>And it gets a definition too, which is this line.</dd>
				</dl>

<pre class="prettyprint">
&lt;dl&gt;
    &lt;dt&gt;Definition List&lt;/dy&gt;
    &lt;dd&gt;A number of connected items or names written or printed consecutively, typically one below the other.&lt;/dd&gt;
    &lt;dt&gt;This is a term.&lt;/dt&gt;
    &lt;dd&gt;This is the definition of that term, which both live in a dl.&lt;/dd&gt;
    &lt;dt&gt;Here is another term.&lt;/dt&gt;
    &lt;dd&gt;And it gets a definition too, which is this line.&lt;/dd&gt;
    &lt;dt&gt;Here is term that shares a definition with the term below.&lt;/dt&gt;
    &lt;dd&gt;And it gets a definition too, which is this line.&lt;/dd&gt;
&lt;/dl&gt;
</pre>

				<hr>

				<h3>A Horizontal Unordered List with Slashes</h3>

				<div class="horizontal list slashes">
    				<ul>
    					<li>
    					    <div class="smartLink parbase">
        					       <a href="">Lorem</a>
    					    </div>
                        </li>
    					<li>
    					    <div class="smartLink parbase">
        					       <a href="">Ipsum</a>
    					    </div>
                        </li>
                        <li>
    					    <div class="smartLink parbase">
        					       <a href="">Dolor</a>
    					    </div>
                        </li>
                        <li>
    					    <div class="smartLink parbase">
        					       <a href="">Amet</a>
    					    </div>
                        </li>
    				</ul>
                </div>

<pre class="prettyprint">
&lt;div class="horizontal slashes"&gt;
    &lt;ul&gt;
        &lt;li&gt;Lorom&lt;/li&gt;
        &lt;li&gt;Ipsum&lt;/li&gt;
        &lt;li&gt;Dolor&lt;/li&gt;
        &lt;li&gt;Amet&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre>

				<hr>

				<h3>A Horizontal Unordered List with Pipes</h3>

				<div class="horizontal list pipes">
    				<ul>
    					<li>
    					    <div class="smartLink parbase">
        					       <a href="">Lorem</a>
    					    </div>
                        </li>
    					<li>
    					    <div class="smartLink parbase">
        					       <a href="">Ipsum</a>
    					    </div>
                        </li>
                        <li>
    					    <div class="smartLink parbase">
        					       <a href="">Dolor</a>
    					    </div>
                        </li>
                        <li>
    					    <div class="smartLink parbase">
        					       <a href="">Amet</a>
    					    </div>
                        </li>
    				</ul>
                </div>

<pre class="prettyprint">
&lt;div class="horizontal pipes"&gt;
    &lt;ul&gt;
        &lt;li&gt;Lorom&lt;/li&gt;
        &lt;li&gt;Ipsum&lt;/li&gt;
        &lt;li&gt;Dolor&lt;/li&gt;
        &lt;li&gt;Amet&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>