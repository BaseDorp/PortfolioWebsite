$(document).ready(function(){
  
    $(window).scroll(function(){
      if($(window).scrollTop() > 1000) {
        $(".fadeInUp animated").show().animate({
          opacity: "1"
        }, 1000)
      }
    })
    
    
    
  })