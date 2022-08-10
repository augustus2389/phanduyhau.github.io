$('#navbarDropdown').click(function() {
    $('.dropdown-menu').slideToggle(300, "linear");
  });
  
  $('.dropdown-menu').mouseleave(function() {
    $(this).slideToggle(300, "linear");
  });
  
const btnSearch = document.querySelector('.search-btn');
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