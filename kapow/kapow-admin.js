(function() {

    window.ActiveTimeout=function(){var n=function(){var n,e;if("hidden"in document)n="hidden",e="visibilitychange";else if("msHidden"in document)n="msHidden",e="msvisibilitychange";else{if(!("webkitHidden"in document))return null;n="webkitHidden",e="webkitvisibilitychange"}return{hidden:n,event:e}}();function e(){return n&&document[n.hidden]}var i=[];function t(n){var t=0,u=function(){t+=1};i.push(u),function o(d){var r,c=!1,f=Date.now();t>0?(t-=1,c=!0):c=!!e()||(!d||n(f-d)),!0===c?(r=function(){o(f)},"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(r):setTimeout(r,1e3/60)):i.splice(i.indexOf(u),1)}()}function u(n){var e=0;t(function(i){return n(e+=i,i)})}return n&&document.addEventListener(n.event,function(){if(!e())for(var n=i.length-1;n>=0;n--)i[n]()}),{set:function(n,e,i){"number"==typeof e&&(i=e,e=null),u(function(t,u){return"function"==typeof e&&e(i-t,u),!(t>=i&&(n(),1))})},count:u,pulse:t}}();

    var get_html_widget = function(){
        var html = "";
        var img_avatar = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-1/p200x200/51381923_793047707754726_4175021838813888512_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=eydEaa1_TugAX-5egYO&_nc_ht=scontent-iad3-1.xx&oh=ff4e3cda35bc7b62c228044fc45ee64a&oe=61A5A4D9";
        var img_large = "https://via.placeholder.com/1200x860"
        var heading = "👋  &nbsp;Hey there Super Hero";
        var body = "Looks like you have some super powers installed on this page. Learn how to use your powers and hear about the latest PowerUp news. Just click the <b>Maximize Power</b> button below";

        html +='<div class="kpa-widget kpa-widget-popup kpa-widget_left" data-kpa-onload>';
        html +='    <div class="kpa-overlay" data-kpa-close></div>';
        html +='    <div class="kpa-container">';
        html +='        <div class="kpa-item"><span class="close-kpa-widget kpa-close kpa-close_white" data-kpa-close><i class="fas fa-times"></i></span>';
        html +='            <div class="kpa-preview">';
        html +='               <video autoplay="" loop="" style="background-image:url(&quot;https://import.cdn.thinkific.com/164072%2Fcustom_site_themes%2Fid%2FI9YAwjmUT0qwGsACg9CQ_UfRyT2ipSFmmqruhogRD_Screen_Shot_2021_02_14_at_7_06_25_PM_png%20(2).jpg&quot;)" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://s3.amazonaws.com/thinkific-import-development/205311/courses/592321/InVideo___JOB_ID__3210515pprenderfs_1613347065928-210214-190220.mp4" data-wf-ignore="true"></video> ';       
        html +='            </div>';
        html +='            <div class="kpa-wrap kpa-p">';
        html +='                <div class="kpa-user kpa-user_center kpa-user_top">';
        html +='                    <div class="kpa-preview"><img class="kpa-pic" src="'+img_avatar+'"></div>';
        html +='                    <div class="kpa-group">';
        html +='                        <div class="kpa-title">Rob Galvin</div>';
        html +='                        <div class="kpa-content">Thinkific Expert - Creator of <strong>PowerUps</strong></div>';
        html +='                    </div>';
        html +='                </div>';
        html +='                <div class="">';
        html +='                    <div class="kpa-title">'+heading+'</div>';
        html +='                    <div class="kpa-content">'+body+'</div>';
        html +='                </div>';
        html +='            </div>';
        html +='            <div class="kpa-foot">';
        html +='                <span class="kpa-btn kpa-maybelater" data-kpa-ripple data-kpa-close>Maybe later</span>';
        html +='                <span class="kpa-btn kpa-maximize btn-kapow" data-kpa-ripple >💥 Maximize Power</span>';
        html +='            </div>';
        html +='        </div>';
        html +='        <div class="kpa-powered">You site hase <a href="https://www.superpowerups.com/" target="_blank">💥 Super PowerUps</a></div>';
        html +='    </div>'
        html +='</div>'
        return html    
    }

    var get_card_html = function(){
        html +='<div class=" w-100">';
        html +='    <div class="col-12 ">';
        html +='        <div class="padding-20px-all padding-10px-top">';
        html +='            <div class="text-center border-radius-6px bg-white box-shadow box-shadow-large-hover w-100 ">';
        html +='                <div class="row">';
        html +='                    <div class="col-4" style="background-image:url(https://via.placeholder.com/1920x1280);background-size:cover;background-position:center">';
        html +='                    </div>    ';
        html +='                    <div class="col-8">';
        html +='                        <div class="text-left padding-30px-all xl-padding-25px-lr">';
        html +='                            <a href="blog-grid.html" class="post-author text-medium text-uppercase">Name of PowerUp</a>';
        html +='                            <a href="blog-post-layout-01.html" class="text-extra-dark-gray font-weight-500 alt-font d-block">Sction Link 1</a>';
        html +='                            <a href="blog-post-layout-01.html" class="text-extra-dark-gray font-weight-500 alt-font d-block">Sction Link 1</a>';
        html +='                            <a href="blog-post-layout-01.html" class="text-extra-dark-gray font-weight-500 alt-font d-block">Sction Link 1</a>';
        html +='                            <a href="blog-post-layout-01.html" class="text-extra-dark-gray font-weight-500 alt-font d-block">Sction Link 1</a>';
        html +='                        </div>';
        html +='                    </div>';
        html +='                </div>';
        html +='            </div>';
        html +='        </div>';
        html +='    </div>';
        html +='</div>      ';  
        return html
    }

    var get_sidebar_html = function(){
        var html = "";
        html +='<div class="kpa-widget kpa-widget_sidebar" data-kpa-onload>';
        html +='    <div class="kpa-overlay" data-kpa-close></div>';
        html +='    <div class="kpa-container kpa-container_sidebar">';
        html +='        <div class="kpa-item kpa-item_no_radius" style="--theme-color: #018786"><span class="kpa-close kpa-maximize-close kpa-close_lg kpa-visible" data-kpa-close><i class="fas fa-times"></i></span>';
        html +='            <div class="kpa-wrap kpa-p kpa-bb">';
        html +='                <div class="kpa-panel kpa-panel_sm kpa-mb-md">';
        html +='                    <div class="kpa-preview"><img class="kpa-pic" src="https://cdn-themes.thinkific.com/164072/363767/nsL1X4RiS0yjOXYcU7dg_powerups.svg"></div>';
        html +='                    <div class="kpa-group">';
        html +='                        <div class="kpa-title">Maximizer</div>';
        html +='                    </div>';
        html +='                </div>';
        html +='                <nav class="kpa-nav">';
        html +='                    <span class="kpa-nav-link" data-href="https://www.superpowerups.com/enrollments">';
        html +='                        <div class="kpa-nav-icon"><i class="fas fa-th"></i></div>';
        html +='                        <div class="kpa-nav-title">Member Dashboard</div>';
        html +='                    </span>';
       

        html +='                    <span class="kpa-nav-link" data-href="https://www.facebook.com/groups/superpowerups">';
        html +='                        <div class="kpa-nav-icon"><i class="fas fa-users-crown"></i></div>';
        html +='                        <div class="kpa-nav-title">Community</div>';
        html +='                    </span>';
        html +='                    <span class="kpa-nav-link" data-href="https://docs.superpowerups.com/">';
        html +='                        <div class="kpa-nav-icon"><i class="fas fa-book-spells"></i></div>';
        html +='                        <div class="kpa-nav-title">Documentation</div>';
        html +='                    </span>';
        html +='                    <span class="kpa-nav-link" data-href="https://support.superpowerups.com/">';
        html +='                        <div class="kpa-nav-icon"><i class="fas fa-map-marker-question"></i></div>';
        html +='                        <div class="kpa-nav-title">Support</div>';
        html +='                    </span>';
        html +='                </nav>';
        html +='            </div>';
        html +='            <div class="kpa-wrap kpa-p kpa-page-superpowers d-none">';
        html +='                <div class="kpa-title  kpa-title_sm kpa-mb kpa-text-color-2">SUPER POWERS ON THIS PAGE:</div>';
        // html +='                <nav class="kpa-nav kpa-mb-md">';
        // html +='                    <span class="kpa-nav-link " style="margin-bottom:10px;" href="#">';
        // html +='                        <div class="kpa-nav-icon"><i class="fad fa-certificate"></i></div>';
        // html +='                        <div class="kpa-nav-title">PowerUp Name</div>';
        // html +='                    </span>';
        // html +='                    <ul class="kpa-list-circle">';
        // html +='                        <li class="kpa-text-uppercase"><span class="" data-href="#">Section Name</span></li>'
        // html +='                    </ul>';
        // html +='                </nav>';
        html +='            </div>';
        html +='        </div>';
        html +='    </div>';
        html +='</div>';    
        return html;    
    }


    if(window.location.href.includes("manage/site_builder") && typeof(window.__KAPOW_ADMIN)=="undefined"){
        window.__KAPOW_ADMIN=true;
        console.log("In Site Admin");

        //inject admin css into page
        
        var f = document.getElementsByTagName("script")[0];
        //     j = document.createElement("script");
        //     j.async = false;
        //     j.src = "https://cdn.jsdelivr.net/npm/uikit@3.6.15/dist/js/uikit.min.js";
        //     f.parentNode.insertBefore(j, f);

            j3 = document.createElement("link");
            j3.rel = "stylesheet";
            j3.href = "https://cdn.jsdelivr.net/gh/robgalvinco/pow/kapow/kapow-admin.css";
            f.parentNode.insertBefore(j3, f);

        // inject html for admin popup
        var html = get_html_widget();

        // Inject side menu
        html += get_sidebar_html();
        

        $("body").append(html);
        ActiveTimeout.set(function () {
            // Invoked when the timeout ends.
            $(".kpa-widget-popup ").addClass("kpa-open animate__animated animate__slideInUp");
            $(".kpa-widget-popup .kpa-item").addClass("kpa-visible");
            $(".kpa-widget-popup .kpa-powered").addClass("kpa-visible");
        
            $(".kpa-widget-popup .close-kpa-widget").click(function(){
                console.log("closing");
                $(".kpa-widget-popup").removeClass("kpa-open");
                $(".kpa-widget-popup .kpa-item").removeClass("kpa-visible");
                $(".kpa-widget-popup .kpa-powered").removeClass("kpa-visible");
            })
            $(".kpa-widget-popup .kpa-maybelater").click(function(){
                console.log("maybe later");
                $(".kpa-widget-popup").removeClass("kpa-open");
                $(".kpa-widget-popup .kpa-item").removeClass("kpa-visible");
                $(".kpa-widget-popup .kpa-powered").removeClass("kpa-visible");
            })    
            $(".kpa-widget-popup .kpa-maximize").click(function(){
                $(".kpa-widget-popup").removeClass("kpa-open");
                $(".kpa-widget-popup .kpa-item").removeClass("kpa-visible");
                $(".kpa-widget-popup .kpa-powered").removeClass("kpa-visible");        
                console.log("opening more detail");
                $(".kpa-widget_sidebar").addClass("kpa-open animate__animated animate__slideInRight");
                $(".kpa-widget_sidebar .kpa-item").addClass("kpa-visible");
        
            });
        
            $(".kpa-maximize-close").click(function(){
                console.log("closing more detail");
                $(".kpa-widget_sidebar").removeClass("kpa-open animate__animated animate__slideInUp");
                $(".kpa-widget_sidebar .kpa-item").removeClass("kpa-visible");
            });
        
            var sp_on_page = [];
            $( "div[data-kapow-app]" ).each(function(){
                var app = $(this).data("kapow-app");
                var component = $(this).data("kapow-app-section");
                var __FOUND = -1;
                for(var i=0; i<sp_on_page.length; i++) {
                    if(sp_on_page[i].id == app) {
                        // __FOUND is set to the index of the element
                        __FOUND = i;
                        break;
                    }
                }  
                if(__FOUND==-1){
                    sp_on_page.push({
                        id:app,
                        components: []
                    })
                }              
            });
            console.log("Apps",sp_on_page); 
            sp_on_page.forEach(function(app){
                var html ="";
                html +='                <nav class="kpa-nav kpa-mb-md">';
                html +='                    <span class="kpa-nav-link " style="margin-bottom:10px;" href="#">';
                html +='                        <div class="kpa-nav-icon"><i class="fad fa-certificate"></i></div>';
                html +='                        <div class="kpa-nav-title">'+app.id+'</div>';
                html +='                    </span>';
                html +='                    <ul class="kpa-list-circle">';
                html +='                        <li class="kpa-text-uppercase"><span class="" data-href="#">Section Name</span></li>'
                html +='                    </ul>';
                html +='                </nav>';
                $(".kpa-page-superpowers").append(html);
            });
            if(sp_on_page.length>0){
                $(".kpa-page-superpowers").removeClass("d-none");
            }

    

            $(".kpa-nav-link").click(function(){
                var href = $(this).data("href");
                window.open(href);
            });

            
        },  1200);  

        

    }
})();
