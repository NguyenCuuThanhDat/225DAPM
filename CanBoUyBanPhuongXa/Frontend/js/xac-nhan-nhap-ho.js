// ========== MOCK DATA ==========
let hoSoNhapHo = [
    {
        id: "1",
        maHoSo: "HS-NH-2023-001",
        nguoiNhap: {
            hoTen: "Trần Văn N",
            cccd: "003090123456",
            ngaySinh: "01/01/1990",
            gioiTinh: "Nam",
            queQuan: "Thái Bình",
            diaChiCu: "Số 45, Đường C, Phường H, Quận I, TP K"
        },
        hoDich: {
            soHoKhau: "HK001234",
            chuHo: "Nguyễn Văn A",
            diaChi: "Số 12, Ngõ 34, Phường X, Quận Y, TP Z",
            thanhVien: [
                { hoTen: "Nguyễn Văn A", cccd: "001090123456", quanHe: "Chủ hộ" },
                { hoTen: "Trần Thị B", cccd: "001092123456", quanHe: "Vợ" },
                { hoTen: "Nguyễn Văn C", cccd: "001095123456", quanHe: "Con trai" }
            ]
        },
        quanHeChuHo: "Con",
        lyDo: "Về sống cùng gia đình",
        ngayNop: "2025-10-26",
        trangThai: "pending",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_TranVanN.pdf", loai: "Căn cước công dân" },
            { ten: "DonDeNghiNhapHo.pdf", loai: "Đơn đề nghị nhập hộ" },
            { ten: "GiayXacNhanChuaCoHoKhau.pdf", loai: "Xác nhận chưa có hộ khẩu" }
        ]
    },
    {
        id: "2",
        maHoSo: "HS-NH-2023-002",
        nguoiNhap: {
            hoTen: "Lý Thị P",
            cccd: "003095123456",
            ngaySinh: "02/02/1995",
            gioiTinh: "Nữ",
            queQuan: "Hà Nội",
            diaChiCu: "Số 12, Đường Đ, Phường E, Quận F, TP G"
        },
        hoDich: {
            soHoKhau: "HK005678",
            chuHo: "Lê Văn D",
            diaChi: "Số 56, Đường A, Phường X, Quận Y, TP Z",
            thanhVien: [
                { hoTen: "Lê Văn D", cccd: "002090123456", quanHe: "Chủ hộ" },
                { hoTen: "Lê Thị F", cccd: "002095123456", quanHe: "Con gái" }
            ]
        },
        quanHeChuHo: "Con dâu",
        lyDo: "Kết hôn và nhập hộ",
        ngayNop: "2025-10-25",
        trangThai: "approved",
        ghiChu: "Hồ sơ hợp lệ, đã duyệt",
        giayTo: [
            { ten: "CCCD_LyThiP.pdf", loai: "Căn cước công dân" },
            { ten: "GiayDangKyKetHon.pdf", loai: "Giấy đăng ký kết hôn" }
        ]
    },
    {
        id: "3",
        maHoSo: "HS-NH-2023-003",
        nguoiNhap: {
            hoTen: "Mai Văn Q",
            cccd: "004090123456",
            ngaySinh: "03/03/1992",
            gioiTinh: "Nam",
            queQuan: "Đà Nẵng",
            diaChiCu: "Số 78, Đường G, Phường H, Quận I, TP J"
        },
        hoDich: {
            soHoKhau: "HK01234",
            chuHo: "Hoàng Văn H",
            diaChi: "Số 78, Đường C, Phường Z, Quận X, TP Y",
            thanhVien: [
                { hoTen: "Hoàng Văn H", cccd: "003090123456", quanHe: "Chủ hộ" },
                { hoTen: "Hoàng Văn G", cccd: "003095123456", quanHe: "Con trai" }
            ]
        },
        quanHeChuHo: "Em trai",
        lyDo: "Nhập hộ khẩu để tiện công việc",
        ngayNop: "2025-10-24",
        trangThai: "supplement",
        ghiChu: "Thiếu giấy xác nhận quan hệ gia đình",
        giayTo: [
            { ten: "CCCD_MaiVanQ.pdf", loai: "Căn cước công dân" }
        ]
    },
    {
        id: "4",
        maHoSo: "HS-NH-2023-004",
        nguoiNhap: {
            hoTen: "Đào Thị R",
            cccd: "004095123456",
            ngaySinh: "04/04/1998",
            gioiTinh: "Nữ",
            queQuan: "Quảng Nam",
            diaChiCu: "Số 34, Đường H, Phường I, Quận J, TP K"
        },
        hoDich: {
            soHoKhau: "HK005678",
            chuHo: "Lê Văn D",
            diaChi: "Số 56, Đường A, Phường X, Quận Y, TP Z",
            thanhVien: [
                { hoTen: "Lê Văn D", cccd: "002090123456", quanHe: "Chủ hộ" },
                { hoTen: "Lê Thị F", cccd: "002095123456", quanHe: "Con gái" }
            ]
        },
        quanHeChuHo: "Cháu",
        lyDo: "Chuyển đến sinh sống",
        ngayNop: "2025-10-23",
        trangThai: "rejected",
        ghiChu: "Hộ khẩu đích không đáp ứng điều kiện nhập hộ",
        giayTo: [
            { ten: "CCCD_DaoThiR.pdf", loai: "Căn cước công dân" }
        ]
    },
    {
        id: "5",
        maHoSo: "HS-NH-2023-005",
        nguoiNhap: {
            hoTen: "Phan Văn S",
            cccd: "005090123456",
            ngaySinh: "05/05/1991",
            gioiTinh: "Nam",
            queQuan: "Huế",
            diaChiCu: "Số 56, Đường K, Phường L, Quận M, TP N"
        },
        hoDich: {
            soHoKhau: "HK001234",
            chuHo: "Nguyễn Văn A",
            diaChi: "Số 12, Ngõ 34, Phường X, Quận Y, TP Z",
            thanhVien: [
                { hoTen: "Nguyễn Văn A", cccd: "001090123456", quanHe: "Chủ hộ" },
                { hoTen: "Trần Thị B", cccd: "001092123456", quanHe: "Vợ" }
            ]
        },
        quanHeChuHo: "Con rể",
        lyDo: "Kết hôn với con gái chủ hộ",
        ngayNop: "2025-10-22",
        trangThai: "processing",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_PhanVanS.pdf", loai: "Căn cước công dân" },
            { ten: "GiayDangKyKetHon.pdf", loai: "Giấy đăng ký kết hôn" },
            { ten: "DonXinNhapHo.pdf", loai: "Đơn xin nhập hộ" }
        ]
    },
    {
        id: "6",
        maHoSo: "HS-NH-2023-006",
        nguoiNhap: {
            hoTen: "Trương Thị T",
            cccd: "005095123456",
            ngaySinh: "06/06/1996",
            gioiTinh: "Nữ",
            queQuan: "Cần Thơ",
            diaChiCu: "Số 67, Đường L, Phường M, Quận N, TP O"
        },
        hoDich: {
            soHoKhau: "HK01234",
            chuHo: "Hoàng Văn H",
            diaChi: "Số 78, Đường C, Phường Z, Quận X, TP Y",
            thanhVien: [
                { hoTen: "Hoàng Văn H", cccd: "003090123456", quanHe: "Chủ hộ" },
                { hoTen: "Hoàng Văn G", cccd: "003095123456", quanHe: "Con trai" }
            ]
        },
        quanHeChuHo: "Vợ",
        lyDo: "Kết hôn",
        ngayNop: "2025-10-21",
        trangThai: "pending",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_TruongThiT.pdf", loai: "Căn cước công dân" },
            { ten: "GiayDangKyKetHon.pdf", loai: "Giấy đăng ký kết hôn" }
        ]
    }
];

