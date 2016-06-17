$(document).ready(function () {
    $(".photo-list > h1:nth-child(1) > a").click(function () {
        $(".event, .misc, .photoj, .portrait").hide();
        $(".sports").show();
    });
    
    $(".photo-list > h1:nth-child(2) > a").click(function () {
        $(".sports, .misc, .photoj, .portrait").hide();
        $(".event").show();
    });
    
    $(".photo-list > h1:nth-child(3) > a").click(function () {
        $(".sports, .misc, .photoj, .event").hide();
        $(".portrait").show();
    });
    
    $(".photo-list > h1:nth-child(4) > a").click(function () {
        $(".event, .misc, .sports, .portrait").hide();
        $(".photoj").show();
    });
    
    $(".photo-list > h1:nth-child(5) > a").click(function () {
        $(".event, .sports, .photoj, .portrait").hide();
        $(".misc").show();
    });
    

});