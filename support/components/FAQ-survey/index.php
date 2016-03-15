<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>

<style type="text/css">


.twc-box-column li a, span.FAQLabel {
    -moz-font-feature-settings: inherit;
    -moz-font-language-override: inherit;
    -x-system-font: none;
    font-family: inherit;
    font-size: inherit;
    font-size-adjust: inherit;
    font-stretch: inherit;
    font-style: inherit;
    font-variant: inherit;
    font-weight: 700;
    line-height: 1.4;
}
.faq-survey label {
    font-weight: 700;
    line-height: 2.5;
}
.faq-survey {
    background-attachment: scroll;
    background-clip: border-box;
    background-color: #F0F3F2;
    background-image: none;
    background-origin: padding-box;
    background-position: 0 0;
    background-repeat: repeat;
    background-size: auto auto;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    display: inline-block;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    margin-top: 1em;
    padding-bottom: 1em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 1em;
    position: relative;
    width: 100%;
}
.faq-survey b {
    display: block;
}
.faq-survey p {
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
}
.faq-survey-right {
    display: inline;
    float: right;
}
.faq-survey input {
    margin-left: 20px;
}
#faq-survey-feedback {
    margin-left: 2em;
}
#faq-survey-feedback-response {
    display: none;
    float: right;
}
.faq-survey-yes-response, .faq-survey-no, .faq-survey-no-response {
    clear: both;
    display: none;
}
.faq-survey-no-response p {
    float: left;
    width: 50%;
}
#faq-survey-feedback-live-chat {
    float: right;
    margin-left: 0;
}
textarea {
    height: 150px;
}
.twc-ie8 section {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-bottom-color: #C2C2C2;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-image-outset: 0 0 0 0;
    border-image-repeat: stretch stretch;
    border-image-slice: 100% 100% 100% 100%;
    border-image-source: none;
    border-image-width: 1 1 1 1;
    border-left-color-ltr-source: physical;
    border-left-color-rtl-source: physical;
    border-left-color-value: #C2C2C2;
    border-left-style-ltr-source: physical;
    border-left-style-rtl-source: physical;
    border-left-style-value: solid;
    border-left-width-ltr-source: physical;
    border-left-width-rtl-source: physical;
    border-left-width-value: 1px;
    border-right-color-ltr-source: physical;
    border-right-color-rtl-source: physical;
    border-right-color-value: #C2C2C2;
    border-right-style-ltr-source: physical;
    border-right-style-rtl-source: physical;
    border-right-style-value: solid;
    border-right-width-ltr-source: physical;
    border-right-width-rtl-source: physical;
    border-right-width-value: 1px;
    border-top-color: #C2C2C2;
    border-top-style: solid;
    border-top-width: 1px;
}
.twc-ie8 .twc-topicFAQs ul.content li:first-child, .twc-ie8 .twc-topicFAQs ul.content li:first-child + li, .twc-ie8 .twc-topicFAQs ul.content li:first-child + li + li {
    border-bottom-color: -moz-use-text-color;
    border-bottom-style: none;
    border-bottom-width: medium;
    display: inline-block;
    margin-bottom: 10px;
    padding-bottom: 2%;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 2%;
    vertical-align: top;
    width: 28%;
}
.twc-ie8 span.FAQLabel.active, .twc-ie8 span.FAQLabel.removeBorder {
    border-bottom-color: -moz-use-text-color;
    border-bottom-style: none;
    border-bottom-width: medium;
}
.twc-ie8 .selectBox {
    min-height: 150px;
}
@media (max-width: 68.6875em) {
}
@media (max-width: 31.25em) {
.faq-survey {
    padding-bottom: 3%;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 3%;
    width: 94%;
}
.faq-survey fieldset {
    text-align: center;
}
.faq-survey fieldset label {
    float: none;
}
.faq-survey-right {
    display: block;
    float: none;
    width: auto;
}
.faq-survey-right div.twc-right {
    float: none;
}
.faq-survey button {
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
}
.faq-survey-no-response p {
    width: 100%;
}
#faq-survey-feedback {
    margin-left: 0;
}
#faq-survey-feedback-response {
    position: relative;
}
.faq-survey em p {
    margin-bottom: 10px;
    text-align: center;
}
#faq-survey-feedback-live-chat {
    float: left;
}
}
.faq-content h3.faq-label {
    display: block;
    font-family: 'TWC Round Book',Arial,Sans-Serif;
}
h1.faq-banner {
    text-align: left;
}
.email-share .share-social a:hover {
    background-attachment: scroll;
    background-clip: border-box;
    background-color: #265A83;
    background-image: none;
    background-origin: padding-box;
    background-position: 0 0;
    background-repeat: repeat;
    background-size: auto auto;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}


</style>

<div class="faq_survey faq-survey">
    <form action="#" method="get" id="faq-survey">
    <fieldset>
      <label for="faq-survey_YesNo">Was this information helpful?</label>
      <div class="faq-survey-right">

          <input type="radio" value="Yes" id="yes" name="YesNo">
          <label for="yes">Yes</label>

          <input type="radio" value="No" id="no" name="YesNo">
          <label for="no">No</label>

          <div class="twc-right">
              <div class="cta omega twc-icon-after icon-angle-right" id="faq-survey-feedback">
                  <button type="submit">
                      <span>Send Feedback</span>
                  </button>
              </div>
          </div>
      </div>
    </fieldset>

    <div class="par parsys faq-survey-yes-response">
       <p>Sohail Global Response for &quot;Yes&quot;.</p>

    </div>

    <div class="par parsys faq-survey-no-response">
        <p>Sohail Global Response for &quot;No&quot;.</p>

    </div>

    <div class="par parsys faq-survey-no">
        <em><p>If no, what do you think would improve this section?</p></em>
        <textarea id="response" name="response" required="required" maxlength="500"></textarea>

        <div class="honeypot">




<div id="fillit">

    <input type="text" name="honeypot" id="honeypot">
</div>
</div>

        <div class="cta omega twc-icon-after icon-angle-right" id="faq-survey-feedback-response">
            <button type="submit">
                <span>Send Feedback</span>
            </button>
        </div>
    </div>
    <input type="hidden" id="region" name="region"/>
    <input type="hidden" id="faq-url" name="faq-url"/>
    <input type="hidden" id="faq-question" name="faq-question"/>
    <input type="hidden" id="category_hierarchy" name="category_hierarchy"/>
</form>
</div>
<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>