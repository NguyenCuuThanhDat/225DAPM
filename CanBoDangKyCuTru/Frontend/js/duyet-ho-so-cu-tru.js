const pageTitle = document.getElementById('page-title');
const pageSubtitle = document.getElementById('page-subtitle');
const sections = document.querySelectorAll('.page-section');
const navItems = document.querySelectorAll('.nav-item[data-page]');
const navSubItems = document.querySelectorAll('.nav-subitem');
const navGroup = document.querySelector('.nav-group');
const tabs = document.querySelectorAll('.tab');
const placeholderText = document.querySelector('.placeholder-text');

const pageData = {
    home: {
        title: 'Trang chủ',
        subtitle: 'Chọn một mục bên trái để tiếp tục.',
        section: 'page-home',
        placeholder: true,
    },
    'view-citizen-records': {
        title: 'Xem hồ sơ công dân',
        subtitle: 'Chưa có giao diện.',
        section: 'page-placeholder',
        placeholder: true,
    },
    'duyet-ho-so': {
        title: 'Duyệt hồ sơ cư trú',
        subtitle: 'Danh sách hồ sơ cư trú hiện có và trạng thái xử lý.',
        section: 'page-review',
    },
    history: {
        title: 'Lịch sử duyệt hồ sơ',
        subtitle: 'Tra cứu và xem lại lịch sử xử lý hồ sơ cư trú.',
        section: 'page-history',
    },
    notifications: {
        title: 'Thông báo',
        subtitle: 'Chưa có giao diện.',
        section: 'page-placeholder',
        placeholder: true,
    },
    reports: {
        title: 'Báo cáo thống kê',
        subtitle: 'Chưa có giao diện.',
        section: 'page-placeholder',
        placeholder: true,
    },
    settings: {
        title: 'Cài đặt',
        subtitle: 'Chưa có giao diện.',
        section: 'page-placeholder',
        placeholder: true,
    },
};

const categoryNames = {
    'thuong-tru': 'Thường trú',
    'tam-tru': 'Tạm trú',
    'tam-vang': 'Tạm vắng',
};

