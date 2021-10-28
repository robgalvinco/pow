
$( document ).ready(function() {
    if(window.location.href.includes("manage/site_builder")){
        //find kapow sections being used
        $( "div[data-kapow-app]" ).each(function(){
            var app = $(this).data("kapow-app");
            var component = $(this).data("data-kapow-app-section");
            console.log("Found App:"+app+" "+component);
        })        
    }


})
