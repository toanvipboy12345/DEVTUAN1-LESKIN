// Nội dung cho từng mục
const contentMap = {
  "personal-info": "<h5>Thông tin cá nhân</h5><p>Vui lòng đăng nhập.</p>",
  "security-info":
    "<h5>Thông tin bảo mật</h5><p>Hướng dẫn và thông tin về bảo mật tài khoản.</p>",
  "wallet-info":
    "<h5>Thông tin ví</h5><p>Thông tin liên quan đến ví điện tử.</p>",
  "transaction-history":
    "<h5>Lịch sử giao dịch</h5><p>Lịch sử giao dịch của bạn được hiển thị tại đây.</p>",
  terms:
    "<h5>Điều khoản sử dụng</h5><p>Chi tiết về điều khoản sử dụng dịch vụ.</p>",
  guide:
    "<h5>Hướng dẫn sử dụng</h5><p>Các bước hướng dẫn sử dụng nền tảng.</p>",
};

// Hàm hiển thị nội dung
function showContent(key) {
  const contentArea = document.getElementById("content-area");
  if (!contentArea) {
    console.warn("Phần tử 'content-area' không tồn tại trên trang này.");
    return;
  }
  contentArea.innerHTML = contentMap[key] || "<p>Nội dung không tồn tại.</p>";
}

