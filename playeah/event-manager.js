  $(function() {
    if(typeof(CoursePlayerV2) !== 'undefined') {
        window.addEventListener('message', function(event){
            if(event.data=="hide_complete"){
                $("#course-player-footer button").hide();
            }
            if(event.data=="show_complete"){
                $("#course-player-footer button").show();
            }    
            if(event.data=="click_complete"){
                $("#course-player-footer button[data-qa='complete-continue__btn']").click();
            }    
            if(event.data=="click_incomplete"){
                $("#course-player-footer .btn--incomplete button").click();
            }    
            if(event.data=="hide_tcp_chapters"){
                $(".course-player__left-drawer").hide();
            }    
            if(event.data=="show_tcp_chapters"){
                $(".course-player__left-drawer").show();
            }    

            
        
        }, false);
    }
  });
$(document).ready(function(){
    if(typeof(CoursePlayerV2) !== 'undefined') {
        CoursePlayerV2.on('hooks:contentDidChange', function(data) {
            if(data.lesson.display_name=="Multimedia"){
              $("#course-player-footer button").hide();
            } else {
              $("#course-player-footer button").show();
            }
        });
    }
});



