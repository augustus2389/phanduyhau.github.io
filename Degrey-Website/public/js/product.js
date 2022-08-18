const btnSearch = document.querySelector('.search-btn');
const addCart = document.querySelectorAll('.social .add-cart');
const message = document.querySelector(".message");

const totalMoneyElSidebar = document.getElementById("total-money-sidebar");

const productList = document.querySelector('.product-list')
const productItemSidabar = document.querySelector(".product-item-sidebar")
const renderProductSidebar = () => {
  if (items.length == 0) {
    // productList.classList.add("d-none");
    return
  // } else {
  //   message.classList.add("d-none");
  }
  productItemSidabar.innerHTML = "";
  let html = "";
  items.forEach((p) => {
    html += `<div class="product-item d-flex border mb-2">
    <div class="image">
      <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="info d-flex justify-content-between px-1">
        <div>
            <div class="name-product">
                <h2 class="text-dark">
                ${p.name} (${p.size})
                </h2>
                
            </div>
            <div class="count-sidebar text-black-50 d-flex justify-content-between ">
                <span class="border d-inline-block me-3">
                    <span class="px-2 d-inline-block fw-bold bg-light" onclick="minusCount(${p.id}, '${p.size}')">-</span>
                    <span class="px-2 d-inline-block fw-bold">${p.count}</span>
                    <span class="px-2 d-inline-block fw-bold bg-light" onclick="plusCount(${p.id}, '${p.size}')">+</span>
                </span>
                <button class="text-primary border-0 bg-transparent fw-light">
                  <span><i class="fa-solid fa-trash-can"></i></i></span>
              </button>
            </div>
            <h3 class="text-danger fw-bold text-start">
                ${formatMoney(p.price)}
              </h3>
        </div>
    </div>
  </div>`
  });
  productItemSidabar.innerHTML = html;
}



let items = getDataFromLocalStorage();
const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
const updateTotalMoneysidebar = () => {
  let totalMoney = 0;
  items.map((e) => {
    totalMoney += e.count * e.price;
  });
  totalMoneyElSidebar.innerText = formatMoney(totalMoney);
};
updateTotalMoneysidebar()

const renderCard = (arr) => {
  productList.innerHTML = "";
  let html = "";
  arr.forEach((p) => {
    html += `<div class="col-xl-2_4 col-lg-2_4 .col-xxl-2_4 col-md-4 col-sm-6 col-6">
    <div class="card-item">
      <div class="card-image position-relative">
        <a href="./detail.html?id=${p.id}"
          ><img
            src="${p.images[0]}"
            alt="${p.name}"
        /></a>
        <ul class="social position-absolute top-50 end-0 translate-middle-y">
          <li>
            <button class="btn-add-to-cart"  onclick = 'addCartJacket(${
              p.id
            })'>
            <i class="fa-solid fa-eye"></i>
            </button>
          </li>

          <li>
            <button
              class="button-discount"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal${p.id}"
              role="button"
            >
              <i class="fa-solid fa-bag-shopping"></i>
            </button>
          </li>
        </ul>
        
        <span class="flash-tag position-absolute">${p.tag}</span>
      </div>
      <div class="card-title">
        <h3>${p.name}</h3>
        <p>${formatMoney(p.price)}</p>
      </div>
      <button class="btn btn--detail">
        <a href="./detail.html?id=${p.id}">Chi tiết</a>
      </button>
      </div>
    <div class="modal fade render-modal"
          id="exampleModal${p.id}"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Chi tiết sản phẩm
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="product-detail">
                  <div class="product-modal d-flex border mb-4">
                    <div class = "col-lg-4 col-md-4 col-sm-4">
                    <div class="image">
                      <img src="${p.images[0]}" alt="${p.name}" />
                    </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-9">
          <div id="detail ">
              <p class="product-name fw-bold mx-1">${p.name}</p>
              <p class="product-price text-danger  fw-bold mb-2 mx-1">${formatMoney(p.price)}</p>
              <div class="size d-flex mx-1 mb-2">
                <span class="fw-bold me-3">Kích cỡ:</span>
              <div class="product-size mb-2">
                  <span class="border py-1 px-2 border-dark me-2" >M</span>
                  <span class="border py-1 px-2 border-dark me-2">S</span>
                  <span class="border py-1 px-2 border-dark me-2">L</span>
                  <span class="border py-1 px-2 border-dark me-2">XL</span>
              </div>
              </div>
              <div class="d-flex  align-items-center mb-2 flex-wrap">
                <span class="fw-bold me-3 mx-1">Số lượng:</span>
                  <span class="count-product d-inline-block me-3">
                      <span class="rounded-circle px-2 d-inline-block fw-bold btn-minus-count">-</span>
                      <span class="count py-1 px-2 d-inline-block fw-bold ">1</span>
                      <span class="rounded-circle  px-2 d-inline-block fw-bold btn-plus-count">+</span>
                  </span>
                  <button class="btn btn-add-to-cart">Thêm vào giỏ hàng</button>
              </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>`
  });
  productList.innerHTML = html;
}
// renderCard(products)


const getUrl = () => {
  const category = window.location.hash.slice(1).split("&")
  console.log(category)
  const data = products.filter((p) =>{
    if(category.length == 2){
      return p.category == category[0] || p.category == category[1]
    } else if (category.length == 1 && category[0] !== '') {
      return p.category.toLowerCase() == category[0].toLowerCase();
    } else {
      return true;
    }
  })
  console.log(data)
  renderCard(data) 
}
getUrl();



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
}

// filter catgory
let filterCatgory = document.querySelectorAll(".clothes")
let productFilterRating = []
let checkedNumberRating = 0
Array.from(filterCatgory).forEach((input) =>{
  input.addEventListener("change",(e) =>{
    let inputValue = e.target.value
    if(e.target.checked == true){
      checkedNumberRating ++
      let productFilterTrue = products.filter((p) =>{
        return p.category == inputValue;
      })
      productFilterRating = productFilterRating.concat(productFilterTrue)
      renderCard(productFilterRating)
    } else{
      checkedNumberRating --
      productFilterRating = productFilterRating.filter((p) =>{
        return p.category != inputValue;
      })
      renderCard(productFilterRating)
    }
    if(checkedNumberRating == 0){
      renderCard(products)
    }
  })
})

renderProductSidebar(items)

let inputValueName = document.querySelector(".sortAlphabetically")
inputValueName.addEventListener("change", (e) =>{
  if(e.target.value == 1){
    let productSortUp = products.sort((a,b) =>{
      return a.name - b.name
    }) 
    renderCard(productSortUp)
  }
})


let inputValuePrice = document.querySelector(".sortPrice")
inputValuePrice.addEventListener("change", (e) =>{
  if(e.target.value == 1){
    let productSortUp = products.sort((a,b) =>{
      return a.price - b.price
    }) 
    renderCard(productSortUp)
  }
})

let inputValuePrice2 = document.querySelector(".sortPrice2")
inputValuePrice2.addEventListener("change", (e) =>{
  if(e.target.value == 2){
    let productSortDown = products.sort((a,b) =>{
      return b.price - a.price
    })
    renderCard(productSortDown)
  } 
})





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
