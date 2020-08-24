// ================= SLIDERS STYLES ==================== //
// ===================================================== //

$(document).ready(function () {
   $('.aside__slider-wrapper').slick({
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
      fade: true,
   });
});

$(document).ready(function () {
   $('.main__slider').slick({
      autoplay: true,
      arrows: false,
      autoplaySpeed: 4000,
      fade: true,
   });
});


// ================= MAIN TABS PRODUCT ================= //
// ===================================================== //

$('.tab').on('click', function (e) {
   e.preventDefault();

   $($(this).siblings()).removeClass('tab--active');
   $($(this).parent().siblings().find('div')).removeClass('tab-content--active');

   $(this).addClass('tab--active');
   $($(this).attr('href')).addClass('tab-content--active');
});


// ==================== MOBILE MENU ==================== //
// ===================================================== //

$('.aside--ticket').on('click', function(){
   $('.aside').toggleClass('aside--open');
   $('.ion-icon--aside').toggleClass('ion-icon--rotate');
   $('.main').toggleClass('op-0');
});




















//  ===================================================== // 



// $(function () {

//    // ===== BANNER LARGE ===== //
//    $('.bannerLarge__slider').slick({
//       dots: false,
//       prevArrow: '<button class="slider-btn btn-prev"><img src="icons/ionicons/chevron-back.svg" alt="icon"></button>',
//       nextArrow: '<button class="slider-btn btn-next"><img src="icons/ionicons/chevron-forward.svg" alt="icon"></button>',

//       // responsive: [{
//       //    breakpoint: 969,
//       //    settings: {
//       //       arrows: false
//       //    }
//       // }]
//    });


//    // ===== TABS SEARCH ===== //
//    $('.tab').on('click', function (e) {
//       e.preventDefault();

//       $($(this).siblings()).removeClass('tab--active');
//       $($(this).parent().siblings().find('div')).removeClass('tab__content--active');

//       $(this).addClass('tab--active');
//       $($(this).attr('href')).addClass('tab__content--active');

//       $('.bannerLarge__slider').slick('setPosition');
//       $('.productPopular__slider').slick('setPosition');
//    });


//    // ===== ICON FAVORIT CARD PRODUCT ===== //
//    $('.сard__product-top_favorit').on('click', function () {
//       $(this).toggleClass('card__favorite--active');
//    });


//    // ===== CARD PRODUCT SLIDER ===== //
//    $('.productPopular__slider').slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       prevArrow: '<button class="slider-btn btn-prev_pp"><img src="icons/ionicons/chevron-back_black.svg" alt="icon"></button>',
//       nextArrow: '<button class="slider-btn btn-next_pp"><img src="icons/ionicons/chevron-forward_black.svg" alt="icon"></button>',
//    });

//    // ===== TABS PRODUCT POPULAR ===== //
//    $('.tab').on('click', function (e) {
//       e.preventDefault();

//       $($(this).siblings()).removeClass('tab--active');
//       $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

//       $(this).addClass('tab--active');
//       $($(this).attr('href')).addClass('tabs-content--active');

//       $('.productPopular__slider').slick('setPosition');
//       $('.productConvoy__slider').slick('setPosition');
//    });


//    // ===== PRODUCT CONVOY SLIDER ===== //
//    $('.productConvoy__slider').slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       prevArrow: '<button class="slider-btn btn-prev_pc"><img src="icons/ionicons/chevron-back_black.svg" alt="icon"></button>',
//       nextArrow: '<button class="slider-btn btn-next_pc"><img src="icons/ionicons/chevron-forward_black.svg" alt="icon"></button>',
//    });

//    // ===== DROP STYLES ===== //
//    // $('.filter-style').styler();

//    $('.catalog__item-drop').on('click', function () {
//       $(this).toggleClass('catalog__item-drop--active');
//       $(this).next().slideToggle();
//    });

//    // ===== Range Slider ===== //
//    $(".js-range-slider").ionRangeSlider({
//       from: 10000,
//       to: 50000,
//       step: 10000
//    });

//    // Grid or Line Product
//    $('.catalog__filter-btngrid').on('click', function () {
//       $(this).addClass('catalog__filter-button--active');
//       $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
//       $('.сard__product').removeClass('сard__product--list');

//    });

//    $('.catalog__filter-btnline').on('click', function () {
//       $(this).addClass('catalog__filter-button--active');
//       $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
//       $('.сard__product').addClass('сard__product--list');
//    });

//    // Star Rating
//    $('.rateYo').rateYo({
//       rating: 4,
//       ratedFill: "#1C62CD",
//       normalFill: "#C4C4C4",
//       fullStar: true,
//       readOnly: true,
//       spacing: "7px"
//    });

//    // ===== PRODUCT CONVOY PRODUCT CARD SLIDER ===== //
//    $('.productConvoy__page-slider').slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       arrows: false,
//       // prevArrow: '<button class="slider-btn btn-prev_pc"><img src="../icons/ionicons/chevron-back_black.svg" alt="icon"></button>',
//       // nextArrow: '<button class="slider-btn btn-next_pc"><img src="../icons/ionicons/chevron-forward_black.svg" alt="icon"></button>',
//    });


// });