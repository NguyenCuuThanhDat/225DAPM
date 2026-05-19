// ========== MOCK DATA ==========
let hoSoDoiChuHo = [
    {
        id: "1",
        maHoSo: "HS-TD-2023-001",
        hoGiaDinh: {
            soHoKhau: "HK001234",
            diaChi: "Số 12, Ngõ 34, Phường X, Quận Y, TP Z",
            thanhVien: [
                { hoTen: "Nguyễn Văn A", cccd: "001090123456", ngaySinh: "15/05/1970", quanHe: "Chủ hộ" },
                { hoTen: "Trần Thị B", cccd: "001092123456", ngaySinh: "20/08/1975", quanHe: "Vợ" },
                { hoTen: "Nguyễn Văn C", cccd: "001095123456", ngaySinh: "10/12/1998", quanHe: "Con trai" }
            ]
        },
        chuHoHienTai: {
            hoTen: "Nguyễn Văn A",
            cccd: "001090123456",
            ngaySinh: "15/05/1970"
        },
        chuHoMoi: {
            hoTen: "Nguyễn Văn C",
            cccd: "001095123456",
            ngaySinh: "10/12/1998"
        },
        quanHe: "Con trai",
        lyDo: "Chủ hộ cũ tuổi cao, chuyển giao cho con trai quản lý",
        ngayGui: "2025-10-27",
        trangThai: "pending",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_NguyenVanA.pdf", loai: "Căn cước công dân - Chủ hộ cũ" },
            { ten: "CCCD_NguyenVanC.pdf", loai: "Căn cước công dân - Chủ hộ mới" },
            { ten: "DonDeNghiDoiChuHo.pdf", loai: "Đơn đề nghị thay đổi chủ hộ" },
            { ten: "BienBanHopGiaDinh.pdf", loai: "Biên bản họp gia đình đồng ý đổi chủ hộ" }
        ]
    },
    {
        id: "2",
        maHoSo: "HS-TD-2023-002",
        hoGiaDinh: {
            soHoKhau: "HK005678",
            diaChi: "Số 56, Đường A, Phường X, Quận Y, TP Z",
            thanhVien: [
                { hoTen: "Lê Văn D", cccd: "002090123456", ngaySinh: "10/03/1968", quanHe: "Chủ hộ" },
                { hoTen: "Lê Thị F", cccd: "002095123456", ngaySinh: "20/07/1995", quanHe: "Con gái" }
            ]
        },
        chuHoHienTai: {
            hoTen: "Lê Văn D",
            cccd: "002090123456",
            ngaySinh: "10/03/1968"
        },
        chuHoMoi: {
            hoTen: "Lê Thị F",
            cccd: "002095123456",
            ngaySinh: "20/07/1995"
        },
        quanHe: "Con gái",
        lyDo: "Chủ hộ cũ đi nước ngoài định cư cùng con",
        ngayGui: "2025-10-26",
        trangThai: "approved",
        ghiChu: "Hồ sơ hợp lệ, đã cập nhật chủ hộ mới",
        giayTo: [
            { ten: "CCCD_LeVanD.pdf", loai: "Căn cước công dân" },
            { ten: "CCCD_LeThiF.pdf", loai: "Căn cước công dân" }
        ]
    },
    {
        id: "3",
        maHoSo: "HS-TD-2023-003",
        hoGiaDinh: {
            soHoKhau: "HK01234",
            diaChi: "Số 78, Đường C, Phường Z, Quận X, TP Y",
            thanhVien: [
                { hoTen: "Hoàng Văn H", cccd: "003090123456", ngaySinh: "05/11/1972", quanHe: "Chủ hộ" },
                { hoTen: "Hoàng Thị K", cccd: "003092123456", ngaySinh: "12/03/1975", quanHe: "Vợ" },
                { hoTen: "Hoàng Văn G", cccd: "003095123456", ngaySinh: "15/03/2000", quanHe: "Con trai" }
            ]
        },
        chuHoHienTai: {
            hoTen: "Hoàng Văn H",
            cccd: "003090123456",
            ngaySinh: "05/11/1972"
        },
        chuHoMoi: {
            hoTen: "Hoàng Thị K",
            cccd: "003092123456",
            ngaySinh: "12/03/1975"
        },
        quanHe: "Vợ",
        lyDo: "Chồng thường xuyên đi công tác xa nhà",
        ngayGui: "2025-10-25",
        trangThai: "processing",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_HoangVanH.pdf", loai: "Căn cước công dân" },
            { ten: "CCCD_HoangThiK.pdf", loai: "Căn cước công dân" },
            { ten: "DonDeNghi.pdf", loai: "Đơn đề nghị" }
        ]
    },
    {
        id: "4",
        maHoSo: "HS-TD-2023-004",
        hoGiaDinh: {
            soHoKhau: "HK005678",
            diaChi: "Số 45, Đường E, Phường U, Quận V, TP W",
            thanhVien: [
                { hoTen: "Đinh Văn I", cccd: "004090123456", ngaySinh: "25/09/1965", quanHe: "Chủ hộ" },
                { hoTen: "Đinh Thị H", cccd: "004095123456", ngaySinh: "01/12/1997", quanHe: "Con gái" }
            ]
        },
        chuHoHienTai: {
            hoTen: "Đinh Văn I",
            cccd: "004090123456",
            ngaySinh: "25/09/1965"
        },
        chuHoMoi: {
            hoTen: "Đinh Thị H",
            cccd: "004095123456",
            ngaySinh: "01/12/1997"
        },
        quanHe: "Con gái",
        lyDo: "Chủ hộ cũ đã qua đời",
        ngayGui: "2025-10-24",
        trangThai: "supplement",
        ghiChu: "Cần bổ sung giấy chứng tử của chủ hộ cũ",
        giayTo: [
            { ten: "CCCD_DinhThiH.pdf", loai: "Căn cước công dân" }
        ]
    },
    {
        id: "5",
        maHoSo: "HS-TD-2023-005",
        hoGiaDinh: {
            soHoKhau: "HK001234",
            diaChi: "Số 12, Ngõ 34, Phường X, Quận Y, TP Z",
            thanhVien: [
                { hoTen: "Nguyễn Văn A", cccd: "001090123456", ngaySinh: "15/05/1970", quanHe: "Chủ hộ" },
                { hoTen: "Trần Thị B", cccd: "001092123456", ngaySinh: "20/08/1975", quanHe: "Vợ" }
            ]
        },
        chuHoHienTai: {
            hoTen: "Nguyễn Văn A",
            cccd: "001090123456",
            ngaySinh: "15/05/1970"
        },
        chuHoMoi: {
            hoTen: "Phạm Văn X",
            cccd: "009095123456",
            ngaySinh: "01/01/1990"
        },
        quanHe: "Không có quan hệ",
        lyDo: "Nhờ đứng tên hộ khẩu",
        ngayGui: "2025-10-23",
        trangThai: "rejected",
        ghiChu: "Người đề nghị không phải thành viên trong hộ gia đình",
        giayTo: [
            { ten: "CCCD_PhamVanX.pdf", loai: "Căn cước công dân" }
        ]
    },
    {
        id: "6",
        maHoSo: "HS-TD-2023-006",
        hoGiaDinh: {
            soHoKhau: "HK009999",
            diaChi: "Số 99, Đường Mới, Phường A, Quận B, TP C",
            thanhVien: [
                { hoTen: "Trần Văn M", cccd: "006090123456", ngaySinh: "08/08/1980", quanHe: "Chủ hộ" },
                { hoTen: "Trần Thị N", cccd: "006092123456", ngaySinh: "10/10/1985", quanHe: "Vợ" },
                { hoTen: "Trần Văn P", cccd: "006095123456", ngaySinh: "05/05/2010", quanHe: "Con trai" }
            ]
        },
        chuHoHienTai: {
            hoTen: "Trần Văn M",
            cccd: "006090123456",
            ngaySinh: "08/08/1980"
        },
        chuHoMoi: {
            hoTen: "Trần Thị N",
            cccd: "006092123456",
            ngaySinh: "10/10/1985"
        },
        quanHe: "Vợ",
        lyDo: "Chồng bị tai nạn không còn minh mẫn",
        ngayGui: "2025-10-22",
        trangThai: "pending",
        ghiChu: "",
        giayTo: [
            { ten: "CCCD_TranVanM.pdf", loai: "Căn cước công dân" },
            { ten: "CCCD_TranThiN.pdf", loai: "Căn cước công dân" },
            { ten: "GiayXacNhanBenh.pdf", loai: "Giấy xác nhận bệnh" },
            { ten: "DonDeNghi.pdf", loai: "Đơn đề nghị" }
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

// ========== CHECK IF NEW HEAD IS MEMBER ==========
function isMemberOfHousehold(item) {
    return item.hoGiaDinh.thanhVien.some(m => 
        m.hoTen === item.chuHoMoi.hoTen && 
        m.cccd === item.chuHoMoi.cccd
    );
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
                <td>${item.hoGiaDinh.soHoKhau}</td>
                <td>${item.chuHoHienTai.hoTen}</td>
                <td><strong style="color: var(--primary);">${item.chuHoMoi.hoTen}</strong></td>
                <td>${item.quanHe}</td>
                <td>${formatDate(item.ngayGui)}</td>
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

    let filtered = [...hoSoDoiChuHo];

    if (statusFilter) {
        filtered = filtered.filter(item => item.trangThai === statusFilter);
    }
    if (dateFilter) {
        filtered = filtered.filter(item => item.ngayGui === dateFilter);
    }
    if (searchTerm) {
        filtered = filtered.filter(item => 
            item.maHoSo.toLowerCase().includes(searchTerm) || 
            item.hoGiaDinh.soHoKhau.toLowerCase().includes(searchTerm) ||
            item.chuHoHienTai.hoTen.toLowerCase().includes(searchTerm) ||
            item.chuHoMoi.hoTen.toLowerCase().includes(searchTerm)
        );
    }

    currentData = filtered;
    currentPage = 1;
    renderTable();
}

// ========== VIEW DETAIL ==========
function viewDetail(id) {
    const item = hoSoDoiChuHo.find(h => h.id === id);
    if (!item) return;

    const status = getStatusLabel(item.trangThai);
    const isMember = isMemberOfHousehold(item);
    
    const modalBody = document.getElementById("modalBody");
    const modalFooter = document.getElementById("modalFooter");

    // Build HTML for detail modal
    modalBody.innerHTML = `
        <div class="detail-section">
            <h4>📋 Thông tin hồ sơ</h4>
            <div class="detail-grid">
                <div><span class="detail-label">Mã hồ sơ:</span><span class="detail-value">${item.maHoSo}</span></div>
                <div><span class="detail-label">Ngày nộp:</span><span class="detail-value">${formatDate(item.ngayGui)}</span></div>
                <div><span class="detail-label">Trạng thái:</span><span class="detail-value"><span class="status-badge ${status.class}">${status.text}</span></span></div>
            </div>
        </div>

        ${!isMember && (item.trangThai === "pending" || item.trangThai === "processing") ? `
        <div class="member-check warning">
            <i class='bx bx-error-circle'></i>
            <div>
                <strong>Cảnh báo hệ thống:</strong><br>
                Người được đề nghị làm chủ hộ mới (${item.chuHoMoi.hoTen}) không có trong danh sách thành viên của hộ gia đình này.
                Vui lòng từ chối hồ sơ theo quy định.
            </div>
        </div>
        ` : ""}

        <div class="detail-section">
            <h4>🏠 Thông tin hộ gia đình</h4>
            <div class="detail-grid">
                <div><span class="detail-label">Số hộ khẩu:</span><span class="detail-value">${item.hoGiaDinh.soHoKhau}</span></div>
                <div class="full-width"><span class="detail-label">Địa chỉ:</span><span class="detail-value">${item.hoGiaDinh.diaChi}</span></div>
            </div>
            <div style="margin-top: 12px;">
                <strong>Danh sách thành viên hiện tại (${item.hoGiaDinh.thanhVien.length}):</strong>
                <div class="member-list" style="margin-top: 8px;">
                    ${item.hoGiaDinh.thanhVien.map(m => `
                        <div class="member-item">
                            <span class="member-name">${m.hoTen}</span>
                            <span class="member-info">${m.quanHe} | ${m.cccd}</span>
                            ${m.hoTen === item.chuHoMoi.hoTen ? '<span class="relation-badge" style="background:#D1FAE5; color:#059669;">Đề nghị làm chủ hộ mới</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h4>🔄 So sánh thông tin chủ hộ</h4>
            <div class="compare-container">
                <div class="compare-card old">
                    <div class="compare-header old">
                        <i class='bx bx-user'></i>
                        <span>Chủ hộ hiện tại</span>
                    </div>
                    <div class="compare-content">
                        <div class="compare-row"><span class="compare-label">Họ và tên:</span><span class="compare-value">${item.chuHoHienTai.hoTen}</span></div>
                        <div class="compare-row"><span class="compare-label">CCCD:</span><span class="compare-value">${item.chuHoHienTai.cccd}</span></div>
                        <div class="compare-row"><span class="compare-label">Ngày sinh:</span><span class="compare-value">${item.chuHoHienTai.ngaySinh}</span></div>
                    </div>
                </div>
                <div class="compare-card new">
                    <div class="compare-header new">
                        <i class='bx bx-user-plus'></i>
                        <span>Chủ hộ mới đề nghị</span>
                    </div>
                    <div class="compare-content">
                        <div class="compare-row"><span class="compare-label">Họ và tên:</span><span class="compare-value highlight">${item.chuHoMoi.hoTen}</span></div>
                        <div class="compare-row"><span class="compare-label">CCCD:</span><span class="compare-value highlight">${item.chuHoMoi.cccd}</span></div>
                        <div class="compare-row"><span class="compare-label">Ngày sinh:</span><span class="compare-value highlight">${item.chuHoMoi.ngaySinh}</span></div>
                        <div class="compare-row"><span class="compare-label">Quan hệ:</span><span class="compare-value highlight">${item.quanHe}</span></div>
                    </div>
                </div>
            </div>
            <div class="detail-row" style="margin-top: 12px;">
                <span class="detail-label">Lý do thay đổi:</span>
                <span class="detail-value">${item.lyDo}</span>
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
        message.innerText = "Bạn có chắc chắn muốn duyệt hồ sơ thay đổi chủ hộ này? Sau khi duyệt, hệ thống sẽ cập nhật chủ hộ mới cho hộ gia đình.";
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
    const item = hoSoDoiChuHo.find(h => h.id === currentItemId);
    if (!item) return;

    let newStatus = "";
    let message = "";

    if (currentAction === "approve") {
        // Check if new head is member of household
        const isMember = isMemberOfHousehold(item);
        if (!isMember) {
            showAlert("Không thể duyệt! Người đề nghị làm chủ hộ mới không phải thành viên trong hộ gia đình.", "warning");
            closeActionModal();
            return;
        }
        newStatus = "approved";
        message = `✅ Hồ sơ ${item.maHoSo} đã được duyệt thành công! Chủ hộ mới: ${item.chuHoMoi.hoTen}`;
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