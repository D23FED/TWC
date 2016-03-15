<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php');
}
?>

<div class="100 section columnControl">
  <div class="parsys_column twc-col1_100">
    <div class="parsys parsys0 twc-col1_100-c0 parsys_column">
      <div class="parbase section">

        <h1>
          Helper Classes
        </h1>
        <hr class="solid" />
        <ul>
          <h3>Layout Helpers</h3>
          <li>
            <span class="h4">.twc-left - Aligns Element Left</span>
          </li>
          <!-- <div class="formrow">
            <div class="form-item split">
              <a class="cta omega mobile-full" href="" target="_blank">
                Copy the Code
                <span class="twc-icon-after icon-cut"></span>
              </a>
            </div>
            <div class="form-item split">
              <a class="cta omega mobile-full" href="" target="_blank">
                See the Code
                <span class="twc-icon-after icon-eye-open"></span>
              </a>
            </div>
          </div> -->
          <div class="box twc-left">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
              This div is aligned to the left
              </li>
            </ul>
          </div>
          <hr class="clear">
          <li>
            <span class="h4">.twc-right - Aligns Element Right</span>
          </li>
          <!-- <div class="formrow">
            <div class="form-item split">
              <a class="cta omega mobile-full" href="" target="_blank">
                Copy the Code
                <span class="twc-icon-after icon-cut"></span>
              </a>
            </div>
            <div class="form-item split">
              <a class="cta omega mobile-full" href="" target="_blank">
                See the Code
                <span class="twc-icon-after icon-eye-open"></span>
              </a>
            </div>
          </div> -->
          <div class="box right">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
                This div is aligned to the right
              </li>
            </ul>
          </div>
          <hr class="clear">
          <li>
            <span class="h4">.clear - Clears a Pre-Existing Floated Element</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <hr class="spacer"><hr class="solid">
          <h3>Text Helpers</h3>
          <li>
            <span class="h4">.text-left - Left Aligns Text</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <div class="box text-left">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
                This text is aligned to the left
              </li>
            </ul>
          </div>
          <hr class="clear">
          <li>
            <span class="h4">.text-Right - Right Aligns Text</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <div class="box text-right">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
                This text is aligned to the right
              </li>
            </ul>
          </div>
          <hr>
          <li>
            <span class="h4">.text-center - Center Aligns Text</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <div class="box text-center">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
                This text is aligned to the center
              </li>
            </ul>
          </div>
          <hr class="clear">
          <li>
            <span class="h4">.text-muted - Mutes Text</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <li>
            <span class="h4">.muted - Mutes Element Children</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <div class="box">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
                This text is not muted
              </li>
              <li class="text-muted">
                This text is muted
              </li>
            </ul>
          </div>
          <hr>
          <li>
            <span class="h4">.text-warning - Applies Alert (Red) Color to Text</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <li>
            <span class="h4">.warning - Applies Alert (Red) Color to Element Children</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <div class="box">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
                This text is not a warning
              </li>
              <li class="text-warning">
                This text is a warning
              </li>
            </ul>
          </div>
          <hr>
          <li>
            <span class="h4">.text-error - Applies Invalid (Red) Color to Text</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <li>
            <span class="h4">.error - Applies Invalid (Red) Color to Element Children</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <div class="box">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
                This is not error text
              </li>
              <li class="text-error">
                This is error text
              </li>
            </ul>
          </div>
          <hr>
          <li>
            <span class="h4">.text-info - Applies Info (Blue) Color to Text</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <li>
            <span class="h4">.info - Applies Info (Blue) Color to Element Children</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <div class="box">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
                This is not info text
              </li>
              <li class="text-info">
                This is info text
              </li>
            </ul>
          </div>
          <hr>
          <li>
            <span class="h4">.text-success - Applies Valid (Green) Color to Text</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <li>
            <span class="h4">.success - Applies Valid (Green) Color to Element Children</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <div class="box">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
                This is not success text
              </li>
              <li class="text-success">
                This is success text
              </li>
            </ul>
          </div>
          <hr>
          <li>
            <span class="h4">.fs-#{$i} - Font Size added through the class</span>
          </li>
          <li>Available in sizes between 1px-128px</li>
          <div class="box">
            <li class="arialBold">
              Example:
            </li>
            <li class="fs-10">.fs-10 - Font Size 10</li>
            <li class="fs-12">.fs-12 - Font Size 12</li>
            <li class="fs-16">.fs-16 - Font Size 16</li>
            <li class="fs-32">.fs-32 - Font Size 32</li>
          </div>
          <hr>
          <li>
            <span class="h4">.book - Applies TWC Round Book Font Family to Element</span>
          </li>
          <div class="box">
            <li class="arialBold">
              Example:
            </li>
            <span class="book">Lorem ipsum dolor.</span>
          </div>
          <hr>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <li>
            <span class="h4">.light - Applies TWC Round Light Font Family to Element</span>
          </li>
          <div class="box">
            <li class="arialBold">
              Example:
            </li>
            <span class="light">Lorem ipsum dolor.</span>
          </div>
          <hr>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <li>
            <span class="h4">.medium - Applies TWC Round Medium Font Family to Element</span>
          </li>
          <div class="box">
            <li class="arialBold">
              Example:
            </li>
            <span class="medium">Lorem ipsum dolor.</span>
          </div>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <hr class="spacer"><hr class="solid">
          <h3>Border Helpers</h3>
          <li>
            <span class="h4">.border-radius</span>
          </li>
          <!-- <div class="formrow">
            <div class="form-item split">
              <a class="cta omega mobile-full" href="" target="_blank">
                Copy the Code
                <span class="twc-icon-after icon-cut"></span>
              </a>
            </div>
            <div class="form-item split">
              <a class="cta omega mobile-full" href="" target="_blank">
                See the Code
                <span class="twc-icon-after icon-eye-open"></span>
              </a>
            </div>
          </div> -->
          <div class="box border-radius twc-left">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
              This box has a border radius of 3px. (Base Default)
              </li>
            </ul>
          </div>
          <hr class="clear">
          <li>
            <span class="h4">.bordered-solid</span>
          </li>
          <!-- <div class="formrow">
            <div class="form-item split">
              <a class="cta omega mobile-full" href="" target="_blank">
                Copy the Code
                <span class="twc-icon-after icon-cut"></span>
              </a>
            </div>
            <div class="form-item split">
              <a class="cta omega mobile-full" href="" target="_blank">
                See the Code
                <span class="twc-icon-after icon-eye-open"></span>
              </a>
            </div>
          </div> -->
          <div class="box bordered-solid twc-left">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
              This box has a bordered-solid class applied to it.
              </li>
            </ul>
          </div>
          <hr class="clear">
          <li>
            <span class="h4">.bordered-dotted</span>
          </li>
          <!-- <div class="formrow">
            <div class="form-item split">
              <a class="cta omega mobile-full" href="" target="_blank">
                Copy the Code
                <span class="twc-icon-after icon-cut"></span>
              </a>
            </div>
            <div class="form-item split">
              <a class="cta omega mobile-full" href="" target="_blank">
                See the Code
                <span class="twc-icon-after icon-eye-open"></span>
              </a>
            </div>
          </div> -->
          <div class="box bordered-dotted twc-left">
            <ul>
              <li class="arialBold">
                Example:
              </li>
              <li>
              This box has a bordered-dotted class applied to it.
              </li>
            </ul>
          </div>
          <hr class="clear">
          <hr class="solid">
          <h3>Width Helpers</h3>
          <li>
            <span class="h4">.w-#{$i} - Width added through the class</span>
          </li>
          <li>Available between 1-100% in increments of 5.</li>
          <li class="arialBold">
            Example:
          </li>
          <div class="box bordered-solid w-10">
            <li>.w-10 - Width 10%</li>
          </div><div class="clear"></div>
          <div class="box bordered-solid w-20">
            <li>.w-20 - Width 20%</li>
          </div><div class="clear"></div>
          <div class="box bordered-solid w-30">
            <li>.w-30 - Width 30%</li>
          </div><div class="clear"></div>
          <div class="box bordered-solid w-40">
            <li>.w-40 - Width 40%</li>
          </div><div class="clear"></div>
          <div class="box bordered-solid w-50">
            <li>.w-50 - Width 50%</li>
          </div><div class="clear"></div>
          <div class="box bordered-solid w-60">
            <li>.w-60 - Width 60%</li>
          </div><div class="clear"></div>
          <div class="box bordered-solid w-70">
            <li>.w-70 - Width 70%</li>
          </div><div class="clear"></div>
          <div class="box bordered-solid w-80">
            <li>.w-80 - Width 80%</li>
          </div><div class="clear"></div>
          <div class="box bordered-solid w-90">
            <li>.w-90 - Width 90%</li>
          </div>
          <hr class="clear">
          <h3>Image Helpers</h3>
          <li>
            <span class="h4">.image-left - Left Aligns Image Relative to Text</span>
          </li>
         <figure>
            <img src="/TWC/bc/core/images/TWC_logo-placeholder.png" class="image-left w-40">
          </figure>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, eligendi, dignissimos, molestias quidem architecto unde illo maxime officia maiores amet hic nam rerum vel! Architecto, temporibus, delectus sint voluptate adipisci laboriosam nulla recusandae dolore facilis ullam suscipit vitae voluptas amet iure vero vel commodi. Rerum, et, ad, reprehenderit eos consequuntur sequi temporibus exercitationem eligendi possimus cupiditate enim eveniet quaerat doloremque nam ratione assumenda magni. Veritatis, ratione, recusandae explicabo natus voluptatem odio omnis vitae ipsum iure harum. Amet, ab porro quidem magni perferendis quasi nemo sequi aliquid alias dignissimos illum ad! Culpa, enim, dignissimos ullam non earum sint cumque molestias porro.</p>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <hr>
          <div class="clear"></div>
          <li>
            <span class="h4">.image-right - Right Aligns Image Relative to Text</span>
          </li>
          <figure>
            <img src="/TWC/bc/core/images/TWC_logo-placeholder.png" class="image-right w-40">
          </figure>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, eligendi, dignissimos, molestias quidem architecto unde illo maxime officia maiores amet hic nam rerum vel! Architecto, temporibus, delectus sint voluptate adipisci laboriosam nulla recusandae dolore facilis ullam suscipit vitae voluptas amet iure vero vel commodi. Rerum, et, ad, reprehenderit eos consequuntur sequi temporibus exercitationem eligendi possimus cupiditate enim eveniet quaerat doloremque nam ratione assumenda magni. Veritatis, ratione, recusandae explicabo natus voluptatem odio omnis vitae ipsum iure harum. Amet, ab porro quidem magni perferendis quasi nemo sequi aliquid alias dignissimos illum ad! Culpa, enim, dignissimos ullam non earum sint cumque molestias porro.</p>

          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <div class="clear"></div>
          <hr class="spacer"><hr class="solid">
          <h3>Display Helpers</h3>
          <li>
            <span class="h4">.hidden - Removes Element from Browser View</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <li>
            <span class="h4">.invisible - Removes Element from Browser View but Maintains its Occupied Space</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <hr>
          <li>
            <span class="h4">.desktop-hidden - Removes Element from Browser View in Desktop Only</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <li>
            <span class="h4">.tablet-hidden - Removes Element from Browser View in Tablet <b>AND</b>
              Mobile</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
          <li>
            <span class="h4">.mobile-hidden - Removes Element from Browser View in Mobile Only</span>
          </li>
          <!-- <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              Copy the Code
              <span class="twc-icon-after icon-cut"></span>
            </a>
          </div>
          <div class="form-item split">
            <a class="cta omega mobile-full" href="" target="_blank">
              See the Code
              <span class="twc-icon-after icon-eye-open"></span>
            </a>
          </div> -->
        </ul>

      </div>
      <div class="new section"></div>
    </div>
  </div>
  <div class="columnClear"></div>
</div>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/footer.php');
}
?>