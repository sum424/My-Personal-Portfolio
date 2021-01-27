$(document).ready(function() {
   /*  $(".burger-nav").on("click", function() {
        $(".navbar ul").toggleClass("open");
    }); */
    //hamburger menu
    var width = $(window).width();
    if(width <= 420) {
        $(".navbar").click(function() {
            $(".icon").toggleClass("close");
            $(".navbar ul").toggleClass("ul-disp").slideToggle(500);
        });
    }
    if(width >420) {
        $(".icon").removeClass("close");
        $(".navbar ul").removeClass("ul-disp");
    }

})