<script>
/*
jQuery(document).ready(function() {
	jQuery('#footer-menu').columnControl();
	jQuery('.tileList').hide();
	var tileListDiv = jQuery('.tileList');
	tileListDiv.addClass("none");
	tileListDiv.addClass("");
	tileListDiv.show();
	if ("false" !== "true") {
		jQuery('#840ce352-101f-486b-b7f5-74fec0d01645').closest(".smartLink").addClass("non-indented");
		jQuery('#08735a6a-dd90-4612-8d33-17ca0de2b8d2').closest(".smartLink").addClass("non-indented");
		jQuery('#4fe9b12d-b790-4c92-ad92-3ba5e3541a88').closest(".smartLink").addClass("non-indented");
		jQuery('#d2667214-dd36-4563-9e51-df4086197264').closest(".smartLink").addClass("non-indented");
		jQuery('#efe5a6c1-ff5c-4a5d-b322-34ebc0709c77').closest(".smartLink").addClass("non-indented");
		jQuery('#31725c4d-e2d8-4797-9cd7-1c36d2242bde').closest(".smartLink").addClass("non-indented");
		jQuery('#6da55879-d78f-47c0-9db5-ce9ee52564de').closest(".smartLink").addClass("non-indented");
		jQuery('#1b5e667b-6b9e-44f5-bcbd-c314203018e1').closest(".smartLink").addClass("non-indented");
		jQuery('#5c1dd97e-2de7-447a-8c8e-435504176719').closest(".smartLink").addClass("non-indented");
		jQuery('#b0bc975c-2a6f-456c-ba1c-65afca40fe03').closest(".smartLink").addClass("non-indented");
		jQuery('#14674637-91fb-4c2e-9a35-1b624b1b9751').closest(".smartLink").addClass("non-indented");
		jQuery('#4ce27cbb-6d83-4386-9df4-675202dbc93d').closest(".smartLink").addClass("non-indented");
		jQuery('#7d301ded-05dd-4758-9320-ac9172376e0a').closest(".smartLink").addClass("non-indented");
		jQuery('#8bceb09b-b300-4e95-a064-a96a037a473d').closest(".smartLink").addClass("non-indented");
		jQuery('#e64ffb4b-216c-4563-b193-35321e030155').closest(".smartLink").addClass("non-indented");
		jQuery('#3170933b-f3b8-4906-a060-94ef722e8630').closest(".smartLink").addClass("non-indented");
		jQuery('#e3e13e56-9e26-447a-b694-f6eb24b1c394').closest(".smartLink").addClass("non-indented");
		jQuery('#3d3e1126-555a-4910-81d9-46e1f3dd4732').closest(".smartLink").addClass("non-indented");
		jQuery('#973045cf-71cf-445e-8908-30b9c6304c6e').closest(".smartLink").addClass("non-indented");
		jQuery('#46e4cbdf-7c86-4194-845d-2139d5ab8723').closest(".smartLink").addClass("non-indented");
		jQuery('#0d05fbfc-d0fb-4919-821f-d8e115a4f4b4').closest(".smartLink").addClass("non-indented");
		jQuery('#043518a9-0732-4263-8d76-6312b9c47200').closest(".smartLink").addClass("non-indented");
		jQuery('#4730e46b-602d-47a1-976f-93b0b8a9f6d9').closest(".smartLink").addClass("non-indented");
		jQuery('#98c83bcc-98c6-46b5-aab4-71629747c54d').closest(".smartLink").addClass("non-indented");
		jQuery('#aff6f9ae-49d6-4491-b3da-a16187de5daf').closest(".smartLink").addClass("non-indented");
		jQuery('#a85d42c7-0887-42bf-856e-67de5949b338').closest(".smartLink").addClass("non-indented");
		jQuery('#50c0a519-6b4c-4c1d-9b26-53b03b8cf931').closest(".smartLink").addClass("non-indented");
		jQuery('#d8e94116-304b-4119-a774-8916fff83aed').closest(".smartLink").addClass("non-indented");
		jQuery('#bd1dd38f-e999-46de-942a-13d804f9d018').closest(".smartLink").addClass("non-indented");
		jQuery('#388b5ad7-887d-4870-8e53-aa6c3196cb90').closest(".smartLink").addClass("non-indented");
		jQuery('#9cb82691-b855-4c54-ac33-a3438458f52c').closest(".smartLink").addClass("non-indented");
		jQuery('#8d1d631c-c0c4-4ff0-9cc3-5ce4d886082c').closest(".smartLink").addClass("non-indented");
		jQuery('#49d27956-f8b5-4eed-865a-a682b696f564').closest(".smartLink").addClass("non-indented");
		jQuery('#1911ff61-1887-4c88-a42a-11df3971ff09').closest(".smartLink").addClass("non-indented");
		jQuery('#9407c04a-8d86-47ca-b147-9a1b5077e29b').closest(".smartLink").addClass("non-indented");
		jQuery('#413c64e3-4a56-4d63-8492-06177ddf9516').closest(".smartLink").addClass("non-indented");
		jQuery('#4dd5bbb0-3807-47d9-b9b6-6bc60c20bdbd').closest(".smartLink").addClass("non-indented");
		jQuery('#86ebe089-cd91-4bcc-80c5-0dbdfd1b16f4').closest(".smartLink").addClass("non-indented");
		jQuery('#f47cc574-fa17-49a1-ab24-b0b621745093').closest(".smartLink").addClass("non-indented");
		jQuery('#170d6c25-2824-461b-8286-3b0afb0bd2f4').closest(".smartLink").addClass("non-indented");
		jQuery('#435b0eb5-2211-4e06-9ea9-ddba29c951e6').closest(".smartLink").addClass("non-indented");
		jQuery('#e03a1e3c-995b-4c88-bd59-ffbf8766641a').closest(".smartLink").addClass("non-indented");
		jQuery('#06d311aa-018b-4830-8f64-934c32979467').closest(".smartLink").addClass("non-indented");
		jQuery('#6c58b355-b4e3-4327-81af-98884eeecdc0').closest(".smartLink").addClass("non-indented");
	}
	jQuery('#aff6f9ae-49d6-4491-b3da-a16187de5daf').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:4:5:investor relations'
	});
	jQuery('#14674637-91fb-4c2e-9a35-1b624b1b9751').newWindowLink({
		height: "768",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:2:6:check email'
	});
	jQuery('#4ce27cbb-6d83-4386-9df4-675202dbc93d').newWindowLink({
		height: "768",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:2:7:on demand'
	});
	jQuery('#0d05fbfc-d0fb-4919-821f-d8e115a4f4b4').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:4:1:twc forums'
	});
	jQuery('#a85d42c7-0887-42bf-856e-67de5949b338').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:4:6:careers'
	});
	jQuery('#50c0a519-6b4c-4c1d-9b26-53b03b8cf931').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:4:7:email offers'
	});
	jQuery('#d8e94116-304b-4119-a774-8916fff83aed').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:5:1:twc central'
		});
	jQuery('#bd1dd38f-e999-46de-942a-13d804f9d018').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:5:2:twc news'
	});
	jQuery('#388b5ad7-887d-4870-8e53-aa6c3196cb90').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:5:3:twc media'
	});
	jQuery('#9cb82691-b855-4c54-ac33-a3438458f52c').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:5:4:community solutions'
	});
	jQuery('#8d1d631c-c0c4-4ff0-9cc3-5ce4d886082c').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:5:5:connect a million minds'
	});
	jQuery('#49d27956-f8b5-4eed-865a-a682b696f564').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'fat footer:5:6:twc sportsnet'
	});
	jQuery('#1911ff61-1887-4c88-a42a-11df3971ff09').newWindowLink({
		height: "800",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'twc exclusives:5:7:twc exclusives'
	});
	jQuery('#f47cc574-fa17-49a1-ab24-b0b621745093').newWindowLink({
		height: "768",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'legal links:1:2:terms, conditions & policies'
	});
	jQuery('#170d6c25-2824-461b-8286-3b0afb0bd2f4').newWindowLink({
		height: "768",
		width: "1024",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'legal links:1:3:regulatory'
	});
	jQuery('#e03a1e3c-995b-4c88-bd59-ffbf8766641a').newWindowLink({
		height: "500",
		width: "600",
		resizable: "yes",
		menubar: 'yes',
		toolbar: 'yes',
		analyticsname: 'legal links:1:5:california privacy rights'
	});
});
*/
</script>
