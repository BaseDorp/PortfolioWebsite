$(document).ready(function()
{
    $(".submit-button").click(function()
    {
        $(".modal").toggle().animate({
            opacity: "1",
          }, 1000)
    });

    
    $(".modal-background").click(function(){
        console.log("bruh clicked");
        $(".modal").toggle().css("opacity", "0");
      })
      
      $(".modal-close").click(function(){
          console.log("bruh clicked two");
        $(".modal").toggle().css("opacity", "0");
      })
    
})