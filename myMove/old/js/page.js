/* ==========================================================================
    My Move -- Version: 1.9.0.0 - Updated: 01/02/2014
   ========================================================================== */
$('input[required]').bind('blur', function() {
    $(this).addClass('instruct');
});
$('input[required]').bind('focus', function() {
    $(this).removeClass('instruct');
});
$('.cta#checkZip').click(function() {
    $('.contact-form').toggle();
    return false;
});