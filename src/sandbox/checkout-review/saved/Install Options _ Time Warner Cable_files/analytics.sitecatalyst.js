
            CQ_Analytics.registerAfterCallback(function(options) {
                if(!options.compatibility && $CQ.inArray( options.componentPath, CQ_Analytics.Sitecatalyst.frameworkComponents) < 0 )
                    return false;    // component not in framework, skip SC callback
                CQ_Analytics.Sitecatalyst.saveEvars();
                CQ_Analytics.Sitecatalyst.updateEvars(options);
                CQ_Analytics.Sitecatalyst.updateLinkTrackVars();
                return false;
            }, 10);
    
            CQ_Analytics.registerAfterCallback(function(options) {
                if(!options.compatibility && $CQ.inArray( options.componentPath, CQ_Analytics.Sitecatalyst.frameworkComponents) < 0 )
                    return false;    // component not in framework, skip SC callback
                if (!s) s = s_gi(s_account);  // TWC Cusomtization - use the value we set for s_account, and don't create a new s object.
                if (s.linkTrackVars == "None") {
                    s.linkTrackVars = "events";
                } else {
                    s.linkTrackVars = s.linkTrackVars + ",events";
                }
                CQ_Analytics.Sitecatalyst.trackLink(options);
                return false;
            }, 100);
    
    
            CQ_Analytics.registerAfterCallback(function(options) {
                if(!options.compatibility && $CQ.inArray( options.componentPath, CQ_Analytics.Sitecatalyst.frameworkComponents) < 0 )
                    return false;    // component not in framework, skip SC callback
                CQ_Analytics.Sitecatalyst.restoreEvars();
                return false;
            }, 200);
    
            CQ_Analytics.adhocLinkTracking = "false";
            
    
            var s_account = "tsg2resdev3";
            var s = s_gi(s_account);
            
            s.fpCookieDomainPeriods = "2";
            s.trackDownloadLinks= true;
        s.linkDownloadFileTypes= 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
        s.charSet= 'ISO-8859-1';
        s.linkTrackVars= 'None';
        s.linkExternalFilters= '';
        s.linkTrackEvents= 'None';
        s.trackExternalLinks= true;
        s.linkLeaveQueryString= true;
        s.trackInlineStats= true;
        s.currencyCode= 'USD';
        s.linkInternalFilters= 'javascript:,timewarnercable.com,#,localhost,webapps.rr.com,twcable.com';
        s.dc= '122';
        
        s.visitorNamespace = "twctsg";
        s.trackingServer = "metric.timewarnercable.com";
        s.trackingServerSecure = "metrics.timewarnercable.com";
        
        