// ========== STATE ==========
let currentData = [];
let currentPage = 1;
let pageSize = 6;
let currentAction = null;
let currentItemId = null;

// ========== UTILITIES ==========
function formatDate(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return dateStr;
}

function formatDateDMY(dateStr) {
    if (!dateStr) return "";
    return dateStr;
}

function getStatusLabel(status) {
    const map = {
        pending: { text: "Chờ xử lý", class: "status-pending" },
        processing: { text: "Đang xử lý", class: "status-processing" },
        approved: { text: "Đã duyệt", class: "status-approved" },
        rejected: { text: "Từ chối", class: "status-rejected" },
        supplement: { text: "Yêu cầu bổ sung", class: "status-supplement" }
    };
    return map[status] || { text: status, class: "status-pending" };
}

function showAlert(message, type = "success") {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert-toast alert-${type}`;
    alertDiv.innerHTML = `<i class='bx bx-${type === "success" ? "check-circle" : "info-circle"}'></i> ${message}`;
    alertDiv.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${type === "success" ? "#10B981" : type === "warning" ? "#F59E0B" : "#3B82F6"};
        color: white;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 500;
        z-index: 2000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 3000);
}

// ========== RENDER TABLE ==========
function renderTable() {
    const tbody = document.getElementById("tableBody");
    if (!currentData.length) {
        tbody.innerHTML = '<tr><td colspan="9" class="loading">Không có dữ liệu</td></tr>';
        return;
    }

    const start = (currentPage - 1) * pageSize;
    const pageData = currentData.slice(start, start + pageSize);

    tbody.innerHTML = pageData.map((item, idx) => {
        const status = getStatusLabel(item.trangThai);
        return `
            <tr>
                <td>${start + idx + 1}</td>
                <td><strong>${item.maHoSo}</strong></td>
                <td>${item.nguoiNhap.hoTen}</td>
                <td>${item.hoDich.soHoKhau}</td>
                <td>${item.nguoiNhap.cccd}</td>
                <td><span class="relation-badge">${item.quanHeChuHo}</span></td>
                <td>${formatDate(item.ngayNop)}</td>
                <td><span class="status-badge ${status.class}">${status.text}</span></td>
                <td><button class="btn-view" onclick="viewDetail('${item.id}')"><i class='bx bx-show-alt'></i></button></td>
            </tr>
        `;
    }).join("");

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(currentData.length / pageSize);
    const pagination = document.getElementById("pagination");
    
    if (totalPages <= 1) {
        pagination.innerHTML = "";
        return;
    }

    let html = `<button onclick="changePage(1)" ${currentPage === 1 ? "disabled" : ""}><i class='bx bx-chevrons-left'></i></button>`;
    html += `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}><i class='bx bx-chevron-left'></i></button>`;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span>...</span>`;
        }
    }

    html += `<button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}><i class='bx bx-chevron-right'></i></button>`;
    html += `<button onclick="changePage(${totalPages})" ${currentPage === totalPages ? "disabled" : ""}><i class='bx bx-chevrons-right'></i></button>`;

    pagination.innerHTML = html;
}

