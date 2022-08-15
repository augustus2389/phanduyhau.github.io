const btnSearch = document.querySelector('.search-btn');
const addCart = document.querySelectorAll('.social .add-cart')
const productList = document.querySelector(".product-list");
const message = document.querySelector(".message");
const totalMoneyEl = document.getElementById("total-money");


// Lấy ra sản phẩm có trong giỏ hàng
let items = getDataFromLocalStorage();

//  Hiển thị danh sách ra ngoài giao diện
const renderProduct = () => {
  // Kiểm tra giỏ hàng rỗng hay không
  if (items.length == 0) {
    productList.classList.add("d-none");
  } else {
    message.classList.add("d-none");
  }

  // Nếu có sản phẩm thì hiển thị
  let html = "";

  items.forEach((p) => {
    html += `<div class="product-item-list d-flex border mb-4">
    <div class="image">
        <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="info d-flex flex-column justify-content-between px-lg-4 py-lg-3 p-sm-0 flex-grow-1">
        <div class="info-clothes">
            <div class="d-flex ">
                <h2 class="text-dark ">
                ${p.name}
                </h2>
                
            </div>
            <p class="text-black-50 d-flex mt-3 justify-content-between ">
                <span class="d-inline-block ">
                    <span class="rounded-circle px-2 d-inline-block fw-bold" onclick="(minusCount(${p.id}, '${p.size}'))">-</span>
                    <span class="count py-1 px-2 d-inline-block fw-bold">${p.count}</span>
                    <span class="rounded-circle  px-2 d-inline-block fw-bold" onclick="(plusCount(${p.id}, '${p.size}'))">+</span>
                </span>
                <button class="text-primary border-0 bg-transparent fw-light">
                    <span><i class="fa-solid fa-trash-can mt-3" onclick="(deleteProduct(${p.id}, '${p.size}'))"></i></span>
                </button>
            </p>
        </div>
        <div>
            
            <h2 class="price text-danger fs-5 fw-normal">
            ${p.price} 
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
    // Tìm kiếm sản phẩm trùng id và size
    items = items.filter((p) => p.id != id || p.size != size);

    // Lưu lại vào localStorage
    setDataFromLocalStorage(items);
    // Cập nhật lại số lượng
    updateTotalCart();

    // Hiển thị lại giao diện
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
  // Lấy ra sản phẩm tương ứng
  let product = items.find((p) => p.id == id && p.size == size);

  // Tăng số lượng
  product.count--;

  if (product.count < 1) {
    product.count = 1;
  }

  // Lưu lại vào localStorage
  setDataFromLocalStorage(items);

  // Hiển thị lại giao diện
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
