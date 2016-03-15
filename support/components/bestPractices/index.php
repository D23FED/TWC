<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
	include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
} 
?>

<!-- Best Practices Component -->
  <h3>The Golden Rule</h3>
  <p class="lede">All code in any part of the code base should look like a single person typed it, no matter how many people contributed.</p>

  <hr>

  <h2>HTML</h2>
  <hr>

  <div class="vertical lined">
    <ul>
      <li>
        <h5>Human Readable</h5>

        <p class="lede">Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others.</p>
      </li>
      <li>
        <h5>HTML5 doctype</h5>

        <p class="lede">Enforce standards mode in every browser possible with this simple doctype at the beginning of every HTML page.</p>
<pre class="prettyprint">&lt;!DOCTYPE html&gt;</pre>
      </li>
      <li>
        <div class="bulleted">
          <h5>Syntax</h5>
          <ul>
            <li>Use soft-tabs with four spaces</li>
            <li>Nested elements should be indented once (4 spaces)</li>
            <li>Don't include a trailing slash in self-closing elements</li>
          </ul>
        </div>
      </li>
      <li>
        <div class="bulleted">
          <h5>Attributes</h5>
          <ul>
            <li>
              Attributes should be lowercase.
            </li>
            <li>
              Always use double quotes ("), never single quotes, unless needed for JS specificity.
            </li>
          </ul>
        </div>
      </li>
      <li>
        <h5>Attribute order</h5>
        <p>HTML attributes should come in this particular order for easier reading of code.</p>
        <div class="vertical bulleted">
          <ul>
            <li><code>id</code></li>
            <li><code>class</code></li>
            <li><code>data-*</code></li>
            <li><code>for</code> | <code>type</code> | <code>href</code> | <code>src</code></li>
          </ul>
        </div>
      </li>
      <li id="checkbox">
        <h5>Checkbox/Radio Inputs</h5>
        <p>Checkbox and Radio inputs should always have the label tied to it via <b>id</b> and <b>for</b> attributes.</p>
        <form>
          <fieldset>
            <input id="selectMe" type="checkbox">
            <label for="selectMe">This is the label, and I am clickable</label>
          </fieldset>
        </form>
        <pre class="prettyprint">
        &lt;input id="selectMe" type="checkbox"&gt;
        &lt;label for="selectMe"&gt;
        This is the label, and I am clickable
        &lt;/label&gt;
        </pre>
      </li>
      <li>

        <h5>HTML Comments</h5>
        <div class="bulleted">
          <ul>
            <li>
              Section comments are separated from the previous block by two lines, and should have one following line of space.
            </li>
          </ul>
        </div>

<pre class="prettyprint">
&lt;!-- Component Name --&gt;
&lt;div class="componentName"&gt;
...
&lt;/div&gt;
&lt;!-- ./Component Name --&gt;
</pre>
      </li>
    </ul>
  </div>
  <hr>
  <h2>CSS</h2>
  <hr>

  <div class="vertical lined">
    <ul>
      <li>
        <ul class="bulleted">
          <li>
            <span>Use soft-tabs with four spaces</span>
            <ul>
              <li>Two spaces was previously used, so many files will have 2 spaces. Please fix as you find them.</li>
            </ul>
          </li>
          <li>When grouping selectors, keep individual selectors to a single line</li>
          <li>Include one space before the opening brace of declaration blocks</li>
          <li>Place closing braces of declaration blocks on a new line</li>
          <li>Include one space after <code>:</code> in each property</li>
          <li>Each declaration should appear on its own line</li>
          <li>End all declarations with a semi-colon</li>
          <li>Comma-separated values should include a space after each comma</li>
          <li>Don't include spaces after commas in RGB or RGBa colors</li>
          <li>Do not specify units for zero values, e.g., margin: 0; instead of margin: 0px;</li>
          <li>Lowercase all hex values, e.g., #fff instead of #FFF</li>
          <li>Use shorthand hex values where available, e.g., #fff instead of #ffffff</li>
          <li>Quote attribute values in selectors, e.g., input[type="text"]</li>
        </ul>
      </li>
      <li>
        <h5>Declaration Organization</h5>

        <ol>
          <li>Box (Display, Float, Position, Left, Top, Width, Height, Margin, Padding, etc.)</li>
          <li>Border</li>
          <li>Background</li>
          <li>Text</li>
          <li>Other</li>
        </ol>

<pre class="prettyprint">
.someDiv {
    color: #222;
}

.someOtherDiv,
.someAdditional Div {
    margin: 0 auto;
    color: #222;
}
</pre>
    </li>
    <li>
      <h5>General Formatting</h5>

      <p>Use a new line for every block, list or table element, and indent every such child element to show heirarchy and improve understanding</p>
<pre class="prettyprint">
.print {
    display: block;
    margin: 0;
    padding: 0 7px;
    height: 30px;
    background: #4f799f;
    line-height: 30px;
}

.print:hover {
    background: #265a83;
}
</pre>
  </li>
  <li>
    <p>Avoid Qualifying ID and class names with type selectors</p>
<pre class="prettyprint">
// this is bad
ul#example {
    color: #ff0;
}
div.error {
    color: red;
}
</pre>
<pre class="prettyprint">
// this is good
#example {
    color: #0f0;
}
.error {
    color: green;
}
</pre>

    <p>p.s. ID's are bad for CSS, only use ID's for javascript hooks when necessary</p>
  </li>
  <li>
    <h5>Hexadecimal Notation</h5>

    <p>For color values that permit, 3 character hexadecimal is preferred</p>
