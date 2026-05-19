// ========== MOCK DATA ==========
let taiKhoan = [
    { id: 1, tenDangNhap: 'admin', email: 'admin@gmail.com', hoTen: 'Admin System', vaiTro: 'Admin', trangThai: 'Hoạt động', ngayTao: '2024-01-01', soDienThoai: '0988888888' },
    { id: 2, tenDangNhap: 'tranthib', email: 'tranthib@ubnd.gov.vn', hoTen: 'Trần Thị B', vaiTro: 'Cán bộ UBND', trangThai: 'Hoạt động', ngayTao: '2024-01-05', soDienThoai: '0912345678' },
    { id: 3, tenDangNhap: 'levand', email: 'levand@gmail.com', hoTen: 'Lê Văn D', vaiTro: 'Cán bộ đăng ký', trangThai: 'Hoạt động', ngayTao: '2024-01-08', soDienThoai: '0923456789' },
    { id: 4, tenDangNhap: 'nguyenvana', email: 'vana@gmail.com', hoTen: 'Nguyễn Văn A', vaiTro: 'Công dân', trangThai: 'Hoạt động', ngayTao: '2024-01-10', soDienThoai: '0934567890' },
    { id: 5, tenDangNhap: 'canbo1', email: 'canbo1@gmail.com', hoTen: 'Phạm Thị C', vaiTro: 'Cán bộ UBND', trangThai: 'Đã khóa', ngayTao: '2024-01-15', soDienThoai: '0945678901' },
    { id: 6, tenDangNhap: 'congdan1', email: 'congdan1@gmail.com', hoTen: 'Hoàng Văn E', vaiTro: 'Công dân', trangThai: 'Hoạt động', ngayTao: '2024-01-20', soDienThoai: '0956789012' },
    { id: 7, tenDangNhap: 'canbo2', email: 'canbo2@ubnd.gov.vn', hoTen: 'Ngô Thị F', vaiTro: 'Cán bộ đăng ký', trangThai: 'Hoạt động', ngayTao: '2024-02-01', soDienThoai: '0967890123' },
    { id: 8, tenDangNhap: 'congdan2', email: 'congdan2@gmail.com', hoTen: 'Đỗ Văn G', vaiTro: 'Công dân', trangThai: 'Đã khóa', ngayTao: '2024-02-05', soDienThoai: '0978901234' },
    { id: 9, tenDangNhap: 'canbo3', email: 'canbo3@ubnd.gov.vn', hoTen: 'Vũ Thị H', vaiTro: 'Cán bộ UBND', trangThai: 'Hoạt động', ngayTao: '2024-02-10', soDienThoai: '0989012345' }
];

let currentData = [];
let currentPage = 1;
let pageSize = 6;
let editingId = null;
let confirmAction = null;
let resetAccountId = null;

// ========== UTILITIES ==========
function formatDate(dateStr) {
    if (!dateStr) return '';
    return dateStr;
}

function getRoleClass(role) {
    const map = {
        'Admin': 'role-admin',
        'Cán bộ UBND': 'role-canbo-ubnd',
        'Cán bộ đăng ký': 'role-canbo-dangky',
        'Công dân': 'role-congdan'
    };
    return map[role] || 'role-congdan';
}

function getRoleIcon(role) {
    const map = {
        'Admin': '👑',
        'Cán bộ UBND': '🏛️',
        'Cán bộ đăng ký': '👮',
        'Công dân': '👤'
    };
    return map[role] || '👤';
}

function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = `<i class='bx bx-${type === 'success' ? 'check-circle' : 'info-circle'}'></i> ${message}`;
    alertDiv.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${type === 'success' ? '#10B981' : '#3B82F6'};
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

// ========== UPDATE STATS ==========
function updateStats() {
    const total = taiKhoan.length;
    const active = taiKhoan.filter(acc => acc.trangThai === 'Hoạt động').length;
    const locked = taiKhoan.filter(acc => acc.trangThai === 'Đã khóa').length;
    const citizens = taiKhoan.filter(acc => acc.vaiTro === 'Công dân').length;
    
    document.getElementById('totalAccounts').innerText = total;
    document.getElementById('activeAccounts').innerText = active;
    document.getElementById('lockedAccounts').innerText = locked;
    document.getElementById('citizenAccounts').innerText = citizens;
}

