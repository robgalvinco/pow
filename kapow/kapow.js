
$( document ).ready(function() {
    //find kapow sections being used
    $( "div[data-kapow-app]" ).each(function(){
        var app = $(this).data("kapow-app");
        var component = $(this).data("kapow-app-section");
        console.log("Found App:"+app+" "+component);
    })        
})
