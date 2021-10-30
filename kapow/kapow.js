$( document ).ready(function() {
    //find kapow sections being used
    if(!(window.location.href.includes("manage/site_builder")) && typeof(window.__KAPOW)!="undefined" && typeof(window.__KAPOW.logged)=="undefined"){
        //console.log("checking for kapow");
        window.__KAPOW.logged = true;
        // find all app sections
        var handled=[];
        $( "div[data-kapow-app]" ).each(function(){
            
            var app = $(this).data("kapow-app");
            var component = $(this).data("kapow-app-section");
            var endpoint = "https://api.superpowerups.com/api/kapow/logusage";
            var og_image=$('meta[property="og:image"]').attr('content');
            var og_description=$('meta[property="og:description"]').attr('content');
            if(typeof(og_img)=="undefined"){
                og_image = $("main img").first().attr("src");
            }
            if(typeof(og_description)=="undefined"){
                og_description = "";
            }
            //console.log("Found App:"+app+" "+component);
            var data = {
                domain: window.__KAPOW.domain,
                site_name: window.__KAPOW.site_name,
                page_identifier:window. window.__KAPOW.page_identifier,
                page_title:  window.__KAPOW.page_title,
                page_url:  window.__KAPOW.page_url,
                app: app,
                app_section:component,
                og_description: og_description,
                og_image: og_image 
            }
            // only send one of the app/compoonents combo
            var handled_string = app+"|"+component;
            //console.log(handled); console.log(handled_string);
            if(handled.indexOf(handled_string) == -1){
                handled.push(handled_string);
                //console.log("Sending:",data);
                // send log
                $.ajax({
                    url: endpoint,
                    data: JSON.stringify(data),
                    method: "POST",
                    contentType: "application/json",
                    success: function( data, textStatus, jQxhr ){
                        //console.log("sent")
                    },
                    error: function( jqXhr, textStatus, errorThrown ){
                        //console.log("Error")
                    }
                });                
            };

        }) 
        
    
    }
})    

