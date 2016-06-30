$(function() {
	$('.formValidate form').parsley();

	var LabelCounter = 0;

	function parseCharCounts() {
		//Get Everything...
		var elements = document.getElementsByTagName('textarea');
		var element = null;
		var maxlength = 9;
		var newlabel = null;

		for (var i = 0; i < elements.length; i++) {
			element = elements[i];

			if (element.getAttribute('maxlength') != null && element.getAttribute('limiterid') == null) {
				maxlength = element.getAttribute('maxlength');

				//Create new label
				newlabel = document.createElement('label');
				newlabel.id = 'limitlbl_' + LabelCounter;
				newlabel.style.color = 'red';
				newlabel.style.display = 'block'; //Make it block so it sits nicely.
				newlabel.innerHTML = "Updating...";

				//Attach limiter to our textarea
				element.setAttribute('limiterid', newlabel.id);
				element.onkeyup = function() {
					displayCharCounts(this);
				};

				//Append element
				element.parentNode.insertBefore(newlabel, element.firstChild);

				//Force the update now!
				displayCharCounts(element);
			}

			//Push up the number
			LabelCounter++;
		}
	}

	function displayCharCounts(element) {
		var limitLabel = document.getElementById(element.getAttribute('limiterid'));
		var maxlength = element.getAttribute('maxlength');
		var enforceLength = false;
		if (element.getAttribute('lengthcut') != null && element.getAttribute('lengthcut').toLowerCase() == 'true') {
			enforceLength = true;
		}

		//Replace \r\n with \n then replace \n with \r\n
		//Can't replace \n with \r\n directly because \r\n will be come \r\r\n

		//We do this because different browsers and servers handle new lines differently.
		//Internet Explorer and Opera say a new line is \r\n
		//Firefox and Safari say a new line is just a \n
		//ASP.NET seems to convert any plain \n characters to \r\n, which leads to counting issues
		var value = element.value.replace(/\u000d\u000a/g, '\u000a').replace(/\u000a/g, '\u000d\u000a');
		var currentLength = value.length;
		var remaining = 0;

		if (maxlength == null || limitLabel == null) {
			return false;
		}
		remaining = maxlength - currentLength;

		if (remaining >= 0) {
			limitLabel.style.color = 'black';
			limitLabel.innerHTML = remaining + ' character';
			if (remaining != 1)
				limitLabel.innerHTML += 's';
			limitLabel.innerHTML += ' remaining';
		}
	}

	//Go find our textareas with maxlengths and handle them when we load!
	parseCharCounts();

});