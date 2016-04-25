<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

  <!-- Modal Buttons -->
  <div id="1" class="cta omega twc-icon-after icon-angle-right modal-button">
    <a href="" analyticsname="test">
      <span>Split Zip</span>
    </a>
  </div>


  <!-- Modal -->
  <div class="modal">
    <div id="modal1" class="modal-container">
      <div class="modal-close"></div>
      <div id="modal-content">
        <a name="modalTop"></a>
        <div class="modal-header">
          <span class="h3 b">We Need More Information</span>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <p class="h5">Your zip 00000 covers a large area. Please select an exact location from the pull-down menus.</p>
          </div>
          <form action="submit">
            <div class="formitem state">
              <label class="required visually-hidden" for="state">
                <div class="richtext label">
                  <div>
                    <p>Area:</p>
                  </div>
                </div>
              </label>
              <select data-parsley-required="" data-parsley-required-message="Please Select a State" data-parsley-trigger="focusout" tabindex="7" autocomplete="state" name="state" data-parsley-id="5935" class="parsley-error">
                <option value="">
                  Please Select an area
                </option>
                <option value="AL">
                  Area 1
                </option>
                <option value="AK">
                  Area 2
                </option>
                <option value="AZ">
                  Area 3
                </option>
                <option value="AR">
                  Area 4
                </option>
                <option value="CA">
                  Area 5
                </option>
                <option value="CO">
                  Area 6
                </option>
              </select>
            </div>
          </form>
        </div>

        <div class="modal-footer">
        <div class="cta omega icon-after icon-angle-right left">
          <a href="#">
            <span>Submit</span>
          </a>
        </div>
          <div class="cta twc-icon-after icon-angle-right right">
            <a href="">
              Reenter your zip code
            </a>
          </div>
        </div>

      </div>
    </div>
    <div class="modal-overlay"></div>
  </div>
  <!-- .Modal -->

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>