// ========== MOCK DATA ==========
let hoSoTachHo = [
    {
        id: "1",
        maHoSo: "HS-TH-2023-001",
        nguoiYeuCau: "Nguyễn Văn C",
        hoHienTai: {
            soHoKhau: "HK001234",
            chuHo: "Nguyễn Văn A",
            diaChi: "Số 12, Ngõ 34, Phường X, Quận Y, TP Z",
            thanhVien: [
                { hoTen: "Nguyễn Văn A", cccd: "001090123456", ngaySinh: "15/05/1970", quanHe: "Chủ hộ" },
                { hoTen: "Trần Thị B", cccd: "001092123456", ngaySinh: "20/08/1975", quanHe: "Vợ" },
                { hoTen: "Nguyễn Văn C", cccd: "001095123456", ngaySinh: "10/12/1998", quanHe: "Con trai" }
            ]
        },
        thanhVienTach: [
            { hoTen: "Nguyễn Văn C", cccd: "001095123456", ngaySinh: "10/12/1998" }
        ],
        diaChiMoi: "Số 99, Phố Mới, Phường X, Quận Y, TP Z",
        lyDo: "Ra ở riêng lập gia đình mới",
        ngayNop: "2025-10-25",
        trangThai: "pending",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_NguyenVanC.pdf", loai: "Căn cước công dân" },
            { ten: "DonDeNghiTachHo.pdf", loai: "Đơn đề nghị tách hộ" }
        ]
    },
    {
        id: "2",
        maHoSo: "HS-TH-2023-002",
        nguoiYeuCau: "Lê Thị F",
        hoHienTai: {
            soHoKhau: "HK005678",
            chuHo: "Lê Văn D",
            diaChi: "Số 56, Đường A, Phường X, Quận Y, TP Z",
            thanhVien: [
                { hoTen: "Lê Văn D", cccd: "002090123456", ngaySinh: "10/03/1968", quanHe: "Chủ hộ" },
                { hoTen: "Lê Thị F", cccd: "002095123456", ngaySinh: "20/07/1995", quanHe: "Con gái" }
            ]
        },
        thanhVienTach: [
            { hoTen: "Lê Thị F", cccd: "002095123456", ngaySinh: "20/07/1995" }
        ],
        diaChiMoi: "Số 200, Đường B, Phường Y, Quận Z, TP X",
        lyDo: "Kết hôn và ra ở riêng",
        ngayNop: "2025-10-24",
        trangThai: "approved",
        ghiChu: "Hồ sơ hợp lệ, đã duyệt",
        giayTo: [
            { ten: "CCCD_LeThiF.pdf", loai: "Căn cước công dân" }
        ]
    },
    {
        id: "3",
        maHoSo: "HS-TH-2023-003",
        nguoiYeuCau: "Hoàng Văn G",
        hoHienTai: {
            soHoKhau: "HK01234",
            chuHo: "Hoàng Văn H",
            diaChi: "Số 78, Đường C, Phường Z, Quận X, TP Y",
            thanhVien: [
                { hoTen: "Hoàng Văn H", cccd: "003090123456", ngaySinh: "05/11/1972", quanHe: "Chủ hộ" },
                { hoTen: "Hoàng Văn G", cccd: "003095123456", ngaySinh: "15/03/2000", quanHe: "Con trai" }
            ]
        },
        thanhVienTach: [
            { hoTen: "Hoàng Văn G", cccd: "003095123456", ngaySinh: "15/03/2000" }
        ],
        diaChiMoi: "Số 300, Đường D, Phường T, Quận U, TP V",
        lyDo: "Đi làm xa nhà",
        ngayNop: "2025-10-23",
        trangThai: "rejected",
        ghiChu: "Thiếu giấy tờ chứng minh chỗ ở mới",
        giayTo: [
            { ten: "CCCD_HoangVanG.pdf", loai: "Căn cước công dân" }
        ]
    },
    {
        id: "4",
        maHoSo: "HS-TH-2023-004",
        nguoiYeuCau: "Đinh Thị H",
        hoHienTai: {
            soHoKhau: "HK005678",
            chuHo: "Đinh Văn I",
            diaChi: "Số 45, Đường E, Phường U, Quận V, TP W",
            thanhVien: [
                { hoTen: "Đinh Văn I", cccd: "004090123456", ngaySinh: "25/09/1965", quanHe: "Chủ hộ" },
                { hoTen: "Đinh Thị H", cccd: "004095123456", ngaySinh: "01/12/1997", quanHe: "Con gái" }
            ]
        },
        thanhVienTach: [
            { hoTen: "Đinh Thị H", cccd: "004095123456", ngaySinh: "01/12/1997" }
        ],
        diaChiMoi: "Số 120, Đường F, Phường V, Quận W, TP X",
        lyDo: "Lập gia đình mới",
        ngayNop: "2025-10-22",
        trangThai: "supplement",
        ghiChu: "Cần bổ sung giấy xác nhận tình trạng hôn nhân",
        giayTo: [
            { ten: "CCCD_DinhThiH.pdf", loai: "Căn cước công dân" }
        ]
    },
    {
        id: "5",
        maHoSo: "HS-TH-2023-005",
        nguoiYeuCau: "Ngô Văn I",
        hoHienTai: {
            soHoKhau: "HK01234",
            chuHo: "Ngô Văn K",
            diaChi: "Số 33, Đường G, Phường W, Quận X, TP Y",
            thanhVien: [
                { hoTen: "Ngô Văn K", cccd: "005090123456", ngaySinh: "12/04/1969", quanHe: "Chủ hộ" },
                { hoTen: "Ngô Văn I", cccd: "005095123456", ngaySinh: "18/06/1999", quanHe: "Con trai" }
            ]
        },
        thanhVienTach: [
            { hoTen: "Ngô Văn I", cccd: "005095123456", ngaySinh: "18/06/1999" }
        ],
        diaChiMoi: "Số 500, Đường H, Phường X, Quận Y, TP Z",
        lyDo: "Chuyển công tác",
        ngayNop: "2025-10-21",
        trangThai: "processing",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_NgoVanI.pdf", loai: "Căn cước công dân" },
            { ten: "GiayChuyenCongTac.pdf", loai: "Giấy chuyển công tác" }
        ]
    }
];

