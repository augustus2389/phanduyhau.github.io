const btnSearch = document.querySelector('.search-btn');
const addCart = document.querySelectorAll('.social .add-cart')
const cardJacketEl = document.querySelector('.product-list-jacket');
const cardTshirtEl = document.querySelector('.product-list-tshirt');
const cardPantsEl = document.querySelector('.product-list-pants');

const productJacket = products.filter((p)=>{
  return p.category == "Jacket"
})
const renderCardJacket = (arr) =>{
  cardJacketEl.innerHTML = "";
  let html = "";
  arr.forEach((p)=>{
    html += `<div
    class="col-xl-2_4 col-lg-2_4 .col-xxl-2_4 col-md-4 col-sm-6 col-6"
  >
    <div class="card-item ">
      <div class="card-image position-relative">
         <a href="./detail.html?id=${p.id}"><img src="${p.images[0]}" alt="${p.name}" /></a>
          <ul class="social position-absolute top-50 end-0 translate-middle-y">
            <li><a href=""><i class="fa-solid fa-cart-plus"></i></a></li>
          <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
          </ul>
         <span class="flash-tag position-absolute">${p.tag}</span>  
      </div>
      <div class="card-title">
        <h3>${p.name}</h3>
        <p>${formatMoney(
          p.price
        )}</p>
      </div>
      <button class="btn btn--detail">
        <a href="./detail.html?id=${p.id}">Chi tiết</a>
      </button>
    </div>
  </div>`
  });
  cardJacketEl.innerHTML = html;
}
const productTshirt = products.filter((p)=>{
  return p.category == "Tshirt"
})
const renderCardTshirt = (arr) =>{
  cardTshirtEl.innerHTML = "";
  let html = "";
  arr.forEach((p)=>{
    html += `<div
    class="col-xl-2_4 col-lg-2_4 .col-xxl-2_4 col-md-4 col-sm-6 col-6"
  >
    <div class="card-item ">
      <div class="card-image position-relative">
        <img src="${p.images[0]}" alt="${p.name}" />
          <ul class="social position-absolute top-50 end-0 translate-middle-y">
            <li><a href=""><i class="fa-solid fa-cart-plus"></i></a></li>
          <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
          </ul>
         <span class="flash-tag position-absolute">${p.tag}</span>  
      </div>
      <div class="card-title">
        <h3>${p.name}</h3>
        <p>${formatMoney(
          p.price
        )}</p>
      </div>
      <button class="btn btn--detail">
        <a href="./detail.html?id=${p.id}">Chi tiết</a>
      </button>
    </div>
  </div>`
  });
  cardTshirtEl.innerHTML = html;
}
const productPants = products.filter((p)=>{
  return p.category == "Pants"
})
const renderCardPants = (arr) =>{
  cardPantsEl.innerHTML = "";
  let html = "";
  arr.forEach((p)=>{
    html += `<div
    class="col-xl-2_4 col-lg-2_4 .col-xxl-2_4 col-md-4 col-sm-6 col-6"
  >
    <div class="card-item ">
      <div class="card-image position-relative">
        <img src="${p.images[0]}" alt="${p.name}" />
          <ul class="social position-absolute top-50 end-0 translate-middle-y">
            <li><a href=""><i class="fa-solid fa-cart-plus"></i></a></li>
          <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
          </ul>
         <span class="flash-tag position-absolute">${p.tag}</span>  
      </div>
      <div class="card-title">
        <h3>${p.name}</h3>
        <p>${formatMoney(
          p.price
        )}</p>
      </div>
      <button class="btn btn--detail">
        <a href="./detail.html?id=${p.id}">Chi tiết</a>
      </button>
    </div>
  </div>`
  });
  cardPantsEl.innerHTML = html;
}
const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
renderCardPants(productPants)
renderCardJacket(productJacket);
renderCardTshirt(productTshirt)





















$('#navbarDropdown').click(function() {
  $('.dropdown-menu').slideToggle(300, "linear");
});

$('.dropdown-menu').mouseleave(function() {
  $(this).slideToggle(300, "linear");
});


btnSearch.addEventListener('click',function(){
  this.parentElement.classList.toggle('open');
  this.previousElementSibling.focus();
})





$(".shopping-cart").click(function(){
  $(".cart").css("right","0");
  $("#overlay").css("display", "block");
})
$(".close-cart").click(function(){
  $(".cart").css("right","-450px");
  $("#overlay").css("display", "none");
})
$("#overlay").click(function () {
  $(".cart").css("right", "-450px");
  $("#overlay").css("display", "none");
});

$(".menu-icon").click(function () {
  $(".menu ul").css("left", "0");
  $("#overlay").css("display", "block");
});

$("#overlay").click(function () {
  $(".menu ul").css("left", "-250px");
  $("#overlay").css("display", "none");
});
$(window).resize(() => {
  if ($(window).innerWidth() > 768) {
    $(".menu ul").css("left", "-250px");
    $("#overlay").css("display", "none");
  }
});
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

$(".image-mini").slick({
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow:3,
  centerMode:true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerPadding: "40px",
      },
    },
  ],
});

$(".suggest-content").slick({
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true,
  slidesToShow: 3,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerPadding: "40px",
      },
    },
  ],
});

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



$(function () {
  var url = window.location.href;
  $(".nav  a").each(function () {
    if (url == this.href) {
      $(this).closest("li").addClass("active");
    }
  });
});

const BtnCoppyRight = document.querySelectorAll(".btn-test");
Array.from(BtnCoppyRight).forEach((btn)=>{
  btn.addEventListener("click",()=>{
    // lọc những btn có đã sao chép thành sao chép mã
    Array.from(BtnCoppyRight).forEach((btn)=>{
      if(btn.innerHTML.includes("Đã")){
        btn.innerHTML = "Sao chép mã";
      }
    })
    navigator.clipboard.writeText(btn.dataset.disscount);
    // gán lại cho btn 
    btn.innerHTML = "Đã chép mã";
  })
})


$(document).ready(function() {
  $('.navbar a.dropdown-toggle').on('click', function(e) {
     var $el = $(this);
     var $parent = $(this).offsetParent(".dropdown-menu");
     $(this).parent("li").toggleClass('open');
     if(!$parent.parent().hasClass('menu')) {
          $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
     }
     $('.nav li.open').not($(this).parents("li")).removeClass("open");
     return false;
    });
});





