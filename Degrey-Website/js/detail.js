const sizeEl = document.querySelector(".product-size");
const descriptionEl = document.querySelector(".product-description");
const productSizeEl = document.querySelector(".product-size");
const btnMinusCount = document.querySelector(".btn-minus-count");
const btnPlusCount = document.querySelector(".btn-plus-count");
const countEl = document.querySelector(".count");

const btnAddToCart = document.querySelector(".btn-add-to-cart");



let product;
let count = 1;
const renderProduct = obj => {
  nameEl.innerText = obj.name;
  priceEl.innerText = formatMoney(obj.price);
  descriptionEl.innerText = obj.description;

  // Hiển thị size (duyệt mảng -> cộng chuỗi -> hiển thị)
  productSizeEl.innerHTML = product.sizes.map(size => {
      return `<span class="border py-2 px-3 border-dark me-2" onclick="choseSize(this)">${size}</span>`
  }).join("");

  // Hiển thị hình ảnh (duyệt mảng -> cộng chuỗi -> hiển thị)
}

const choseSize = ele => {
  // Cách 1:
  const selectedEl = document.querySelector(".selected");
  if(selectedEl) {
      selectedEl.classList.remove("selected", "bg-dark", "text-white");
  }

  // Cách 2:
  // const sizeEls = document.querySelectorAll(".product-size span");
  // Array.from(sizeEls).map(size => size.classList.remove("selected", "bg-dark", "text-white"));

  // ele.classList.add("selected", "bg-dark", "text-white");
}

// Tăng số lượng
btnPlusCount.addEventListener("click", () => {
  count++;
  countEl.innerText = count;
})

// Giảm số lượng
btnMinusCount.addEventListener("click", () => {
  count--;
  if (count < 1) {
      count = 1;
  }
  countEl.innerText = count;
})

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
    // autoplay:true,
    // centerMode:true,
    // arrows:true,
    // autoplaySpeed: 1000,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    arrows:false,
  });


