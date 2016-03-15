<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?><!-- Page Template: TWC Buyflow Gateway -->

    <div class="gateway-container">
        <h1>Check Availability</h1><!-- Tabs -->

        <header class="page-header">
            <div class="tabs">
                <ul>
                    <li class="active"><a class="h5" href="#buyflow-new">New Customer</a></li>

                    <li><a class="h5" href="#buyflow-current">Existing Customer</a></li>
                </ul>
            </div>
        </header><!-- .Tabs -->
        <!-- Gateway Body Container -->

        <div class="gateway">
            
            <!-- New Customer -->
            <div id="buyflow-new" class="tab-content active">
                <div class="gateway-headline abfHeadline">
                    <div class="text title parbase twc-plain-text">
                        <h5>Enter Your Address</h5>
                    </div>

                    <div class="description twc-base-text">
                        <p>We need your address so we can show all the Time Warner Cable service options in your area.</p>

                    </div>
                </div>

                <div class="gateway-form">
                    <!-- Error Module -->

                    <div class="gatewayError abfErrors">
                        <!-- Set the component model -->
                        <!-- Error Module -->

                        <div class="error-module hidden">
                            <!-- Response errors -->

                            <div class="error-wrap NoSupportZip hidden">
                                <p class="h5 error">We are unable to process an online order for the address provided</p><span class="error">Please contact us at 1-855-243-8892 so we can assist you.</span>
                            </div>

                            <div class="error-wrap NoServiceZip hidden">
                                <p class="h5 error">We’re sorry Time Warner Cable does not service the address entered</p><span class="error">Please visit CableMover.com to find the Cable company servicing your area or call (866) 620-9093.</span>
                            </div>

                            <div class="error-wrap NoLocateAddress hidden">
                                <p class="h5 error">We&#039;re sorry but we cannot locate the address that you have entered</p><span class="error">Please try again, or give us a call at (866) 620-9093 so that we can further assist you.</span>
                            </div>

                            <div class="error-wrap CommercialAddress hidden">
                                <p class="h5 error">You have entered a commercial address</p><span class="error">Please contact us at 1-855-243-8892 so we can assist you.</span>
                            </div><!-- Formatting errors -->

                            <div class="error-wrap">
                                <ul>
                                    <li class="NoAddress hidden"><span class="error">Please enter your street address.</span></li>

                                    <li class="InvalidAddressEntered hidden"><span class="error">Address must contain numbers and letters</span></li>

                                    <li class="NoZip hidden"><span class="error">Please enter your ZIP Code</span></li>

                                    <li class="InvalidZip hidden"><span class="error">Please re-enter your ZIP Code using five digits.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div><!-- .Error Module -->

                    <div class="formABF addressForm">
                        <form id="">
                            <form method="post" action="/content/twc/en/checkout/gateway-2.html" id="new_form" enctype="multipart/form-data">
                                <input type="hidden" name=":formid" value="new_form"><input type="hidden" name=":formstart" value="/content/twc/en/checkout/gateway-2/jcr:content/main-content/wrapper/formABF/form_start"><input type="hidden" name="_charset_" value="UTF-8">

                                <div class="form"></div>

                                <div class="input-section">
                                    <div class="formrow">
                                        <div class="formitem">
                                            <div class="st_address textfield">
                                                <div class="form_leftcol">
                                                    <div class="form_leftcollabel">
                                                        <label class="visually-hidden" aria-hidden="true" for="new_form_st_address">Text</label>
                                                    </div>

                                                    <div class="form_leftcolmark">
                                                        &nbsp;
                                                    </div>
                                                </div>

                                                <div class="form_rightcol" id="st_address_rightcol">
                                                    <div id="st_address_wrapper" class="form_rightcol_wrapper">
                                                        <input class="form_field form_field_text" id="new_form_st_address" name="st_address" value="" size="20" onkeydown="" placeholder="Street Address">
                                                    </div>
                                                </div>

                                                <div class="form_row_description"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="formrow">
                                        <div class="formitem left">
                                            <div class="unit_type dropdown">
                                                <div class="form_leftcol">
                                                    <div class="form_leftcollabel">
                                                        <label class="visually-hidden" aria-hidden="true" for="new_form_unit_type">Selection</label>
                                                    </div>

                                                    <div class="form_leftcolmark">
                                                        &nbsp;
                                                    </div>
                                                </div>

                                                <div class="form_rightcol">
                                                    <select class="form_field form_field_select" id="new_form_unit_type" name="unit_type">
                                                        <option value="item1">
                                                            Unit Type
                                                        </option>

                                                        <option value="item2">
                                                            Item 2
                                                        </option>

                                                        <option value="item3">
                                                            Item 3
                                                        </option>
                                                    </select> <input type="hidden" id="new_form_unit_type-text" name="unit_type-text" value="Item 1">
                                                </div>

                                                <div class="form_row_description"></div>
                                                
                                                <script type="text/javascript">
                                                jQuery(document).ready(function(){
                                                    $(document).on("click, change","#new_form_unit_type",function(){
                                                        $("#new_form_unit_type-text").val(jQuery("#new_form_unit_type option:selected").text());
                                                    });
                                                });
                                                </script>
                                                
                                            </div>
                                        </div>

                                        <div class="formitem right">
                                            <div class="unit_number textfield">
                                                <div class="form_leftcol">
                                                    <div class="form_leftcollabel">
                                                        <label class="visually-hidden" aria-hidden="true" for="new_form_unit_number">Text</label>
                                                    </div>

                                                    <div class="form_leftcolmark">
                                                        &nbsp;
                                                    </div>
                                                </div>

                                                <div class="form_rightcol" id="unit_number_rightcol">
                                                    <div id="unit_number_wrapper" class="form_rightcol_wrapper">
                                                        <input class="form_field form_field_text" id="new_form_unit_number" name="unit_number" value="" size="20" onkeydown="" placeholder="Unit Number">
                                                    </div>
                                                </div>

                                                <div class="form_row_description"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="formrow">
                                        <div class="formitem left">
                                            <div class="textfield zip_code">
                                                <div class="form_leftcol">
                                                    <div class="form_leftcollabel">
                                                        <label class="visually-hidden" aria-hidden="true" for="new_form_zip_code">Text</label>
                                                    </div>

                                                    <div class="form_leftcolmark">
                                                        &nbsp;
                                                    </div>
                                                </div>

                                                <div class="form_rightcol" id="zip_code_rightcol">
                                                    <div id="zip_code_wrapper" class="form_rightcol_wrapper">
                                                        <input class="form_field form_field_text" id="new_form_zip_code" name="zip_code" value="" size="20" onkeydown="" placeholder="Default ZIP Code">
                                                    </div>
                                                </div>

                                                <div class="form_row_description"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div><!--.input-section-->

                                <div class="form_end end">
                                    <div class="formrow">
                                        <div class="form_leftcol"></div>

                                        <div class="form_rightcol"></div>
                                    </div>

                                    <div class="form_row_description"></div>
                                </div>
                            </form>

                            <div class="gateway-submit">
                                <div class="formrow">
                                    <div class="formitem">
                                        <div class="cta omega twc-icon-after icon-angle-right right mobile-full">
                                            <a href=""><span>Get Started</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div><!--.gateway-submit-->
                        </form>
                    </div>
                </div><!-- .gateway-form -->
                <!-- System Status Spinner -->

                <div class="abfBusy gateway-processing">
                    <div class="gateway-processing">
                    <div class="text title parbase twc-plain-text">
                        <h5>Please Wait..Processing</h5>
                    </div>

                    <div class="description twc-base-text">
                        <p>Your content is loading..</p>

                        <p></p>
                    </div><img src="/content/dam/residential/images/checkout/global/spinner.gif" alt="Loading.."></div>
                </div><!-- .System Status Spinner -->
                <!-- New Customer Select Address -->

                <div id="buyflow-new-select-address">
                    <div class="abfSelectAddr gateway-headline">
                        <div class="text title parbase twc-plain-text">
                            <h5>Select Your Address</h5>
                        </div>

                        <div class="description twc-base-text">
                            <p>The address you entered returned multiple matches.</p>
                        </div>
                    </div>

                    <div class="gateway-form">
                        <form id="">
                            <div class="input-section">
                                <h5><span class="info">We found 169 matches for your address.</span></h5>
                                <span>Please pick the correct address from the drop-down menu or edit your address.</span>

                                <div class="formrow">
                                    <div class="formitem">
                                        <input type="radio" name="select-address-radio" value="select" tabindex="1" checked="checked">
                                        <label for="select-address-radio">
                                            Select an address:
                                        </label>
                                    </div>
                                </div>

                                <div class="radio-content">
                                    <div class="formrow">
                                        <div class="formitem">
                                            <select name="unit" id="unit" value="" tabindex="2">
                                                <option value="">
                                                    11111 Northeast Kentucky Industrial Parkway, apt 152 Denver, CO 80123
                                                </option>

                                                <option value="1">
                                                    address variable
                                                </option>

                                                <option value="2">
                                                    address variable
                                                </option>

                                                <option value="3">
                                                    address variable
                                                </option>
                                            </select>

                                            <div class="select-arrow"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="formrow">
                                    <div class="formitem">
                                        <input type="radio" name="select-address-radio" value="edit" tabindex="3">
                                        <label for="select-address-radio">
                                            Edit address:
                                        </label>
                                    </div>
                                </div>

                                <div class="radio-content hidden">
                                    <div class="formrow">
                                        <div class="formitem">
                                            <input type="text" id="" name="select-content" placeholder="123 Main St." required="" tabindex="4">
                                        </div>
                                    </div>

                                    <div class="formrow">
                                        <div class="formitem left">
                                            <select name="" id="" value="" tabindex="5">
                                                <option value="">
                                                    Unit Type
                                                </option>

                                                <option value="1">
                                                    Apartment
                                                </option>

                                                <option value="2">
                                                    Suite
                                                </option>

                                                <option value="3">
                                                    Floor
                                                </option>
                                            </select>
                                        </div>

                                        <div class="formitem right">
                                            <input type="text" id="" name="" placeholder="Unit Number" tabindex="6">
                                        </div>
                                    </div>

                                    <div class="formrow">
                                        <div class="formitem left">
                                            <input type="text" id="" name="" required="" placeholder="11111" tabindex="7">
                                        </div>
                                    </div>
                                </div>

                                <div class="formrow">
                                    <div class="formitem">
                                        <p class="twc-left">If you don't see your exact address, call <a type="tel">XXX-XXX-XXXX</a> for assistance.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="gateway-submit">
                                <div class="formrow">
                                    <div class="formitem">
                                        <a class="cta omega right mobile-full" href="">Continue</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div><!-- #buyflow-new-select-address -->
            </div>
            <!-- .New Customer -->
            
            <!-- Current Customer -->
            <div id="buyflow-current" class="tab-content" style="display:none;">
                <div class="gateway-headline ebfHeadline">
                    <div class="text title parbase twc-plain-text">
                        <h5>Find out what services are available</h5>
                    </div>

                    <div class="description twc-base-text">
                        <p>Your information will only be used to determine service availability. It will be kept private and secure.</p>
                    </div>
                </div>

                <div class="gateway-form">
                    <form id="">
                        <div class="input-skip-container">
                            <div class="50-50 section columnControl">
                                <div class="parsys_column twc-col2_5050">
                                    <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                                        <div class="parbase section">
                                            <div class="input-section">
                                                <label class="h5" for="username">Login with your TWC ID</label>

                                                <div class="formrow">
                                                    <div class="formitem">
                                                        <input type="text" id="" name="" placeholder="Username" tabindex="1">

                                                        <p>I forgot my <a href="">username</a></p>
                                                    </div>
                                                </div>

                                                <div class="formrow">
                                                    <div class="formitem">
                                                        <input type="password" id="" name="" placeholder="Password" tabindex="2">

                                                        <p>I forgot my <a href="">password</a></p>
                                                    </div>
                                                </div>

                                                <div class="formrow">
                                                    <div class="formitem">
                                                        <a class="cta omega mobile-full" href="">Log In</a>

                                                        <p><input type="checkbox" name="" value=""><label>Keep me logged in</label></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="new section"></div>
                                    </div>

                                    <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                                        <div class="parbase section">
                                            <div class="skip-section">
                                                <label class="h5" for="not-registered">Not registered?</label>

                                                <div class="formrow">
                                                    <div class="formitem">
                                                        <a class="btn black block" href="">Register Now </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="new section"></div>
                                    </div>
                                </div>

                                <div class="columnClear"></div>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div><!-- .Current Customer -->
            
        </div><!-- .Gateway Body Container -->
    </div><!-- .Page Template: TWC Buyflow Gateway -->
    
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>