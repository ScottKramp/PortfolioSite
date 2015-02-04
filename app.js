/* Fade In Header Name
var main = function () {
    $('.Teacher').click(function () {
        $('.Teacher').fadeOut(600);
        $('.Student').delay(600).fadeIn(600);
    });
};
 */

/* var main = function () {
    $('.Name').fadeIn(600);
    $('.JobTitle').fadeIn(700);
});

$(document).ready(main) */

$(document).ready(function(){
    $(".Name").hide(0).delay(500).fadeIn(700);
    $(".JobTitle").hide(0).delay(500).fadeIn(1400);
    $(".arrowSet").hide(0).delay(500).fadeIn(1900);
    $(".SkillWork").hide(0);
    $(".aswContainer").hide(0);
    $('.centImage').hide(0);
    $(".Explore").hide(0).delay(500).fadeIn(1900).click(function(){
        $('.Explore').delay(5000).css({'border-color': '#efefef'}, 6000);
        $('.Explore').delay(5000).css({'border-color': '#ffffff'}, 6000);
        $('.SkillWork').hide(0).delay(500).fadeIn(4000);
            if ($(window).width() > 1000) {
        $('body').scrollTo(1000);
        $('.arrowStem1').animate({height: "800px"}, 750);
        $('.arrowStem2').animate({height: "1000px"}, 750);
        $('.arrowStem3').animate({height: "800px"}, 750);
        $('.arrowStem1-2').delay(750).animate({width: "150px"}, 750);
        $('.arrowStem3-2').delay(750).animate({width: "150px"}, 750);
            } else { 
        $('body').scrollTo(700);
        $('.arrowStem1').animate({height: "390px"}, 750);
        $('.arrowStem2').animate({height: "750px"}, 750);
        $('.arrowStem3').animate({height: "390px"}, 750);
        $('.aswContainer').fadeIn(4000);
        $('.arrowStem1').fadeOut(4000);
        $('.arrowStem2').fadeOut(4000);
        $('.arrowStem3').fadeOut(4000);
        $('.centImage').fadeIn(4000);
            };
    });
});