// Static datasets per category (sample data)
const datasets = {
    'thuong-tru': [
        { id: 'HS000123', name: 'Nguyễn Văn B', cccd: '201234567890', dob: '10/02/1990', phone: '0901234567', email: 'nguyenvanb@gmail.com', address: '123 Đường 29, P. Hòa Cường Nam, Q. Hải Châu, TP. Đà Nẵng', currentAddress: '123 Đường 29, P. Hòa Cường Nam, Q. Hải Châu, TP. Đà Nẵng', registerAddress: '123 Đường 29, P. Hòa Cường Nam, Q. Hải Châu, TP. Đà Nẵng', householdHead: 'Nguyễn Văn A', householdSize: '4 người', registerDate: '12/05/2025', family: 'HGD00045', relation: 'Con', moved: '12/05/2025', submit: '12/05/2025 09:15', status: 'Chờ duyệt', files: ['dien_tich.pdf'], note: '' },
        { id: 'HS000124', name: 'Trần Thị C', cccd: '212345678901', dob: '15/07/1985', phone: '0912345678', email: 'tranthic@example.com', address: '45 Lê Duẩn, P. Thạch Thang, TP. Đà Nẵng', currentAddress: '45 Lê Duẩn, P. Thạch Thang, TP. Đà Nẵng', registerAddress: '45 Lê Duẩn, P. Thạch Thang, TP. Đà Nẵng', householdHead: 'Trần Văn C', householdSize: '3 người', registerDate: '11/05/2025', family: 'HGD00046', relation: 'Vợ', moved: '11/05/2025', submit: '11/05/2025 14:30', status: 'Đã duyệt', files: [], note: 'Đã đầy đủ' },
        { id: 'HS000125', name: 'Lê Văn D', cccd: '215678901234', dob: '20/01/1988', phone: '0987654321', email: 'levand@example.com', address: '78 Nguyễn Văn Linh, P. Thuận Phước', family: 'HGD00047', relation: 'Chủ hộ', moved: '10/05/2025', submit: '10/05/2025 10:20', status: 'Từ chối', files: [], note: 'Thiếu CMND' },
        { id: 'HS000126', name: 'Nguyễn Thị A', cccd: '201334455667', dob: '01/01/1995', phone: '0903333444', email: 'nguyentha@example.com', address: '56 Nguyễn Hữu Thọ', family: 'HGD00048', relation: 'Con', moved: '08/05/2025', submit: '08/05/2025 08:30', status: 'Chờ duyệt', files: ['hop_dong.pdf'], note: '' },
        { id: 'HS000127', name: 'Phan Văn B', cccd: '201998877665', dob: '22/02/1982', phone: '0912340000', email: 'phanvanb@example.com', address: '12 Hoàng Văn Thái', family: 'HGD00049', relation: 'Vợ', moved: '05/05/2025', submit: '05/05/2025 15:20', status: 'Đã duyệt', files: ['cmnd.pdf', 'photo.jpg'], note: '' },
        { id: 'HS000128', name: 'Trương Thị C', cccd: '201776655443', dob: '09/09/1979', phone: '0987000111', email: 'truongc@example.com', address: '102 Hải Phòng', family: 'HGD00050', relation: 'Mẹ', moved: '03/05/2025', submit: '03/05/2025 13:45', status: 'Chờ bổ sung', files: [], note: 'Thiếu giấy xác nhận' },
        { id: 'HS000129', name: 'Lê Thị D', cccd: '201665544332', dob: '18/11/1991', phone: '0909888777', email: 'lethid@example.com', address: '22 Nguyễn Văn Linh', family: 'HGD00051', relation: 'Con', moved: '02/05/2025', submit: '02/05/2025 10:15', status: 'Đã duyệt', files: ['hopdong.pdf'], note: '' },
        { id: 'HS000130', name: 'Hồ Văn E', cccd: '201554433221', dob: '07/04/1987', phone: '0911222444', email: 'hovane@example.com', address: '44 Lê Lợi', family: 'HGD00052', relation: 'Anh', moved: '01/05/2025', submit: '01/05/2025 09:00', status: 'Từ chối', files: [], note: 'Sai địa chỉ' },
        { id: 'HS000131', name: 'Đỗ Thị F', cccd: '201443322110', dob: '24/12/1993', phone: '0977000222', email: 'dothif@example.com', address: '18 Phan Đăng Lưu', family: 'HGD00053', relation: 'Chị', moved: '30/04/2025', submit: '30/04/2025 11:00', status: 'Chờ duyệt', files: [], note: '' },
        { id: 'HS000132', name: 'Võ Văn G', cccd: '201332211009', dob: '13/08/1984', phone: '0907555666', email: 'vovang@example.com', address: '66 Nguyễn Văn Cừ', family: 'HGD00054', relation: 'Chủ hộ', moved: '29/04/2025', submit: '29/04/2025 08:55', status: 'Đã duyệt', files: ['baocao.pdf'], note: 'Khuyến cáo' },
        { id: 'HS000133', name: 'Ngô Thị H', cccd: '201221100998', dob: '02/06/1998', phone: '0912444333', email: 'ngothih@example.com', address: '8 Lê Đình Lý', family: 'HGD00055', relation: 'Con', moved: '28/04/2025', submit: '28/04/2025 09:40', status: 'Chờ bổ sung', files: [], note: 'Thiếu chứng minh' },
        { id: 'HS000134', name: 'Phùng Văn I', cccd: '201110099887', dob: '30/10/1978', phone: '0909999888', email: 'phungvi@example.com', address: '96 Trần Phú', family: 'HGD00056', relation: 'Anh', moved: '27/04/2025', submit: '27/04/2025 10:05', status: 'Đã duyệt', files: ['giay_to.docx'], note: 'Full' }
    ],
    'tam-tru': [
        { id: 'HS010001', name: 'Phạm Thị E', cccd: '238901234567', dob: '05/03/1992', phone: '0934567890', email: 'pham.e@example.com', address: '12 Trần Phú, P. Hải Châu', currentAddress: '12 Trần Phú, P. Hải Châu', tempAddress: '12 Trần Phú, P. Hải Châu', tempStart: '01/04/2025', tempEnd: '30/09/2025', tempDuration: '6 tháng', tempReason: 'Công tác tại địa phương', family: '', relation: '', moved: '', submit: '02/04/2025 11:00', status: 'Chờ bổ sung', files: [], note: '' },
        { id: 'HS010002', name: 'Hoàng Văn F', cccd: '201112223333', dob: '01/01/1975', phone: '0900000111', email: 'hoangf@example.com', address: '9 Võ Nguyên Giáp', family: '', relation: '', moved: '', submit: '20/03/2025 09:00', status: 'Đã duyệt', files: ['giay_to.zip'], note: 'Approve' },
        { id: 'HS010003', name: 'Đặng Thị K', cccd: '203344556677', dob: '14/02/1989', phone: '0911344556', email: 'dangtk@example.com', address: '34 Nguyễn Chí Thanh', family: '', relation: '', moved: '', submit: '12/03/2025 08:45', status: 'Chờ duyệt', files: ['phieu_tamtru.pdf'], note: '' },
        { id: 'HS010004', name: 'Bùi Văn L', cccd: '207788990011', dob: '22/11/1982', phone: '0902333444', email: 'buivl@example.com', address: '56 Lê Lợi', family: '', relation: '', moved: '', submit: '05/03/2025 10:20', status: 'Từ chối', files: [], note: 'Sai mục đích' },
        { id: 'HS010005', name: 'Lê Thị M', cccd: '209900112233', dob: '01/05/1977', phone: '0912777888', email: 'lethim@example.com', address: '28 Đống Đa', family: '', relation: '', moved: '', submit: '28/02/2025 15:10', status: 'Đã duyệt', files: ['tamtru.docx'], note: '' },
        { id: 'HS010006', name: 'Trần Văn N', cccd: '206655443322', dob: '13/09/1984', phone: '0932555888', email: 'tranvn@example.com', address: '98 Phan Đình Phùng', family: '', relation: '', moved: '', submit: '20/02/2025 09:55', status: 'Chờ bổ sung', files: [], note: 'Thiếu xác nhận chủ nhà' },
        { id: 'HS010007', name: 'Huỳnh Thị O', cccd: '205544332211', dob: '07/07/1990', phone: '0907222333', email: 'huynho@example.com', address: '62 Điện Biên Phủ', family: '', relation: '', moved: '', submit: '15/02/2025 14:10', status: 'Đã duyệt', files: ['hopdong.pdf'], note: 'OK' },
        { id: 'HS010008', name: 'Nguyễn Văn P', cccd: '204433221100', dob: '30/03/1976', phone: '0988111222', email: 'nguyenvp@example.com', address: '77 Trần Hưng Đạo', family: '', relation: '', moved: '', submit: '10/02/2025 10:05', status: 'Chờ duyệt', files: [], note: '' }
    ],
    'tam-vang': [
        { id: 'HS020001', name: 'Nguyễn Thị G', cccd: '301122334455', dob: '12/12/1990', phone: '0901111222', email: 'nguyenthig@example.com', address: 'TP. Hồ Chí Minh', currentAddress: 'TP. Hồ Chí Minh', vacationDestination: 'TP. Hồ Chí Minh', vacationStart: '01/04/2025', vacationEnd: '30/06/2025', vacationDuration: '3 tháng', vacationReason: 'Công tác dài hạn', family: '', relation: '', moved: '', submit: '05/05/2025 16:00', status: 'Chờ duyệt', files: [], note: '' },
        { id: 'HS020002', name: 'Trần Văn H', cccd: '401234567890', dob: '22/08/1980', phone: '0911222333', email: 'tranvanh@example.com', address: 'Hà Nội', family: '', relation: '', moved: '', submit: '01/05/2025 08:30', status: 'Đã duyệt', files: [], note: 'OK' },
        { id: 'HS020003', name: 'Lê Thị Q', cccd: '305566778899', dob: '18/05/1987', phone: '0907888999', email: 'lethiq@example.com', address: 'Đà Lạt', family: '', relation: '', moved: '', submit: '30/04/2025 11:15', status: 'Chờ bổ sung', files: [], note: 'Thiếu xác nhận' },
        { id: 'HS020004', name: 'Phạm Văn R', cccd: '304433221100', dob: '03/03/1983', phone: '0988333222', email: 'phamvr@example.com', address: 'Huế', family: '', relation: '', moved: '', submit: '25/04/2025 09:35', status: 'Đã duyệt', files: ['tamvang.pdf'], note: '' },
        { id: 'HS020005', name: 'Trịnh Thị S', cccd: '303322211009', dob: '29/09/1992', phone: '0911333444', email: 'trinhs@example.com', address: 'Quảng Nam', family: '', relation: '', moved: '', submit: '20/04/2025 10:50', status: 'Từ chối', files: [], note: 'Chưa ghi rõ lý do' },
        { id: 'HS020006', name: 'Vũ Văn T', cccd: '302211009998', dob: '11/11/1981', phone: '0902333111', email: 'vuvant@example.com', address: 'Quảng Ngãi', family: '', relation: '', moved: '', submit: '18/04/2025 13:20', status: 'Chờ duyệt', files: [], note: '' }
    ]
};

