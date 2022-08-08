const breadcrumbItemActive = document.querySelector(".breadcrumb-item.active");
const sizeEl = document.querySelector(".product-size");
const priceEl = document.querySelector(".product-price");
const descriptionImg = document.querySelector(".description-image")
const descriptionEl = document.querySelector(".product-description");
const productSizeEl = document.querySelector(".product-size");
const nameEl = document.querySelector(".product-name");
const btnMinusCount = document.querySelector(".btn-minus-count");
const btnPlusCount = document.querySelector(".btn-plus-count");
const countEl = document.querySelector(".count");
const btnAddToCart = document.querySelector(".btn-add-to-cart");
const imgMain = document.querySelector(".slider-for");
const imgSub = document.querySelector(".slider-nav");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

let product;
let count = 1;
// Kiểm tra Id
if (id) {
  product = products.find((p) => p.id == id);

  if (!product) {
    window.location.href = "./404.html";
  }

  document.title = product.name;
  breadcrumbItemActive.innerText = product.name;
} else {
  window.location.href = "./404.html";
}
//Format Tiền
const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

const renderProduct = (obj) => {
  nameEl.innerText = obj.name;
  priceEl.innerText = formatMoney(obj.price);
  descriptionEl.innerText = obj.description;
  productSizeEl.innerHTML = product.sizes
    .map((size) => {
      return `<span class="border py-2 px-3 border-dark me-2" onclick="choseSize(this)">${size}</span>`;
    })
    .join("");
};
const choseSize = (ele) => {
  const sizeEls = document.querySelectorAll(".product-size span");
  Array.from(sizeEls).map((size) =>
    size.classList.remove("selected", "bg-dark", "text-white")
  );

  ele.classList.add("selected", "bg-dark", "text-white");
};
renderProduct(product);

const renderMainImg = (arr) => {
  imgMain.innerHTML = "";
  let html = "";
  arr.forEach((img) => {
    html += `
    <img src="${img}" alt="">
`;
  });
  imgMain.innerHTML = html;
};
renderMainImg(product.images);

const renderSubImg = (arr) => {
  imgSub.innerHTML = "";
  let html = "";
  arr.forEach((img) => {
    html += `
    <img src="${img}" alt="" width="100%">
`;
  });
  imgSub.innerHTML = html;
};
renderSubImg(product.images);

const renderDescriptionImg = (arr) => {
  descriptionImg.innerHTML = "";
  let html = "";
  arr.forEach((img) => {
    html+= `<img src="${p.description_image}" alt="">`
  })
}
// Tăng số lượng
btnPlusCount.addEventListener("click", () => {
  count++;
  countEl.innerText = count;
});
// Giảm số lượng
btnMinusCount.addEventListener("click", () => {
  count--;
  if (count < 1) {
    count = 1;
  }
  countEl.innerText = count;
});

// Thêm vào giỏ hàng
btnAddToCart.addEventListener("click", () => {
  // Kiểm tra xem đã chọn size hay chưa
  const sizeSelectedEl = document.querySelector(".product-size .selected");
  if (!sizeSelectedEl) {
    alert("Vui lòng chọn size trước khi thêm vào giỏ hàng");
    return;
  }
  let item = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    count: count,
    size: sizeSelectedEl.innerText,
  };

  renderProduct(product);
  // Thêm vào giỏ hàng
  addItemToAdd(item);
  alert("Thêm vào giỏ hàng thành công");
});

// Hiện thị giỏ hàng
$(".shopping-cart").click(function () {
  $(".cart").css("right", "0");
  $("#overlay").css("display", "block");
});
$(".close-cart").click(function () {
  $(".cart").css("right", "-450px");
  $("#overlay").css("display", "none");
});
$("#overlay").click(function () {
  $(".cart").css("right", "-450px");
  $("#overlay").css("display", "none");
});

// Hiện thị menu c2
$("#navbarDropdown").click(function () {
  $(".dropdown-menu").slideToggle(300, "linear");
});

$(".dropdown-menu").mouseleave(function () {
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
btnSearch.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  this.previousElementSibling.focus();
});

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

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  infinite: true,
  dots: true,
  asNavFor: ".slider-nav",
  prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
});

$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: ".slider-for",
  focusOnSelect: true,
  arrows: false,
});
