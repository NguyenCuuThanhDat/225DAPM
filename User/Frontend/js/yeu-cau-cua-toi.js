const requests = [
    {
        id: 1,
        title: 'Đăng ký tạm trú',
        code: 'TT-2023-08912',
        date: '12/12/2023',
        status: 'processing',
        statusLabel: 'Đang xử lý',
        icon: 'bx-file-blank',
        link: 'khai-bao-tam-tru.html'
    },
    {
        id: 2,
        title: 'Đăng ký thường trú',
        code: 'DKTT-2023-0984',
        date: '10/12/2023',
        status: 'approved',
        statusLabel: 'Đã duyệt',
        icon: 'bx-file',
        link: 'khai-bao-thuong-tru.html'
    },
    {
        id: 3,
        title: 'Khai báo tạm vắng',
        code: 'TV-2023-0567',
        date: '05/12/2023',
        status: 'approved',
        statusLabel: 'Đã duyệt',
        icon: 'bx-user-x',
        link: 'khai-bao-tam-vang.html'
    },
    {
        id: 4,
        title: 'Khai nhân khẩu',
        code: 'KNK-2023-0234',
        date: '01/12/2023',
        status: 'approved',
        statusLabel: 'Đã duyệt',
        icon: 'bx-group',
        link: 'khai-bao-nhan-khau.html'
    },
    {
        id: 5,
        title: 'Khai tử',
        code: 'KT-2023-0089',
        date: '25/11/2023',
        status: 'rejected',
        statusLabel: 'Từ chối',
        icon: 'bx-file-find',
        link: 'khai-tu.html'
    },
    {
        id: 6,
        title: 'Đăng ký tạm trú',
        code: 'TT-2023-07856',
        date: '20/11/2023',
        status: 'approved',
        statusLabel: 'Đã duyệt',
        icon: 'bx-file-blank',
        link: 'khai-bao-tam-tru.html'
    },
    {
        id: 7,
        title: 'Khai báo tạm vắng',
        code: 'TV-2023-0441',
        date: '15/11/2023',
        status: 'approved',
        statusLabel: 'Đã duyệt',
        icon: 'bx-user-x',
        link: 'khai-bao-tam-vang.html'
    },
    {
        id: 8,
        title: 'Đăng ký thường trú',
        code: 'DKTT-2023-0721',
        date: '08/11/2023',
        status: 'processing',
        statusLabel: 'Đang xử lý',
        icon: 'bx-file',
        link: 'khai-bao-thuong-tru.html'
    }
];

const requestsList = document.getElementById('requestsList');
const filterTabs = document.getElementById('filterTabs');
const quickSearch = document.getElementById('quickSearch');

let activeFilter = 'all';

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function updateCounts() {
    document.getElementById('countTotal').textContent = requests.length;
    document.getElementById('countProcessing').textContent = requests.filter((r) => r.status === 'processing').length;
    document.getElementById('countApproved').textContent = requests.filter((r) => r.status === 'approved').length;
    document.getElementById('countRejected').textContent = requests.filter((r) => r.status === 'rejected').length;
}

function renderList() {
    const query = quickSearch?.value.trim().toLowerCase() || '';

    const filtered = requests.filter((r) => {
        const matchFilter = activeFilter === 'all' || r.status === activeFilter;
        const matchSearch =
            !query ||
            r.title.toLowerCase().includes(query) ||
            r.code.toLowerCase().includes(query) ||
            r.date.includes(query);
        return matchFilter && matchSearch;
    });

    if (!filtered.length) {
        requestsList.innerHTML = '<p class="empty-message">Không tìm thấy hồ sơ phù hợp.</p>';
        return;
    }

    requestsList.innerHTML = filtered
        .map(
            (r) => `
        <a href="${escapeHtml(r.link)}" class="request-card" data-status="${r.status}">
            <div class="request-icon">
                <i class='bx ${escapeHtml(r.icon)}'></i>
            </div>
            <div class="request-body">
                <div class="request-title">${escapeHtml(r.title)}</div>
                <div class="request-meta">
                    <span>Mã HS: ${escapeHtml(r.code)}</span>
                    <span>Ngày nộp: ${escapeHtml(r.date)}</span>
                </div>
            </div>
            <span class="status-badge ${r.status}">${escapeHtml(r.statusLabel)}</span>
            <i class='bx bx-chevron-right request-arrow'></i>
        </a>
    `
        )
        .join('');
}

filterTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;

    activeFilter = tab.dataset.filter;
    filterTabs.querySelectorAll('.filter-tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    renderList();
});

if (quickSearch) {
    quickSearch.addEventListener('input', renderList);
}

updateCounts();
renderList();
