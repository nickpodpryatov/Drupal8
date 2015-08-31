"use strict";StackExchange.mockups=function(){function e(e,t,n,i,a){function o(e,t,n){for(var i=-1,a=-1;;){if(a=t.indexOf(e,a+1),-1==a)break;(0>i||Math.abs(a-n)<Math.abs(a-i))&&(i=a)}return i}return e.replace(new RegExp("<!-- Begin mockup[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End mockup -->","g"),function(e,s,r){var l={"payload":s.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":o(e,t,r),"len":e.length};return-1===l.pos?e:(a.push(l),e+"\n\n"+n+i+"-"+(a.length-1)+"%")})}function t(){StackExchange.externalEditor.init({"thingName":"mockup","thingFinder":e,"getIframeUrl":function(e){var t="/plugins/mockups/editor";return e&&(t+="?edit="+encodeURIComponent(e)),t},"buttonTooltip":"UI wireframe","buttonImageUrl":"/content/balsamiq/wmd-mockup-button.png?v=4","onShow":function(e){window.addMockupToEditor=e},"onRemove":function(){window.addMockupToEditor=null;try{delete window.addMockupToEditor}catch(e){}}})}return{"init":t}}(),StackExchange.schematics=function(){function e(){if(!window.postMessage)return i;var e=document.createElement("div");e.innerHTML="<svg/>";var t="http://www.w3.org/2000/svg"==(e.firstChild&&e.firstChild.namespaceURI);if(!t)return i;var n=navigator.userAgent;return/Firefox|Chrome/.test(n)?s:/Apple/.test(navigator.vendor)||/Opera/.test(n)?o:a}function t(e,t,n,i,a){function o(e,t,n){for(var i=-1,a=-1;;){if(a=t.indexOf(e,a+1),-1==a)break;(0>i||Math.abs(a-n)<Math.abs(a-i))&&(i=a)}return i}return e.replace(new RegExp("<!-- Begin schematic[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End schematic -->","g"),function(e,s,r){var l={"payload":s.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":o(e,t,r),"len":e.length};return-1===l.pos?e:(a.push(l),e+"\n\n"+n+i+"-"+(a.length-1)+"%")})}function n(){var n;StackExchange.externalEditor.init({"thingName":"schematic","thingFinder":t,"getIframeUrl":function(e){var t="/plugins/schematics/editor";return e&&(t+="?edit="+encodeURIComponent(e)),t},"buttonTooltip":"Schematic","buttonImageUrl":"/content/electronics/img/wmd-schematic-button.png?v=1","checkSupport":function(){var t=e();switch(t){case s:return!0;case o:return confirm("Your browser is not officially supported by the schematics editor; however it has been reported to work. Launch the editor?");case a:return confirm("Your browser is not officially supported by the schematics editor; it may or may not work. Launch the editor anyway?");case i:return alert("Sorry, your browser does not support all the necessary features for the schematics editor."),!1}},"onShow":function(e){var t=$("<div class='popup' />").css("z-index",1111).text("Loading editor").appendTo("body").show().addSpinner({"marginLeft":5}).center({"dy":-200});$("<div style='text-align:right;margin-top: 10px' />").append($("<button>cancel</button>").click(function(){t.remove(),e()})).appendTo(t),n=function(n){if(n=n.originalEvent,"https://www.circuitlab.com"===n.origin){n.data||e();var i=$.parseJSON(n.data);if(i&&"success"===i.load)return t.remove(),void 0;if(i&&i.edit_url&&i.image_url){i.fkey=StackExchange.options.user.fkey;var a=$("<div class='popup' />").css("z-index",1111).appendTo("body").show(),o=function(){a.text("Storing image").addSpinner({"marginLeft":5}).center(),$.post("/plugins/schematics/save",i).done(function(t){a.remove(),e(t.img)}).fail(function(e){if(409===e.status){var t="Storing aborted";e.responseText.length<200&&(t=e.responseText),a.text(t+", will retry shortly").addSpinner({"marginLeft":5}).center(),setTimeout(o,1e4)}else a.remove(),alert("Failed to upload the schematic image.")})};o()}}},$(window).on("message",n)},"onRemove":function(){$(window).off("message",n)}})}var i=0,a=1,o=2,s=3;return{"init":n}}(),StackExchange.externalEditor=function(){function e(e){function t(e,t){function p(t){function i(){StackExchange.helpers.closePopups(x.add(a)),d()}var a,r=g||v.caret(),l=v[0].value||"",u=t?t.pos:r.start,p=t?t.len:r.end-r.start,h=l.substring(0,u),f=l.substring(u+p);g=null;var m=function(t,a){if(!t)return setTimeout(i,0),v.focus(),void 0;StackExchange.navPrevention.start();var o=void 0===a?n(t):a,s=h.replace(/(?:\r\n|\r|\n){1,2}$/,""),l=s+o+f.replace(/^(?:\r\n|\r|\n){1,2}/,""),c=r.start+o.length-h.length+s.length;setTimeout(function(){e.textOperation(function(){v.val(l).focus().caret(c,c)}),i()},0)},x=null;if(o){var k=o(t?t.payload:null);x=$("<iframe>",{"src":k})}else{var y=s(t?t.payload:null);x=$(y)}x.addClass("esc-remove").css({"position":"fixed","top":"2.5%","left":"2.5%","width":"95%","height":"95%","background":"white","z-index":1001}),$("body").loadPopup({"html":x,"target":$("body"),"lightbox":!0}).done(function(){$(window).resize(),c(m)})}$('<style type="text/css"> .wmd-'+i+"-button span { background-position: 0 0; } .wmd-"+i+"-button:hover span { background-position: 0 -40px; }</style>)").appendTo("head");var h,f,g,m=e.getConverter().hooks,v=$("#wmd-input"+t);m.chain("preConversion",function(e){var t=(e.match(/%/g)||[]).length,n=v[0].value||"";return h=new Array(t+2).join("%"),f=[],a(e,n,h,i,f)}),m.chain("postConversion",function(e){return e.replace(new RegExp(h+i+"-(\\d+)%","g"),function(e,t){return"<sup><a href='#' class='edit-"+i+"' data-id='"+t+"'>edit the above "+i+"</a></sup>"})});var x="The "+i+" editor does not support touch devices.",k=!1;$("#wmd-preview"+t).on("touchend",function(){k=!0}).on("click","a.edit-"+i,function(){return k?(alert(x),k=!1,!1):(k=!1,(!u||u())&&p(f[$(this).attr("data-id")]),!1)}),$("#wmd-input"+t).keyup(function(e){e.shiftKey||e.altKey||e.metaKey||!e.ctrlKey||77!==e.which||(!u||u())&&p()}),setTimeout(function(){var e=($("#wmd-button-bar"+t),$("#wmd-image-button"+t)),n=parseInt(e.css("left"));e.nextAll("li").each(function(){var e=$(this),t=parseInt(e.css("left"));e.css("left",t+25)});var a=$("<li class='wmd-button wmd-"+i+"-button' style='left:"+(n+25)+"px' id='wmd-"+i+"-button"+t+"' title='"+r+" Ctrl-M' />").insertAfter(e),o=!1,s=$("<span />").css({"backgroundImage":"url("+l+")"}).appendTo(a).on("touchend",function(){o=!0}).click(function(){return o?(alert(x),o=!1,void 0):(o=!1,(!u||u())&&p(),void 0)});$.browser.msie&&s.mousedown(function(){g=v.caret()})},0)}function n(e){return('\n\n<!-- Begin {THING}: In order to preserve an editable {THING}, please\n     don\'t edit this section directly.\n     Click the "edit" link below the image in the preview instead. -->\n\n![{THING}]('+e+")\n\n<!-- End {THING} -->\n\n").replace(/{THING}/g,i)}var i=e.thingName,a=e.thingFinder,o=e.getIframeUrl,s=e.getDivContent,r=e.buttonTooltip,l=e.buttonImageUrl,c=e.onShow,d=e.onRemove||function(){},u=e.checkSupport;StackExchange.MarkdownEditor.creationCallbacks.add(t)}return{"init":e}}();