// ========== STATE ==========
let currentData = [];
let currentPage = 1;
let pageSize = 5;
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
        background: ${type === "success" ? "#10B981" : "#3B82F6"};
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
        tbody.innerHTML = '<tr><td colspan="8" class="loading">Không có dữ liệu</td></tr>';
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
                <td>${item.nguoiYeuCau}</td>
                <td>${item.hoHienTai.soHoKhau}</td>
                <td>${item.thanhVienTach.length}</td>
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

    let filtered = [...hoSoTachHo];

    if (statusFilter) {
        filtered = filtered.filter(item => item.trangThai === statusFilter);
    }
    if (dateFilter) {
        filtered = filtered.filter(item => item.ngayNop === dateFilter);
    }
    if (searchTerm) {
        filtered = filtered.filter(item => 
            item.maHoSo.toLowerCase().includes(searchTerm) || 
            item.nguoiYeuCau.toLowerCase().includes(searchTerm)
        );
    }

    currentData = filtered;
    currentPage = 1;
    renderTable();
}

// ========== VIEW DETAIL ==========
function viewDetail(id) {
    const item = hoSoTachHo.find(h => h.id === id);
    if (!item) return;

    const status = getStatusLabel(item.trangThai);
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
                <div><span class="detail-label">Người yêu cầu:</span><span class="detail-value">${item.nguoiYeuCau}</span></div>
            </div>
        </div>

        <div class="detail-section">
            <h4>🏠 Thông tin hộ khẩu hiện tại</h4>
            <div class="detail-grid">
                <div><span class="detail-label">Số hộ khẩu:</span><span class="detail-value">${item.hoHienTai.soHoKhau}</span></div>
                <div><span class="detail-label">Chủ hộ:</span><span class="detail-value">${item.hoHienTai.chuHo}</span></div>
                <div class="full-width"><span class="detail-label">Địa chỉ:</span><span class="detail-value">${item.hoHienTai.diaChi}</span></div>
            </div>
            <div style="margin-top: 12px;">
                <strong>Danh sách thành viên hiện tại:</strong>
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
            <h4>✂️ Thông tin đề nghị tách hộ</h4>
            <div class="highlight-box" style="padding: 16px; border-radius: 10px; margin-bottom: 16px;">
                <div><span class="detail-label">Địa chỉ hộ mới:</span><span class="detail-value"><strong>${item.diaChiMoi}</strong></span></div>
                <div><span class="detail-label">Lý do tách:</span><span class="detail-value">${item.lyDo}</span></div>
            </div>
            <strong>Thành viên đề nghị tách:</strong>
            <div class="member-list highlight" style="margin-top: 8px; background: #FEF2F2;">
                ${item.thanhVienTach.map(m => `
                    <div class="member-item">
                        <span class="member-name">${m.hoTen}</span>
                        <span class="member-info">${m.cccd} | ${m.ngaySinh}</span>
                    </div>
                `).join('')}
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
        message.innerText = "Bạn có chắc chắn muốn duyệt hồ sơ tách hộ này? Sau khi duyệt, hệ thống sẽ tạo hộ khẩu mới và cập nhật thông tin.";
        reasonGroup.style.display = "none";
        confirmBtn.innerText = "Xác nhận duyệt";
        confirmBtn.className = "btn-primary";
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
    const item = hoSoTachHo.find(h => h.id === currentItemId);
    if (!item) return;

    let newStatus = "";
    let message = "";

    if (currentAction === "approve") {
        newStatus = "approved";
        message = `✅ Hồ sơ ${item.maHoSo} đã được duyệt thành công! Hộ khẩu mới đã được tạo.`;
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