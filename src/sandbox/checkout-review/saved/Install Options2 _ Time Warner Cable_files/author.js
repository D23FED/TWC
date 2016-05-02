var Twc = Twc || {};
Twc.Listeners = Twc.Listeners || {};

Twc.Listeners.fullWidthDisclaimer = {
    hideXrefOptionIfNeeded: function(component) {
        var dialog = component.findParentByType('dialog');
        var pagePath = CQ.WCM.getPagePath();
        //According to the API dialog.path should work here but it doesn't.
        //Path always seems to be on the responseScope though.
        var path = dialog.responseScope.path;

        // Check if the path of the dialog contains the path of this page.
        // This will be the dialog that is actually included on the page vs included by the xRef.
        if(path.indexOf(pagePath) === -1) {
            // The override xRef option is always the first selection.
            dialog.findByType('selection')[0].hide();
        }
    }
};

