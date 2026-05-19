// ========== MOCK DATA ==========
let hoSoChuyenHoKhau = [
    {
        id: "1",
        maHoSo: "HS-CH-2023-001",
        nguoiYeuCau: "Nguyễn Văn A",
        laChuHo: true,
        hoHienTai: {
            soHoKhau: "HK001234",
            diaChi: "Số 12, Ngõ 34, Phường Hòa Khê, Quận Thanh Khê, TP Đà Nẵng",
            thanhVien: [
                { hoTen: "Nguyễn Văn A", cccd: "001090123456", quanHe: "Chủ hộ" },
                { hoTen: "Trần Thị B", cccd: "001092123456", quanHe: "Vợ" },
                { hoTen: "Nguyễn Văn C", cccd: "001095123456", quanHe: "Con trai" }
            ]
        },
        diaChiMoi: "Số 100, Đường Nguyễn Tất Thành, Phường Hòa Khánh Bắc, Quận Liên Chiểu, TP Đà Nẵng",
        lyDo: "Chuyển đến nhà mới sau khi mua căn hộ chung cư",
        ngayNop: "2025-10-28",
        trangThai: "pending",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_NguyenVanA.pdf", loai: "Căn cước công dân" },
            { ten: "DonDeNghiChuyenHoKhau.pdf", loai: "Đơn đề nghị chuyển hộ khẩu" },
            { ten: "GiayChungNhanQuyenSoHuuNha.pdf", loai: "Giấy chứng nhận quyền sở hữu nhà ở" },
            { ten: "HopDongMuaBanNha.pdf", loai: "Hợp đồng mua bán nhà" }
        ]
    },
    {
        id: "2",
        maHoSo: "HS-CH-2023-002",
        nguoiYeuCau: "Lê Văn D",
        laChuHo: false,
        hoHienTai: {
            soHoKhau: "HK005678",
            diaChi: "Số 56, Đường Hùng Vương, Phường Thạch Thang, Quận Hải Châu, TP Đà Nẵng",
            thanhVien: [
                { hoTen: "Lê Văn D", cccd: "002090123456", quanHe: "Chủ hộ" },
                { hoTen: "Lê Thị F", cccd: "002095123456", quanHe: "Con gái" }
            ]
        },
        diaChiMoi: "Số 200, Đường 2/9, Phường Hòa Cường, Quận Hải Châu, TP Đà Nẵng",
        lyDo: "Chuyển đến ở với con gái",
        ngayNop: "2025-10-27",
        trangThai: "approved",
        ghiChu: "Hồ sơ hợp lệ, đã cập nhật địa chỉ mới",
        giayTo: [
            { ten: "CCCD_LeVanD.pdf", loai: "Căn cước công dân" },
            { ten: "DonDeNghi.pdf", loai: "Đơn đề nghị" }
        ]
    },
    {
        id: "3",
        maHoSo: "HS-CH-2023-003",
        nguoiYeuCau: "Nguyễn Thị H",
        laChuHo: true,
        hoHienTai: {
            soHoKhau: "HK009999",
            diaChi: "Số 45, Đường Ngô Quyền, Phường An Hải Bắc, Quận Sơn Trà, TP Đà Nẵng",
            thanhVien: [
                { hoTen: "Nguyễn Thị H", cccd: "004090123456", quanHe: "Chủ hộ" },
                { hoTen: "Nguyễn Văn T", cccd: "004095123456", quanHe: "Con trai" }
            ]
        },
        diaChiMoi: "Số 30, Đường Võ Nguyên Giáp, Phường Mỹ An, Quận Ngũ Hành Sơn, TP Đà Nẵng",
        lyDo: "Chuyển đến gần nơi làm việc",
        ngayNop: "2025-10-26",
        trangThai: "processing",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_NguyenThiH.pdf", loai: "Căn cước công dân" },
            { ten: "DonDeNghiChuyenHo.pdf", loai: "Đơn đề nghị chuyển hộ" }
        ]
    },
    {
        id: "4",
        maHoSo: "HS-CH-2023-004",
        nguoiYeuCau: "Trần Văn M",
        laChuHo: true,
        hoHienTai: {
            soHoKhau: "HK007777",
            diaChi: "Số 78, Đường Lê Lợi, Phường Hải Châu, Quận Hải Châu, TP Đà Nẵng",
            thanhVien: [
                { hoTen: "Trần Văn M", cccd: "005090123456", quanHe: "Chủ hộ" },
                { hoTen: "Trần Thị N", cccd: "005092123456", quanHe: "Vợ" }
            ]
        },
        diaChiMoi: "Số 12, Đường Phạm Văn Đồng, Phường Hòa Xuân, Quận Cẩm Lệ, TP Đà Nẵng",
        lyDo: "Chuyển đến khu đô thị mới",
        ngayNop: "2025-10-25",
        trangThai: "supplement",
        ghiChu: "Cần bổ sung giấy xác nhận cư trú tại địa chỉ mới",
        giayTo: [
            { ten: "CCCD_TranVanM.pdf", loai: "Căn cước công dân" }
        ]
    },
    {
        id: "5",
        maHoSo: "HS-CH-2023-005",
        nguoiYeuCau: "Phạm Thị K",
        laChuHo: false,
        hoHienTai: {
            soHoKhau: "HK003333",
            diaChi: "Số 90, Đường Trần Phú, Phường Thạch Thang, Quận Hải Châu, TP Đà Nẵng",
            thanhVien: [
                { hoTen: "Phạm Văn L", cccd: "006090123456", quanHe: "Chủ hộ" },
                { hoTen: "Phạm Thị K", cccd: "006095123456", quanHe: "Con gái" }
            ]
        },
        diaChiMoi: "Số 150, Đường Nguyễn Hữu Thọ, Phường Hòa Cường, Quận Hải Châu, TP Đà Nẵng",
        lyDo: "Chuyển đến ở với bạn trai chuẩn bị kết hôn",
        ngayNop: "2025-10-24",
        trangThai: "rejected",
        ghiChu: "Thiếu giấy ủy quyền của chủ hộ",
        giayTo: [
            { ten: "CCCD_PhamThiK.pdf", loai: "Căn cước công dân" }
        ]
    },
    {
        id: "6",
        maHoSo: "HS-CH-2023-006",
        nguoiYeuCau: "Hoàng Văn G",
        laChuHo: true,
        hoHienTai: {
            soHoKhau: "HK001111",
            diaChi: "Số 22, Đường Hoàng Diệu, Phường Hải Châu, Quận Hải Châu, TP Đà Nẵng",
            thanhVien: [
                { hoTen: "Hoàng Văn G", cccd: "007090123456", quanHe: "Chủ hộ" }
            ]
        },
        diaChiMoi: "Số 88, Đường Nguyễn Văn Linh, Phường Hòa Cường, Quận Hải Châu, TP Đà Nẵng",
        lyDo: "Mua nhà mới, chuyển đến ở",
        ngayNop: "2025-10-23",
        trangThai: "pending",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_HoangVanG.pdf", loai: "Căn cước công dân" },
            { ten: "DonDeNghi.pdf", loai: "Đơn đề nghị" },
            { ten: "HopDongMuaNha.pdf", loai: "Hợp đồng mua nhà" },
            { ten: "GiayChungNhanQuyenSuDungDat.pdf", loai: "Giấy chứng nhận quyền sử dụng đất" }
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

// ========== CHECK ADDRESS VALIDITY ==========
function isAddressValid(address) {
    // Mock check - in real system would check database
    return address.includes("Đà Nẵng");
}

// ========== CHECK IF USER HAS AUTHORIZATION ==========
function hasUserAuthorization(item) {
    // Mock check - if requester is not head of household, needs authorization
    return item.laChuHo === true;
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
                <td>${item.nguoiYeuCau} ${item.laChuHo ? '<span class="location-badge">Chủ hộ</span>' : '<span class="location-badge" style="background:#FEF3C7; color:#D97706;">Thành viên</span>'}</td>
                <td>${item.hoHienTai.soHoKhau}</td>
                <td>${item.hoHienTai.diaChi.substring(0, 50)}...</td>
                <td><strong>${item.diaChiMoi.substring(0, 50)}...</strong></td>
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

    let filtered = [...hoSoChuyenHoKhau];

    if (statusFilter) {
        filtered = filtered.filter(item => item.trangThai === statusFilter);
    }
    if (dateFilter) {
        filtered = filtered.filter(item => item.ngayNop === dateFilter);
    }
    if (searchTerm) {
        filtered = filtered.filter(item => 
            item.maHoSo.toLowerCase().includes(searchTerm) || 
            item.nguoiYeuCau.toLowerCase().includes(searchTerm) ||
            item.hoHienTai.soHoKhau.toLowerCase().includes(searchTerm) ||
            item.diaChiMoi.toLowerCase().includes(searchTerm)
        );
    }

    currentData = filtered;
    currentPage = 1;
    renderTable();
}

// ========== VIEW DETAIL ==========
function viewDetail(id) {
    const item = hoSoChuyenHoKhau.find(h => h.id === id);
    if (!item) return;

    const status = getStatusLabel(item.trangThai);
    const isAddressOk = isAddressValid(item.diaChiMoi);
    const hasAuth = hasUserAuthorization(item);
    
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
                <div><span class="detail-label">Người yêu cầu:</span><span class="detail-value">${item.nguoiYeuCau} ${item.laChuHo ? '(Chủ hộ)' : '(Thành viên)'}</span></div>
            </div>
        </div>

        ${!hasAuth && (item.trangThai === "pending" || item.trangThai === "processing") ? `
        <div class="permission-warning">
            <i class='bx bx-error-circle'></i>
            <div>
                <strong>Cảnh báo:</strong> Người yêu cầu không phải chủ hộ và không có giấy ủy quyền. Cần yêu cầu bổ sung giấy ủy quyền của chủ hộ.
            </div>
        </div>
        ` : ""}

        ${!isAddressOk && (item.trangThai === "pending" || item.trangThai === "processing") ? `
        <div class="member-check warning">
            <i class='bx bx-map'></i>
            <div>
                <strong>Cảnh báo:</strong> Địa chỉ mới (${item.diaChiMoi}) không nằm trong địa bàn quản lý của phường/xã. Vui lòng kiểm tra lại.
            </div>
        </div>
        ` : ""}

        <div class="detail-section">
            <h4>🏠 Thông tin hộ khẩu hiện tại</h4>
            <div class="detail-grid">
                <div><span class="detail-label">Số hộ khẩu:</span><span class="detail-value">${item.hoHienTai.soHoKhau}</span></div>
                <div class="full-width"><span class="detail-label">Địa chỉ:</span><span class="detail-value">${item.hoHienTai.diaChi}</span></div>
            </div>
            <div style="margin-top: 12px;">
                <strong>Danh sách thành viên (${item.hoHienTai.thanhVien.length}):</strong>
                <div class="member-list" style="margin-top: 8px;">
                    ${item.hoHienTai.thanhVien.map(m => `
                        <div class="member-item">
                            <span class="member-name">${m.hoTen}</span>
                            <span class="member-info">${m.quanHe} | ${m.cccd}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h4>📍 Địa chỉ chuyển đến</h4>
            <div class="info-alert">
                <i class='bx bx-info-circle'></i>
                <div>
                    <strong>Địa chỉ mới:</strong> ${item.diaChiMoi}<br>
                    <strong>Lý do chuyển:</strong> ${item.lyDo}
                </div>
            </div>
            <div class="route-line">
                <i class='bx bx-map-alt'></i>
                <span class="route-text">Tuyến đường: ${item.hoHienTai.diaChi.split(",")[0]} → ${item.diaChiMoi.split(",")[0]}</span>
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
        message.innerText = "Bạn có chắc chắn muốn duyệt hồ sơ chuyển hộ khẩu này? Sau khi duyệt, hệ thống sẽ cập nhật địa chỉ mới.";
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
    const item = hoSoChuyenHoKhau.find(h => h.id === currentItemId);
    if (!item) return;

    let newStatus = "";
    let message = "";

    if (currentAction === "approve") {
        // Check address validity
        if (!isAddressValid(item.diaChiMoi)) {
            showAlert("Không thể duyệt! Địa chỉ mới không nằm trong địa bàn quản lý.", "warning");
            closeActionModal();
            return;
        }
        newStatus = "approved";
        message = `✅ Hồ sơ ${item.maHoSo} đã được duyệt thành công! Địa chỉ mới đã được cập nhật.`;
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