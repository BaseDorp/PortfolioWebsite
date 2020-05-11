$(document).ready(function()
{
  // TODO doesnt animate fade in and out on first click

    $(".submit-button").click(function()
    {
        $(".modal").toggle().animate({
            opacity: "1",
          }, 200)
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