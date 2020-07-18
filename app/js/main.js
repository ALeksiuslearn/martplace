$(function () {
  $(".weekly__items").slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/weekly/icons/chevron-right.png"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev lnr-chevron-left"><img src="images/weekly/icons/chevron-left.png" alt="prev arrow"></button>',
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
  $(".clients-feedback__items").slick({
    nextArrow: '<button class="slick-arrow chevr-right"></button>',
    prevArrow: '<button class="slick-arrow chevr-left"></button>',
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  });
  $(function () {
    $(".panel-rating").rateYo({
      starWidth: "15px",
      // rating: 4.5,
      normalFill: "#A0A0A0",
      readOnly: true,

      spacing: "3px",
    });
  });

  $(".categories__top-new_products").on("click", function () {
    $(".categories__top-new_products").addClass("active");
    $(".categories__top-popular_products").removeClass("active");
  });

  $(".categories__top-popular_products").on("click", function () {
    $(".categories__top-popular_products").addClass("active");
    $(".categories__top-new_products").removeClass("active");
  });

  if ($(".product__items").length) {
    var mixer = mixitup(".product__items");
  }
  // if ($(".categories__items").length) {
  //   var mixer = mixitup(".categories__items");
  // }

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    prefix: "$",
    // grid: true,
  });

  // var $filterSelect = $("#FilterSelect"),
  //   $sortSelect = $("#SortSelect"),
  //   $container = $(".categories__items");

  // $container.mixItUp();

  // $filterSelect.on("change", function () {
  //   $container.mixItUp("filter", this.value);
  // });

  // $sortSelect.on("change", function () {
  //   $container.mixItUp("sort", this.value);
  // });
});
