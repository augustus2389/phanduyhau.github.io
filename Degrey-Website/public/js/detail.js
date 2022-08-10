const breadcrumbItemActive = document.querySelector(".breadcrumb-item.active");
const breadcrumbItem = document.querySelector(".breadcrumb .breadcrumb-item:nth-child(2)")
console.log(breadcrumbItem)
const sizeEl = document.querySelector(".product-size");
const priceEl = document.querySelector(".product-price");
const descriptionImg = document.querySelector(".description-image");
console.log(descriptionImg)
const descriptionEl = document.querySelector(".product-description");
const productSizeEl = document.querySelector(".product-size");
const nameEl = document.querySelector(".product-name");
const productOtherEl = document.querySelector(".product-other")
const btnMinusCount = document.querySelector(".btn-minus-count");
const btnPlusCount = document.querySelector(".btn-plus-count");
const countEl = document.querySelector(".count");
const btnAddToCart = document.querySelector(".btn-add-to-cart");
const imgMain = document.querySelector(".slider-for");
const imgSub = document.querySelector(".slider-nav");
console.log(btnPlusCount)
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
  breadcrumbItem.innerText = product.category;
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

// Tăng số lượng
btnPlusCount.addEventListener("click", () => {
  count++;
  countEl.innerText = +count;
  console.log(countEl)
})

// Giảm số lượng
btnMinusCount.addEventListener("click", () => {
  count--;
  if (count < 1) {
      count = 1;
  }
  countEl.innerText = +count;
})

const renderMainImg = (arr) => {
  imgMain.innerHTML = "";
  let html = "";
  arr.forEach((img) => {
    html += `
    <div> <img src="${img}" alt=""> </div>
`;
  });
  imgMain.innerHTML = html;
};
renderMainImg(product.images);

const renderSubImg = (arr) => {
  imgSub.innerHTML = "";
  let html = "";
  arr.forEach((img) => {
    html += `<li><img src="${img}" alt="" width="100%"></li>
`;
  });
  imgSub.innerHTML = html;
};
renderSubImg(product.images);

const renderDescriptionImg = (arr) => {
  // console.log(arr)
  descriptionImg.innerHTML = "";
  let html = "";
  // arr.forEach((img) => {
    html+= `<img src=${arr} alt="">`
  // })
  descriptionImg.innerHTML = html;
}
renderDescriptionImg(product.descriptionImg)

// const renderProductOther = (arr) =>{
//   productOtherEl.innerHTML = "";
//   console.log(arr)

//   let html = "";
//   arr.map((p)=>{
//     html += ` <div class="card-item ">
//     <div class="card-image position-relative">
//       <img src="${p.images[0]}" alt="${p.name}" />
//     </div>
//     <div class="card-title">
//       <h3>${p.name}</h3>
//       <p>${formatMoney(
//         p.price
//       )}</p>
//     </div>
//   </div>`
//   }).join("")
//   console.log(html)
//   productOtherEl.innerHTML = html;
// }
// renderProductOther(products)
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


// $(".product-other").slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   fade: true,
//   slidesToShow: 6,
//   slidesToScroll: 4,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
//   nextArrow: `<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
//   responsive: [
//     {
//       breakpoint: 568,
//       settings: {
//         arrows: false,
//       },
//     },
//   ],
// });
