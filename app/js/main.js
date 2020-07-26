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

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    prefix: "$",
    // grid: true,
  });

  // var $filterSelect = $("#amountselect"),
  //   $sortSelect = $("#sortselect"),
  //   $container = $(".categories__items");

  // $container.mixItUp();

  // $filterSelect.on("change", function () {
  //   $container.mixItUp("filter", this.value);
  // });

  // $sortSelect.on("change", function () {
  //   $container.mixItUp("sort", this.value);
  // });
  if ($(".categories__items").length) {
    var mixer = mixitup(".categories__items");
  }

  $(".icon-grid1").on("click", function () {
    $(".icon-grid1").addClass("active");
    $(".lnr-list").removeClass("active");
    $(".product__item.categories__item").removeClass("list");
  });

  $(".lnr-list").on("click", function () {
    $(".product__item.categories__item").addClass("list");
    $(".lnr-list").addClass("active");
    $(".icon-grid1").removeClass("active");
  });

  $(".category-title").on("click", function () {
    $(".categories-name").toggleClass("active");
  });
  $(".filter-title").on("click", function () {
    $(".filter-products").toggleClass("open");
  });
  $(".price_range-title").on("click", function () {
    $(".price_range-products").toggleClass("open");
  });
  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });
  $(".user__ico").on("click", function () {
    $(".header__notification").toggleClass("active");
  });
  $(".user__ico").on("click", function () {
    $(".account__box").toggleClass("active");
  });
  $(".tabs__wrapper .tab").on("click", function (event) {
    var id = $(this).attr("data-id");
    $(".tabs__wrapper").find(".tab-item").removeClass("active-tab").hide();
    $(".tabs__wrapper .tabs").find(".tab").removeClass("active");
    $(this).addClass("active");
    $("#" + id)
      .addClass("active-tab")
      .fadeIn();
    return false;
  });
  $("input, select, radio").styler();
});
