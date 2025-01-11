$(document).ready(function () {
    // Hiển thị modal khi nhấn vào nút "Đăng nhập" (Desktop và Mobile)
    $("#login-btn, #mobile-menu .button_login").on("click", function () {
      $("#login-modal").fadeIn(); // Hiệu ứng hiện modal
      $("#mobile-menu").slideUp(); // Đóng menu mobile (nếu đang mở)
    });

    // Đóng modal khi nhấn vào nút "X"
    $("#close-modal").on("click", function () {
      $("#login-modal").fadeOut(); // Hiệu ứng ẩn modal
    });

    // Đóng modal khi nhấn ra ngoài modal
    $(window).on("click", function (e) {
      if ($(e.target).is("#login-modal")) {
        $("#login-modal").fadeOut();
      }
    });

    // Hiển thị menu mobile khi nhấn vào nút hamburger
    $("#hamburger-btn").on("click", function () {
      $("#mobile-menu").slideToggle(); // Hiện/ẩn menu với hiệu ứng slide
    });

    // Ẩn menu mobile khi resize cửa sổ lớn hơn 768px
    $(window).on("resize", function () {
      if ($(window).width() > 768) {
        $("#mobile-menu").hide();
      }
    });
  });