const users = [
  {
    username: "1",
    password: "1",
    personalInfo: {
      fullName: "Nguyễn Văn A",
      idNumber: "123456789",
      birthDate: "16/06/1986",
      gender: "Nam",
      phone: "0123456789",
      email: "user1@example.com",
      address: "123 Đường ABC, Quận 1, TP. HCM",
      avatar: "./IMG/avatar.png",
    },
    wallet: {
      vouchers: [
        {
          title: "Voucher dịch vụ chăm sóc da mặt công nghệ mới",
          validity: "05/07/19 - 31/08/19",
        },
        {
          title: "Voucher dịch vụ chăm sóc da mặt công nghệ mới",
          validity: "05/07/19 - 31/08/19",
        },
        {
          title: "Voucher dịch vụ chăm sóc da mặt công nghệ mới",
          validity: "05/07/19 - 31/08/19",
        },
      ],
      coupons: [
        {
          title: "Coupon giảm 50% dịch vụ chăm sóc da mặt công nghệ mới",
        },
        {
          title: "Coupon giảm 50% dịch vụ chăm sóc da mặt công nghệ mới",
        },
      ],
      points: 2456,
    },
    transactionHistory: [
      {
        date: "24/07/2019",
        description: "Mua dịch vụ chăm sóc da công nghệ mới",
        amount: "-300.000đ",
        status: "Hoàn tất",
      },
      {
        date: "24/07/2019",
        description: "Mua dịch vụ chăm sóc da công nghệ mới",
        amount: "-300.000đ",
        status: "Hoàn tất",
      },
    ],
  },
];
// Hàm cập nhật nội dung từ thông tin người dùng
function updateContentFromUser(user) {
  if (!user) return;

  // Cập nhật "personal-info"
  contentMap["personal-info"] = `
  <div class="d-flex justify-content-between align-items-center mb-4">
    <h5 class="mb-0">Thông tin cá nhân</h5>
    <button id="edit-personal-info" class="btn btn-outline-secondary" onclick="toggleEditPersonalInfo()">Chỉnh sửa</button>
  </div>
  <div class="row" id="personal-info-form">
    <!-- Information Form Section -->
    <div class="col-md-9">
      <form>
        <div class="row mb-3">
          <label for="fullName" class="col-sm-4 col-form-label">Họ và tên</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="fullName" value="${user.personalInfo.fullName}" disabled>
          </div>
        </div>
        <div class="row mb-3">
          <label for="idNumber" class="col-sm-4 col-form-label">Số CMND/CCCD</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="idNumber" value="${user.personalInfo.idNumber}" disabled>
          </div>
        </div>
        <div class="row mb-3">
          <label for="birthDate" class="col-sm-4 col-form-label">Ngày sinh</label>
          <div class="col-sm-8">
            <div class="row">
              <div class="col-4">
                <select class="form-select" id="birthDay" disabled>
                  <option selected>16</option>
                </select>
              </div>
              <div class="col-4">
                <select class="form-select" id="birthMonth" disabled>
                  <option selected>6</option>
                </select>
              </div>
              <div class="col-4">
                <select class="form-select" id="birthYear" disabled>
                  <option selected>1986</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-4 col-form-label">Giới tính</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="gender" value="${user.personalInfo.gender}" disabled>
          </div>
        </div>
        <div class="row mb-3">
          <label for="phone" class="col-sm-4 col-form-label">Số điện thoại</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="phone" value="${user.personalInfo.phone}" disabled>
          </div>
        </div>
        <div class="row mb-3">
          <label for="email" class="col-sm-4 col-form-label">Email</label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="email" value="${user.personalInfo.email}" disabled>
          </div>
        </div>
        <div class="row mb-3">
          <label for="address" class="col-sm-4 col-form-label">Địa chỉ</label>
          <div class="col-sm-8">
            <textarea class="form-control" id="address" rows="2" disabled>${user.personalInfo.address}</textarea>
          </div>
        </div>
        <!-- Nút Lưu -->
        <div class="text-end">
          <button id="save-personal-info" class="button_login" onclick="savePersonalInfo(event)">Lưu</button>
        </div>
      </form>
    </div>
    <!-- Avatar Section -->
    <div class="col-md-3 text-center d-flex flex-column align-items-center">
      <img src="${user.personalInfo.avatar}" alt="Avatar" class="rounded-circle mb-3" style="width: 120px; height: 120px; object-fit: cover;">
      <button class="btn btn-outline-secondary btn-sm">Chọn ảnh</button>
      <p class="text-muted mt-2 text-center">Dung lượng file tối đa: 1 MB<br>Định dạng: JPEG, PNG</p>
    </div>
  </div>
  <!-- Thông tin bảo mật -->
  <div class="d-flex align-items-center justify-content-center my-4">
    <i class="fas fa-shield-alt text-secondary me-2"></i>
    <p class="text-muted mb-0">Thông tin cá nhân của quý khách được đảm bảo an toàn</p>
  </div>
`;



  // Cập nhật "wallet-info"
  // Cập nhật "wallet-info" với giao diện Bootstrap và Font Awesome
  const vouchers = user.wallet.vouchers
    .map(
      (v) => `
    <div class="d-flex justify-content-between align-items-center border-bottom py-2">
      <div class="d-flex align-items-center">
        <i class="fas fa-tag me-2" style="color: #bd945f"></i>
        <div>
          <p class="mb-0">${v.title}</p>
          <small class="text-muted">${v.validity}</small>
        </div>
      </div>
      <a href="#" class="text-decoration-none text-secondary">Chi tiết ></a>
    </div>
  `
    )
    .join("");

  const coupons = user.wallet.coupons
    .map(
      (c) => `
    <div class="d-flex justify-content-between align-items-center border-bottom py-2">
      <div class="d-flex align-items-center">
        <i class="fas fa-gift text-warning me-2"></i>
        <div>
          <p class="mb-0">${c.title}</p>
        </div>
      </div>
      <a href="#" class="text-decoration-none text-secondary">Chi tiết ></a>
    </div>
  `
    )
    .join("");

  const pointsContent = `
  <div class="text-center p-4">
    <h5 class="mb-4">Số điểm của bạn</h5>
    <div class="points-circle mx-auto mb-3">
      <span class="points-number">${user.wallet.points}</span>
      <span class="points-label">ĐIỂM</span>
    </div>
    <div class="d-flex justify-content-center gap-3">
      <button class="btn btn-outline-secondary px-4 rounded-pill" style="background-color: #E4E4E4;">TRAO ĐỔI</button>
      <button class="btn btn-outline-secondary px-4 rounded-pill" style="background-color: #E4E4E4;">CHO TẶNG</button>
    </div>
  </div>
`;

  contentMap["wallet-info"] = `
  <div>
<ul class="nav nav-tabs d-flex" id="walletTab" role="tablist">
  <li class="nav-item flex-grow-1 text-center" role="presentation">
    <button class="nav-link active w-100" id="voucher-tab" data-bs-toggle="tab" data-bs-target="#vouchers" type="button" role="tab" aria-controls="vouchers" aria-selected="true">
      <i class="fas fa-tag" style="color: #bd945f"></i> Voucher <span class="badge bg-secondary">${
        user.wallet.vouchers.length
      }</span>
    </button>
  </li>
  <li class="nav-item flex-grow-1 text-center" role="presentation">
    <button class="nav-link w-100" id="coupon-tab" data-bs-toggle="tab" data-bs-target="#coupons" type="button" role="tab" aria-controls="coupons" aria-selected="false">
      <i class="fas fa-gift" style="color: #bd945f"></i> Coupon <span class="badge bg-secondary">${
        user.wallet.coupons.length
      }</span>
    </button>
  </li>
  <li class="nav-item flex-grow-1 text-center" role="presentation">
    <button class="nav-link w-100" id="points-tab" data-bs-toggle="tab" data-bs-target="#points" type="button" role="tab" aria-controls="points" aria-selected="false">
      <i class="fas fa-star" style="color: #bd945f"></i> Điểm <span class="badge bg-secondary">${
        user.wallet.points
      }</span>
    </button>
  </li>
</ul>


    <div class="tab-content" id="walletTabContent">
      <div class="tab-pane fade show active" id="vouchers" role="tabpanel" aria-labelledby="voucher-tab">
        <div class="p-3">
          ${vouchers || "<p>Không có voucher nào.</p>"}
        </div>
      </div>
      <div class="tab-pane fade" id="coupons" role="tabpanel" aria-labelledby="coupon-tab">
        <div class="p-3">
          ${coupons || "<p>Không có coupon nào.</p>"}
        </div>
      </div>
      <div class="tab-pane fade" id="points" role="tabpanel" aria-labelledby="points-tab">
        ${pointsContent}
      </div>
    </div>
  </div>
`;

  // Cập nhật "transaction-history"
  const transactions = user.transactionHistory
    .map(
      (t) => `
      <tr>
        <td class="text-nowrap">${t.date}</td>
        <td>${t.description}</td>
        <td class="text-danger text-nowrap">${t.amount}</td>
        <td>${t.status}</td>
      </tr>
    `
    )
    .join("");

  contentMap["transaction-history"] = `
  <div class="table-responsive">
    <h5 class="mb-4 fw-bold">LỊCH SỬ GIAO DỊCH</h5>
    <table class="table table-bordered table-striped">
      <thead class="table-light">
        <tr>
          <th scope="col">Ngày</th>
          <th scope="col">Nội dung</th>
          <th scope="col">Số tiền</th>
          <th scope="col">Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        ${
          transactions ||
          "<tr><td colspan='4' class='text-center'>Không có giao dịch nào.</td></tr>"
        }
      </tbody>
    </table>
  </div>
`;
}
function login(username, password) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    alert("Đăng nhập thành công!");

    // Lưu trạng thái đăng nhập
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    showContent("personal-info");

    // Handle successful login UI changes
    handleSuccessfulLogin(user);
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
}

