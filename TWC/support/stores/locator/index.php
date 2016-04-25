<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<div class="twc-box-column">
  <form action="searchPage" class="locate-stores">
    <div class="40-60 section columnControl">
      <div class="parsys_column twc-col2_4060">
        <div class="parsys parsys0 twc-col2_4060-c0 parsys_column bordered-right">
          <div class="parbase section">
            <h5>Locate a store</h5>
            <fieldset class="twc-search">
              <div class="55-45 section columnControl">
                <div class="parsys_column twc-col2_5545">
                  <div class="parsys parsys0 twc-col2_5545-c0 parsys_column">
                    <div class="parbase section">
                      <label for="location" class="tablet-hidden"><small>Address or Zip</small></label>
                      <div class="location">
                        <input type="text" name="location" placeholder="Zip Code" class="mobile-full">
                      </div>
                      <span class="small-body-text">Enter ZIP Codes or Street Address, City, State</span>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5545-c1 parsys_column">
                    <div class="parbase section">
                      <div class="distanceSelect">
                        <label for="distance"><small>Within:</small></label>
                        <select name="distance">
                          <option>
                            5 Miles
                          </option>
                          <option>
                            10 Miles
                          </option>
                          <option>
                            25 Miles
                          </option>
                          <option>
                            100 Miles
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </fieldset>
          </div>
          <div class="new section"></div>
        </div>
        <div class="parsys parsys1 twc-col2_4060-c1 parsys_column">
          <div class="parbase section">
            <div class="checkbox-filters">
              <h5>Location Types</h5>
              <fieldset class="twc-search">
                <div class="horizontal location-types">
                  <ul>
                    <li>
                      <input type="checkbox" id="fullService" name="fullService">
                      <label for="fullService">Full Service</label>
                    </li>
                    <li>
                      <input type="checkbox" id="paymentOnly" name="paymentOnly">
                      <label for="paymentOnly">Payment Only</label>
                    </li>
                    <li>
                      <input type="checkbox" id="salesKiosk" name="salesKiosk">
                      <label for="salesKiosk">Sales Only Kiosk</label>
                    </li>
                  </ul>
                  <div class="right">
                    <div class="cta">
                      <button type="reset" name="reset" value="reset">
                        <span>
                          Clear
                        </span>
                      </button>
                    </div>
                    <div class="cta omega icon-after icon-angle-right">
                      <a href="#">
                        <span>GO</span>
                      </a>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="new section"></div>
        </div>
      </div>
      <div class="columnClear"></div>
    </div>
  </form>