<pre class="prettyprint">
/* not recommended */
color: #00ff00;
</pre>
<pre class="prettyprint">
/* not recommended */
color: #0f0;
</pre>
  </li>
  <li>
    <h4 class="error">!important</h4>
    <h5>DO NOT USE</h5>
    <p>Use greater specificity to workaround using !important;</p>
    <p>If you feel it is necessary to use, place comment next to every !important explaining why</p>
  </li>
  <li>
    <h5>Use the SMACSS Approach</h5>
<pre class="prettyprint">
.componentName {

  Base {
  ...
  }

  Layout {
  ...
  }

  Module {
  ...
  }

  State {
  ...
  }

  Theme {
  ...
  }

}
</pre>
</li>
<li>
<h5>Commenting</h5>
<pre class="prettyprint">
<br class="code-comment">// File headers are commented thusly:

/* ==========================================================================
    Component Name -- Version: 1.0.0.0 - Updated: MM/DD/YYYY
   ========================================================================== */
</pre>
<pre class="prettyprint">
<br class="code-comment">// Section chunks get styled as such:
/*
* Chunk of long
* text gets commented
* like this
*/
</pre>
<pre class="prettyprint">
<br class="code-comment">// Hints get styled like this:
/* Hint */
</pre>
</li>
</ul>
</div>

<hr>
<h2>SCSS</h2>
<hr>

<div class="vertical lined">
  <ul>
    <li>
      <h5>File Organization</h5>
<div class="bulleted">
  <ul>
    <li>
      Mixins and variables go in scss/modules/.
    </li>
    <li>
      Styles related to components/modules/views go in sass/components/.
    </li>
    <li>
      Sass and CSS from other projects goes in sass/vendor/.
    </li>
  </ul>
</div>

<pre class="prettyprint">sass/
  ├── main.scss
  ├── modules/
  |   ├── _mixins.scss
  |   ├── _var.scss
  ├── partials/
  |   ├── _btn.scss
  |   ├── _list.scss
  |   ├── _nav.scss
  |   ├── _etc...
  └── vendor/
    └── _jquery.ui.core.scss
</pre>
    </li>
    <li>
      <h5>Main Stylesheet</h5>
      <p>All files get compiled into the main.scss stylesheet, and should be scoped accordingly.</p>
<p>The main.scss file serves as a "table of contents" and the @import directives should be listed with vendor dependencies first, then author dependencies and core stylesheets, then components.</p>
<p>Organize the components imports in a manner that makes sense, in other words, group components with the component they extend or inherit from.</p>

<pre class="prettyprint">
/* Mixins and Variables */
// All globals are combined in allModules.scss to reduce the nuber of updates necessary to add new files
@import "modules/allModules";

/* Base */
@import "partials/base";

/* Layout */
@import "partials/layout";

/* Modules */

@import "partials/colors";

@import "partials/typography";

@import "partials/helpers";

@import "partials/lists";

@import "partials/buttons";

@import "partials/pagination";

@import "partials/accessibility";

@import "partials/forms";

@import "partials/images";

@import "partials/videos";

@import "partials/modules";

@import "partials/jumpTo";

@import "partials/_prototype";

@import "partials/_styleguide";

/* Components */
</pre>
    </li>
    <li>
      <h5>Structuring Code</h5>
