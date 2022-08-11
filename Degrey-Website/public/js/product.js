const btnSearch = document.querySelector('.search-btn');
const addCart = document.querySelectorAll('.social .add-cart')
const productList = document.querySelector('.product-list')


const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
const renderCard = (arr) => {
  productList.innerHTML = "";
  let html = "";
  arr.forEach((p) => {
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
  productList.innerHTML = html;
}
renderCard(products)






const filterPrices = document.querySelectorAll(".giaTien")
let productFilterPrice = []

function filterPrice(price1, price2) {
  let productFilterTrue;
  if(!price2) {
    productFilterTrue = products.filter((p) => p.price >= price1);
  } else {
    productFilterTrue = products.filter((p) => p.price > price1 && p.price < price2);
  }

  renderCard(productFilterTrue)
  // productFilterPrice = productFilterPrice.push(productFilterTrue)
  // renderCard(productFilterPrice)
}

// Array.from(filterPrices).forEach((input) =>{
//   input.addEventListener("change",(e) =>{
//     let inputValue = e.target.value
//     console.log(inputValue)
//     if(e.target.checked == true){
//       let productFilterTrue = products.filter((p) =>{
//         console.log(p.price)

//         return p.price == inputValue;
//       })
//       productFilterPrice = productFilterPrice.concat(productFilterTrue)
//       renderCard(productFilterPrice)
//     } else{
//       productFilterPrice = productFilterPrice.filter((p) =>{
//         return p.price != inputValue
//       })
//       renderCard(productFilterPrice)
//     }
//   })
// })













// Hiển thị bộ lọc
$(".icon-filter").click(function () {
  $(".product-filter").css("right", "0");
  $("#overlay").css("display", "block");
});
$(".close-cart").click(function(){
  $(".product-filter ").css("right","-450px");
  $("#overlay").css("display", "none");
})
$("#overlay").click(function () {
  $(".product-filter").css("right", "-250px");
  $("#overlay").css("display", "none");
});

$("#overlay").click(function () { 
  $("body").css("overflow-y", "scroll");
});
$(window).resize(() => {
  if ($(window).innerWidth() > 768) {
    $(".product-filter").css("right", "-250px");
    $("#overlay").css("display", "none");
  }
});
// Hiện thị giỏ hàng
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

// Hiện thị menu c2
$('#navbarDropdown').click(function() {
  $('.dropdown-menu').slideToggle(300, "linear");
});

$('.dropdown-menu').mouseleave(function() {
  $(this).slideToggle(300, "linear");
});
$(function () {
  var url = window.location.href;
  $(".nav  a").each(function () {
    if (url == this.href) {
      $(this).closest("li").addClass("active");
    }
  });
});



// Nút search
btnSearch.addEventListener('click',function(){
  this.parentElement.classList.toggle('open');
  this.previousElementSibling.focus();
})

// Hiện ra menu
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
  //   $('.navbar a.dropdown-toggle').on('click', function(e) {
//      var $el = $(this);
//      var $parent = $(this).offsetParent(".dropdown-menu");
//      $(this).parent("li").toggleClass('open');
//      if(!$parent.parent().hasClass('menu')) {
//           $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
//      }
//      $('.nav li.open').not($(this).parents("li")).removeClass("open");
//      return false;
//     });
// ;
