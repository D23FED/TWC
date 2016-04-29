/*
* Plugin: downloadLinkHandler 0.5 - identify and report download links
*/
s.downloadLinkHandler = new Function("p", ""
+ "var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
+ "ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
+ "if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");
/*
* s.join: 1.0 - s.join(v,p)
*/
s.join = new Function("v", "p", ""
+ "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+ ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+ ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+ "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
/*
* Plugin Utility: apl v1.1
*/
s.apl = new Function("L", "v", "d", "u", ""
+ "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+ "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+ "e()));}}if(!m)L=L?L+d+v:v;return L");
/*
* Plugin Utility: Replace v1.0
*/
s.repl = new Function("x", "o", "n", ""
+ "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+ "substring(i+o.length);i=x.indexOf(o,i+l)}return x");
/*
* Plugin: getPageName v2.1 - parse URL and return
*/
s.getPageName = new Function("u", ""
+ "var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
+ "x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+ "queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+ "string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+ "ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
+ "efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
+ "z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
+ "substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
+ ";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
+ "ubstring(x+1)}return n");
/*
* Utility Function: p_c
*/
s.p_c = new Function("v", "c", ""
+ "var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+ "ngth:x).toLowerCase()?v:0");
/*
* Plugin: exitLinkHandler 0.5 - identify and report exit links
*/
s.exitLinkHandler = new Function("p", ""
+ "var s=this,h=s.p_gh(),n='linkInternalFilters',i,t;if(!h||(s.linkTyp"
+ "e&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h="
+ "s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.li"
+ "nkType='e';else h='';s[n]=t;return h;");
/*
* DynamicObjectIDs v1.3: Setup Dynamic Object IDs based on URL
*/
s.setupDynamicObjectIDs = new Function(""
+ "var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
+ ">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
+ " if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
+ "lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
+ "re=1}");
s.setOIDs = new Function("e", ""
+ "var s=s_c_il[" + s._in + "],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i"
+ ",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)"
+ "{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b"
+ "=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_"
+ "objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','').substr"
+ "ing(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';if(c.indexOf('.t(')>="
+ "0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0)x='var x=\".tl(\";';"
+ "x+='s_objectID=\"'+u+'_'+a[u]+'\";return this.s_oc?this.s_oc(e):tru"
+ "e';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o]=new Function('e',x)"
+ "}}}s.wd.s_semaphore=0;return true");
/*
* Plugin: getAndPersistValue 0.3 - get a value on every page
*/
s.getAndPersistValue = new Function("v", "c", "e", ""
+ "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+ "v)s.c_w(c,v,e?a:0);return s.c_r(c);");
/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");
/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
/*
 *  Plug-in: crossVisitParticipation v1.7 - stacks values from
 *  specified variable in cookie and returns value
*/

s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;"); 
/*
 * Plugin: getTimeParting 3.4
 */
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");
/*
* Plugin: getValOnce 0.2 - get a value once per session or number of days
*/
s.getValOnce = new Function("v", "c", "e", ""
+ "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+ ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
/*
* Plugin: linkHandler 0.5 - identify and report custom links
*/
s.linkHandler = new Function("p", "t", ""
+ "var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
+ "ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
+ "substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
+ "e=l=='[['?'':l;s.linkType=t;return h;}return '';");
/*
* Utility Function: p_gn
*/

s.p_gn = new Function("t", "h", ""
+ "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+ "t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+ "return 0;");
/*
* Utility Function: p_gh
*/
s.p_gh = new Function(""
+ "var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+ "o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+ "o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+ "ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
/*
 * Utility: inList v1.0 - find out if a value is in a list
 */

s.inList=new Function("v","l","d",""
+"var s=this,ar=Array(),i=0,d=(d)?d:',';if(typeof(l)=='string'){if(s."
+"split)ar=s.split(l,d);else if(l.split)ar=l.split(d);else return-1}e"
+"lse ar=l;while(i<ar.length){if(v==ar[i])return true;i++}return fals"
+"e;");
/*Custom read Light Server Call Cookie Plugin*/
s.getLightCookie=new Function("c","v",""
+"var s=this;var b;b=s.c_r(c);s.c_w(c,'');b=b.replace('[CE]','').spli"
+"t('|');for(i=0;i<b.length;i++){if(b[i].indexOf(v)!=-1){return b[i]."
+"replace(v+'=','');}}");
/*Custom link tracking*/
s.cookieLink=new Function("c",""
+"var s=this;s.c_w('SC_TWCLINKS',c,0);");
/*Custom link tracking*/
var runOnce = true;
s.readCookieLink=new Function("",""
+"if(runOnce){var s=this,a=s.c_r('SC_TWCLINKS');s.cookieLink('');runO"
+"nce=false;return a}");
/*
 * Plugin: getHashParam (really just get QueryParam renamed as new function)2.4
 */
s.getHashParam=new Function("p","d","u","h",""
+"var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca"
+"tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
+"?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
+"')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
+"g(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u","h",""
+"var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub"
+"string(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return''");
/*
 * Plugin: getTimeToComplete 0.4 - return the time from start to stop
 */
s.getTimeToComplete=new Function("v","cn","e",""
+"var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='"
+"stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");
/*
 * socialAuthors v1.5.2
 */
s.socialAuthors=new Function("",""
+"var s=this,g;g=s.referrer?s.referrer:document.referrer;if(g.indexOf"
+"('http://t.co/')===0||g.indexOf('https://t.co/')===0||g.indexOf('pi"
+"nterest.com/pin')!==-1||g.indexOf('tumblr.com')!==-1||g.indexOf('yo"
+"utube.com')!==-1){s.Integrate.add('SocialAuthor');s.Integrate.Socia"
+"lAuthor.tEvar='reserved';s.Integrate.SocialAuthor.get('//sa-se"
+"rvices.social.omniture.com/author/name?var=[VAR]&callback=s.socialA"
+"uthorSearch&rs='+encodeURIComponent(s_account)+'&q='+encodeURICompo"
+"nent(g));s.Integrate.SocialAuthor.delay();s.Integrate.SocialAuthor."
+"setVars=function(s,p){if(p.tEvar==='reserved'){s.contextData['a.soc"
+"ialauthor']=s.user;}else{s[p.tEvar]=s.user;}}}");
s.socialAuthorSearch=new Function("obj",""
+"var s=this;if(typeof obj==='undefined'||typeof obj.author==='undefi"
+"ned'){s.user='Not Found';}else{s.user=obj.author;}s.Integrate.Socia"
+"lAuthor.ready();");
/*
 * Plugin: socialPlatforms v1.1
 */
s.socialPlatforms=new Function("a",""
+"var s=this,g,K,D,E,F,i;g=s.referrer?s.referrer:document.referrer;g=g."
+"toLowerCase();K=s.split(s.socPlatList,'|');for(i=0;i<K.length;i++){"
+"D=s.split(K[i],'>');if(g.indexOf(D[0])!=-1){s.contextData['a.socialcontentprovider']=D[1];}}");

s.socPlatList="facebook.com>Facebook|twitter.com>Twitter|t.co/>Twitter|youtube.com>Youtube|clipmarks.com>Clipmarks|dailymotion.com>Dailymotion|delicious.com>Delicious|digg.com>Digg|diigo.com>Diigo|flickr.com>Flickr|flixster.com>Flixster|fotolog.com>Fotolog|friendfeed.com>FriendFeed|google.com/buzz>Google Buzz|buzz.googleapis.com>Google Buzz|plus.google.com>Google+|hulu.com>Hulu|identi.ca>identi.ca|ilike.com>iLike|intensedebate.com>IntenseDebate|myspace.com>MySpace|newsgator.com>Newsgator|photobucket.com>Photobucket|plurk.com>Plurk|slideshare.net>SlideShare|smugmug.com>SmugMug|stumbleupon.com>StumbleUpon|tumblr.com>Tumblr|vimeo.com>Vimeo|wordpress.com>WordPress|xanga.com>Xanga|metacafe.com>Metacafe|pinterest.com>Pinterest";
/*Plugin: getRwd - version 1.5*/

s.getRwd=new Function("rwd","phoneMax","desktopMin",""
    +"if(rwd){var bpoint;var w=window.innerWidth||document.documentElemen"
    +"t.clientWidth||document.body.clientWidth;var h=window.innerHeight||"
    +"document.documentElement.clientHeight||document.body.clientHeight;i"
    +"f(w<phoneMax){bpoint='phone layout';}else{if(w>=desktopMin){bpoint="
    +"'desktop layout';}else{if(w>=phoneMax&&w<desktopMin){bpoint='tablet"
    +" layout';}}}w=(w%5)>=2.5?parseInt(w/5)*5+5:parseInt(w/5)*5;h=(h%5)>"
    +"=2.5?parseInt(h/5)*5+5:parseInt(h/5)*5;bpoint=bpoint+':'+w+'x'+h;}e"
    +"lse{bpoint='not rwd page:'+w+'x'+h;}return bpoint;");
/*
 * TNT Integration Plugin v1.0
 */
s.trackTNT =new Function("v","p","b",""
    +"var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s."
    +"getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v"
    +"]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");

/*
 * Plugin: getPercentPageViewed 1.8 
 */
s.handlePPVevents=new Function("",""
+"var s=s_c_il["+s._in+"];if(!s.getPPVid)return;var dh=Math.max(Math."
+"max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.ma"
+"x(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max("
+"s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=window"
+".innerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHei"
+"ght),st=window.pageYOffset||(window.document.documentElement.scroll"
+"Top||window.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.rou"
+"nd(vh/dh*100),100),c='';if((s.c_r('tp')&&dh!=s.c_r('tp'))||!s.c_r('"
+"tp')){s.c_w('tp',dh);s.c_w('s_ppv','');}else c=s.c_r('s_ppv');var a"
+"=(c&&c.indexOf(',')>-1)?c.split(',',4):[],id=(a.length>0)?(a[0]):es"
+"cape(s.getPPVid),cv=(a.length>1)?parseInt(a[1]):(0),p0=(a.length>2)"
+"?parseInt(a[2]):(pv),cy=(a.length>3)?parseInt(a[3]):(0),cn=(pv>0)?("
+"id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy)?vh:cy)):'';s.c_w('s_ppv'"
+",cn);");
s.getPercentPageViewed=new Function("pid",""
+"pid=pid?pid:'-';var s=this,ist=!s.getPPVid?true:false;if(typeof(s.l"
+"inkType)!='undefined'&&s.linkType!='0'&&s.linkType!=''&&s.linkType!"
+"='e')return'';var v=s.c_r('s_ppv'),a=(v.indexOf(',')>-1)?v.split(',"
+"',4):[];if(a&&a.length<4){for(var i=3;i>0;i--){a[i]=(i<a.length)?(a"
+"[i-1]):('');}a[0]='';}if(a)a[0]=unescape(a[0]);pid=pid?pid:(s.pageN"
+"ame?s.pageName:document.location.href);if(!s.getPPVid||s.getPPVid!="
+"pid){s.getPPVid=pid;s.c_w('s_ppv',escape(s.getPPVid));s.handlePPVev"
+"ents();}if(ist){if(window.addEventListener){window.addEventListener"
+"('load',s.handlePPVevents,false);window.addEventListener('click',s."
+"handlePPVevents,false);window.addEventListener('scroll',s.handlePPV"
+"events,false);window.addEventListener('resize',s.handlePPVevents,fa"
+"lse);}else if(window.attachEvent){window.attachEvent('onload',s.han"
+"dlePPVevents);window.attachEvent('onclick',s.handlePPVevents);windo"
+"w.attachEvent('onscroll',s.handlePPVevents);window.attachEvent('onr"
+"esize',s.handlePPVevents);}}return pid!='-'?a:a[1];");

/* v2.7 - Tracking External Traffic  */
s.channelManager=new Function("a","b","c","d","e","f","var s=this,g=new Date,h=0,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;g.setTime(g.getTime()+1800000);if(e){h=1;if(s.c_r(e))h=0;if(!s.c_w(e,1,g))s.c_w(e,1,0);if(!s.c_r(e))h=0;}i=s.referrer?s.referrer:document.referrer;i=i.toLowerCase();if(!i)j=1;else {k=i.indexOf('?')>-1?i.indexOf('?'):i.length;l=i.substring(0,k);m=s.split(i,'/');n=m[2].toLowerCase();o=s.linkInternalFilters.toLowerCase();o=s.split(o,',');for(p=0;p<o.length;p++){q=n.indexOf(o[p])==-1?'':i;if(q)break;}}if(!q&&!j){r=i;t=u=n;v='Other Natural Referrers';w=s.seList+'>'+s._extraSearchEngines;if(d==1){l=s.repl(l,'oogle','%');l=s.repl(l,'ahoo','^');i=s.repl(i,'as_q','*');}x=s.split(w,'>');for(y=0;y<x.length;y++){z=x[y];z=s.split(z,'|');A=s.split(z[0],',');for(B=0;B<A.length;B++){C=l.indexOf(A[B]);if(C>-1){if(z[2])D=u=z[2];else D=n;if(d==1){D=s.repl(D,'#',' - ');i=s.repl(i,'*','as_q');D=s.repl(D,'^','ahoo');D=s.repl(D,'%','oogle');}E=s.split(z[1],',');for(F=0;F<E.length;F++){if(i.indexOf(E[F]+'=')>-1||i.indexOf('https://www.google.')==0)G=1;H=s.getQueryParam(E[F],'',i).toLowerCase();if(G||H)break;}}if(G||H)break;}if(G||H)break;}}if(!q||f!='1'){q=s.getQueryParam(a,b);if(q){u=q;if(D)v='Paid Search';else v='Unknown Paid Channel';}if(!q&&D){u=D;v='Natural Search';}}if(j==1&&!q&&h==1)r=t=u=v='Typed/Bookmarked';I=s._channelDomain;if(I&&n){J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.split(L[1],',');N=M.length;for(O=0;O<N;O++){P=M[O].toLowerCase();Q=n.indexOf(P);if(Q>-1){v=L[0];break;}}if(Q>-1)break;}}I=s._channelParameter;if(I){J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.split(L[1],',');N=M.length;for(O=0;O<N;O++){Q=s.getQueryParam(M[O]);if(Q){v=L[0];break;}}if(Q)break;}}I=s._channelPattern;if(I){J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.split(L[1],',');N=M.length;for(O=0;O<N;O++){P=M[O].toLowerCase();Q=q.toLowerCase();R=Q.indexOf(P);if(R==0){v=L[0];break;}}if(R==0)break;}}S=v?q+t+v+H:'';c=c?c:'c_m';if(c!='0')S=s.getValOnce(S,c,0);if(S){s._campaignID=q?q:'n/a';s._referrer=r?r:'n/a';s._referringDomain=t?t:'n/a';s._campaign=u?u:'n/a';s._channel=v?v:'n/a';s._partner=D?D:'n/a';s._keywords=G?H?H:'Keyword Unavailable':'n/a';}");




/*
* Utility Function: split v1.5 - split a string (JS 1.0 compatible)
*/
s.split = new Function("l", "d", ""
+ "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+ "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Utility Function: vpr - set the variable vs with value v
 */
s.vpr=new Function("vs","v",
"if(typeof(v)!='undefined' && vs){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");
/*
 * Partner Plugin: DFA Check 1.0 - Restrict DFA calls to once a visit, per report suite, per click 
 * through. Used in conjunction with VISTA. Deduplicates SCM hits.
 */
s.partnerDFACheck=new Function("cfg","" 
+"var s=this,c=cfg.visitCookie,src=cfg.clickThroughParam,scp=cfg.searchCenterParam,p=cfg.newRsidsProp,tv=cfg.tEvar,dl=',',cr,nc,q,g,gs,i,j,k,fnd,v=1,t=new Date,cn=0,ca=new Array,aa=new Array,cs=new A"
+"rray;t.setTime(t.getTime()+1800000);cr=s.c_r(c);if(cr){v=0;}ca=s.split(cr,dl);if(s.un)aa=s.split(s.un,dl);else aa=s.split(s.account,dl);for(i=0;i<aa.length;i++){fnd = 0;for(j=0;j<ca.length;j++){if(aa[i] == ca[j]){fnd=1;}}if(!fnd){cs[cn"
+"]=aa[i];cn++;}}if(cs.length){for(k=0;k<cs.length;k++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;s.vpr(p,nc);v=1;}if(s.wd)q=s.wd.location.search.toLowerCase();else q=s.w.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf('&'+src.toLow"
+"erCase()+'=');gs=(scp)?q.indexOf('&'+scp.toLowerCase()+'='):-1;if(g>-1){s.vpr(p,cr);v=1;}else if(gs>-1){v=0;s.vpr(tv,'SearchCenter Visitors');}if(!s.c_w(c,cr,t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}r"
+"eturn v>=1;"); 
if (( s_account == 'tsg2resglobal') || (s_account == 'tsg2resdev3') )  {
"function" !== typeof window.DIL && (window.DIL = function(a, c) {
  var d = [],
    b, g;
  a !== Object(a) && (a = {});
  var f, k, n, v, s, m, p, y, x, J, K, D;
  f = a.partner;
  k = a.containerNSID;
  n = !!a.disableDestinationPublishingIframe;
  v = a.iframeAkamaiHTTPS;
  s = a.mappings;
  m = a.uuidCookie;
  p = !0 === a.enableErrorReporting;
  y = a.visitorService;
  x = a.declaredId;
  J = !0 === a.removeFinishedScriptsAndCallbacks;
  K = !0 === a.delayAllUntilWindowLoad;
  D = !0 === a.disableIDSyncs;
  var L, M, N, G, E, O, P, Q;
  L = !0 === a.disableScriptAttachment;
  M = !0 === a.disableCORSFiring;
  N = !0 === a.disableDefaultRequest;
  G = a.afterResultForDefaultRequest;
  E = a.dpIframeSrc;
  O = !0 === a.testCORS;
  P = !0 === a.useJSONPOnly;
  Q = a.visitorConstructor;
  p && DIL.errorModule.activate();
  var R = !0 === window._dil_unit_tests;
  (b = c) && d.push(b + "");
  if (!f || "string" !== typeof f) return b = "DIL partner is invalid or not specified in initConfig", DIL.errorModule.handleError({
    name: "error",
    message: b,
    filename: "dil.js"
  }), Error(b);
  b = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";
  if (k || "number" === typeof k) k = parseInt(k, 10), !isNaN(k) && 0 <= k && (b = "");
  b && (k = 0, d.push(b), b = "");
  g = DIL.getDil(f, k);
  if (g instanceof DIL && g.api.getPartner() === f && g.api.getContainerNSID() === k) return g;
  if (this instanceof DIL) DIL.registerDil(this, f, k);
  else return new DIL(a, "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + f + " and containerNSID = " + k);
  var B = {
      IS_HTTPS: "https:" === document.location.protocol,
      POST_MESSAGE_ENABLED: !!window.postMessage,
      COOKIE_MAX_EXPIRATION_DATE: "Tue, 19 Jan 2038 03:14:07 UTC"
    },
    H = {
      stuffed: {}
    },
    l = {},
    q = {
      firingQueue: [],
      fired: [],
      firing: !1,
      sent: [],
      errored: [],
      reservedKeys: {
        sids: !0,
        pdata: !0,
        logdata: !0,
        callback: !0,
        postCallbackFn: !0,
        useImageRequest: !0
      },
      callbackPrefix: "demdexRequestCallback",
      firstRequestHasFired: !1,
      useJSONP: !0,
      abortRequests: !1,
      num_of_jsonp_responses: 0,
      num_of_jsonp_errors: 0,
      num_of_cors_responses: 0,
      num_of_cors_errors: 0,
      corsErrorSources: [],
      num_of_img_responses: 0,
      num_of_img_errors: 0,
      toRemove: [],
      removed: [],
      readyToRemove: !1,
      platformParams: {
        d_nsid: k + "",
        d_rtbd: "json",
        d_jsonv: DIL.jsonVersion +
          "",
        d_dst: "1"
      },
      nonModStatsParams: {
        d_rtbd: !0,
        d_dst: !0,
        d_cts: !0,
        d_rs: !0
      },
      modStatsParams: null,
      adms: {
        TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 2E3,
        calledBack: !1,
        mid: null,
        noVisitorAPI: !1,
        instance: null,
        releaseType: "no VisitorAPI",
        admsProcessingStarted: !1,
        process: function(e) {
          try {
            if (!this.admsProcessingStarted) {
              this.admsProcessingStarted = !0;
              var t = this,
                a, h, b, d, c;
              if ("function" === typeof e && "function" === typeof e.getInstance) {
                if (y === Object(y) && (a = y.namespace) && "string" === typeof a) h = e.getInstance(a, {
                  idSyncContainerID: k
                });
                else {
                  this.releaseType = "no namespace";
                  this.releaseRequests();
                  return
                }
                if (h === Object(h) && "function" === typeof h.isAllowed && "function" === typeof h.getMarketingCloudVisitorID && "function" === typeof h.getCustomerIDs) {
                  if (!h.isAllowed()) {
                    this.releaseType = "VisitorAPI not allowed";
                    this.releaseRequests();
                    return
                  }
                  this.instance = h;
                  b = function(e) {
                    "VisitorAPI" !== t.releaseType && (t.mid = e, t.releaseType = "VisitorAPI", t.releaseRequests())
                  };
                  R && (d = y.server) && "string" === typeof d && (h.server = d);
                  c = h.getMarketingCloudVisitorID(b);
                  if ("string" ===
                    typeof c && c.length) {
                    b(c);
                    return
                  }
                  setTimeout(function() {
                    "VisitorAPI" !== t.releaseType && (t.releaseType = "timeout", t.releaseRequests())
                  }, this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);
                  return
                }
                this.releaseType = "invalid instance"
              } else this.noVisitorAPI = !0;
              this.releaseRequests()
            }
          } catch (f) {
            this.releaseRequests()
          }
        },
        releaseRequests: function() {
          this.calledBack = !0;
          q.registerRequest()
        },
        getMarketingCloudVisitorID: function() {
          return this.instance ? this.instance.getMarketingCloudVisitorID() : null
        },
        getMIDQueryString: function() {
          var e =
            w.isPopulatedString,
            t = this.getMarketingCloudVisitorID();
          e(this.mid) && this.mid === t || (this.mid = t);
          return e(this.mid) ? "d_mid=" + this.mid + "&" : ""
        },
        getCustomerIDs: function() {
          return this.instance ? this.instance.getCustomerIDs() : null
        },
        getCustomerIDsQueryString: function(e) {
          if (e === Object(e)) {
            var t = "",
              a = [],
              h = [],
              b, d;
            for (b in e) e.hasOwnProperty(b) && (h[0] = b, d = e[b], d === Object(d) && (h[1] = d.id || "", h[2] = d.authState || 0, a.push(h), h = []));
            if (h = a.length)
              for (e = 0; e < h; e++) t += "&d_cid_ic=" + u.encodeAndBuildRequest(a[e], "%01");
            return t
          }
          return ""
        }
      },
      declaredId: {
        declaredId: {
          init: null,
          request: null
        },
        declaredIdCombos: {},
        setDeclaredId: function(e, t) {
          var a = w.isPopulatedString,
            h = encodeURIComponent;
          if (e === Object(e) && a(t)) {
            var b = e.dpid,
              d = e.dpuuid,
              c = null;
            if (a(b) && a(d)) {
              c = h(b) + "$" + h(d);
              if (!0 === this.declaredIdCombos[c]) return "setDeclaredId: combo exists for type '" + t + "'";
              this.declaredIdCombos[c] = !0;
              this.declaredId[t] = {
                dpid: b,
                dpuuid: d
              };
              return "setDeclaredId: succeeded for type '" + t + "'"
            }
          }
          return "setDeclaredId: failed for type '" + t + "'"
        },
        getDeclaredIdQueryString: function() {
          var e =
            this.declaredId.request,
            t = this.declaredId.init,
            a = encodeURIComponent,
            h = "";
          null !== e ? h = "&d_dpid=" + a(e.dpid) + "&d_dpuuid=" + a(e.dpuuid) : null !== t && (h = "&d_dpid=" + a(t.dpid) + "&d_dpuuid=" + a(t.dpuuid));
          return h
        }
      },
      registerRequest: function(e) {
        var a = this.firingQueue;
        e === Object(e) && a.push(e);
        this.firing || !a.length || K && !DIL.windowLoaded || !this.adms.calledBack || (e = a.shift(), e.src = e.src.replace(/demdex.net\/event\?d_nsid=/, "demdex.net/event?" + this.adms.getMIDQueryString() +
            "d_nsid="), w.isPopulatedString(e.corsPostData) &&
          (e.corsPostData = e.corsPostData.replace(/^d_nsid=/, this.adms.getMIDQueryString() + "d_nsid=")), C.fireRequest(e), this.firstRequestHasFired || "script" !== e.tag && "cors" !== e.tag ||
          (this.firstRequestHasFired = !0))
      },
      processVisitorAPI: function() {
        this.adms.process(Q || window.Visitor)
      },
      requestRemoval: function(e) {
        if (!J) return "removeFinishedScriptsAndCallbacks is not boolean true";
        var a = this.toRemove,
          r, h;
        e === Object(e) && (r = e.script, h = e.callbackName, (r === Object(r) && "SCRIPT" === r.nodeName || "no script created" === r) && "string" ===
          typeof h && h.length && a.push(e));
        if (this.readyToRemove && a.length) {
          h = a.shift();
          r = h.script;
          h = h.callbackName;
          "no script created" !== r ? (e = r.src, r.parentNode.removeChild(r)) : e = r;
          window[h] = null;
          try {
            delete window[h]
          } catch (b) {}
          this.removed.push({
            scriptSrc: e,
            callbackName: h
          });
          DIL.variables.scriptsRemoved.push(e);
          DIL.variables.callbacksRemoved.push(h);
          return this.requestRemoval()
        }
        return "requestRemoval() processed"
      }
    };
  g = function() {
    var e = "http://fast.",
      a = "?d_nsid=" + k + "#" + encodeURIComponent(document.location.href);
    if ("string" === typeof E && E.length) return E + a;
    B.IS_HTTPS && (e = !0 === v ? "https://fast." : "https://");
    return e + f + ".demdex.net/dest5.html" + a
  };
  var z = {
      THROTTLE_START: 3E4,
      throttleTimerSet: !1,
      id: "destination_publishing_iframe_" + f + "_" + k,
      url: g(),
      iframe: null,
      iframeHasLoaded: !1,
      sendingMessages: !1,
      messages: [],
      messagesPosted: [],
      messageSendingInterval: B.POST_MESSAGE_ENABLED ? 15 : 100,
      ibsDeleted: [],
      jsonProcessed: [],
      newIframeCreated: null,
      iframeIdChanged: !1,
      originalIframeHasLoadedAlready: null,
      attachIframe: function() {
        function e() {
          h =
            document.createElement("iframe");
          h.id = b.id;
          h.style.cssText = "display: none; width: 0; height: 0;";
          h.src = b.url;
          b.newIframeCreated = !0;
          a();
          document.body.appendChild(h)
        }

        function a() {
          u.addListener(h, "load", function() {
            h.className = "aamIframeLoaded";
            b.iframeHasLoaded = !0;
            b.requestToProcess()
          })
        }
        var b = this,
          h = document.getElementById(this.id);
        h ? "IFRAME" !== h.nodeName ? (this.id += "_2", this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, "aamIframeLoaded" !== h.className ? (this.originalIframeHasLoadedAlready = !
            1, a()) :
          (this.iframeHasLoaded = this.originalIframeHasLoadedAlready = !0, this.requestToProcess())) : e();
        this.iframe = h
      },
      requestToProcess: function(e, a) {
        var b = this;
        e && !w.isEmptyObject(e) && this.process(e, a);
        this.iframeHasLoaded && this.messages.length && !this.sendingMessages && (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function() {
          b.messageSendingInterval = B.POST_MESSAGE_ENABLED ? 15 : 150
        }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages())
      },
      process: function(e, a) {
        var b = encodeURIComponent,
          h,
          d, c, f, g, k;
        a === Object(a) && (k = u.encodeAndBuildRequest(["", a.dpid || "", a.dpuuid || ""], ","));
        if ((h = e.dests) && h instanceof Array && (d = h.length))
          for (c = 0; c < d; c++) f = h[c], f = [b("dests"), b(f.id || ""), b(f.y || ""), b(f.c || "")], this.addMessage(f.join("|"));
        if ((h = e.ibs) && h instanceof Array && (d = h.length))
          for (c = 0; c < d; c++) f = h[c], f = [b("ibs"), b(f.id || ""), b(f.tag || ""), u.encodeAndBuildRequest(f.url || [], ","), b(f.ttl || ""), "", k], this.addMessage(f.join("|"));
        if ((h = e.dpcalls) && h instanceof Array && (d = h.length))
          for (c = 0; c < d; c++) f = h[c],
            g = f.callback || {}, g = [g.obj || "", g.fn || "", g.key || "", g.tag || "", g.url || ""], f = [b("dpm"), b(f.id || ""), b(f.tag || ""), u.encodeAndBuildRequest(f.url || [], ","),
              b(f.ttl || ""), u.encodeAndBuildRequest(g, ","), k
            ], this.addMessage(f.join("|"));
        this.jsonProcessed.push(e)
      },
      addMessage: function(e) {
        var a = encodeURIComponent,
          a = p ? a("---destpub-debug---") : a("---destpub---");
        this.messages.push(a + e)
      },
      sendMessages: function() {
        var e = this,
          a;
        this.messages.length ? (a = this.messages.shift(), DIL.xd.postMessage(a, this.url, this.iframe.contentWindow),
          this.messagesPosted.push(a), setTimeout(function() {
            e.sendMessages()
          }, this.messageSendingInterval)) : this.sendingMessages = !1
      }
    },
    I = {
      traits: function(e) {
        w.isValidPdata(e) && (l.sids instanceof Array || (l.sids = []), u.extendArray(l.sids, e));
        return this
      },
      pixels: function(e) {
        w.isValidPdata(e) && (l.pdata instanceof Array || (l.pdata = []), u.extendArray(l.pdata, e));
        return this
      },
      logs: function(e) {
        w.isValidLogdata(e) && (l.logdata !== Object(l.logdata) && (l.logdata = {}), u.extendObject(l.logdata, e));
        return this
      },
      customQueryParams: function(e) {
        w.isEmptyObject(e) ||
          u.extendObject(l, e, q.reservedKeys);
        return this
      },
      signals: function(e, a) {
        var b, h = e;
        if (!w.isEmptyObject(h)) {
          if (a && "string" === typeof a)
            for (b in h = {}, e) e.hasOwnProperty(b) && (h[a + b] = e[b]);
          u.extendObject(l, h, q.reservedKeys)
        }
        return this
      },
      declaredId: function(e) {
        q.declaredId.setDeclaredId(e, "request");
        return this
      },
      result: function(e) {
        "function" === typeof e && (l.callback = e);
        return this
      },
      afterResult: function(e) {
        "function" === typeof e && (l.postCallbackFn = e);
        return this
      },
      useImageRequest: function() {
        l.useImageRequest = !0;
        return this
      },
      clearData: function() {
        l = {};
        return this
      },
      submit: function() {
        C.submitRequest(l);
        l = {};
        return this
      },
      getPartner: function() {
        return f
      },
      getContainerNSID: function() {
        return k
      },
      getEventLog: function() {
        return d
      },
      getState: function() {
        var e = {},
          a = {};
        u.extendObject(e, q, {
          callbackPrefix: !0,
          useJSONP: !0,
          registerRequest: !0
        });
        u.extendObject(a, z, {
          attachIframe: !0,
          requestToProcess: !0,
          process: !0,
          sendMessages: !0
        });
        return {
          pendingRequest: l,
          otherRequestInfo: e,
          destinationPublishingInfo: a
        }
      },
      idSync: function(e) {
        if (D) return "Error: id syncs have been disabled";
        if (e !== Object(e) || "string" !== typeof e.dpid || !e.dpid.length) return "Error: config or config.dpid is empty";
        if ("string" !== typeof e.url || !e.url.length) return "Error: config.url is empty";
        var a = e.url,
          b = e.minutesToLive,
          h = encodeURIComponent,
          d, a = a.replace(/^https:/, "").replace(/^http:/, "");
        if ("undefined" === typeof b) b = 20160;
        else if (b = parseInt(b, 10), isNaN(b) || 0 >= b) return "Error: config.minutesToLive needs to be a positive number";
        d = u.encodeAndBuildRequest(["", e.dpid, e.dpuuid || ""], ",");
        e = ["ibs", h(e.dpid), "img",
          h(a), b, "", d
        ];
        z.addMessage(e.join("|"));
        q.firstRequestHasFired && z.requestToProcess();
        return "Successfully queued"
      },
      aamIdSync: function(e) {
        if (D) return "Error: id syncs have been disabled";
        if (e !== Object(e) || "string" !== typeof e.dpuuid || !e.dpuuid.length) return "Error: config or config.dpuuid is empty";
        e.url = "//dpm.demdex.net/ibs:dpid=" + e.dpid + "&dpuuid=" + e.dpuuid;
        return this.idSync(e)
      },
      passData: function(e) {
        if (w.isEmptyObject(e)) return "Error: json is empty or not an object";
        z.ibsDeleted.push(e.ibs);
        delete e.ibs;
        C.defaultCallback(e);
        return e
      },
      getPlatformParams: function() {
        return q.platformParams
      },
      getEventCallConfigParams: function() {
        var e = q,
          a = e.modStatsParams,
          b = e.platformParams,
          h;
        if (!a) {
          a = {};
          for (h in b) b.hasOwnProperty(h) && !e.nonModStatsParams[h] && (a[h.replace(/^d_/, "")] = b[h]);
          e.modStatsParams = a
        }
        return a
      }
    },
    C = {
      corsMetadata: function() {
        var e = "none",
          a = !0;
        "undefined" !== typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ? e = "XMLHttpRequest" : (new Function(
            "/*@cc_on return /^10/.test(@_jscript_version) @*/"))() ?
          e = "XMLHttpRequest" : "undefined" !== typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (a = !1), 0 < Object.prototype.toString.call(window.HTMLElement).indexOf(
            "Constructor") && (a = !1));
        return {
          corsType: e,
          corsCookiesEnabled: a
        }
      }(),
      getCORSInstance: function() {
        return "none" === this.corsMetadata.corsType ? null : new window[this.corsMetadata.corsType]
      },
      submitRequest: function(e) {
        q.registerRequest(C.createQueuedRequest(e));
        return !0
      },
      createQueuedRequest: function(e) {
        var a = q,
          b, h = e.callback,
          d = "img",
          c;
        if (!w.isEmptyObject(s)) {
          var f,
            g, m;
          for (f in s) s.hasOwnProperty(f) && (g = s[f], null != g && "" !== g && f in e && !(g in e || g in q.reservedKeys) && (m = e[f], null != m && "" !== m && (e[g] = m)))
        }
        w.isValidPdata(e.sids) || (e.sids = []);
        w.isValidPdata(e.pdata) || (e.pdata = []);
        w.isValidLogdata(e.logdata) || (e.logdata = {});
        e.logdataArray = u.convertObjectToKeyValuePairs(e.logdata, "=", !0);
        e.logdataArray.push("_ts=" + (new Date).getTime());
        "function" !== typeof h && (h = this.defaultCallback);
        a.useJSONP = !0 !== e.useImageRequest;
        a.useJSONP && (d = "script", b = a.callbackPrefix + "_" + k + "_" +
          (new Date).getTime());
        a = this.makeRequestSrcData(e, b);
        !P && (c = this.getCORSInstance()) && a.truncated && (this.corsMetadata.corsCookiesEnabled || a.isDeclaredIdCall) && (d = "cors");
        return {
          tag: d,
          src: a.src,
          corsSrc: a.corsSrc,
          internalCallbackName: b,
          callbackFn: h,
          postCallbackFn: e.postCallbackFn,
          useImageRequest: !!e.useImageRequest,
          requestData: e,
          corsInstance: c,
          corsPostData: a.corsPostData,
          hasCORSError: !1
        }
      },
      defaultCallback: function(e, a) {
        var b, h, d, c, f, g, k, x, p;
        if ((b = e.stuff) && b instanceof Array && (h = b.length))
          for (d = 0; d < h; d++)
            if ((c =
                b[d]) && c === Object(c)) {
              f = c.cn;
              g = c.cv;
              k = c.ttl;
              if ("undefined" === typeof k || "" === k) k = Math.floor(u.getMaxCookieExpiresInMinutes() / 60 / 24);
              x = c.dmn || "." + document.domain.replace(/^www\./, "");
              p = c.type;
              f && (g || "number" === typeof g) && ("var" !== p && (k = parseInt(k, 10)) && !isNaN(k) && u.setCookie(f, g, 1440 * k, "/", x, !1), H.stuffed[f] = g)
            }
        b = e.uuid;
        w.isPopulatedString(b) && !w.isEmptyObject(m) && (h = m.path, "string" === typeof h && h.length || (h = "/"), d = parseInt(m.days, 10), isNaN(d) && (d = 100), u.setCookie(m.name ||
          "aam_did", b, 1440 * d, h, m.domain ||
          "." + document.domain.replace(/^www\./, ""), !0 === m.secure));
        n || q.abortRequests || z.requestToProcess(e, a)
      },
      makeRequestSrcData: function(e, a) {
        e.sids = w.removeEmptyArrayValues(e.sids || []);
        e.pdata = w.removeEmptyArrayValues(e.pdata || []);
        var b = q,
          d = b.platformParams,
          c = u.encodeAndBuildRequest(e.sids, ","),
          g = u.encodeAndBuildRequest(e.pdata, ","),
          m = (e.logdataArray || []).join("&");
        delete e.logdataArray;
        var x = B.IS_HTTPS ? "https://" : "http://",
          p = b.declaredId.getDeclaredIdQueryString(),
          s = b.adms.instance ? b.adms.getCustomerIDsQueryString(b.adms.getCustomerIDs()) :
          "",
          A;
        A = [];
        var l, n, v, y;
        for (l in e)
          if (!(l in b.reservedKeys) && e.hasOwnProperty(l))
            if (n = e[l], l = encodeURIComponent(l), n instanceof Array)
              for (v = 0, y = n.length; v < y; v++) A.push(l + "=" + encodeURIComponent(n[v]));
            else A.push(l + "=" + encodeURIComponent(n));
        A = A.length ? "&" + A.join("&") : "";
        l = !1;
        c = "d_nsid=" + d.d_nsid + p + s + (c.length ? "&d_sid=" + c : "") + (g.length ? "&d_px=" + g : "") + (m.length ? "&d_ld=" + encodeURIComponent(m) : "");
        d = "&d_rtbd=" + d.d_rtbd + "&d_jsonv=" + d.d_jsonv + "&d_dst=" + d.d_dst;
        x = x + f + ".demdex.net/event";
        g = b = x + "?" + c + (b.useJSONP ?
          d + "&d_cb=" + (a || "") : "") + A;
        2048 < b.length && (b = b.substring(0, b.lastIndexOf("&")), l = !0);
        return {
          corsSrc: x + "?" + (O ? "testcors=1&d_nsid=" + k + "&" : "") + "_ts=" + (new Date).getTime(),
          src: b,
          originalSrc: g,
          truncated: l,
          corsPostData: c + d + A,
          isDeclaredIdCall: "" !== p
        }
      },
      fireRequest: function(e) {
        if ("img" === e.tag) this.fireImage(e);
        else {
          var a = q.declaredId,
            a = a.declaredId.request || a.declaredId.init || {},
            a = {
              dpid: a.dpid || "",
              dpuuid: a.dpuuid || ""
            };
          "script" === e.tag ? this.fireScript(e, a) : "cors" === e.tag && this.fireCORS(e, a)
        }
      },
      fireImage: function(e) {
        var a =
          q,
          c, h;
        a.abortRequests || (a.firing = !0, c = new Image(0, 0), a.sent.push(e), c.onload = function() {
            a.firing = !1;
            a.fired.push(e);
            a.num_of_img_responses++;
            a.registerRequest()
          }, h = function(c) {
            b = "imgAbortOrErrorHandler received the event of type " + c.type;
            d.push(b);
            a.abortRequests = !0;
            a.firing = !1;
            a.errored.push(e);
            a.num_of_img_errors++;
            a.registerRequest()
          }, c.addEventListener ? (c.addEventListener("error", h, !1), c.addEventListener("abort", h, !1)) : c.attachEvent && (c.attachEvent("onerror", h), c.attachEvent("onabort", h)), c.src =
          e.src)
      },
      fireScript: function(a, c) {
        var g = this,
          h = q,
          k, m, x = a.src,
          p = a.postCallbackFn,
          l = "function" === typeof p,
          s = a.internalCallbackName;
        h.abortRequests || (h.firing = !0, window[s] = function(g) {
          try {
            g !== Object(g) && (g = {});
            D && (z.ibsDeleted.push(g.ibs), delete g.ibs);
            var k = a.callbackFn;
            h.firing = !1;
            h.fired.push(a);
            h.num_of_jsonp_responses++;
            k(g, c);
            l && p(g, c)
          } catch (r) {
            r.message = "DIL jsonp callback caught error with message " + r.message;
            b = r.message;
            d.push(b);
            r.filename = r.filename || "dil.js";
            r.partner = f;
            DIL.errorModule.handleError(r);
            try {
              k({
                error: r.name + "|" + r.message
              }, c), l && p({
                error: r.name + "|" + r.message
              }, c)
            } catch (x) {}
          } finally {
            h.requestRemoval({
              script: m,
              callbackName: s
            }), h.registerRequest()
          }
        }, L ? (h.firing = !1, h.requestRemoval({
          script: "no script created",
          callbackName: s
        })) : (m = document.createElement("script"), m.addEventListener && m.addEventListener("error", function(c) {
            h.requestRemoval({
              script: m,
              callbackName: s
            });
            b = "jsonp script tag error listener received the event of type " + c.type + " with src " + x;
            g.handleScriptError(b, a)
          }, !1), m.type = "text/javascript",
          m.src = x, k = DIL.variables.scriptNodeList[0], k.parentNode.insertBefore(m, k)), h.sent.push(a), h.declaredId.declaredId.request = null)
      },
      fireCORS: function(a, c) {
        function g(r) {
          var m;
          try {
            if (m = JSON.parse(r), m !== Object(m)) {
              h.handleCORSError(a, c, "Response is not JSON");
              return
            }
          } catch (p) {
            h.handleCORSError(a, c, "Error parsing response as JSON");
            return
          }
          try {
            var x = a.callbackFn;
            k.firing = !1;
            k.fired.push(a);
            k.num_of_cors_responses++;
            x(m, c);
            n && s(m, c)
          } catch (l) {
            l.message = "DIL handleCORSResponse caught error with message " + l.message;
            b = l.message;
            d.push(b);
            l.filename = l.filename || "dil.js";
            l.partner = f;
            DIL.errorModule.handleError(l);
            try {
              x({
                error: l.name + "|" + l.message
              }, c), n && s({
                error: l.name + "|" + l.message
              }, c)
            } catch (q) {}
          } finally {
            k.registerRequest()
          }
        }
        var h = this,
          k = q,
          m = this.corsMetadata.corsType,
          x = a.corsSrc,
          p = a.corsInstance,
          l = a.corsPostData,
          s = a.postCallbackFn,
          n = "function" === typeof s;
        if (!k.abortRequests) {
          k.firing = !0;
          if (M) k.firing = !1;
          else try {
            p.open("post", x, !0), "XMLHttpRequest" === m ? (p.withCredentials = !0, p.setRequestHeader("Content-Type",
              "application/x-www-form-urlencoded"), p.onreadystatechange = function() {
              4 === this.readyState && (200 === this.status ? g(this.responseText) : h.handleCORSError(a, c, "onreadystatechange"))
            }) : "XDomainRequest" === m && (p.onload = function() {
              g(this.responseText)
            }), p.onerror = function() {
              h.handleCORSError(a, c, "onerror")
            }, p.ontimeout = function() {
              h.handleCORSError(a, c, "ontimeout")
            }, p.send(l)
          } catch (v) {
            this.handleCORSError(a, c, "try-catch")
          }
          k.sent.push(a);
          k.declaredId.declaredId.request = null
        }
      },
      handleCORSError: function(a, b, c) {
        a.hasCORSError ||
          (a.hasCORSError = !0, q.num_of_cors_errors++, q.corsErrorSources.push(c), a.tag = "script", this.fireScript(a, b))
      },
      handleScriptError: function(a, b) {
        q.num_of_jsonp_errors++;
        this.handleRequestError(a, b)
      },
      handleRequestError: function(a, b) {
        var c = q;
        d.push(a);
        c.abortRequests = !0;
        c.firing = !1;
        c.errored.push(b);
        c.registerRequest()
      }
    },
    w = {
      isValidPdata: function(a) {
        return a instanceof Array && this.removeEmptyArrayValues(a).length ? !0 : !1
      },
      isValidLogdata: function(a) {
        return !this.isEmptyObject(a)
      },
      isEmptyObject: function(a) {
        if (a !==
          Object(a)) return !0;
        for (var b in a)
          if (a.hasOwnProperty(b)) return !1;
        return !0
      },
      removeEmptyArrayValues: function(a) {
        for (var b = 0, c = a.length, d, f = [], b = 0; b < c; b++) d = a[b], "undefined" !== typeof d && null !== d && "" !== d && f.push(d);
        return f
      },
      isPopulatedString: function(a) {
        return "string" === typeof a && a.length
      }
    },
    u = {
      addListener: function() {
        if (document.addEventListener) return function(a, b, c) {
          a.addEventListener(b, function(a) {
            "function" === typeof c && c(a)
          }, !1)
        };
        if (document.attachEvent) return function(a, b, c) {
          a.attachEvent("on" +
            b,
            function(a) {
              "function" === typeof c && c(a)
            })
        }
      }(),
      convertObjectToKeyValuePairs: function(a, b, c) {
        var d = [],
          f, g;
        b || (b = "=");
        for (f in a) a.hasOwnProperty(f) && (g = a[f], "undefined" !== typeof g && null !== g && "" !== g && d.push(f + b + (c ? encodeURIComponent(g) : g)));
        return d
      },
      encodeAndBuildRequest: function(a, b) {
        return this.map(a, function(a) {
          return encodeURIComponent(a)
        }).join(b)
      },
      map: function(a, b) {
        if (Array.prototype.map) return a.map(b);
        if (void 0 === a || null === a) throw new TypeError;
        var c = Object(a),
          d = c.length >>> 0;
        if ("function" !==
          typeof b) throw new TypeError;
        for (var f = Array(d), g = 0; g < d; g++) g in c && (f[g] = b.call(b, c[g], g, c));
        return f
      },
      filter: function(a, b) {
        if (!Array.prototype.filter) {
          if (void 0 === a || null === a) throw new TypeError;
          var c = Object(a),
            d = c.length >>> 0;
          if ("function" !== typeof b) throw new TypeError;
          for (var g = [], f = 0; f < d; f++)
            if (f in c) {
              var k = c[f];
              b.call(b, k, f, c) && g.push(k)
            }
          return g
        }
        return a.filter(b)
      },
      getCookie: function(a) {
        a += "=";
        var b = document.cookie.split(";"),
          c, d, f;
        c = 0;
        for (d = b.length; c < d; c++) {
          for (f = b[c];
            " " === f.charAt(0);) f =
            f.substring(1, f.length);
          if (0 === f.indexOf(a)) return decodeURIComponent(f.substring(a.length, f.length))
        }
        return null
      },
      setCookie: function(a, b, c, d, f, g) {
        var k = new Date;
        c && (c *= 6E4);
        document.cookie = a + "=" + encodeURIComponent(b) + (c ? ";expires=" + (new Date(k.getTime() + c)).toUTCString() : "") + (d ? ";path=" + d : "") + (f ? ";domain=" + f : "") + (g ?
          ";secure" : "")
      },
      extendArray: function(a, b) {
        return a instanceof Array && b instanceof Array ? (Array.prototype.push.apply(a, b), !0) : !1
      },
      extendObject: function(a, b, c) {
        var d;
        if (a === Object(a) && b ===
          Object(b)) {
          for (d in b) !b.hasOwnProperty(d) || !w.isEmptyObject(c) && d in c || (a[d] = b[d]);
          return !0
        }
        return !1
      },
      getMaxCookieExpiresInMinutes: function() {
        return ((new Date(B.COOKIE_MAX_EXPIRATION_DATE)).getTime() - (new Date).getTime()) / 1E3 / 60
      }
    };
  "error" === f && 0 === k && u.addListener(window, "load", function() {
    DIL.windowLoaded = !0
  });
  var S = !1,
    F = function() {
      S || (S = !0, q.registerRequest(), U(), n || q.abortRequests || z.attachIframe(), q.readyToRemove = !0, q.requestRemoval())
    },
    U = function() {
      n || setTimeout(function() {
        N || q.firstRequestHasFired ||
          ("function" === typeof G ? I.afterResult(G).submit() : I.submit())
      }, DIL.constants.TIME_TO_DEFAULT_REQUEST)
    },
    T = document;
  "error" !== f && (DIL.windowLoaded ? F() : "complete" !== T.readyState && "loaded" !== T.readyState ? u.addListener(window, "load", function() {
    DIL.windowLoaded = !0;
    F()
  }) : (DIL.windowLoaded = !0, F()));
  q.declaredId.setDeclaredId(x, "init");
  q.processVisitorAPI();
  this.api = I;
  this.getStuffedVariable = function(a) {
    var b = H.stuffed[a];
    b || "number" === typeof b || (b = u.getCookie(a)) || "number" === typeof b || (b = "");
    return b
  };
  this.validators =
    w;
  this.helpers = u;
  this.constants = B;
  this.log = d;
  R && (this.pendingRequest = l, this.requestController = q, this.setDestinationPublishingUrl = g, this.destinationPublishing = z, this.requestProcs = C, this.variables = H, this.callWindowLoadFunctions =
    F)
}, function() {
  var a = document,
    c;
  null == a.readyState && a.addEventListener && (a.readyState = "loading", a.addEventListener("DOMContentLoaded", c = function() {
    a.removeEventListener("DOMContentLoaded", c, !1);
    a.readyState = "complete"
  }, !1))
}(), DIL.extendStaticPropertiesAndMethods = function(a) {
  var c;
  if (a === Object(a))
    for (c in a) a.hasOwnProperty(c) && (this[c] = a[c])
}, DIL.extendStaticPropertiesAndMethods({
  version: "6.3",
  jsonVersion: 1,
  constants: {
    TIME_TO_DEFAULT_REQUEST: 50
  },
  variables: {
    scriptNodeList: document.getElementsByTagName("script"),
    scriptsRemoved: [],
    callbacksRemoved: []
  },
  windowLoaded: !1,
  dils: {},
  isAddedPostWindowLoad: function(a) {
    this.windowLoaded = "function" === typeof a ? !!a() : "boolean" === typeof a ? a : !0
  },
  create: function(a) {
    try {
      return new DIL(a)
    } catch (c) {
      return (new Image(0, 0)).src =
        "//error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D" +
        (new Date).getTime(), Error("Error in attempt to create DIL instance with DIL.create()")
    }
  },
  registerDil: function(a, c, d) {
    c = c + "$" + d;
    c in this.dils || (this.dils[c] = a)
  },
  getDil: function(a, c) {
    var d;
    "string" !== typeof a && (a = "");
    c || (c = 0);
    d = a + "$" + c;
    return d in this.dils ? this.dils[d] : Error("The DIL instance with partner = " + a + " and containerNSID = " + c + " was not found")
  },
  dexGetQSVars: function(a, c, d) {
    c = this.getDil(c, d);
    return c instanceof this ? c.getStuffedVariable(a) : ""
  },
  xd: {
    postMessage: function(a, c, d) {
      var b = 1;
      c &&
        (window.postMessage ? d.postMessage(a, c.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : c && (d.location = c.replace(/#.*$/, "") + "#" + +new Date + b++ + "&" + a))
    }
  }
}), DIL.errorModule = function() {
  var a = DIL.create({
      partner: "error",
      containerNSID: 0,
      disableDestinationPublishingIframe: !0
    }),
    c = {
      harvestererror: 14138,
      destpuberror: 14139,
      dpmerror: 14140,
      generalerror: 14137,
      error: 14137,
      noerrortypedefined: 15021,
      evalerror: 15016,
      rangeerror: 15017,
      referenceerror: 15018,
      typeerror: 15019,
      urierror: 15020
    },
    d = !1;
  return {
    activate: function() {
      d = !0
    },
    handleError: function(b) {
      if (!d) return "DIL error module has not been activated";
      b !== Object(b) && (b = {});
      var g = b.name ? (b.name + "").toLowerCase() : "",
        f = [];
      b = {
        name: g,
        filename: b.filename ? b.filename + "" : "",
        partner: b.partner ? b.partner + "" : "no_partner",
        site: b.site ? b.site + "" : document.location.href,
        message: b.message ? b.message + "" : ""
      };
      f.push(g in c ? c[g] : c.noerrortypedefined);
      a.api.pixels(f).logs(b).useImageRequest().submit();
      return "DIL error report sent"
    },
    pixelMap: c
  }
}(), DIL.tools = {}, DIL.modules = {
  helpers: {
    handleModuleError: function(a, c, d) {
      var b = "";
      c = c || "Error caught in DIL module/submodule: ";
      a === Object(a) ? b = c + (a.message || "err has no message") : (b = c + "err is not a valid object", a = {});
      a.message = b;
      d instanceof DIL && (a.partner = d.api.getPartner());
      DIL.errorModule.handleError(a);
      return this.errorMessage = b
    }
  }
});
DIL.tools.getSearchReferrer = function(a, c) {
  var d = DIL.getDil("error"),
    b = DIL.tools.decomposeURI(a || document.referrer),
    g = "",
    f = "",
    k = {
      queryParam: "q"
    };
  return (g = d.helpers.filter([c === Object(c) ? c : {}, {
    hostPattern: /aol\./
  }, {
    hostPattern: /ask\./
  }, {
    hostPattern: /bing\./
  }, {
    hostPattern: /google\./
  }, {
    hostPattern: /yahoo\./,
    queryParam: "p"
  }], function(a) {
    return !(!a.hasOwnProperty("hostPattern") || !b.hostname.match(a.hostPattern))
  }).shift()) ? {
    valid: !0,
    name: b.hostname,
    keywords: (d.helpers.extendObject(k, g), f = k.queryPattern ?
      (g = ("" + b.search).match(k.queryPattern)) ? g[1] : "" : b.uriParams[k.queryParam], decodeURIComponent(f || "").replace(/\+|%20/g, " "))
  } : {
    valid: !1,
    name: "",
    keywords: ""
  }
};
DIL.tools.decomposeURI = function(a) {
  var c = DIL.getDil("error"),
    d = document.createElement("a");
  d.href = a || document.referrer;
  return {
    hash: d.hash,
    host: d.host.split(":").shift(),
    hostname: d.hostname,
    href: d.href,
    pathname: d.pathname.replace(/^\//, ""),
    protocol: d.protocol,
    search: d.search,
    uriParams: function(a, d) {
      c.helpers.map(d.split("&"), function(c) {
        c = c.split("=");
        a[c.shift()] = c.shift()
      });
      return a
    }({}, d.search.replace(/^(\/|\?)?|\/$/g, ""))
  }
};
DIL.tools.getMetaTags = function() {
  var a = {},
    c = document.getElementsByTagName("meta"),
    d, b, g, f, k;
  d = 0;
  for (g = arguments.length; d < g; d++)
    if (f = arguments[d], null !== f)
      for (b = 0; b < c.length; b++)
        if (k = c[b], k.name === f) {
          a[f] = k.content;
          break
        }
  return a
};
DIL.modules.siteCatalyst = {
  dil: null,
  handle: DIL.modules.helpers.handleModuleError,
  init: function(a, c, d, b) {
    try {
      var g = this,
        f = {
          name: "DIL Site Catalyst Module Error"
        },
        k = function(a) {
          f.message = a;
          DIL.errorModule.handleError(f);
          return a
        };
      this.options = b === Object(b) ? b : {};
      this.dil = null;
      if (c instanceof DIL) this.dil = c;
      else return k("dilInstance is not a valid instance of DIL");
      f.partner = c.api.getPartner();
      if (a !== Object(a)) return k("siteCatalystReportingSuite is not an object");
      window.AppMeasurement_Module_DIL = a.m_DIL =
        function(a) {
          var b = "function" === typeof a.m_i ? a.m_i("DIL") : this;
          if (b !== Object(b)) return k("m is not an object");
          b.trackVars = g.constructTrackVars(d);
          b.d = 0;
          b.s = a;
          b._t = function() {
            var a, b, c = "," + this.trackVars + ",",
              d = this.s,
              f, s = [];
            f = [];
            var n = {},
              v = !1;
            if (d !== Object(d)) return k("Error in m._t function: s is not an object");
            if (this.d) {
              if ("function" === typeof d.foreachVar) d.foreachVar(function(a, b) {
                "undefined" !== typeof b && (n[a] = b, v = !0)
              }, this.trackVars);
              else {
                if (!(d.va_t instanceof Array)) return k("Error in m._t function: s.va_t is not an array");
                if (d.lightProfileID)(a = d.lightTrackVars) && (a = "," + a + "," + d.vl_mr + ",");
                else if (d.pe || d.linkType) a = d.linkTrackVars, d.pe && (b = d.pe.substring(0, 1).toUpperCase() + d.pe.substring(1), d[b] && (a = d[b].trackVars)), a && (a = "," + a + "," + d
                  .vl_l + "," + d.vl_l2 + ",");
                if (a) {
                  b = 0;
                  for (s = a.split(","); b < s.length; b++) 0 <= c.indexOf("," + s[b] + ",") && f.push(s[b]);
                  f.length && (c = "," + f.join(",") + ",")
                }
                f = 0;
                for (b = d.va_t.length; f < b; f++) a = d.va_t[f], 0 <= c.indexOf("," + a + ",") && "undefined" !== typeof d[a] && null !== d[a] && "" !== d[a] && (n[a] = d[a], v = !0)
              }
              g.includeContextData(d,
                n).store_populated && (v = !0);
              v && this.d.api.signals(n, "c_").submit()
            }
          }
        };
      a.loadModule("DIL");
      a.DIL.d = c;
      return f.message ? f.message : "DIL.modules.siteCatalyst.init() completed with no errors"
    } catch (n) {
      return this.handle(n, "DIL.modules.siteCatalyst.init() caught error with message ", this.dil)
    }
  },
  constructTrackVars: function(a) {
    var c = [],
      d, b, g, f, k;
    if (a === Object(a)) {
      d = a.names;
      if (d instanceof Array && (g = d.length))
        for (b = 0; b < g; b++) f = d[b], "string" === typeof f && f.length && c.push(f);
      a = a.iteratedNames;
      if (a instanceof Array &&
        (g = a.length))
        for (b = 0; b < g; b++)
          if (d = a[b], d === Object(d) && (f = d.name, k = parseInt(d.maxIndex, 10), "string" === typeof f && f.length && !isNaN(k) && 0 <= k))
            for (d = 0; d <= k; d++) c.push(f + d);
      if (c.length) return c.join(",")
    }
    return this.constructTrackVars({
      names: "pageName channel campaign products events pe pev1 pev2 pev3".split(" "),
      iteratedNames: [{
        name: "prop",
        maxIndex: 75
      }, {
        name: "eVar",
        maxIndex: 250
      }]
    })
  },
  includeContextData: function(a, c) {
    var d = {},
      b = !1;
    if (a.contextData === Object(a.contextData)) {
      var g = a.contextData,
        f = this.options.replaceContextDataPeriodsWith,
        k = this.options.filterFromContextVariables,
        n = {},
        v, s, m, p;
      "string" === typeof f && f.length || (f = "_");
      if (k instanceof Array)
        for (v = 0, s = k.length; v < s; v++) m = k[v], this.dil.validators.isPopulatedString(m) && (n[m] = !0);
      for (p in g) !g.hasOwnProperty(p) || n[p] || !(k = g[p]) && "number" !== typeof k || (p = ("contextData." + p).replace(/\./g, f), c[p] = k, b = !0)
    }
    d.store_populated = b;
    return d
  }
};
DIL.modules.GA = {
  dil: null,
  arr: null,
  tv: null,
  errorMessage: "",
  defaultTrackVars: ["_setAccount", "_setCustomVar", "_addItem", "_addTrans", "_trackSocial"],
  defaultTrackVarsObj: null,
  signals: {},
  hasSignals: !1,
  handle: DIL.modules.helpers.handleModuleError,
  init: function(a, c, d) {
    try {
      this.tv = this.arr = this.dil = null;
      this.errorMessage = "";
      this.signals = {};
      this.hasSignals = !1;
      var b = {
          name: "DIL GA Module Error"
        },
        g = "";
      c instanceof DIL ? (this.dil = c, b.partner = this.dil.api.getPartner()) : (g = "dilInstance is not a valid instance of DIL",
        b.message = g, DIL.errorModule.handleError(b));
      a instanceof Array && a.length ? this.arr = a : (g = "gaArray is not an array or is empty", b.message = g, DIL.errorModule.handleError(b));
      this.tv = this.constructTrackVars(d);
      this.errorMessage = g
    } catch (f) {
      this.handle(f, "DIL.modules.GA.init() caught error with message ", this.dil)
    } finally {
      return this
    }
  },
  constructTrackVars: function(a) {
    var c = [],
      d, b, g, f;
    if (this.defaultTrackVarsObj !== Object(this.defaultTrackVarsObj)) {
      g = this.defaultTrackVars;
      f = {};
      d = 0;
      for (b = g.length; d < b; d++) f[g[d]] = !0;
      this.defaultTrackVarsObj = f
    } else f = this.defaultTrackVarsObj;
    if (a === Object(a)) {
      a = a.names;
      if (a instanceof Array && (b = a.length))
        for (d = 0; d < b; d++) g = a[d], "string" === typeof g && g.length && g in f && c.push(g);
      if (c.length) return c
    }
    return this.defaultTrackVars
  },
  constructGAObj: function(a) {
    var c = {};
    a = a instanceof Array ? a : this.arr;
    var d, b, g, f;
    d = 0;
    for (b = a.length; d < b; d++) g = a[d], g instanceof Array && g.length && (g = [], f = a[d], g instanceof Array && f instanceof Array && Array.prototype.push.apply(g, f), f = g.shift(),
      "string" ===
      typeof f && f.length && (c[f] instanceof Array || (c[f] = []), c[f].push(g)));
    return c
  },
  addToSignals: function(a, c) {
    if ("string" !== typeof a || "" === a || null == c || "" === c) return !1;
    this.signals[a] instanceof Array || (this.signals[a] = []);
    this.signals[a].push(c);
    return this.hasSignals = !0
  },
  constructSignals: function() {
    var a = this.constructGAObj(),
      c = {
        _setAccount: function(a) {
          this.addToSignals("c_accountId", a)
        },
        _setCustomVar: function(a, b, c) {
          "string" === typeof b && b.length && this.addToSignals("c_" + b, c)
        },
        _addItem: function(a, b, c, d,
          f, g) {
          this.addToSignals("c_itemOrderId", a);
          this.addToSignals("c_itemSku", b);
          this.addToSignals("c_itemName", c);
          this.addToSignals("c_itemCategory", d);
          this.addToSignals("c_itemPrice", f);
          this.addToSignals("c_itemQuantity", g)
        },
        _addTrans: function(a, b, c, d, f, g, k, n) {
          this.addToSignals("c_transOrderId", a);
          this.addToSignals("c_transAffiliation", b);
          this.addToSignals("c_transTotal", c);
          this.addToSignals("c_transTax", d);
          this.addToSignals("c_transShipping", f);
          this.addToSignals("c_transCity", g);
          this.addToSignals("c_transState",
            k);
          this.addToSignals("c_transCountry", n)
        },
        _trackSocial: function(a, b, c, d) {
          this.addToSignals("c_socialNetwork", a);
          this.addToSignals("c_socialAction", b);
          this.addToSignals("c_socialTarget", c);
          this.addToSignals("c_socialPagePath", d)
        }
      },
      d = this.tv,
      b, g, f, k, n, v;
    b = 0;
    for (g = d.length; b < g; b++)
      if (f = d[b], a.hasOwnProperty(f) && c.hasOwnProperty(f) && (v = a[f], v instanceof Array))
        for (k = 0, n = v.length; k < n; k++) c[f].apply(this, v[k])
  },
  submit: function() {
    try {
      if ("" !== this.errorMessage) return this.errorMessage;
      this.constructSignals();
      return this.hasSignals ? (this.dil.api.signals(this.signals).submit(), "Signals sent: " + this.dil.helpers.convertObjectToKeyValuePairs(this.signals, "=", !0) + this.dil.log) :
        "No signals present"
    } catch (a) {
      return this.handle(a, "DIL.modules.GA.submit() caught error with message ", this.dil)
    }
  },
  Stuffer: {
    LIMIT: 5,
    dil: null,
    cookieName: null,
    delimiter: null,
    errorMessage: "",
    handle: DIL.modules.helpers.handleModuleError,
    callback: null,
    v: function() {
      return !1
    },
    init: function(a, c, d) {
      try {
        this.callback = this.dil = null, this.errorMessage =
          "", a instanceof DIL ? (this.dil = a, this.v = this.dil.validators.isPopulatedString, this.cookieName = this.v(c) ? c : "aam_ga", this.delimiter = this.v(d) ? d : "|") : this.handle({
            message: "dilInstance is not a valid instance of DIL"
          }, "DIL.modules.GA.Stuffer.init() error: ")
      } catch (b) {
        this.handle(b, "DIL.modules.GA.Stuffer.init() caught error with message ", this.dil)
      } finally {
        return this
      }
    },
    process: function(a) {
      var c, d, b, g, f, k;
      k = !1;
      var n = 1;
      if (a === Object(a) && (c = a.stuff) && c instanceof Array && (d = c.length))
        for (a = 0; a < d; a++)
          if ((b =
              c[a]) && b === Object(b) && (g = b.cn, f = b.cv, g === this.cookieName && this.v(f))) {
            k = !0;
            break
          }
      if (k) {
        c = f.split(this.delimiter);
        "undefined" === typeof window._gaq && (window._gaq = []);
        b = window._gaq;
        a = 0;
        for (d = c.length; a < d && !(k = c[a].split("="), f = k[0], k = k[1], this.v(f) && this.v(k) && b.push(["_setCustomVar", n++, f, k, 1]), n > this.LIMIT); a++);
        this.errorMessage = 1 < n ? "No errors - stuffing successful" : "No valid values to stuff"
      } else this.errorMessage = "Cookie name and value not found in json";
      if ("function" === typeof this.callback) return this.callback()
    },
    submit: function() {
      try {
        var a = this;
        if ("" !== this.errorMessage) return this.errorMessage;
        this.dil.api.afterResult(function(c) {
          a.process(c)
        }).submit();
        return "DIL.modules.GA.Stuffer.submit() successful"
      } catch (c) {
        return this.handle(c, "DIL.modules.GA.Stuffer.submit() caught error with message ", this.dil)
      }
    }
  }
};
DIL.modules.Peer39 = {
  aid: "",
  dil: null,
  optionals: null,
  errorMessage: "",
  calledBack: !1,
  script: null,
  scriptsSent: [],
  returnedData: [],
  handle: DIL.modules.helpers.handleModuleError,
  init: function(a, c, d) {
    try {
      this.dil = null;
      this.errorMessage = "";
      this.calledBack = !1;
      this.optionals = d === Object(d) ? d : {};
      d = {
        name: "DIL Peer39 Module Error"
      };
      var b = [],
        g = "";
      this.isSecurePageButNotEnabled(document.location.protocol) && (g = "Module has not been enabled for a secure page", b.push(g), d.message = g, DIL.errorModule.handleError(d));
      c instanceof
      DIL ? (this.dil = c, d.partner = this.dil.api.getPartner()) : (g = "dilInstance is not a valid instance of DIL", b.push(g), d.message = g, DIL.errorModule.handleError(d));
      "string" === typeof a && a.length ? this.aid = a : (g = "aid is not a string or is empty", b.push(g), d.message = g, DIL.errorModule.handleError(d));
      this.errorMessage = b.join("\n")
    } catch (f) {
      this.handle(f, "DIL.modules.Peer39.init() caught error with message ", this.dil)
    } finally {
      return this
    }
  },
  isSecurePageButNotEnabled: function(a) {
    return "https:" === a && !0 !== this.optionals.enableHTTPS ?
      !0 : !1
  },
  constructSignals: function() {
    var a = this,
      c = this.constructScript(),
      d = DIL.variables.scriptNodeList[0];
    window["afterFinished_" + this.aid] = function() {
      try {
        var b = a.processData(p39_KVP_Short("c_p", "|").split("|"));
        b.hasSignals && a.dil.api.signals(b.signals).submit()
      } catch (c) {} finally {
        a.calledBack = !0, "function" === typeof a.optionals.afterResult && a.optionals.afterResult()
      }
    };
    d.parentNode.insertBefore(c, d);
    this.scriptsSent.push(c);
    return "Request sent to Peer39"
  },
  processData: function(a) {
    var c, d, b, g, f = {},
      k = !1;
    this.returnedData.push(a);
    if (a instanceof Array)
      for (c = 0, d = a.length; c < d; c++) b = a[c].split("="), g = b[0], b = b[1], g && isFinite(b) && !isNaN(parseInt(b, 10)) && (f[g] instanceof Array || (f[g] = []), f[g].push(b), k = !0);
    return {
      hasSignals: k,
      signals: f
    }
  },
  constructScript: function() {
    var a = document.createElement("script"),
      c = this.optionals,
      d = c.scriptId,
      b = c.scriptSrc,
      c = c.scriptParams;
    a.id = "string" === typeof d && d.length ? d : "peer39ScriptLoader";
    a.type = "text/javascript";
    "string" === typeof b && b.length ? a.src = b : (a.src = (this.dil.constants.IS_HTTPS ?
      "https:" : "http:") + "//stags.peer39.net/" + this.aid + "/trg_" + this.aid + ".js", "string" === typeof c && c.length && (a.src += "?" + c));
    return a
  },
  submit: function() {
    try {
      return "" !== this.errorMessage ? this.errorMessage : this.constructSignals()
    } catch (a) {
      return this.handle(a, "DIL.modules.Peer39.submit() caught error with message ", this.dil)
    }
  }
};

} // end if resi only

if (( s_account == 'tsg2resglobal') || (s_account == 'tsg2resdev3') )  {
/*  DFA Config  */
var dfaConfig = {
	CSID: '', // DFA Client Site ID
	SPOTID: '3679293', // DFA Spotlight ID
	tEvar: 'eVar73', // Transfer variable, typically the "View Through" eVar.
	errorEvar: 'eVar72', // DFA error tracking (optional)
	timeoutEvent: 'event8', // Tracks timeouts/empty responses (optional)
	requestURL: "http://fls.doubleclick.net/json?spot=[SPOTID]&src=[CSID]&var=[VAR]&host=integrate.112.2o7.net%2Fdfa_echo%3Fvar%3D[VAR]%26AQE%3D1%26A2S%3D1&ord=[RAND]", // the DFA request URL
	//	maxDelay:           "750", // The maximum time to wait for DFA servers to respond, in milliseconds.
	visitCookie: "s_dfa", // The name of the visitor cookie to use to restrict DFA calls to once per visit.
	clickThroughParam: "CID", // A query string paramter that will force the DFA call to occur.
	searchCenterParam: undefined, // SearchCenter identifier.
	newRsidsProp: undefined //"prop34" // Stores the new report suites that need the DFA tracking code. (optional)
};

} // end if Resi

s.maxDelay='1000'; //max time to wait for 3rd party api response in milliseconds
s.loadModule("Integrate")
s.Integrate.onLoad=function(s,m){
		s.socialAuthors();
		//add other integration module dependent functions here
if (( s_account == 'tsg2resglobal') || (s_account == 'tsg2resdev3') )  {
    var dfaCheck = s.partnerDFACheck(dfaConfig);
	if (dfaCheck) {
		s.Integrate.add("DFA");
		s.Integrate.DFA.tEvar=dfaConfig.tEvar;
		s.Integrate.DFA.errorEvar=dfaConfig.errorEvar;
		s.Integrate.DFA.timeoutEvent=dfaConfig.timeoutEvent;
		s.Integrate.DFA.CSID=dfaConfig.CSID;
		s.Integrate.DFA.SPOTID=dfaConfig.SPOTID;
		s.Integrate.DFA.get(dfaConfig.requestURL);
		s.Integrate.DFA.setVars=function(s,p) {
			if (window[p.VAR]) { // got a response
				if(!p.ec) { // no errors
					s[p.tEvar]="DFA-"+(p.lis?p.lis:0)+"-"+(p.lip?p.lip:0)+"-"+(p.lastimp?p.lastimp:0)+"-"+(p.lastimptime?p.lastimptime:0)+"-"+(p.lcs?p.lcs:0)+"-"+(p.lcp?p.lcp:0)+"-"+(p.lastclk?p.lastclk:0)+"-"+(p.lastclktime?p.lastclktime:0)
				} else if (p.errorEvar) { // got an error response, track
					s[p.errorEvar] = p.ec;
				}
			} else if (p.timeoutEvent) { // empty response or timeout
				s.events = ((!s.events || s.events == '') ? '' : (s.events + ',')) + p.timeoutEvent; // timeout event
			}
		}
	}
 } // end if Resi
};



/****************************** MODULES *****************************/
/* Module: Integrate */
s.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p"
+".get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m."
+"l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=func"
+"tion(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000"
+"000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s."
+"'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z) {u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y-(z.length-v.length+1)} else {x=y}}}"
+"}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay"
+"=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&"
+"&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m"
+"=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.s"
+"cript=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";s.m_i("Integrate");
/**** END Integrate MODULE COMMENT ***/