// ========== RENDER TABLE ==========
function renderTable() {
    const tbody = document.getElementById('tableBody');
    if (!currentData.length) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding:40px;">📭 Không có dữ liệu</td></tr>';
        return;
    }

    const start = (currentPage - 1) * pageSize;
    const pageData = currentData.slice(start, start + pageSize);

    tbody.innerHTML = pageData.map(acc => `
        <tr>
            <td>${acc.id}</td>
            <td><strong>${acc.tenDangNhap}</strong></td>
            <td>${acc.hoTen}</td>
            <td>${acc.email}</td>
            <td>${acc.soDienThoai || '---'}</td>
            <td><span class="role-badge ${getRoleClass(acc.vaiTro)}">${getRoleIcon(acc.vaiTro)} ${acc.vaiTro}</span></td>
            <td><span class="status-badge ${acc.trangThai === 'Hoạt động' ? 'status-approved' : 'status-rejected'}">${acc.trangThai === 'Hoạt động' ? '✅ Hoạt động' : '🔒 Đã khóa'}</span></td>
            <td>${acc.ngayTao}</td>
            <td class="action-buttons">
                <button class="btn-icon btn-edit" onclick="editAccount(${acc.id})" title="Sửa thông tin"><i class='bx bx-edit'></i></button>
                <button class="btn-icon ${acc.trangThai === 'Hoạt động' ? 'btn-lock' : 'btn-unlock'}" onclick="toggleLock(${acc.id})" title="${acc.trangThai === 'Hoạt động' ? 'Khóa tài khoản' : 'Mở khóa tài khoản'}">
                    <i class='bx ${acc.trangThai === 'Hoạt động' ? 'bx-lock' : 'bx-lock-open'}'></i>
                </button>
                <button class="btn-icon btn-reset" onclick="showResetModal(${acc.id})" title="Đặt lại mật khẩu"><i class='bx bx-key'></i></button>
                <button class="btn-icon btn-delete" onclick="deleteAccount(${acc.id})" title="Xóa tài khoản"><i class='bx bx-trash'></i></button>
            </td>
        </tr>
    `).join('');

    renderPagination();
    updateStats();
}