const pageSize = 5;
let currentPage = 1;
const urlParams = new URLSearchParams(window.location.search);
let currentCategory = urlParams.get('tab') || window.DEFAULT_REVIEW_TYPE || 'thuong-tru';

function renderPagination(totalPages) {
    const pagination = document.getElementById('tablePagination');
    if (!pagination) return;
    pagination.innerHTML = '';

    const createButton = (label, page, disabled = false) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'page-btn';
        btn.textContent = label;
        if (disabled) {
            btn.disabled = true;
        } else {
            btn.addEventListener('click', () => {
                currentPage = page;
                renderTable(currentCategory);
            });
        }
        return btn;
    };

    pagination.appendChild(createButton('<<', currentPage - 1, currentPage === 1));

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);
    for (let i = startPage; i <= endPage; i++) {
        const btn = createButton(i, i, false);
        if (i === currentPage) {
            btn.classList.add('active');
        }
        pagination.appendChild(btn);
    }

    pagination.appendChild(createButton('>>', currentPage + 1, currentPage === totalPages));
}

function updateSummary(total, start, end) {
    const summary = document.getElementById('recordSummary');
    if (!summary) return;
    if (total === 0) {
        summary.textContent = 'Hiển thị 0 của 0 hồ sơ';
    } else {
        summary.textContent = `Hiển thị ${start} - ${end} của ${total} hồ sơ`;
    }
}

