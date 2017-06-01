$(document).ready(function () {
    $(".photo-list > h3:nth-child(1)").click(function () {
        $(".event, .misc, .photoj, .portrait").hide();
        $(".sports").show();
    });
    
    $(".photo-list > h3:nth-child(2)").click(function () {
        $(".sports, .misc, .photoj, .portrait").hide();
        $(".event").show();
    });
    
    $(".photo-list > h3:nth-child(3)").click(function () {
        $(".sports, .misc, .photoj, .event").hide();
        $(".portrait").show();
    });
    
    $(".photo-list > h3:nth-child(4)").click(function () {
        $(".event, .misc, .sports, .portrait").hide();
        $(".photoj").show();
    });
    
    $(".photo-list > h3:nth-child(5)").click(function () {
        $(".event, .sports, .photoj, .portrait").hide();
        $(".misc").show();
    });
    

});