function renderPagination() {
    const totalPages = Math.ceil(currentData.length / pageSize);
    const pagination = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = `<button onclick="changePage(1)" ${currentPage === 1 ? 'disabled' : ''}><i class='bx bx-chevrons-left'></i></button>`;
    html += `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}><i class='bx bx-chevron-left'></i></button>`;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span style="padding:0 4px;">...</span>`;
        }
    }

    html += `<button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}><i class='bx bx-chevron-right'></i></button>`;
    html += `<button onclick="changePage(${totalPages})" ${currentPage === totalPages ? 'disabled' : ''}><i class='bx bx-chevrons-right'></i></button>`;

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
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const roleFilter = document.getElementById('roleFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;

    let filtered = [...taiKhoan];

    if (searchTerm) {
        filtered = filtered.filter(acc => 
            acc.tenDangNhap.toLowerCase().includes(searchTerm) || 
            acc.hoTen.toLowerCase().includes(searchTerm) ||
            acc.email.toLowerCase().includes(searchTerm)
        );
    }
    if (roleFilter !== 'all') {
        filtered = filtered.filter(acc => acc.vaiTro === roleFilter);
    }
    if (statusFilter !== 'all') {
        filtered = filtered.filter(acc => acc.trangThai === statusFilter);
    }

    currentData = filtered;
    currentPage = 1;
    renderTable();
}

// ========== MODAL THÊM/SỬA ==========
function showForm(acc = null) {
    editingId = acc ? acc.id : null;
    document.getElementById('modalTitle').innerHTML = acc ? '<i class="bx bx-edit"></i> Sửa tài khoản' : '<i class="bx bx-user-plus"></i> Thêm tài khoản';
    
    document.getElementById('username').value = acc ? acc.tenDangNhap : '';
    document.getElementById('username').disabled = !!acc;
    document.getElementById('password').value = '';
    document.getElementById('fullname').value = acc ? acc.hoTen : '';
    document.getElementById('email').value = acc ? acc.email : '';
    document.getElementById('phone').value = acc ? (acc.soDienThoai || '') : '';
    document.getElementById('role').value = acc ? acc.vaiTro : 'Công dân';
    document.getElementById('status').value = acc ? acc.trangThai : 'Hoạt động';
    
    document.getElementById('accountModal').classList.add('active');
}

function saveAccount() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const role = document.getElementById('role').value;
    const status = document.getElementById('status').value;

    if (!username || !fullname || !email) {
        showAlert('Vui lòng nhập đầy đủ thông tin bắt buộc!', 'warning');
        return;
    }

    if (editingId) {
        // Update existing account
        const acc = taiKhoan.find(a => a.id === editingId);
        if (acc) {
            acc.hoTen = fullname;
            acc.email = email;
            acc.soDienThoai = phone;
            acc.vaiTro = role;
            acc.trangThai = status;
            showAlert(`✏️ Cập nhật tài khoản ${acc.tenDangNhap} thành công!`);
        }
    } else {
        // Check duplicate username
        if (taiKhoan.some(a => a.tenDangNhap === username)) {
            showAlert('Tên đăng nhập đã tồn tại!', 'warning');
            return;
        }
        
        const newId = Math.max(...taiKhoan.map(a => a.id), 0) + 1;
        const today = new Date().toISOString().split('T')[0];
        
        taiKhoan.push({
            id: newId,
            tenDangNhap: username,
            email: email,
            hoTen: fullname,
            vaiTro: role,
            trangThai: status,
            ngayTao: today,
            soDienThoai: phone
        });
        
        showAlert(`➕ Thêm tài khoản ${username} thành công! Mật khẩu mặc định: ${password || '123456'}`);
    }
    
    closeModal();
    filterData();
}

function editAccount(id) {
    const acc = taiKhoan.find(a => a.id === id);
    if (acc) showForm(acc);
}

// ========== KHÓA/MỞ KHÓA ==========
function toggleLock(id) {
    const acc = taiKhoan.find(a => a.id === id);
    if (acc) {
        const newStatus = acc.trangThai === 'Hoạt động' ? 'Đã khóa' : 'Hoạt động';
        acc.trangThai = newStatus;
        showAlert(`${newStatus === 'Đã khóa' ? '🔒 Đã khóa' : '✅ Đã mở khóa'} tài khoản ${acc.tenDangNhap}`);
        filterData();
    }
}

// ========== ĐẶT LẠI MẬT KHẨU ==========
function showResetModal(id) {
    const acc = taiKhoan.find(a => a.id === id);
    if (acc) {
        resetAccountId = id;
        document.getElementById('resetMessage').innerHTML = `Bạn có chắc chắn muốn đặt lại mật khẩu cho tài khoản <strong>${acc.tenDangNhap}</strong>?`;
        document.getElementById('resetModal').classList.add('active');
    }
}

function resetPassword() {
    if (resetAccountId) {
        const acc = taiKhoan.find(a => a.id === resetAccountId);
        if (acc) {
            showAlert(`🔑 Đã đặt lại mật khẩu cho tài khoản ${acc.tenDangNhap}. Mật khẩu mới: 123456`, 'info');
        }
        closeResetModal();
    }
}

// ========== XÓA TÀI KHOẢN ==========
function deleteAccount(id) {
    const acc = taiKhoan.find(a => a.id === id);
    if (!acc) return;
    
    // Check if account has related data (can't delete if has processing records)
    if (acc.vaiTro !== 'Công dân' && acc.vaiTro !== 'Admin') {
        showAlert(`⚠️ Không thể xóa tài khoản cán bộ "${acc.tenDangNhap}" đã có dữ liệu xử lý. Vui lòng khóa tài khoản thay thế.`, 'warning');
        return;
    }
    
    confirmAction = () => {
        taiKhoan = taiKhoan.filter(a => a.id !== id);
        filterData();
        closeConfirmModal();
        showAlert(`🗑️ Đã xóa tài khoản ${acc.tenDangNhap} thành công!`);
    };
    
    document.getElementById('confirmMessage').innerHTML = `
        <div style="text-align:center;">
            <i class='bx bx-trash' style="font-size:48px; color:#EF4444; margin-bottom:16px;"></i>
            <p>Bạn có chắc chắn muốn xóa tài khoản <strong>${acc.tenDangNhap}</strong>?</p>
            <p style="font-size:12px; color:#EF4444; margin-top:8px;">⚠️ Hành động này không thể hoàn tác.</p>
        </div>
    `;
    document.getElementById('confirmModal').classList.add('active');
}

// ========== CLOSE MODALS ==========
function closeModal() {
    document.getElementById('accountModal').classList.remove('active');
    editingId = null;
}

function closeConfirmModal() {
    document.getElementById('confirmModal').classList.remove('active');
    confirmAction = null;
}

function closeResetModal() {
    document.getElementById('resetModal').classList.remove('active');
    resetAccountId = null;
}

// ========== EVENT LISTENERS ==========
document.getElementById('btnAdd').addEventListener('click', () => showForm(null));
document.getElementById('btnSave').addEventListener('click', saveAccount);
document.getElementById('searchInput').addEventListener('input', filterData);
document.getElementById('roleFilter').addEventListener('change', filterData);
document.getElementById('statusFilter').addEventListener('change', filterData);
document.getElementById('confirmBtn').addEventListener('click', () => {
    if (confirmAction) confirmAction();
});
document.getElementById('resetConfirmBtn').addEventListener('click', resetPassword);

// ========== INITIALIZE ==========
filterData();