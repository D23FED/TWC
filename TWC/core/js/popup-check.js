var popupBlockerChecker = {
	check: function(popup_window) {
		var _scope = this;
		if (popup_window) {
			if (/chrome/.test(navigator.userAgent.toLowerCase())) {
				setTimeout(function() {
					_scope._is_popup_blocked(_scope, popup_window);
				}, 200);
			} else {
				popup_window.onload = function() {
					_scope._is_popup_blocked(_scope, popup_window);
				};
			}
		} else {
			_scope._displayError();
		}
	},
	_is_popup_blocked: function(scope, popup_window) {
		if ((popup_window.innerHeight > 0) == false) {
			scope._displayError();
		}
	},
	_displayError: function() {
		alert("Popup Blocker is enabled! Please add this site to your exception list.");
	}
};