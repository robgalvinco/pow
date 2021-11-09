$( document ).ready(function() {

    var num_seconds_elapsed = 0;
    var stop_timer_at = 8;
    var lesson_timer =-1;
    var lesson_on = -1;

    var handleTimerTick = function(){
        num_seconds_elapsed +=1;
        var remainder =  stop_timer_at - num_seconds_elapsed;
        console.log("Tick:remainder");               
        if (num_seconds_elapsed>= stop_timer_at){
            // stop timer
            stopTimer();
           
        } else {
            // update the fake CandC button text
            $("footer .remainder").text(parseInt(remainder/1000)); 
        }
    }        

    var stopTimer = function(){
        console.log(stopTimer);
        if(typeof(window.__candc_timer)!="undefined"){
            window.clearInterval( window.__candc_timer);
        }
        $("button[data-qa='complete-continue__btn']").show();  
        $(".remainder-btn").hide();    
    }
    var startTimer = function(){
        console.log(startTimer);
        var numcandc = $(".btn--incomplete");
        // only do this if it has a Complete and Continue Button

        if(numcandc.length==0){
            //hide real C&C button and add fake one
            var fake_btn = '<button  disabled class="remainder-btn brand-color__background brand-color__dynamic-text _button--default--small_142a8m _button--icon-right--small_142a8m" ><div class="_content__wrapper_142a8m"><div class="_content__container_142a8m"><span>Complete &amp; continue</span><i aria-hidden="true" class="toga-icon toga-icon-arrow-right"></i> (<span class="remainder"></span> &nbsp;seconds)</div></div></button>';
            num_seconds_elapsed = 0;
            $("footer").append(fake_btn);          
            $("button[data-qa='complete-continue__btn']").hide();

            if(typeof(window.__candc_timer)=="undefined"){
                // set it and start timer
                window.__candc_timer = setInterval(handleTimerTick, 1000);
            } else {
                // reset
                // cancel previous timer
                stopTimer();
                window.__candc_timer = setInterval(handleTimerTick, 1000);
            }
        }


    }

    if(typeof(CoursePlayerV2) !== 'undefined') {

      CoursePlayerV2.on('hooks:contentDidChange', function(data) {

            stopTimer();
            $(".remainder-btn").hide();
            startTimer();
      });
    }
  });    

