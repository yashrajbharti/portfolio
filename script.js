// variables
var $header_top = $(".header-top");
var $nav = $("nav");

// toggle menu
$header_top.find("a").on("click", function () {
  $(this).parent().toggleClass("open-menu");
});

// fullpage customization
$("#fullpage").fullpage({
  sectionsColor: ["#101414", "#3F8F74", "#c3c2c2", "#000303"],
  sectionSelector: ".vertical-scrolling",
  slideSelector: ".horizontal-scrolling",
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ["home", "about", "portfolio", "contact"],
  menu: "#menu",

  afterLoad: function (anchorLink, index) {
    $header_top.css("background", "rgba(0, 47, 77, .0)");
    $nav.css("background", "rgba(0, 47, 77, .0)");
    if (index == 5) {
      $("#fp-nav").hide();
    }
    if (index == 2) {
      const showAll = document.querySelectorAll(".num");
      showAll.forEach((show) => {
        const number = parseInt(show.textContent) + 1;
        let counter = 0,
          delay = parseInt(6000 / parseInt(show.textContent));
        counter_js(delay, show, counter, number);
      });
      function counter_js(delay, show, counter, number) {
        show.innerHTML = counter.toString();
        counter++;
        if (counter < number) {
          setTimeout(function () {
            counter_js(delay, show, counter, number);
          }, delay);
        }
      }
    }
    if (index == 3) {
      $("#demonstrate").addClass("add_keyframe");
      $("#demonstrate2").addClass("add_keyframe");
      $("#demonstrate3").addClass("add_keyframe");
      $("#demonstrate14").addClass("up_keyframe1");
      $("#demonstrate15").addClass("up_keyframe1");
      $("#demonstrate16").addClass("add_keyframe2");
      $("#demonstrate17").addClass("add_keyframe2");
      $("#demonstrate18").addClass("add_keyframe2");
      $("#demonstrate19").addClass("button_keyframe");
      $("#demonstrate20").addClass("button_keyframe");
      $("#demonstrate21").addClass("button_keyframe");
      $("#demonstrate22").addClass("img_keyframe");
      $("#demonstrate23").addClass("img_keyframe");
      $("#demonstrate24").addClass("img_keyframe");
    }
    if (index == 1) {
      $("#demonstrate4").addClass("left_keyframe");
      $("#demonstrate5").addClass("right_keyframe");
      $("#demonstrate6").addClass("left_keyframe2");
      $("#demonstrate7").addClass("up_keyframe0");
      $("#demonstrate8").addClass("button_keyframe");
    }
    if (index == 2) {
      $("#demonstrate9").addClass("up_keyframe1");
      $("#demonstrate10").addClass("up_keyframe1");
      $("#demonstrate11").addClass("left_keyframe3");
      $("#demonstrate12").addClass("right_keyframe");
      $("#demonstrate13").addClass("button_keyframe");
    }
    if (index == 4) {
      $("#demonstrate25").addClass("up_keyframe1");
      $("#demonstrate26").addClass("up_keyframe1");
      $("#demonstrate27").addClass("button_keyframe");
      $("#demonstrate28").addClass("left_keyframe4");
      $("#demonstrate29").addClass("left_keyframe4");
      $("#demonstrate30").addClass("left_keyframe4");
      $("#demonstrate31").addClass("right_keyframe4");
    }
  },
  onLeave: function (index, nextIndex, direction) {
    if (index == 5) {
      $("#fp-nav").show();
    }
    if (index == 3) {
      setTimeout(function () {
        $("#demonstrate").removeClass("add_keyframe");
        $("#demonstrate2").removeClass("add_keyframe");
        $("#demonstrate3").removeClass("add_keyframe");
        $("#demonstrate14").removeClass("up_keyframe1");
        $("#demonstrate15").removeClass("up_keyframe1");
        $("#demonstrate16").removeClass("add_keyframe2");
        $("#demonstrate17").removeClass("add_keyframe2");
        $("#demonstrate18").removeClass("add_keyframe2");
        $("#demonstrate19").removeClass("button_keyframe");
        $("#demonstrate20").removeClass("button_keyframe");
        $("#demonstrate21").removeClass("button_keyframe");
        $("#demonstrate22").removeClass("img_keyframe");
        $("#demonstrate23").removeClass("img_keyframe");
        $("#demonstrate24").removeClass("img_keyframe");
      }, 800);
    }
    if (index == 1) {
      setTimeout(function () {
        $("#demonstrate4").removeClass("left_keyframe");
        $("#demonstrate5").removeClass("right_keyframe");
        $("#demonstrate6").removeClass("left_keyframe2");
        $("#demonstrate7").removeClass("up_keyframe0");
        $("#demonstrate8").removeClass("button_keyframe");
      }, 800);
    }

    if (index == 2) {
      setTimeout(function () {
        $("#demonstrate9").removeClass("up_keyframe1");
        $("#demonstrate10").removeClass("up_keyframe1");
        $("#demonstrate11").removeClass("left_keyframe3");
        $("#demonstrate12").removeClass("right_keyframe");
        $("#demonstrate13").removeClass("button_keyframe");
      }, 800);
    }
    if (index == 4) {
      setTimeout(function () {
        $("#demonstrate25").removeClass("up_keyframe1");
        $("#demonstrate26").removeClass("up_keyframe1");
        $("#demonstrate27").removeClass("button_keyframe");
        $("#demonstrate28").removeClass("left_keyframe4");
        $("#demonstrate29").removeClass("left_keyframe4");
        $("#demonstrate30").removeClass("left_keyframe4");
        $("#demonstrate31").removeClass("right_keyframe4");
      }, 800);
    }
  },

  afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    if (anchorLink == "fifthSection" && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, "up");
      $header_top.css("background", "transparent");
      $nav.css("background", "transparent");
      $(this).css("background", "#374140");
      $(this).find("h2").css("color", "white");
      $(this).find("h3").css("color", "white");
      $(this).find("p").css({
        color: "#DC3522",
        opacity: 1,
        transform: "translateY(0)",
      });
    }
  },

  onSlideLeave: function (anchorLink, index, slideIndex, direction) {
    if (anchorLink == "fifthSection" && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, "up");
      $header_top.css("background", "rgba(0, 47, 77, .3)");
      $nav.css("background", "rgba(0, 47, 77, .25)");
    }
  },
});