function updateTabCounts() {
    tabs.forEach(tab => {
        const count = datasets[tab.dataset.tab]?.length || 0;
        tab.innerHTML = `${categoryNames[tab.dataset.tab]} <span>${count}</span>`;
    });
}

// Render table rows for a given category
function renderTable(category) {
    const tbody = document.getElementById('recordsBody');
    if (!tbody) return;
    const rows = datasets[category] || [];
    const totalRows = rows.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalRows);
    const pageRows = rows.slice(startIndex, endIndex);

    tbody.innerHTML = '';
    pageRows.forEach((r, idx) => {
        const tr = document.createElement('tr');
        tr.dataset.id = r.id;
        tr.dataset.type = category;
        tr.dataset.name = r.name;
        tr.dataset.cccd = r.cccd;
        tr.dataset.dob = r.dob;
        tr.dataset.address = r.currentAddress || r.address || '';
        tr.dataset.currentAddress = r.currentAddress || r.address || '';
        tr.dataset.registerAddress = r.registerAddress || '';
        tr.dataset.householdHead = r.householdHead || '';
        tr.dataset.householdSize = r.householdSize || '';
        tr.dataset.registerDate = r.registerDate || '';
        tr.dataset.tempAddress = r.tempAddress || '';
        tr.dataset.tempStart = r.tempStart || '';
        tr.dataset.tempEnd = r.tempEnd || '';
        tr.dataset.tempDuration = r.tempDuration || '';
        tr.dataset.tempReason = r.tempReason || '';
        tr.dataset.vacationDestination = r.vacationDestination || '';
        tr.dataset.vacationStart = r.vacationStart || '';
        tr.dataset.vacationEnd = r.vacationEnd || '';
        tr.dataset.vacationDuration = r.vacationDuration || '';
        tr.dataset.vacationReason = r.vacationReason || '';
        tr.dataset.submit = r.submit;
        tr.dataset.status = r.status;
        tr.dataset.note = r.note || '';
        tr.dataset.files = (r.files || []).join(';');

        const badgeClass = r.status === 'Đã duyệt' ? 'badge-success' : (r.status === 'Từ chối' ? 'badge-danger' : (r.status === 'Chờ bổ sung' ? 'badge-info' : 'badge-warning'));

        tr.innerHTML = `
            <td>${startIndex + idx + 1}</td>
            <td>${r.id}</td>
            <td>${r.name}</td>
            <td>${r.cccd}</td>
            <td>${categoryNames[category] || category}</td>
            <td>${r.submit}</td>
            <td><span class="badge ${badgeClass}">${r.status}</span></td>
            <td class="actions"><button class="icon-btn btn-view"><i class='bx bx-show'></i></button></td>
        `;
        tbody.appendChild(tr);
    });

    renderPagination(totalPages);
    updateSummary(totalRows, totalRows === 0 ? 0 : startIndex + 1, endIndex);
}

function hideAllSections() {
    sections.forEach(section => section.classList.add('hidden'));
}

function clearActiveNav() {
    navItems.forEach(item => item.classList.remove('active'));
    navSubItems.forEach(item => item.classList.remove('active'));
}

function setActiveNav(page, subpage) {
    clearActiveNav();

    const activeNavItem = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }

    if (page === 'duyet-ho-so' && subpage) {
        const activeSubItem = document.querySelector(`.nav-subitem[data-page="${page}"][data-subpage="${subpage}"]`);
        if (activeSubItem) {
            activeSubItem.classList.add('active');
        }
    }

    if (page === 'duyet-ho-so') {
        navGroup.classList.add('active');
    } else {
        navGroup.classList.remove('active');
    }
}

