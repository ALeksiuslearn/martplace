$(function () {
  $(".weekly__items").slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/weekly/icons/chevron-right.png"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="../images/weekly/icons/chevron-left.png" alt="prev arrow"></button>',
    dots: false,
  });
  $(".followers-feed__items").slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/weekly/icons/chevron-right.png"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="../images/weekly/icons/chevron-left.png" alt="prev arrow"></button>',
    dots: false,
    slidesToShow: 3,
  });
  $(function () {
    $(".panel-rating").rateYo({
      starWidth: "15px",
      rating: 4.5,
      readOnly: true,
      normalFill: "#ffc000",
      spacing: "3px",
    });
  });
  var mixer = mixitup(".product__items");
});
