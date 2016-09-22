$(document).foundation()

$(document).ready(init);

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
}