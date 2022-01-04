window.ActiveTimeout=function(){var n=function(){var n,e;if("hidden"in document)n="hidden",e="visibilitychange";else if("msHidden"in document)n="msHidden",e="msvisibilitychange";else{if(!("webkitHidden"in document))return null;n="webkitHidden",e="webkitvisibilitychange"}return{hidden:n,event:e}}();function e(){return n&&document[n.hidden]}var i=[];function t(n){var t=0,u=function(){t+=1};i.push(u),function o(d){var r,c=!1,f=Date.now();t>0?(t-=1,c=!0):c=!!e()||(!d||n(f-d)),!0===c?(r=function(){o(f)},"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(r):setTimeout(r,1e3/60)):i.splice(i.indexOf(u),1)}()}function u(n){var e=0;t(function(i){return n(e+=i,i)})}return n&&document.addEventListener(n.event,function(){if(!e())for(var n=i.length-1;n>=0;n--)i[n]()}),{set:function(n,e,i){"number"==typeof e&&(i=e,e=null),u(function(t,u){return"function"==typeof e&&e(i-t,u),!(t>=i&&(n(),1))})},count:u,pulse:t}}();
window.Donleeve=function(){var n="*",e="undefined"!=typeof localStorage,o="donleevBlocks",t={bindDelay:3e3,bindEventBlur:!0,bindEventMouseLeave:!0,bindEventMouseMove:!0,storageBlockingRegex:n,storageBlockingMinutes:10,ignoreStorageBlocking:!1,ignoreFlagBlocking:!1},i={options:t,enabled:!0,acted:!1,onBound:null,onTrigger:null,onStorageBlock:null,onAction:null};function r(n){return"number"==typeof n?n-Date.now():0}function c(){var n;try{n=JSON.parse(localStorage[o])}catch(n){console.warn("Couldn't parse blocks JSON.")}return Array.isArray(n)||(l(n=[]),console.warn("Blocks were not an array.")),n}function l(n){for(var e=n.length-1;e>=0;e--)r(n[e][1])<=0&&n.splice(e,1);localStorage[o]=JSON.stringify(n)}function u(){return!!i.enabled&&(!(!t.ignoreFlagBlocking&&i.acted)&&!(!t.ignoreStorageBlocking&&function(){if(!e)return!1;var o=!1;return c().forEach(function(e){var t=e[0],c=e[1];if(t===n||null!==new RegExp(t).exec(window.location.href)){var l=r(c);l>0&&(o=!0,"function"==typeof i.onStorageBlock&&i.onStorageBlock(t,l))}}),o}()))}function a(n){"function"==typeof i.onAction&&!1!==i.onAction(n)&&(i.acted=!0,function(){if(e){var n=c(),o=60*t.storageBlockingMinutes*1e3;n.push([t.storageBlockingRegex,Date.now()+o]),l(n)}}())}function g(n){"function"==typeof i.onTrigger&&i.onTrigger(n),!0===u()&&a(n)}return i.setOptions=function(n){if("object"==typeof n&&null!==n)for(var e in n)t[e]=n[e]},i.init=function(n,e){"function"==typeof n&&(e=n,n=void 0),i.setOptions(n),i.onAction=e,ActiveTimeout.set(function(){t.bindEventBlur&&window.addEventListener("blur",g),t.bindEventMouseLeave&&document.documentElement.addEventListener("mouseleave",function(n){(n.y<=0||n.clientY<=0)&&g(n)}),t.bindEventMouseMove&&document.documentElement.addEventListener("mousemove",function(n){n.movementY<0&&(n.y<=0||n.movementY<-n.y)&&g(n)}),"function"==typeof i.onBound&&i.onBound()},t.bindDelay)},i.purgeBlocks=function(n){e&&localStorage.donleevPurge!==n&&(localStorage.donleevPurge=n,l([]),console.warn("Blocks purged with string:",n))},i}();


/* plaYEAH Widgets

v1.0.1
*/
(function () {
    var _progress_start = -1;
    const open_url_new_tab = function(url){
        var win = window.open(url, '_blank');
        win.focus();        
    }

    

    const init = function(){
        $( document ).ready(function() {
        });
    }



    const inject_css= function(){
         var f = document.getElementsByTagName("script")[0];
            j3 = document.createElement("link");
            j3.rel = "stylesheet";
            j3.href = "https://cdn.jsdelivr.net/gh/robgalvinco/pow@latest/playeah-widgets/css/style.css";
            f.parentNode.insertBefore(j3, f);
    }
    const inject_fa= function(){
        var f = document.getElementsByTagName("script")[0],
           j = document.createElement("script");
           j.async = true;
           j.src = "https://robgalvinco.github.io/fapro/js/all.js";
           f.parentNode.insertBefore(j, f);
           
           j2 = document.createElement("script");
           j2.async = true;
           j2.src = "https://robgalvinco.github.io/fapro/js/v4-shims.min.js";
           f.parentNode.insertBefore(j2, f);

           j3 = document.createElement("link");
           j3.rel = "stylesheet";
           j3.href = "https://robgalvinco.github.io/fapro/css/all.css";
           f.parentNode.insertBefore(j3, f);

    }    
    const inject_html= function(){
        console.log("injecting html");
        var html = '<div id="playeah-style"></div><lottie-player id="playeah-fs" background="transparent" speed="1" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999999999;" autoplay=""></lottie-player>';
        var html_modal = '<div id="playeah-modal" class="uk-flex-top" uk-modal><div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body"><div class="playeah-modal-image uk-flex uk-flex-center"></div> <button class="uk-modal-close-outside" type="button" uk-close></button><h2 class="uk-modal-title uk-text-center playeah-modal-heading uk-text-primary"></h2><p class="playeah-modal-copy uk-text-center uk-text-secondary"></p><p class="uk-text-center"> <a class="uk-button uk-button-primary playeah-modal-cta" ></a></p></div></div>';
        var html_push = '<div id="playeah-push" uk-offcanvas="flip:true; mode: push; overlay: false"><div class="uk-offcanvas-bar uk-background-default"><button class="uk-offcanvas-close" type="button" uk-close></button><div class="playeah-modal-image uk-flex uk-flex-center"></div> <button class="uk-modal-close-outside" type="button" uk-close></button><h2 class="uk-modal-title uk-text-center playeah-modal-heading uk-text-primary"></h2><p class="playeah-modal-copy uk-text-center uk-text-secondary"></p><p class="uk-text-center"> <a class="uk-button uk-button-primary playeah-modal-cta" ></a></p></div></div>';
        $("body").append(html);       
        $("body").append(html_modal);       
        $("body").append(html_push);       

    }

    Array.prototype.contains = function ( needle ) {
       for (i in this) {
           if (this[i] == needle) return true;
       }
       return false;
    }   
    

   $( document ).ready(function() {
        if(typeof(CoursePlayerV2) !== 'undefined') {
            
            inject_css();
            inject_html();
        
        
            CoursePlayerV2.on('hooks:contentDidChange', function(data) {
                console.log(data);
                if(_progress_start == -1){
                    console.log("Setting default");
                    _progress_start = data.enrollment.percentage_completed*100;
                                   
                }

                               
                
            });

            
             
        }

    });

        
        
    
}());