function changePage(page) {
    const totalPages = Math.ceil(currentData.length / pageSize);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderTable();
}

// ========== FILTER ==========
function filterData() {
    const statusFilter = document.getElementById("filterStatus").value;
    const dateFilter = document.getElementById("filterDate").value;
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    let filtered = [...hoSoNhapHo];

    if (statusFilter) {
        filtered = filtered.filter(item => item.trangThai === statusFilter);
    }
    if (dateFilter) {
        filtered = filtered.filter(item => item.ngayNop === dateFilter);
    }
    if (searchTerm) {
        filtered = filtered.filter(item => 
            item.maHoSo.toLowerCase().includes(searchTerm) || 
            item.nguoiNhap.hoTen.toLowerCase().includes(searchTerm) ||
            item.nguoiNhap.cccd.includes(searchTerm)
        );
    }

    currentData = filtered;
    currentPage = 1;
    renderTable();
}

// ========== CHECK IF PERSON ALREADY IN OTHER HOUSEHOLD ==========
function isInOtherHousehold(person) {
    // Mock check - in real system would check database
    return person.hoTen === "Trần Văn N" && person.cccd === "003090123456";
}

// ========== VIEW DETAIL ==========
function viewDetail(id) {
    const item = hoSoNhapHo.find(h => h.id === id);
    if (!item) return;

    const status = getStatusLabel(item.trangThai);
    const inOtherHouse = isInOtherHousehold(item.nguoiNhap);
    
    const modalBody = document.getElementById("modalBody");
    const modalFooter = document.getElementById("modalFooter");

    // Build HTML for detail modal
    modalBody.innerHTML = `
        <div class="detail-section">
            <h4>📋 Thông tin hồ sơ</h4>
            <div class="detail-grid">
                <div><span class="detail-label">Mã hồ sơ:</span><span class="detail-value">${item.maHoSo}</span></div>
                <div><span class="detail-label">Ngày nộp:</span><span class="detail-value">${formatDate(item.ngayNop)}</span></div>
                <div><span class="detail-label">Trạng thái:</span><span class="detail-value"><span class="status-badge ${status.class}">${status.text}</span></span></div>
                <div><span class="detail-label">Lý do nhập hộ:</span><span class="detail-value">${item.lyDo}</span></div>
            </div>
        </div>

        ${inOtherHouse && (item.trangThai === "pending" || item.trangThai === "processing") ? `
        <div class="warning-box">
            <i class='bx bx-error-circle'></i>
            <div>
                <strong>Cảnh báo hệ thống:</strong><br>
                Người đề nghị nhập hộ (${item.nguoiNhap.hoTen}) hiện đang có tên trong một hộ khẩu khác. 
                Vui lòng yêu cầu công dân hoàn tất thủ tục cắt hộ khẩu cũ trước khi duyệt.
            </div>
        </div>
        ` : ""}

        <div class="detail-section">
            <h4>👤 Thông tin người cần nhập hộ</h4>
            <div class="detail-grid">
                <div><span class="detail-label">Họ và tên:</span><span class="detail-value"><strong>${item.nguoiNhap.hoTen}</strong></span></div>
                <div><span class="detail-label">CCCD:</span><span class="detail-value">${item.nguoiNhap.cccd}</span></div>
                <div><span class="detail-label">Ngày sinh:</span><span class="detail-value">${item.nguoiNhap.ngaySinh}</span></div>
                <div><span class="detail-label">Giới tính:</span><span class="detail-value">${item.nguoiNhap.gioiTinh}</span></div>
                <div><span class="detail-label">Quê quán:</span><span class="detail-value">${item.nguoiNhap.queQuan}</span></div>
                <div><span class="detail-label">Địa chỉ cũ:</span><span class="detail-value">${item.nguoiNhap.diaChiCu}</span></div>
            </div>
        </div>

        <div class="detail-section">
            <h4>🏠 Thông tin hộ khẩu đích</h4>
            <div class="detail-grid">
                <div><span class="detail-label">Số hộ khẩu:</span><span class="detail-value">${item.hoDich.soHoKhau}</span></div>
                <div><span class="detail-label">Chủ hộ:</span><span class="detail-value">${item.hoDich.chuHo}</span></div>
                <div class="full-width"><span class="detail-label">Địa chỉ:</span><span class="detail-value">${item.hoDich.diaChi}</span></div>
                <div><span class="detail-label">Quan hệ với chủ hộ:</span><span class="detail-value"><span class="relation-badge">${item.quanHeChuHo}</span></span></div>
            </div>
            <div style="margin-top: 12px;">
                <strong>Danh sách thành viên hiện tại (${item.hoDich.thanhVien.length}):</strong>
                <div class="family-group" style="margin-top: 8px;">
                    <div class="family-header">
                        <span>Họ và tên</span>
                        <span>CCCD</span>
                        <span>Quan hệ</span>
                    </div>
                    <div class="family-body">
                        ${item.hoDich.thanhVien.map(m => `
                            <div class="member-item">
                                <span class="member-name">${m.hoTen}</span>
                                <span class="member-info">${m.cccd}</span>
                                <span class="member-info">${m.quanHe}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h4>📎 Giấy tờ đính kèm</h4>
            <div class="file-list">
                ${item.giayTo.map(f => `
                    <div class="file-item">
                        <div class="file-name"><i class='bx bx-file'></i> ${f.ten}</div>
                        <button class="btn-file" onclick="viewFile('${f.ten}')">Xem <i class='bx bx-show'></i></button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Build footer buttons based on status
    if (item.trangThai === "pending" || item.trangThai === "processing") {
        modalFooter.innerHTML = `
            <button class="btn-outline" onclick="closeModal()">Đóng</button>
            <button class="btn-secondary" style="background:#F59E0B;" onclick="showActionModal('supplement','${item.id}')">Yêu cầu bổ sung</button>
            <button class="btn-secondary" style="background:#EF4444;" onclick="showActionModal('reject','${item.id}')">Từ chối</button>
            <button class="btn-primary" onclick="showActionModal('approve','${item.id}')">Duyệt hồ sơ</button>
        `;
    } else if (item.trangThai === "supplement") {
        modalFooter.innerHTML = `
            <button class="btn-outline" onclick="closeModal()">Đóng</button>
            <button class="btn-primary" onclick="showActionModal('approve','${item.id}')">Duyệt sau bổ sung</button>
        `;
    } else {
        modalFooter.innerHTML = `<button class="btn-outline" onclick="closeModal()">Đóng</button>`;
    }

    document.getElementById("detailModal").classList.add("active");
}

// ========== ACTION MODAL ==========
function showActionModal(action, id) {
    currentAction = action;
    currentItemId = id;

    const modal = document.getElementById("actionModal");
    const title = document.getElementById("actionTitle");
    const message = document.getElementById("actionMessage");
    const reasonGroup = document.getElementById("reasonGroup");
    const reasonLabel = document.getElementById("reasonLabel");
    const confirmBtn = document.getElementById("confirmBtn");

    if (action === "approve") {
        title.innerText = "✅ Xác nhận duyệt hồ sơ";
        message.innerText = "Bạn có chắc chắn muốn duyệt hồ sơ nhập hộ này? Sau khi duyệt, hệ thống sẽ thêm nhân khẩu vào hộ đích.";
        reasonGroup.style.display = "none";
        confirmBtn.innerText = "Xác nhận duyệt";
        confirmBtn.className = "btn-primary";
        confirmBtn.style.background = "#10B981";
    } else if (action === "reject") {
        title.innerText = "❌ Từ chối hồ sơ";
        message.innerText = "Vui lòng nhập lý do từ chối:";
        reasonLabel.innerText = "Lý do từ chối:";
        reasonGroup.style.display = "block";
        confirmBtn.innerText = "Xác nhận từ chối";
        confirmBtn.className = "btn-secondary";
        confirmBtn.style.background = "#EF4444";
    } else if (action === "supplement") {
        title.innerText = "📝 Yêu cầu bổ sung giấy tờ";
        message.innerText = "Vui lòng nhập nội dung cần bổ sung:";
        reasonLabel.innerText = "Nội dung yêu cầu bổ sung:";
        reasonGroup.style.display = "block";
        confirmBtn.innerText = "Gửi yêu cầu";
        confirmBtn.className = "btn-secondary";
        confirmBtn.style.background = "#F59E0B";
    }

    document.getElementById("reasonText").value = "";
    modal.classList.add("active");
}

function executeAction() {
    const item = hoSoNhapHo.find(h => h.id === currentItemId);
    if (!item) return;

    let newStatus = "";
    let message = "";

    if (currentAction === "approve") {
        newStatus = "approved";
        message = `✅ Hồ sơ ${item.maHoSo} đã được duyệt thành công! Nhân khẩu ${item.nguoiNhap.hoTen} đã được thêm vào hộ khẩu đích.`;
    } else if (currentAction === "reject") {
        const reason = document.getElementById("reasonText").value;
        if (!reason.trim()) {
            showAlert("Vui lòng nhập lý do từ chối!", "warning");
            return;
        }
        newStatus = "rejected";
        item.ghiChu = reason;
        message = `❌ Hồ sơ ${item.maHoSo} đã bị từ chối. Lý do: ${reason}`;
    } else if (currentAction === "supplement") {
        const reason = document.getElementById("reasonText").value;
        if (!reason.trim()) {
            showAlert("Vui lòng nhập nội dung yêu cầu bổ sung!", "warning");
            return;
        }
        newStatus = "supplement";
        item.ghiChu = reason;
        message = `📝 Đã gửi yêu cầu bổ sung cho hồ sơ ${item.maHoSo}. Nội dung: ${reason}`;
    }

    item.trangThai = newStatus;
    showAlert(message, currentAction === "approve" ? "success" : "info");
    
    closeActionModal();
    closeModal();
    filterData();
}

function viewFile(fileName) {
    showAlert(`Đang mở file: ${fileName}`, "info");
}

function closeModal() {
    document.getElementById("detailModal").classList.remove("active");
}

function closeActionModal() {
    document.getElementById("actionModal").classList.remove("active");
    currentAction = null;
    currentItemId = null;
}

// ========== EVENT LISTENERS ==========
document.getElementById("btnSearch").addEventListener("click", filterData);
document.getElementById("btnReset").addEventListener("click", () => {
    document.getElementById("filterStatus").value = "";
    document.getElementById("filterDate").value = "";
    document.getElementById("searchInput").value = "";
    filterData();
});
document.getElementById("searchInput").addEventListener("keyup", (e) => {
    if (e.key === "Enter") filterData();
});
document.getElementById("confirmBtn").addEventListener("click", executeAction);

// ========== INIT ==========
filterData();