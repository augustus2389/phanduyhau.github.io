const sizeEl = document.querySelector(".product-size");
const descriptionEl = document.querySelector(".product-description");
const productSizeEl = document.querySelector(".product-size");
const btnMinusCount = document.querySelector(".btn-minus-count");
const btnPlusCount = document.querySelector(".btn-plus-count");
const countEl = document.querySelector(".count");
const btnAddToCart = document.querySelector(".btn-add-to-cart");
const imgMain = document.querySelector(".slider-for")
const imgSub = document.querySelector(".slider-nav")
const btnSearch = document.querySelector('.search-btn');
const addCart = document.querySelectorAll('.social .add-cart')


// let product;
// let count = 1;
// const renderProduct = obj => {
//   nameEl.innerText = obj.name;
//   priceEl.innerText = formatMoney(obj.price);
//   descriptionEl.innerText = obj.description; 
//   productSizeEl.innerHTML = product.sizes.map(size => {
//       return `<span class="border py-2 px-3 border-dark me-2" onclick="choseSize(this)">${size}</span>`
//   }).join("");
// }
// const choseSize = ele => {

// const selectedEl = document.querySelector(".selected");
//   if(selectedEl) {
//       selectedEl.classList.remove("selected", "bg-dark", "text-white");
//   }
// }
// renderProduct(product)

// const renderMainImg = (arr) => {
//   imgMain.innerHTML = "";
//   let html = "";
//   arr.forEach((img) => {
//     html+= `div>
//     <img src="${img}" alt="">
// </div>`
//   });
//   imgMain.innerHTML = html
// }
// renderMainImg(product.images)

// const renderSubImg = (arr) => {
//   imgSub.innerHTML = "";
//   let html = "";
//   arr.forEach((img) =>{
//     html+=`li>
//     <img src="${img}" alt="" width="100%">
// </li>`
//   })
//   imgSub.innerHTML = html;
// }
// renderSubImg(product.images)


// // Tăng số lượng
// btnPlusCount.addEventListener("click", () => {
//   count++;
//   countEl.innerText = count;
// })

// // Giảm số lượng
// btnMinusCount.addEventListener("click", () => {
//   count--;
//   if (count < 1) {
//       count = 1;
//   }
//   countEl.innerText = count;
// })

// Thêm vào giỏ hàng
// btnAddToCart.addEventListener("click", () => {
//   // Kiểm tra xem đã chọn size hay chưa
//   const sizeSelectedEl = document.querySelector(".product-size .selected");
//   if (!sizeSelectedEl) {
//       alert("Vui lòng chọn size trước khi thêm vào giỏ hàng");
//       return;
//   }
//   let item = {
//     id: product.id,
//     name: product.name,
//     price: product.price,
//     image: product.images[0],
//     count: count,
//     size: sizeSelectedEl.innerText,
// }

// Thêm vào giỏ hàng
// addItemToAdd(item);
// alert("Thêm vào giỏ hàng thành công");
// })

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







$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots:true,
    asNavFor: '.slider-nav',
    prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
  });
  
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,

    asNavFor: '.slider-for',
    focusOnSelect: true,
    arrows:false,
  });