function openPage(page, subpage) {
    const pageInfo = pageData[page] || pageData.home;
    hideAllSections();

    pageTitle.textContent = pageInfo.title;
    pageSubtitle.textContent = pageInfo.subtitle;

    if (pageInfo.section) {
        const targetSection = document.querySelector(`.${pageInfo.section}`);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    if (page === 'duyet-ho-so') {
        if (subpage && categoryNames[subpage]) {
            currentCategory = subpage;
            currentPage = 1;
            const activeTab = document.querySelector(`.tab[data-tab="${subpage}"]`);
            if (activeTab) {
                tabs.forEach(tab => tab.classList.remove('active'));
                activeTab.classList.add('active');
            }
            pageSubtitle.textContent = `Danh sách hồ sơ cư trú - ${categoryNames[subpage]}`;
            renderTable(subpage);
        }
    }

    if (page === 'history') {
        initHistoryPage();
    }

    if (pageInfo.placeholder && placeholderText) {
        placeholderText.textContent = pageInfo.subtitle;
    }

    setActiveNav(page, subpage);
}

navItems.forEach(item => {
    item.addEventListener('click', event => {
       const href = item.getAttribute('href');

        if (href && href !== '#') {
            return;
        }

        event.preventDefault();
        const page = item.dataset.page;
        openPage(page, page === 'duyet-ho-so' ? 'thuong-tru' : null);
    });
});

navSubItems.forEach(item => {
    item.addEventListener('click', event => {
        const href = item.getAttribute('href');

        if (href && href !== '#') {
            return;
        }

        event.preventDefault();
        const page = item.dataset.page;
        const subpage = item.dataset.subpage;
        openPage(page, subpage);
    });
});

const navGroupToggle = document.querySelector('.nav-group-toggle');

if (navGroupToggle) {
    navGroupToggle.addEventListener('click', event => {
        const href = navGroupToggle.getAttribute('href');

        if (href && href !== '#') {
            return;
        }

        event.preventDefault();
        const page = navGroupToggle.dataset.page;
        openPage(page, 'thuong-tru');
    });
}

if (tabs.length) {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');
            const subpage = tab.dataset.tab;
            currentCategory = subpage;
            currentPage = 1;
            setActiveNav('duyet-ho-so', subpage);
            pageSubtitle.textContent = `Danh sách hồ sơ cư trú - ${categoryNames[subpage]}`;
            renderTable(subpage);
        });
    });
}

