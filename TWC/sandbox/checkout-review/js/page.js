// 1
jQuery(document).ready(function() {
	if (typeof modalInit !== "undefined") {
		$('a.modal').modalInit();
	}
	if (typeof fancybox !== "undefined") {
		$('a.modalGeneric').fancybox({
			type: 'ajax',
			fitToView: true,
			autoSize: true,
			openEffect: 'fade',
			openSpeed: 'slow'
		});
	}
});