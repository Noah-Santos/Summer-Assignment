$(function(){
    // when burger is clicked, open nav
    $("#burger").click(function(){
        $(".nav").animate({width: "28%"}, 300).delay(50).promise().done(function(){
            $(".x").css("display", "block");
            $(".navLink").css("display", "flex");
        });
    });

    // when x is clicked, close nav
    $(".x").click(function(){
        $(".x").css("display", "none");
        $(".navLink").css("display", "none");
        $(".nav").animate({width: "0%"}, 300);
    });
})