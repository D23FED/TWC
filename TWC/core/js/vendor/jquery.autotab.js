/**
 * Autotab - jQuery plugin 1.6
 * https://github.com/Mathachew/jquery-autotab
 *
 * Copyright (c) 2008, 2014 Matthew Miller
 *
 * Licensed under the MIT licensing:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function(f) {
	var n = navigator.platform,
		m = null,
		p = "iPad" === n || "iPhone" === n || "iPod" === n,
		t = "undefined" !== typeof InstallTrigger,
		h = function(b, c) {
			if (null !== c && "undefined" !== typeof c)
				for (var a in c) f(b).data("autotab-" + a, c[a])
		}, l = function(b) {
			var c = {
				format: "all",
				loaded: !1,
				disabled: !1,
				pattern: null,
				uppercase: !1,
				lowercase: !1,
				nospace: !1,
				maxlength: 2147483647,
				target: null,
				previous: null,
				trigger: null,
				originalValue: "",
				changed: !1
			}, a;
			for (a in c) c[a] = f(b).data("autotab-" + a) || c[a];
			c.loaded || (null !== c.trigger && "string" ===
				typeof c.trigger && (c.trigger = c.trigger.toString()), h(b, c));
			return c
		};
	f.autotab = {
		next: function() {
			var b = f(document.activeElement);
			b.length && b.trigger("autotab-next")
		},
		previous: function() {
			var b = f(document.activeElement);
			b.length && b.trigger("autotab-previous")
		}
	};
	f.fn.autotab = function(b, c) {
		if (!this.length) return this;
		if ("filter" == b) {
			if ("string" === typeof c || "function" === typeof c) c = {
				format: c
			};
			for (var a = 0, d = this.length; a < d; a++) {
				var e = l(this[a]),
					k = c;
				k.target = e.target;
				k.previous = e.previous;
				f.extend(e, k);
				e.loaded ?
					h(this[a], e) : (e.disabled = !0, q(this[a], k))
			}
		} else if ("remove" == b || "destroy" == b || "disable" == b)
			for (a = 0, d = this.length; a < d; a++) e = l(this[a]), e.disabled = !0, h(this[a], e);
		else if ("restore" == b || "enable" == b)
			for (a = 0, d = this.length; a < d; a++) e = l(this[a]), e.disabled = !1, h(this[a], e);
		else if (null === b || "undefined" === typeof b ? c = {} : "string" === typeof b || "function" === typeof b ? c = {
			format: b
		} : "object" === typeof b && (c = b), 1 < this.length)
			for (a = 0, d = this.length; a < d; a++) {
				var e = a + 1,
					s = a - 1,
					k = c;
				0 < a && e < d ? (k.target = this[e], k.previous = this[s]) :
					0 < a ? (k.target = null, k.previous = this[s]) : (k.target = this[e], k.previous = null);
				q(this[a], k)
			} else q(this[0], c);
		return this
	};
	var r = function(b, c, a) {
		if ("function" === typeof a.format) return a.format(c, b);
		b = null;
		switch (a.format) {
			case "text":
				b = RegExp("[0-9]+", "g");
				break;
			case "alpha":
				b = RegExp("[^a-zA-Z]+", "g");
				break;
			case "number":
			case "numeric":
				b = RegExp("[^0-9]+", "g");
				break;
			case "alphanumeric":
				b = RegExp("[^0-9a-zA-Z]+", "g");
				break;
			case "hex":
			case "hexadecimal":
				b = RegExp("[^0-9A-Fa-f]+", "g");
				break;
			case "custom":
				b =
					RegExp(a.pattern, "g")
		}
		null !== b && (c = c.replace(b, ""));
		a.nospace && (b = RegExp("[ ]+", "g"), c = c.replace(b, ""));
		a.uppercase && (c = c.toUpperCase());
		a.lowercase && (c = c.toLowerCase());
		return c
	}, q = function(b, c) {
			var a = l(b);
			a.disabled && (a.disabled = !1, a.target = null, a.previous = null);
			f.extend(a, c);
			"string" !== typeof a.target && a.target instanceof jQuery || (a.target = f(a.target));
			"string" !== typeof a.previous && a.previous instanceof jQuery || (a.previous = f(a.previous));
			var d = b.maxLength;
			2147483647 == a.maxlength && 2147483647 != d && -1 != d ? a.maxlength = d : 0 < a.maxlength ? b.maxLength = a.maxlength : a.target = null;
			a.loaded ? h(b, a) : (a.loaded = !0, h(b, a), f(b).on("autotab-next", function(a, b) {
				var c = this;
				setTimeout(function() {
					b || (b = l(c));
					b.disabled || !b.target.length || p || (b.target.focus().select(), m = new Date)
				}, 1)
			}).on("autotab-previous", function(a, b) {
				var c = this;
				setTimeout(function() {
					b || (b = l(c));
					var a = b.previous;
					if (!b.disabled && a.length) {
						var e = a.val();
						e.length ? (a.focus().val(e.substring(0, e.length - 1)), h(a, {
							changed: !0
						})) : a.focus();
						m = null
					}
				}, 1)
			}).on("focus",
				function() {
					h(this, {
						originalValue: this.value
					})
				}).on("blur", function() {
				var a = l(this);
				a.changed && this.value != a.originalValue && (h(this, {
					changed: !1
				}), f(this).change())
			}).on("keydown", function(a) {
				var b = l(this);
				if (!b || b.disabled) return !0;
				var c = a.which || a.charCode;
				if (8 == c) 0 === this.value.length && b.previous.length ? f(this).trigger("autotab-previous", b) : h(this, {
					changed: this.value != b.originalValue
				});
				else if (9 == c && null !== m)
					if (a.shiftKey) m = null;
					else if (800 > (new Date).getTime() - m.getTime()) return m = null, !1
			}).on("keypress",
				function(a) {
					var b = l(this),
						c = a.which || a.keyCode;
					if (!b || b.disabled || t && 0 === a.charCode || a.ctrlKey || a.altKey || 13 == c || "text" != this.type && "password" != this.type) return !0;
					c = String.fromCharCode(c);
					if (null !== b.trigger && 0 <= b.trigger.indexOf(c)) return null !== m && 800 > (new Date).getTime() - m.getTime() ? m = null : f(this).trigger("autotab-next", b), !1;
					m = null;
					a = document.selection && document.selection.createRange ? !0 : 0 < a.charCode;
					c = r(this, c, b);
					if (a && (null === c || "" === c)) return !1;
					if (a && this.value.length <= this.maxLength) {
						var g,
							d;
						a = 0;
						if ("number" === typeof this.selectionStart && "number" === typeof this.selectionEnd) g = this.selectionStart, d = this.selectionEnd, a = 1;
						else if (document.selection && document.selection.createRange) {
							d = document.selection.createRange();
							g = this.createTextRange();
							a = this.createTextRange();
							var u = d.getBookmark();
							g.moveToBookmark(u);
							a.setEndPoint("EndToStart", g);
							g = a.text.length;
							d = g + d.text.length;
							a = 2
						}
						if (0 === g && d == this.value.length) this.value = c;
						else {
							if (this.value.length == this.maxLength && g === d) return f(this).trigger("autotab-next",
								b), !1;
							this.value = this.value.slice(0, g) + c + this.value.slice(d)
						}
						h(this, {
							changed: this.value != b.originalValue
						});
						this.value.length != b.maxlength && (g++, 1 == a ? this.selectionStart = this.selectionEnd = g : 2 == a && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", g), c.moveStart("character", g), c.select()))
					}
					this.value.length == b.maxlength && f(this).trigger("autotab-next", b);
					return !1
				}).on("paste", function(a) {
				var b = l(this);
				if (!b) return !0;
				this.maxLength = 2147483647;
				(function(a, c) {
					setTimeout(function() {
							var d = -1,
								e = document.createElement("input");
							e.type = "hidden";
							e.value = a.value.toLowerCase();
							a.maxLength = c.maxlength;
							a.value = r(a, a.value, c).substr(0, c.maxlength);
							var h = function(a, b) {
								if (a) {
									for (var c = 0, g = b.length; c < g; c++) d = e.value.indexOf(b.charAt(c), d) + 1;
									c = l(a);
									g = e.value.substr(d);
									(g = r(a, g, c).substr(0, c.maxlength)) ? (a.value = g, g.length == c.maxlength && (f(a).trigger("autotab-next", c), p || h(c.target[0], g))) : a.value = ""
								}
							};
							a.value.length == c.maxlength && (f(a).trigger("autotab-next", b), p || h(c.target[0], a.value.toLowerCase()))
						},
						1)
				})(this, b)
			}))
		};
	f.fn.autotab_magic = function(b) {
		f(this).autotab()
	};
	f.fn.autotab_filter = function(b) {
		var c = {};
		"string" === typeof b || "function" === typeof b ? c.format = b : f.extend(c, b);
		f(this).autotab("filter", c)
	}
})(jQuery);