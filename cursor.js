$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
});


setInterval(function(){
    var $one = $("#differenceone");
    var $two = $("#differencetwo");
    var $three = $("#differencethree");
    var $four = $("#differencefour");
    var $five = $("#differencefive");
    var $six = $("#differencesix");
    var $seven = $("#differenceseven");
    var $eight = $("#differenceight");
    var $nine = $("#differencenine");
    var $ten = $("#difference10");
    var $eleven = $("#difference11");
    var $twelve = $("#difference12");
    var $thirteen = $("#difference13");
    var $fourteen = $("#difference14");
    var $fifteen = $("#difference15");
    var $sixteen = $("#difference16");
    var $seventeen = $("#difference17");
    var $eighteen = $("#difference18");
    var $nineteen = $("#difference19");
    var $twenty = $("#difference20");
    var $twentyone = $("#difference21");
    var $twentytwo = $("#difference22");
    var $twentythree = $("#difference23");
    var $twentyfour = $("#difference24");
    var $twentyfive = $("#difference25");
    var $twentysix = $("#difference26");
    var $twentyseven = $("#difference27");
    var $twentyeight = $("#difference28");


    var $circular = $("#circularcursor");
    if($one.is(":hover") || $two.is(":hover") || $three.is(":hover") || $four.is(":hover") || $five.is(":hover") || $six.is(":hover") || $seven.is(":hover") || $eight.is(":hover") || $nine.is(":hover") || $ten.is(":hover")|| $eleven.is(":hover") || $twelve.is(":hover") || $thirteen.is(":hover") || $fourteen.is(":hover") || $fifteen.is(":hover") || $sixteen.is(":hover") || $seventeen.is(":hover") || $eighteen.is(":hover") || $nineteen.is(":hover") || $twenty.is(":hover") || $twentyone.is(":hover") || $twentytwo.is(":hover") || $twentythree.is(":hover") || $twentyfour.is(":hover") || $twentyfive.is(":hover") || $twentysix.is(":hover") || $twentyseven.is(":hover") || $twentyeight.is(":hover")) {
       $circular.css("background-color", "white");
       $circular.css("background-blend-mode", "difference");
       $circular.css("width", "50px");
       $circular.css("height", "50px");
       $circular.css("transition-duration", "0.3s");
       $circular.css("transition-property", "width, height, transform, background");
    }
    else {
       $circular.css("background", "");
       $circular.css("width", "25px");
       $circular.css("height", "25px");
       $circular.css("transition-duration", "0.5s");
       $circular.css("transition-property", "width, height, transform, background");
    }
}, 200);