// DOM elements
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.querySelector(".button_register");
const userMenu = document.getElementById("user-menu");
const userAvatar = document.getElementById("user-avatar");
const userOptions = document.getElementById("user-options");

// Function to handle successful login
function handleSuccessfulLogin(user) {
  // Hiển thị avatar và username trên desktop
  loginBtn.style.display = "none";
  registerBtn.style.display = "none";
  userMenu.classList.remove("d-none");

  $("#login-modal").fadeOut(); // Hiệu ứng ẩn modal

  userAvatar.src = user.personalInfo.avatar;
  userOptions.options[0].text = user.personalInfo.fullName;

  // Hiển thị avatar và username trên mobile
  const mobileLoginBtn = document.getElementById("mobile-login-btn");
  const mobileRegisterBtn = document.getElementById("mobile-register-btn");
  const mobileUserMenu = document.getElementById("mobile-user-menu");
  const mobileUserAvatar = document.getElementById("mobile-user-avatar");
  const mobileUsername = document.getElementById("mobile-username");

  mobileLoginBtn.style.display = "none";
  mobileRegisterBtn.style.display = "none";
  mobileUserMenu.classList.remove("d-none");
  mobileUserAvatar.src = user.personalInfo.avatar;
  mobileUsername.textContent = user.personalInfo.fullName;
}

