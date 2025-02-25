// renderCards.js
document.addEventListener("DOMContentLoaded", () => {
  // Mảng chứa dữ liệu cho các card (dựa trên ảnh)
  const offers = [
    {
      link: "Xóa Nhàn Vũng Mất, Trấn, Cau May, Khỏe Mừng 1 Lần Duy Nhất...",
      date: "05/07/19 - 31/08/19",
      logo: "./IMG/uu-dailogo.jpg",
      img: "./IMG/brand-1.jpg",
    },
    {
      link: "Xóa Nhàn Vũng Mất, Trấn, Cau May, Khỏe Mừng 1 Lần Duy Nhất...",
      date: "05/07/19 - 31/08/19",
      logo: "./IMG/uu-dailogo.jpg",
      img: "./IMG/brand-1.jpg",
    },
    {
      link: "Xóa Nhàn Vũng Mất, Trấn, Cau May, Khỏe Mừng 1 Lần Duy Nhất...",
      date: "05/07/19 - 31/08/19",
      logo: "./IMG/uu-dailogo.jpg",
      img: "./IMG/brand-1.jpg",
    },
    {
      link: "Xóa Nhàn Vũng Mất, Trấn, Cau May, Khỏe Mừng 1 Lần Duy Nhất...",
      date: "05/07/19 - 31/08/19",
      logo: "./IMG/uu-dailogo.jpg",
      img: "./IMG/brand-1.jpg",
    },
    {
      link: "Xóa Nhàn Vũng Mất, Trấn, Cau May, Khỏe Mừng 1 Lần Duy Nhất...",
      date: "05/07/19 - 31/08/19",
      logo: "./IMG/uu-dailogo.jpg",
      img: "./IMG/brand-1.jpg",
    },
    {
      link: "Xóa Nhàn Vũng Mất, Trấn, Cau May, Khỏe Mừng 1 Lần Duy Nhất...",
      date: "05/07/19 - 31/08/19",
      logo: "./IMG/uu-dailogo.jpg",
      img: "./IMG/brand-1.jpg",
    },
    {
      link: "Xóa Nhàn Vũng Mất, Trấn, Cau May, Khỏe Mừng 1 Lần Duy Nhất...",
      date: "05/07/19 - 31/08/19",
      logo: "./IMG/uu-dailogo.jpg",
      img: "./IMG/brand-1.jpg",
    },
    {
      link: "Xóa Nhàn Vũng Mất, Trấn, Cau May, Khỏe Mừng 1 Lần Duy Nhất...",
      date: "05/07/19 - 31/08/19",
      logo: "./IMG/uu-dailogo.jpg",
      img: "./IMG/brand-1.jpg",
    },
    {
      link: "Xóa Nhàn Vũng Mất, Trấn, Cau May, Khỏe Mừng 1 Lần Duy Nhất...",
      date: "05/07/19 - 31/08/19",
      logo: "./IMG/uu-dailogo.jpg",
      img: "./IMG/brand-1.jpg",
    },
  ];

  // Lấy container để render bằng ID
  const container = document.querySelector("#offers-container");

  // Tạo chuỗi HTML cho tất cả các card
  let cardsHTML = "";
    offers.forEach((offer) => {
        cardsHTML += `
            <div class="col">
                <div class="card h-100" style="position: relative;">
                    <div class="card-img-wrapper">
                        <img src="${offer.img}" class="card-img-top" alt="${offer.link}">
                    </div>
                    <img src="${offer.logo}" class="card-logo rounded-circle shadow-lg" alt="${offer.link} Logo">
                    <div class="card-body">
                        <h5 class="card-title mt-5">${offer.link}</h5>
                        <div class="d-flex align-items-center justify-content-between date-button">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-calendar-alt"></i>
                                <span class="card-date ms-1">${offer.date}</span>
                            </div>
                            <a href="${offer.link}" class="btn btn-outline-warning rounded-pill">Xem thêm ></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  // Tạo row và append toàn bộ HTML một lần
  const row = document.createElement("div");
  row.className = "row row-cols-1 row-cols-md-3 g-4";
  row.innerHTML = cardsHTML;

  // Thêm row vào container
  container.appendChild(row);
});
