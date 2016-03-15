<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php');
}
?>

  <!-- Modal Buttons -->
  <div id="1" class="cta omega twc-icon-after icon-angle-right modal-button">
    <a href="" analyticsname="test"><span>Modal 1</span></a>
	</div>
  <!-- .Modal Buttons -->

  <!-- Modal -->
  <div class="modalChat">
    <div id="modal1" class="modalChat-container">
	    <div class="modalChat-close"></div>
      <div id="modalChat-content">

        <div class="modalChat-body">
          <div class="modalChatForm">
            <h2 class="mobile-only">Chat With Us</h2>
            <form>
              <fieldset>
                <div id="form_container">
                  <ul >
                    <li class="formLabel">
                      <label class="description-div">Business Name<span class="required">*</span></label>
                      <div><input class="element text light" type="text" maxlength="255" value=""/></div>
                    </li>
                    <li class="formLabel">
                      <label class="description-div">First Name<span class="required">*</span></label>
                      <div><input class="element text light" type="text" maxlength="255" value=""/></div>
                    </li>
                    <li class="formLabel">
                      <label class="description-div">Last Name<span class="required">*</span></label>
                      <div><input class="element text light" type="text" maxlength="255" value=""/></div>
                    </li>
                    <li class="formLabel">
                      <label class="description-div" for="element_6">Email Address<span class="required">*</span></label>
                      <div><input class="element text light" type="text" maxlength="255" value=""/></div>
                    </li>
                    <li class="formLabel">
                      <table width="100%">
                        <tr>
                          <td width="40%"><label class="description">Phone<span class="required">*</span></label></td>
                          <td width="60%"><label class="description">Account No. (optional)</label></td>
                        </tr>
                        <tr>
                          <td><input class="element text light" type="text" maxlength="255" value="" placeholder="xxx-xxx-xxxx"/></td>
                          <td><input class="element text light" type="text" maxlength="255" value=""/></td>
                        </tr>
                      </table>
                    </li>
                    <li class="formLabel">
                      <label class="description-div">What is your question about?<span class="required">*</span></label>
                      <div>
                        <select class="element select light">
                          <option value="" selected="selected">Please select...</option>
                          <option value="1">Technical Support</option>
                          <option value="2">Account/Billing Information</option>
                          <option value="3">General Inquiries</option>
                          <option value="4">Service Changes</option>
                          <option value="5">Moving</option>
                          <option value="6">Sales</option>
                        </select>
                      </div>
                    </li>
                    <li class="formLabel">
                      <label class="description-div">Details</label>
                      <div><textarea rows="4" class="element textarea light"></textarea></div>
                    </li>
                    <li class="formLabel">
                      <label class="description-div">Do you wish to have a transcript emailed to you?</label><br>
                      <span class="radio">
                        <input name="transcript" class="element radio" type="radio" value="Yes" /> Yes &nbsp; &nbsp; &nbsp;
                        <input name="transcript" class="element radio" type="radio" value="No" checked /> No
                      </span>
                    </li>
                    <li class="buttons">
                      <div class="cta omega"><a href="http://google.com" analyticsname="test"><span>Start Chat</span></a></div>
                      <div><p><span class="required">*</span>required</p></div>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="modalChatDesc">
            <figure class="mobile-hidden"><img src="http://www.fillmurray.com/420/175"></figure>
            <h2 class="mobile-hidden">Chat With Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, officia, quaerat, incidunt, ratione minus blanditiis ipsum ducimus eum commodi reiciendis atque dolores cumque eaque? Qui, voluptate, quis nisi accusamus voluptatem distinctio nemo facere labore error tenetur veniam id rerum quisquam recusandae aspernatur quam in.</p>
            <h6>Chat Support Hours:</h6>
            <p><a href="http://www.google.com">Eligendi sit</a> - unt provident atque dicta illo dolorem adipisci voluptatum</p>
            <p><a href="http://www.google.com">Unt provident</a> - Quis velit ratione nam libero necessitatibus nisi optio officia debitis voluptatem</p>
            <h6>Reach Us by Phone:</h6>
            <p>Qui, voluptate, quis nisi accusamus</p>
            <p class="phone"><a href="tel:+18555555555">1-855-555-5555</a></p>
          </div>
        </div>

      </div>
    </div>
    <div class="modalChat-overlay"></div>
  </div>
	<!-- .Modal -->

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/footer.php');
}
?>