$(document).foundation()

$(document).ready(init);

var $window;
var $fixedMarker;
var $sidepanel;

function init() {
  $('#mobilemenuopen, #mobilemenuclose').on('touchstart click', function (e) {
    e.preventDefault();
    $('#primarynav').fadeToggle();
  });

  $('.tom-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  $window = $(window);
  $fixedMarker = $("#sidepanel-marker");
  $sidepanel = $("#sidepanel");

  if ($fixedMarker.length && $sidepanel.length) {
    $window.on('scroll', function() {
      checkScroll();
    });
  }
  checkScroll();
}

function checkScroll() {
  if ($window.scrollTop() > $fixedMarker.position().top) {
    $sidepanel.addClass("fixed-threshold").removeClass("not-fixed").outerWidth($fixedMarker.width());
  } else {
    $sidepanel.addClass("not-fixed").removeClass("fixed-threshold").removeAttr('style');
  }
}