const btnFilter = document.querySelector('.btn-filter');
if (btnFilter) {
    btnFilter.addEventListener('click', () => {
        alert('Tính năng lọc sẽ được triển khai sau.');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.DEFAULT_PAGE || 'duyet-ho-so';

    openPage(
        initialPage,
        initialPage === 'duyet-ho-so' ? currentCategory : null
    );

    updateTabCounts();
});

// Detail modal logic
const detailOverlay = document.getElementById('detailOverlay');
const detailModal = document.getElementById('detailModal');
const modalClose = document.getElementById('modalClose');

function openDetailModal(data) {
    // header meta
    document.getElementById('dtIdSmall').textContent = data.id || '-';
    document.getElementById('modalType').textContent = categoryNames[data.type] || data.type;
    document.getElementById('dtSubmitSmall').textContent = data.submit || '';
    // status badge styling
    const statusBadge = document.getElementById('dtStatusBadge');
    statusBadge.textContent = data.status || '';
    // choose color
    if (data.status === 'Đã duyệt') { statusBadge.style.background = '#DCFCE7'; statusBadge.style.color = '#166534'; }
    else if (data.status === 'Từ chối') { statusBadge.style.background = '#FECACA'; statusBadge.style.color = '#B91C1C'; }
    else if (data.status === 'Chờ bổ sung') { statusBadge.style.background = '#DBEAFE'; statusBadge.style.color = '#1D4ED8'; }
    else { statusBadge.style.background = '#FFF2CC'; statusBadge.style.color = '#B45309'; }

    // general fields
    document.getElementById('dtName').textContent = data.name || '';
    document.getElementById('dtDob').textContent = data.dob || '';
    document.getElementById('dtCccd').textContent = data.cccd || '';
    document.getElementById('dtPhone').textContent = data.phone || '';
    document.getElementById('dtEmail').textContent = data.email || '';
    document.getElementById('dtCurrentAddress').textContent = data.currentAddress || data.address || '';

    const regTitle = document.getElementById('dtRegistrationTitle');

    const items = [];
    if (data.type === 'thuong-tru') {
        regTitle.textContent = 'Thông tin đăng ký thường trú';
        items.push({ label: 'Địa chỉ đăng ký', value: data.registerAddress || data.currentAddress || '' });
        items.push({ label: 'Chủ hộ', value: data.householdHead || '' });
        items.push({ label: 'Số nhân khẩu', value: data.householdSize || '' });
        items.push({ label: 'Ngày đăng ký', value: data.registerDate || data.submit || '' });
        items.push({ label: 'Ghi chú', value: data.note || '' });
    } else if (data.type === 'tam-tru') {
        regTitle.textContent = 'Thông tin đăng ký tạm trú';
        items.push({ label: 'Địa chỉ tạm trú', value: data.tempAddress || '' });
        items.push({ label: 'Ngày bắt đầu', value: data.tempStart || '' });
        items.push({ label: 'Ngày kết thúc', value: data.tempEnd || '' });
        items.push({ label: 'Thời gian tạm trú', value: data.tempDuration || '' });
        items.push({ label: 'Lý do tạm trú', value: data.tempReason || '' });
    } else if (data.type === 'tam-vang') {
        regTitle.textContent = 'Thông tin đăng ký tạm vắng';
        items.push({ label: 'Nơi đến tạm vắng', value: data.vacationDestination || '' });
        items.push({ label: 'Ngày bắt đầu', value: data.vacationStart || '' });
        items.push({ label: 'Ngày kết thúc', value: data.vacationEnd || '' });
        items.push({ label: 'Thời gian tạm vắng', value: data.vacationDuration || '' });
        items.push({ label: 'Lý do tạm vắng', value: data.vacationReason || '' });
    } else {
        regTitle.textContent = 'Thông tin đăng ký';
        items.push({ label: 'Địa chỉ', value: data.address || '' });
        items.push({ label: 'Hộ gia đình', value: data.family || '' });
        items.push({ label: 'Quan hệ với chủ hộ', value: data.relation || '' });
        items.push({ label: 'Ngày chuyển đến', value: data.moved || '' });
        items.push({ label: 'Ghi chú', value: data.note || '' });
    }

    for (let i = 1; i <= 5; i++) {
        const labelEl = document.getElementById(`dtRegLabel${i}`);
        const valueEl = document.getElementById(`dtRegValue${i}`);
        const row = labelEl?.closest('.form-row');
        if (i <= items.length) {
            labelEl.textContent = items[i - 1].label;
            valueEl.textContent = items[i - 1].value || '-';
            if (row) row.classList.remove('hidden');
        } else {
            if (labelEl) labelEl.textContent = '';
            if (valueEl) valueEl.textContent = '';
            if (row) row.classList.add('hidden');
        }
    }

    // files and notes
    const noteInput = document.getElementById('dtNote');
    if (noteInput) {
        noteInput.value = data.note || '';
    }
    const filesList = document.getElementById('dtFiles');
    filesList.innerHTML = '';
    if (data.files && data.files.length) {
        data.files.forEach(f => {
            const li = document.createElement('li');
            li.textContent = f;
            filesList.appendChild(li);
        });
    } else {
        const li = document.createElement('li'); li.textContent = 'Chưa có tập tin.'; filesList.appendChild(li);
    }

    // default to general tab
    setActiveTab('tab-general');
    clearNoteError();

    detailOverlay.classList.remove('hidden');
    detailModal.classList.remove('hidden');
}

function getNoteValue() {
    const noteInput = document.getElementById('dtNote');
    return noteInput ? noteInput.value.trim() : '';
}

function clearNoteError() {
    const noteInput = document.getElementById('dtNote');
    const noteError = document.getElementById('noteError');
    if (noteInput) noteInput.classList.remove('invalid');
    if (noteError) noteError.classList.add('hidden');
}

function showNoteError() {
    const noteInput = document.getElementById('dtNote');
    const noteError = document.getElementById('noteError');
    if (noteInput) noteInput.classList.add('invalid');
    if (noteError) {
        noteError.textContent = 'Ghi chú không được để trống.';
        noteError.classList.remove('hidden');
    }
}

function handleAction(action) {
    const note = getNoteValue();
    if ((action === 'supplement' || action === 'reject') && !note) {
        setActiveTab('tab-note');
        showNoteError();
        const noteInput = document.getElementById('dtNote');
        if (noteInput) {
            noteInput.focus();
        }
        return;
    }

    clearNoteError();
    if (action === 'supplement') {
        alert('Yêu cầu bổ sung đã được gửi.');
    } else if (action === 'reject') {
        alert('Hồ sơ đã bị từ chối.');
    } else if (action === 'approve') {
        alert('Hồ sơ đã được duyệt.');
    }
    closeDetailModal();
}

function closeDetailModal() {
    detailOverlay.classList.add('hidden');
    detailModal.classList.add('hidden');
}

// attach handlers to view buttons
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-view')) {
        const btn = e.target.closest('.btn-view');
        const tr = btn.closest('tr');
        const data = {
            id: tr.dataset.id,
            type: tr.dataset.type,
            name: tr.dataset.name,
            cccd: tr.dataset.cccd,
            dob: tr.dataset.dob,
            address: tr.dataset.address,
            currentAddress: tr.dataset.currentAddress,
            registerAddress: tr.dataset.registerAddress,
            householdHead: tr.dataset.householdHead,
            householdSize: tr.dataset.householdSize,
            registerDate: tr.dataset.registerDate,
            tempAddress: tr.dataset.tempAddress,
            tempStart: tr.dataset.tempStart,
            tempEnd: tr.dataset.tempEnd,
            tempDuration: tr.dataset.tempDuration,
            tempReason: tr.dataset.tempReason,
            vacationDestination: tr.dataset.vacationDestination,
            vacationStart: tr.dataset.vacationStart,
            vacationEnd: tr.dataset.vacationEnd,
            vacationDuration: tr.dataset.vacationDuration,
            vacationReason: tr.dataset.vacationReason,
            submit: tr.dataset.submit,
            status: tr.dataset.status,
            note: tr.dataset.note || '',
            files: tr.dataset.files ? tr.dataset.files.split(';') : []
        };
        openDetailModal(data);
    }
});

