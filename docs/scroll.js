$(document).ready(function(){
  
    // function from https://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win

    $(window).scroll(function() 
    {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".element-container").each(function() 
        {
          /* Check the location of each desired element */
          let objectBottom = $(this).offset().top + $(this).outerHeight();
          let objectTop = $(this).offset().top;
          
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom-100 < windowBottom) 
          { 
            //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) 
            {
                $(this).fadeTo(500,1);
            }
          } 
          else 
          { 
            //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) 
            {
                $(this).fadeTo(500,0);
            }
          }
/*
          // objects disappear when scrolling past them
          if (objectTop+100 > windowBottom)
          {
            if ($(this).css("opacity")==0) 
            {
                $(this).fadeTo(500,1);
            }
          }
          else
          {
            if ($(this).css("opacity")==1) 
            {
                $(this).fadeTo(500,0);
            }
          }
          */
        });
      }).scroll(); //invoke scroll-handler on page-load
    
    
});