const btnSearch = document.querySelector('.search-btn');
const productList = document.querySelector(".product-list");
const productItemSidabar = document.querySelector(".product-item-sidebar")
const message = document.querySelector(".message");
const totalMoneyEl = document.getElementById("total-money");

console.log(productItemSidabar)
// Lấy ra sản phẩm có trong giỏ hàng
let items = getDataFromLocalStorage();

const renderProductSidebar = () => {
  if (items.length == 0) {
    productList.classList.add("d-none");
    return
  } else {
    message.classList.add("d-none");
  }
  productItemSidabar.innerHTML = "";
  let html = "";
  items.forEach((p) => {
    html += `<div class="product-item d-flex border mb-4 mt-3">
    <div class="image">
      <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="info d-flex flex-column justify-content-between px-lg-1 px-sm-0">
        <div>
            <div class="d-flex ">
                <h2 class="text-dark">
                ${p.name} (${p.size})
                </h2>
                <button class="text-primary border-0 bg-transparent fw-light">
                  <span><i class="fa-solid fa-trash-can"></i></i></span>
                 
              </button>
            </div>
            <p class="count text-black-50 text-start">
                <span class="border d-inline-block me-3">
                    <span class="px-2 d-inline-block fw-bold bg-light" onclick="minusCount(${p.id}, '${p.size}')">-</span>
                    <span class="px-2 d-inline-block fw-bold">${p.count}</span>
                    <span class="px-2 d-inline-block fw-bold bg-light" onclick="plusCount(${p.id}, '${p.size}')">+</span>
                </span>
                <h3 class="text-danger fw-bold text-start">
                ${p.price} 
              </h3>
            </p>
        </div>
    </div>
  </div>`
  });
  productItemSidabar.innerHTML = html;
}

renderProductSidebar(items)



//  Hiển thị danh sách ra ngoài giao diện
const renderProduct = () => {
  // Kiểm tra giỏ hàng rỗng hay không
  if (items.length == 0) {
    productList.classList.add("d-none");
    return
  } else {
    message.classList.add("d-none");
  }

  // Nếu có sản phẩm thì hiển thị
  let html = "";

  items.forEach((p) => {
    html += `<div class="product-item-list d-flex border mb-4">
    <div class="image col-lg-3 col-md-3 col-sm-4">
        <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="info col-lg-9 col-md-9 d-flex flex-column justify-content-between pe-lg-2 py-lg-3 p-sm-0 flex-grow-1">
        <div class="info-clothes">
            <div class="d-flex ">
                <h2 class="text-dark ">
                ${p.name} (${p.size})
                </h2>
                
            </div>
            <p class="text-black-50 d-flex mt-3 justify-content-between ">
                <span class="d-inline-block ">
                    <span class="rounded-circle border bg-light px-2 d-inline-block fw-bold onclick="minusCount(${p.id}, '${p.size}')">-</span>
                    <span class="count py-1 px-2 d-inline-block fw-bold">${p.count}</span>
                    <span class="rounded-circle border bg-light  px-2 d-inline-block fw-bold onclick="plusCount(${p.id}, '${p.size}')"">+</span>
                </span>
                <button class="text-primary border-0 bg-transparent fw-light" onclick="deleteProduct(${p.id}, '${p.size}')">
                    <span><i class="fa-solid fa-trash-can mt-3"></i></span>
                </button>
            </p>
        </div>
        <div>
            
            <h2 class="price text-danger fw-normal">
            ${formatMoney(p.price)}
            </h2>
        </div>
    </div>
</div>`;
  });
  productList.innerHTML = html;
};

//  Xóa sản phẩm

const deleteProduct = (id, size) => {
  let isConfirm = confirm("Bạn có muốn xóa không?");
  if (isConfirm) {
    items = items.filter((p) => p.id != id || p.size != size);
    setDataFromLocalStorage(items);
    updateTotalCart();
    renderProduct(items);
  }
};


// Thay đổi số lượng
// Tăng số lượng
const plusCount = (id, size) => {
  // Lấy ra sản phẩm tương ứng
  let product = items.find((p) => p.id == id && p.size == size);

  // Tăng số lượng
  product.count++;

  // Lưu lại vào localStorage
  setDataFromLocalStorage(items);

  // Hiển thị lại giao diện
  renderProduct(items);
};

// Giảm số lượng
const minusCount = (id, size) => {
  let product = items.find((p) => p.id == id && p.size == size);
  product.count--;
  if (product.count < 1) {
    product.count = 1;
  }
  // setDataFromLocalStorage(items);
  renderProduct(items);
};
// Format tiền VND
const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

renderProduct(items);


//Tính tiền
const updateTotalMoney = () => {
  let totalMoney = 0;
  items.map((e) => {
    totalMoney += e.count * e.price;
  });
  totalMoneyEl.innerText = formatMoney(totalMoney);
};
updateTotalMoney();
renderProduct(items);


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