detailOverlay.addEventListener('click', closeDetailModal);
if (modalClose) modalClose.addEventListener('click', closeDetailModal);
const btnSupplement = document.querySelector('.detail-modal .btn-warning');
const btnReject = document.querySelector('.detail-modal .btn-danger');
const btnApprove = document.querySelector('.detail-modal .btn-primary');
if (btnSupplement) btnSupplement.addEventListener('click', () => handleAction('supplement'));
if (btnReject) btnReject.addEventListener('click', () => handleAction('reject'));
if (btnApprove) btnApprove.addEventListener('click', () => handleAction('approve'));
const noteInputElement = document.getElementById('dtNote');
if (noteInputElement) {
    noteInputElement.addEventListener('input', clearNoteError);
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDetailModal(); });

// Tab handling inside modal
function setActiveTab(tabId) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(p => p.classList.toggle('hidden', p.id !== tabId));
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => setActiveTab(btn.dataset.tab));
});

// ======== HISTORY PAGE FUNCTIONS ========
const historyPageSize = 5;
let historyCurrentPage = 1;
let historyVisibleRecords = [...historyRecords];

function formatStatusBadge(status) {
    return `<span class="badge ${status === 'Đã duyệt' ? 'badge-success' : status === 'Từ chối' ? 'badge-danger' : 'badge-info'}">${status}</span>`;
}

function renderHistoryPagination(totalPages) {
    const pagination = document.getElementById('historyPagination');
    if (!pagination) return;
    pagination.innerHTML = '';

    const createButton = (label, page, disabled = false) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'page-btn';
        btn.textContent = label;
        if (disabled) {
            btn.disabled = true;
        } else {
            btn.addEventListener('click', () => {
                historyCurrentPage = page;
                renderHistoryTable();
            });
        }
        return btn;
    };

    pagination.appendChild(createButton('<<', historyCurrentPage - 1, historyCurrentPage === 1));
    const startPage = Math.max(1, historyCurrentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);
    for (let i = startPage; i <= endPage; i += 1) {
        const btn = createButton(i, i, false);
        if (i === historyCurrentPage) btn.classList.add('active');
        pagination.appendChild(btn);
    }
    pagination.appendChild(createButton('>>', historyCurrentPage + 1, historyCurrentPage === totalPages));
}

function updateHistorySummary(total, start, end) {
    const summary = document.getElementById('historySummary');
    if (!summary) return;
    summary.textContent = total === 0 ? 'Hiển thị 0 của 0 hồ sơ' : `Hiển thị ${start} - ${end} của ${total} hồ sơ`;
}

