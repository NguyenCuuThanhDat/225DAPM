const members = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        initial: 'A',
        relation: 'Chủ hộ',
        relationClass: 'head',
        cccd: '079090012345',
        birthDate: '1990-05-15',
        status: 'Thường trú'
    },
    {
        id: 2,
        name: 'Trần Thị B',
        initial: 'B',
        relation: 'Vợ',
        relationClass: 'family',
        cccd: '079090012346',
        birthDate: '1992-08-20',
        status: 'Thường trú'
    },
    {
        id: 3,
        name: 'Nguyễn Văn C',
        initial: 'C',
        relation: 'Con đẻ',
        relationClass: 'family',
        cccd: '079090012347',
        birthDate: '2015-03-10',
        status: 'Thường trú'
    },
    {
        id: 4,
        name: 'Nguyễn Thị D',
        initial: 'D',
        relation: 'Con đẻ',
        relationClass: 'family',
        cccd: '079090012348',
        birthDate: '2018-11-25',
        status: 'Thường trú'
    }
];

const membersList = document.getElementById('membersList');
const quickSearch = document.getElementById('quickSearch');
const btnDownloadPdf = document.getElementById('btnDownloadPdf');

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function renderMembers(filter = '') {
    const query = filter.trim().toLowerCase();

    membersList.innerHTML = members
        .filter((m) => {
            if (!query) return true;
            return (
                m.name.toLowerCase().includes(query) ||
                m.cccd.includes(query) ||
                m.relation.toLowerCase().includes(query)
            );
        })
        .map(
            (m) => `
        <div class="member-row" data-id="${m.id}">
            <div class="member-avatar">${escapeHtml(m.initial)}</div>
            <div class="member-info">
                <div class="member-name-row">
                    <span class="member-name">${escapeHtml(m.name)}</span>
                    <span class="relation-badge ${m.relationClass}">${escapeHtml(m.relation)}</span>
                </div>
                <div class="member-meta">
                    <span>CCCD: ${escapeHtml(m.cccd)}</span>
                    <span>NS: ${escapeHtml(m.birthDate)}</span>
                </div>
            </div>
            <span class="member-status">${escapeHtml(m.status)}</span>
            <div class="member-menu-wrap">
                <button type="button" class="member-menu-btn" aria-label="Tùy chọn">
                    <i class='bx bx-dots-vertical-rounded'></i>
                </button>
                <div class="member-dropdown">
                    <button type="button" data-action="view">Xem chi tiết</button>
                    <button type="button" data-action="edit">Chỉnh sửa</button>
                </div>
            </div>
        </div>
    `
        )
        .join('');

    if (!membersList.children.length) {
        membersList.innerHTML = '<p class="member-meta" style="padding:20px 0">Không tìm thấy thành viên.</p>';
    }
}

membersList.addEventListener('click', (e) => {
    const menuBtn = e.target.closest('.member-menu-btn');
    const actionBtn = e.target.closest('.member-dropdown button');

    if (menuBtn) {
        const wrap = menuBtn.closest('.member-menu-wrap');
        const dropdown = wrap.querySelector('.member-dropdown');
        const isOpen = dropdown.classList.contains('show');

        document.querySelectorAll('.member-dropdown.show').forEach((d) => d.classList.remove('show'));

        if (!isOpen) dropdown.classList.add('show');
        return;
    }

    if (actionBtn) {
        const row = actionBtn.closest('.member-row');
        const id = row?.dataset.id;
        const member = members.find((m) => String(m.id) === id);
        const action = actionBtn.dataset.action;

        document.querySelectorAll('.member-dropdown.show').forEach((d) => d.classList.remove('show'));

        if (action === 'view') {
            showToast(`Xem chi tiết: ${member?.name || ''}`);
        } else if (action === 'edit') {
            window.location.href = 'thong-tin-ca-nhan.html';
        }
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.member-menu-wrap')) {
        document.querySelectorAll('.member-dropdown.show').forEach((d) => d.classList.remove('show'));
    }
});

if (quickSearch) {
    quickSearch.addEventListener('input', () => {
        renderMembers(quickSearch.value);
    });
}

if (btnDownloadPdf) {
    btnDownloadPdf.addEventListener('click', () => {
        showToast('Đang tải sổ hộ khẩu (PDF)...');
    });
}

renderMembers();