<div class="map-stores">
    <header class="page-header">
      <div class="tabs">
        <ul>
          <li class="h5 stores_list_tab">
            <a href="#stores_map_details">
              List
            </a>
          </li>
          <li class="h5 stores_map_tab">
            <a href="#stores_map_map">
              Map
            </a>
          </li>
        </ul>
      </div>
    </header>

    <div class="stores_details_map_container">
      <div class="stores_details_map_info">
        <h5>
          Currently showing (4) locations near Birmingham, AL
        </h5>
      </div>

      <div class="parsys_column twc-col2_4060-c0 stores_location_details" id="stores_map_details">

        <div class="stores_locations_details_legend">
          <div class="legend_icons">
            <div class="50-50 section columnControl">
              <div class="parsys_column twc-col2_5050">
                <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                  <div class="parbase section">
                    <ul>
                      <li class="twc-icon-before icon-money">
                        <span>
                          Cash
                        </span>
                      </li>
                      <li class="twc-icon-before icon-list-alt">
                        <span>
                          Check
                        </span>
                      </li>
                      <li class="twc-icon-before icon-credit-card">
                        <span>
                          Credit Card
                        </span>
                      </li>
                      <li class="twc-icon-before icon-eye-open">
                        <span>
                          Demo Center
                        </span>
                      </li>
                      <li class="twc-icon-before icon-wrench">
                        <span>
                          Self Install
                        </span>
                      </li>
                      <li class="twc-icon-before icon-dollar">
                        <span>
                          Payment Center
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="new section"></div>
                </div>
                <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                  <div class="parbase section">
                    <ul>
                      <li class="twc-icon-before icon-time">
                        <span>
                          24-Hour Payment
                        </span>
                      </li>
                      <li class="twc-icon-before icon-download">
                        <span>
                          Return Equipment
                        </span>
                      </li>
                      <li class="muted twc-icon-before icon-exchange">
                        <span>
                          Exchange Equipment
                        </span>
                      </li>
                      <li class="twc-icon-before icon-building">
                        <span>
                          TWC Office Only
                        </span>
                      </li>
                      <li class="twc-icon-before icon-shopping-cart">
                        <span>
                          Retail Stores
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="new section"></div>
                </div>
              </div>
              <div class="columnClear"></div>
            </div>
          </div>
          <div class="legend_note">
            <span> <b>NOTE:</b>
              Full Service TWC locations accept cash, check, credit card payments and provide equipment demos, exchanges, returns and self install.
            </span>
          </div>
        </div>

        <div class="location_listing">
          <ul id="paymentcenterresults">
            <li id="outputDiv0" class="outputdiv 2666">

              <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                    <div class="parbase section">
                      <a href="#">
                        S. Manhattan
                      </a>
                      <address>
                        46A East 23rd Street
                        <br>
                        New York, NY 10010
                      </address>
                      <br>
                      <br> <b>Hours</b>
                      <br>
                      Mon-Fri 8am - 7pm
                      <br>
                      Sat 8am - 5pm
                      <br>
                      <br>
                      <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                        Directions
                      </a>
                      |
                      <b>
                        Distance:
                      </b>
                      1.2 mi
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                    <div class="parbase section">
                      <div class="pType twc-icon-only icon-money">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-list-alt">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-credit-card">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-wrench">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-time">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-eye-open">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-exchange">
                        <span></span>
                      </div>
                      <br>
                      <br>
                      <b>
                        Location Options
                      </b>
                      <div class="service_selfinstall">
                        Self Install
                      </div>
                      <div class="service_alldaypayment">
                        24-Hour Payment
                      </div>
                      <div class="service_democenter">
                        Demo Center
                      </div>
                      <div class="service_newequipment">
                        New Equipment
                      </div>
                      <div class="service_boxswap">
                        Box Swap
                      </div>
                      <div class="service_setup">
                        Setup
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>

            </li>
            <li id="outputDiv2" class="outputdiv 6277">
              <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                    <div class="parbase section">
                      <a href="#">
                        S. Manhattan
                      </a>
                      <address>
                        46A East 23rd Street
                        <br>
                        New York, NY 10010
                      </address>
                      <br>

                      <br>
                      <b>
                        Hours
                      </b>
                      <br>
                      Mon-Fri 8am - 7pm
                      <br>
                      Sat 8am - 5pm
                      <br>
                      <br>
                      <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                        Directions
                      </a>
                      |
                      <b>
                        Distance:
                      </b>
                      1.2 mi
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                    <div class="parbase section">
                      <div class="pType twc-icon-only icon-money">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-list-alt">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-credit-card">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-wrench">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-time">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-eye-open">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-exchange">
                        <span></span>
                      </div>
                      <br>
                      <br>
                      <b>
                        Location Options
                      </b>
                      <div class="service_selfinstall">
                        Self Install
                      </div>
                      <div class="service_alldaypayment">
                        24-Hour Payment
                      </div>
                      <div class="service_democenter">
                        Demo Center
                      </div>
                      <div class="service_newequipment">
                        New Equipment
                      </div>
                      <div class="service_boxswap">
                        Box Swap
                      </div>
                      <div class="service_setup">
                        Setup
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </li>
            <li id="outputDiv1" class="outputdiv 12068">
              <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                    <div class="parbase section">
                      <a href="#">
                        S. Manhattan
                      </a>
                      <address>
                        46A East 23rd Street
                        <br>
                        New York, NY 10010
                      </address>
                      <br>

                      <br>
                      <b>
                        Hours
                      </b>
                      <br>
                      Mon-Fri 8am - 7pm
                      <br>
                      Sat 8am - 5pm
                      <br>
                      <br>
                      <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                        Directions
                      </a>
                      |
                      <b>
                        Distance:
                      </b>
                      1.2 mi
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                    <div class="parbase section">
                      <div class="pType twc-icon-only icon-money">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-list-alt">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-credit-card">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-wrench">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-time">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-eye-open">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-exchange">
                        <span></span>
                      </div>
                      <br>
                      <br>
                      <b>
                        Location Options
                      </b>
                      <div class="service_selfinstall">
                        Self Install
                      </div>
                      <div class="service_alldaypayment">
                        24-Hour Payment
                      </div>
                      <div class="service_democenter">
                        Demo Center
                      </div>
                      <div class="service_newequipment">
                        New Equipment
                      </div>
                      <div class="service_boxswap">
                        Box Swap
                      </div>
                      <div class="service_setup">
                        Setup
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </li>
            <li id="outputDiv0" class="outputdiv 2666">
              <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                    <div class="parbase section">
                      <a href="#">
                        S. Manhattan
                      </a>
                      <address>
                        46A East 23rd Street
                        <br>
                        New York, NY 10010
                      </address>
                      <br>

                      <br>
                      <b>
                        Hours
                      </b>
                      <br>
                      Mon-Fri 8am - 7pm
                      <br>
                      Sat 8am - 5pm
                      <br>
                      <br>
                      <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                        Directions
                      </a>
                      |
                      <b>
                        Distance:
                      </b>
                      1.2 mi
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                    <div class="parbase section">
                      <div class="pType twc-icon-only icon-money">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-list-alt">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-credit-card">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-wrench">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-time">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-eye-open">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-exchange">
                        <span></span>
                      </div>
                      <br>
                      <br>
                      <b>
                        Location Options
                      </b>
                      <div class="service_selfinstall">
                        Self Install
                      </div>
                      <div class="service_alldaypayment">
                        24-Hour Payment
                      </div>
                      <div class="service_democenter">
                        Demo Center
                      </div>
                      <div class="service_newequipment">
                        New Equipment
                      </div>
                      <div class="service_boxswap">
                        Box Swap
                      </div>
                      <div class="service_setup">
                        Setup
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </li>
            <li id="outputDiv2" class="outputdiv 6277">
              <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                    <div class="parbase section">
                      <a href="#">
                        S. Manhattan
                      </a>
                      <address>
                        46A East 23rd Street
                        <br>
                        New York, NY 10010
                      </address>
                      <br>

                      <br>
                      <b>
                        Hours
                      </b>
                      <br>
                      Mon-Fri 8am - 7pm
                      <br>
                      Sat 8am - 5pm
                      <br>
                      <br>
                      <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                        Directions
                      </a>
                      |
                      <b>
                        Distance:
                      </b>
                      1.2 mi
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                    <div class="parbase section">
                      <div class="pType twc-icon-only icon-money">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-list-alt">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-credit-card">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-wrench">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-time">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-eye-open">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-exchange">
                        <span></span>
                      </div>
                      <br>
                      <br>
                      <b>
                        Location Options
                      </b>
                      <div class="service_selfinstall">
                        Self Install
                      </div>
                      <div class="service_alldaypayment">
                        24-Hour Payment
                      </div>
                      <div class="service_democenter">
                        Demo Center
                      </div>
                      <div class="service_newequipment">
                        New Equipment
                      </div>
                      <div class="service_boxswap">
                        Box Swap
                      </div>
                      <div class="service_setup">
                        Setup
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </li>
            <li id="outputDiv1" class="outputdiv 12068">
              <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                    <div class="parbase section">
                      <a href="#">
                        S. Manhattan
                      </a>
                      <address>
                        46A East 23rd Street
                        <br>
                        New York, NY 10010
                      </address>
                      <br>

                      <br>
                      <b>
                        Hours
                      </b>
                      <br>
                      Mon-Fri 8am - 7pm
                      <br>
                      Sat 8am - 5pm
                      <br>
                      <br>
                      <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                        Directions
                      </a>
                      |
                      <b>
                        Distance:
                      </b>
                      1.2 mi
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                    <div class="parbase section">
                      <div class="pType twc-icon-only icon-money">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-list-alt">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-credit-card">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-wrench">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-time">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-eye-open">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-exchange">
                        <span></span>
                      </div>
                      <br>
                      <br>
                      <b>
                        Location Options
                      </b>
                      <div class="service_selfinstall">
                        Self Install
                      </div>
                      <div class="service_alldaypayment">
                        24-Hour Payment
                      </div>
                      <div class="service_democenter">
                        Demo Center
                      </div>
                      <div class="service_newequipment">
                        New Equipment
                      </div>
                      <div class="service_boxswap">
                        Box Swap
                      </div>
                      <div class="service_setup">
                        Setup
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </li>
            <li id="outputDiv0" class="outputdiv 2666">
              <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                    <div class="parbase section">
                      <a href="#">
                        S. Manhattan
                      </a>
                      <address>
                        46A East 23rd Street
                        <br>
                        New York, NY 10010
                      </address>
                      <br>

                      <br>
                      <b>
                        Hours
                      </b>
                      <br>
                      Mon-Fri 8am - 7pm
                      <br>
                      Sat 8am - 5pm
                      <br>
                      <br>
                      <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                        Directions
                      </a>
                      |
                      <b>
                        Distance:
                      </b>
                      1.2 mi
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                    <div class="parbase section">
                      <div class="pType twc-icon-only icon-money">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-list-alt">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-credit-card">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-wrench">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-time">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-eye-open">
                        <span></span>
                      </div>
                      <div class="pType twc-icon-only icon-exchange">
                        <span></span>
                      </div>
                      <br>
                      <br>
                      <b>
                        Location Options
                      </b>
                      <div class="service_selfinstall">
                        Self Install
                      </div>
                      <div class="service_alldaypayment">
                        24-Hour Payment
                      </div>
                      <div class="service_democenter">
                        Demo Center
                      </div>
                      <div class="service_newequipment">
                        New Equipment
                      </div>
                      <div class="service_boxswap">
                        Box Swap
                      </div>
                      <div class="service_setup">
                        Setup
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div class="twc-col2_4060-c1 stores_map" id="stores_map_map">
        <div id="map-canvas"></div>
      </div>
    </div>
  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>