function renderHistoryTable() {
    const tbody = document.getElementById('historyRecordsBody');
    if (!tbody) return;
    const totalRows = historyVisibleRecords.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / historyPageSize));
    if (historyCurrentPage > totalPages) historyCurrentPage = totalPages;
    const startIndex = (historyCurrentPage - 1) * historyPageSize;
    const endIndex = Math.min(startIndex + historyPageSize, totalRows);
    const pageRows = historyVisibleRecords.slice(startIndex, endIndex);

    tbody.innerHTML = '';
    pageRows.forEach(row => {
        const tr = document.createElement('tr');
        tr.dataset.recordId = row.id;
        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${historyCategoryNames[row.type] || row.type}</td>
            <td>${row.citizen}</td>
            <td>${row.cccd}</td>
            <td>${row.received}</td>
            <td>${row.processed}</td>
            <td>${row.officer}</td>
            <td>${formatStatusBadge(row.status)}</td>
            <td>
                <button class="icon-btn btn-view-history" title="Xem chi tiết">
                    <i class='bx bx-show'></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    renderHistoryPagination(totalPages);
    updateHistorySummary(totalRows, totalRows === 0 ? 0 : startIndex + 1, endIndex);
}

function applyHistoryFilters() {
    const searchText = document.getElementById('historySearch').value.trim().toLowerCase();
    const typeFilter = document.getElementById('filterType').value;
    const statusFilter = document.getElementById('filterStatus').value;

    historyVisibleRecords = historyRecords.filter(record => {
        const matchesSearch = searchText === '' || [record.id, record.citizen, record.cccd].some(value => value.toLowerCase().includes(searchText));
        const matchesType = typeFilter === 'all' || record.type === typeFilter;
        const matchesStatus = statusFilter === 'all' || record.status === statusFilter;
        return matchesSearch && matchesType && matchesStatus;
    });

    historyCurrentPage = 1;
    renderHistoryTable();
}

function getTimelineDotClass(item) {
    const title = item.title.toLowerCase();

    if (title.includes('tiếp nhận')) return 'dot-received';
    if (title.includes('yêu cầu bổ sung')) return 'dot-request-more';
    if (title.includes('công dân bổ sung')) return 'dot-citizen-updated';
    if (title.includes('duyệt')) return 'dot-approved';
    if (title.includes('từ chối')) return 'dot-rejected';

    return 'dot-received';
}

function renderHistoryTimeline(record) {
    const timelineContainer = document.getElementById('historyTimeline');
    timelineContainer.innerHTML = '';
    record.timeline.forEach(item => {
        const event = document.createElement('div');
        event.className = 'history-timeline-item';
        event.innerHTML = `
            <span class="timeline-dot ${getTimelineDotClass(item)}"></span>
            <div class="timeline-content">
                <div class="timeline-meta">
                    <strong>${item.title}</strong>
                    <span>${item.time}</span>
                </div>
                <div class="timeline-subtitle">${item.subtitle}</div>
                <div class="timeline-status">${item.status}</div>
                ${item.note ? `<div class="timeline-note">${item.note}</div>` : ''}
            </div>
        `;
        timelineContainer.appendChild(event);
    });
}

function renderHistoryDetail(recordId) {
    const record = historyRecords.find(item => item.id === recordId);
    if (!record) return;

    document.getElementById('historyDetailTitle').textContent = `Lịch sử xử lý hồ sơ - ${record.id}`;
    document.getElementById('historyInfoId').textContent = record.id;
    document.getElementById('historyInfoType').textContent = historyCategoryNames[record.type] || record.type;
    document.getElementById('historyInfoCitizen').textContent = record.citizen;
    document.getElementById('historyInfoCccd').textContent = record.cccd;
    document.getElementById('historyInfoReceived').textContent = record.received;
    document.getElementById('historyInfoProcessed').textContent = record.processed;
    document.getElementById('historyInfoOfficer').textContent = record.officer;
    document.getElementById('historyInfoStatus').textContent = record.status;

    const filesList = document.getElementById('historyFilesList');
    filesList.innerHTML = '';
    if (record.files.length) {
        record.files.forEach(fileName => {
            const li = document.createElement('li');
            li.textContent = fileName;
            filesList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'Không có giấy tờ đính kèm.';
        filesList.appendChild(li);
    }

    renderHistoryTimeline(record);
    document.getElementById('historyNoteItem').textContent = record.note || 'Không có ghi chú bổ sung.';
    setHistoryDetailTab('historyTabTimeline');
    document.getElementById('historyDetailOverlay').classList.remove('hidden');
    document.getElementById('historyDetailPanel').classList.remove('hidden');
}

function setHistoryDetailTab(tabId) {
    document.querySelectorAll('.history-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.history-tab-panel').forEach(panel => {
        panel.classList.toggle('hidden', panel.id !== tabId);
    });
}

function closeHistoryDetail() {
    document.getElementById('historyDetailOverlay').classList.add('hidden');
    document.getElementById('historyDetailPanel').classList.add('hidden');
}

function initHistoryPage() {
    renderHistoryTable();

    document.getElementById('historyToggleFilters').addEventListener('click', () => {
        document.getElementById('historyFilterRow').classList.toggle('hidden');
    });

    document.getElementById('historySearch').addEventListener('keyup', () => {
        historyCurrentPage = 1;
        applyHistoryFilters();
    });

    document.getElementById('filterType').addEventListener('change', applyHistoryFilters);
    document.getElementById('filterStatus').addEventListener('change', applyHistoryFilters);

    document.getElementById('historyExport').addEventListener('click', () => {
        alert('Tính năng xuất Excel sẽ được thêm sau.');
    });

    document.addEventListener('click', event => {
        const button = event.target.closest('.btn-view-history');
        if (button) {
            const row = button.closest('tr');
            if (row?.dataset.recordId) {
                renderHistoryDetail(row.dataset.recordId);
            }
        }
    });

    document.getElementById('historyDetailOverlay').addEventListener('click', closeHistoryDetail);
    document.getElementById('historyDetailClose').addEventListener('click', closeHistoryDetail);
    document.querySelectorAll('.history-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => setHistoryDetailTab(btn.dataset.tab));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.DEFAULT_PAGE || 'duyet-ho-so';

    openPage(
        initialPage,
        initialPage === 'duyet-ho-so' ? currentCategory : null
    );

    updateTabCounts();
});

document.addEventListener('DOMContentLoaded', () => {
    openPage('duyet-ho-so');
    renderTable(currentCategory);

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === currentCategory);
    });

    document.querySelectorAll('.nav-subitem').forEach(item => {
        item.classList.toggle(
            'active',
            item.href.includes(`tab=${currentCategory}`)
        );
    });
});