$(".image-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  