// Xử lý đăng xuất trên mobile
document.getElementById("mobile-logout").addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  alert("Bạn đã đăng xuất!");
  window.location.href = "./index.html";
});

// Kiểm tra trạng thái đăng nhập khi tải trang
document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    updateContentFromUser(loggedInUser);
    handleSuccessfulLogin(loggedInUser);
  } else {
    // Đặt trạng thái mặc định
    document.getElementById("mobile-login-btn").style.display = "block";
    document.getElementById("mobile-register-btn").style.display = "block";
    document.getElementById("mobile-user-menu").classList.add("d-none");
  }
});

// Kiểm tra trạng thái đăng nhập khi tải trang
document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    handleSuccessfulLogin(loggedInUser);
  } else {
    // Đặt trạng thái về mặc định khi không đăng nhập
    loginBtn.style.display = "inline-block";
    registerBtn.style.display = "inline-block";
    userMenu.classList.add("d-none");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const userOptions = document.getElementById("user-options");

  if (userOptions) {
    userOptions.addEventListener("change", function () {
      const selectedOption = this.value;
      if (selectedOption === "account") {
        window.location.href = "./taikhoan.html"; // Chuyển đến trang tài khoản
      } else if (selectedOption === "logout") {
        localStorage.removeItem("loggedInUser");
        sessionStorage.setItem("isLoggedOut", "true");
        alert("Bạn đã đăng xuất!");
        window.location.href = "./index.html";
      }
    });
  } else {
    console.warn("Phần tử 'user-options' không tồn tại.");
  }
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = e.target[0].value;
  const password = e.target[1].value;
  login(username, password);
});

function toggleEditPersonalInfo() {
  const formElements = document.querySelectorAll(
    "#personal-info-form input, #personal-info-form select, #personal-info-form textarea"
  );
  const isDisabled = formElements[0].disabled;

  formElements.forEach((element) => {
    element.disabled = !isDisabled;
  });

  const editButton = document.getElementById("edit-personal-info");
  const saveButton = document.getElementById("save-personal-info");

  if (isDisabled) {
    editButton.textContent = "Hủy";
    editButton.classList.remove("btn-outline-secondary");
    editButton.classList.add("btn-danger");

    // Hiển thị nút Lưu
    saveButton.classList.remove("d-none");
  } else {
    editButton.textContent = "Chỉnh sửa";
    editButton.classList.remove("btn-danger");
    editButton.classList.add("btn-outline-secondary");

    // Ẩn nút Lưu
    saveButton.classList.add("d-none");
  }
}

function initializeDateDropdowns() {
  const dayDropdown = document.getElementById("birthDay");
  const monthDropdown = document.getElementById("birthMonth");
  const yearDropdown = document.getElementById("birthYear");

  // Xóa các option hiện có để tránh bị lặp
  dayDropdown.innerHTML = "";
  monthDropdown.innerHTML = "";
  yearDropdown.innerHTML = "";

  // Thêm ngày (1-31)
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    dayDropdown.appendChild(option);
  }

  // Thêm tháng (1-12)
  for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    monthDropdown.appendChild(option);
  }

  // Thêm năm (1920-2023)
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1920; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearDropdown.appendChild(option);
  }

  // Đặt giá trị mặc định (16/6/1986)
  dayDropdown.value = 16;
  monthDropdown.value = 6;
  yearDropdown.value = 1986;
}

function savePersonalInfo(event) {
  event.preventDefault();

  const updatedInfo = {
    fullName: document.getElementById("fullName").value,
    idNumber: document.getElementById("idNumber").value,
    birthDate: `${document.getElementById("birthDay").value}/${
      document.getElementById("birthMonth").value
    }/${document.getElementById("birthYear").value}`,
    gender: document.getElementById("gender").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
  };

  console.log("Thông tin cập nhật:", updatedInfo);
  alert("Thông tin cá nhân đã được lưu!");

  // Tắt chế độ chỉnh sửa sau khi lưu
  toggleEditPersonalInfo();
}