<p>@extends and @includes are likely to be overwritten by future elements, placing them at the top of the property list calls them out and avoids the beginning of a specificity war.</p>

<div class="bulleted">
  <ul>
    <li>
      @extends should be grouped together at the top of the selector.
    </li>
    <li>
      @includes should be grouped together after @extends.
    </li>
    <li>
      Regular styles for the current selector should be after @includes.
    </li>
    <li>
      Nested selectors appear last.
    </li>
    <li>
      Nested selectors using & should appear above child (>) nested selectors.
    </li>
  </ul>
</div>

    </li>
    <li>
      <h5>Limit nesting to 3 levels and/or 50 lines</h5>
      <p>Nesting selectors more than three levels deep and the code is at risk of being to reliant on HTML structure, overly-specific and difficult to understand.</p>
      <p>50 lines is reasonable length for keeping an entire block on a code editor screen without having to scroll.</p>
    </li>
    <li>
      <h5>Variablize ALL THE THINGS!</h5>
      <div class="bulleted">
        <ul>
          <li>
            Variablize all colors.
          </li>
          <li>
            Numbers (other than 0 or 100%) with strong meaning or frequent use should be variables.
          </li>
          <li>
            Use hyphens (-) in variable names.
          </li>
          <li>
            Name variables based on what they represent, not their values, e.g. $text-size-large instead of $text-size-24.
          </li>
          <li>
            Colors, fonts, and base measurements are all great candidates for variables.
If you find yourself writing a number other than 0 or 100% more than once, make it a variable.
          </li>
          <li>
            Most variables should be stored in the _variables.scss partial; however, it's acceptable to define component specific variables in the component files.
          </li>
          <li>
            In this case, the variables should be stored at the top of the file.
          </li>
        </ul>
      </div>
    </li>
    <li>
      <h5>Comments</h5>
      <p>Try to stick with standard CSS comments, but you can use the Sass style (//) comments for trivial comments or quickly debugging.</p>
    </li>
  </ul>
</div>

<hr>
<h2>JS</h2>
<hr>

<div class="vertical lined">
  <ul>
    <li>
      <p class="lede">Prefix all javascript-based selectors with js-. The idea is that you should be able to tell a presentational class from a functional class. Some of the codebase doesn't do this, let's try and move toward it.</p>
    </li>
  </ul>
</div>

<hr>

<h2>ARIA &amp; Accessibility</h2>
<hr>

<div class="vertical lined">
  <ul>
    <li>
      <p class="lede">Making it possible to provide an enhanced user experience for people with disabilities when using internet applications with assistive technologies.</p>
    </li>
    <li>
      <h5>Landmark Roles</h5>

      <p>banner - typically the "header" of the page</p>
<pre class="prettyprint">
&lt;header role="banner" class="header"&gt;&lt;/header&gt;
</pre>

      <p>navigation - any navigation list, typically the nav element</p>
<pre class="prettyprint">
&lt;nav role="navigation" class="nav"&gt;&lt;/nav&gt;
</pre>

      <p>main - the main content area</p>
<pre class="prettyprint">
&lt;section role="main" class="main"&gt;&lt;/main&gt;
</pre>

      <p>complimentary - information that is tangentially related to the main content</p>
<pre class="prettyprint">
&lt;aside role="complimentary" class="aside"&gt;&lt;/aside&gt;
</pre>

      <p>contentinfo - contains information about the parent document such as copyrights and privacy statements</p>
<pre class="prettyprint">
&lt;footer role="contentinfo" class="footer"&gt;&lt;/footer&gt;
</pre>
    </li>
    <li>
      <h5>Using alt Text Properly</h5>
      <p>A few tips on how and when to use the alt attribute:</p>

      <ul>
        <li>Use the alt attribute for any image that is used as content.</li>
        <li>Use an empty alt atribute for any image that is decorative or not necessary for understanding the content of the page (alt=”“).</li>
        <li>Make sure the description of the image is useful. For example, if the image is your logo your alt should be your company name and not “logo”</li>
      </ul>

      <p>The alt attribute is meant to help users using assitive techonology not miss any content, so make sure your text is helpful to anyone not seeing the image.</p>
    </li>
    <li>
      <code>.visually-hidden</code> - The Visually-Hidden class allows for 508 Compliance on an element needed for visually assisted users.
    </li>
  </ul>
</div>
<!-- .Best Practices Component -->

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
	include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
} 
?>

