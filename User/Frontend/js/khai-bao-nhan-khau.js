const form = document.getElementById('nhanKhauForm');
const membersContainer = document.getElementById('membersContainer');
const memberTemplate = document.getElementById('memberTemplate');
const btnAddMember = document.getElementById('btnAddMember');
const btnCancel = document.getElementById('btnCancel');

const MAX_FILE_SIZE = 5 * 1024 * 1024;
let memberCount = 0;

function initUploadBox(box) {
    const input = box.querySelector('input[type="file"]');
    const fileNameEl = box.querySelector('.file-name');

    box.addEventListener('click', () => input.click());

    input.addEventListener('change', () => {
        handleFile(box, input.files[0], fileNameEl);
    });

    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        box.style.backgroundColor = '#F9FAFB';
    });

    box.addEventListener('dragleave', () => {
        box.style.backgroundColor = '';
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        box.style.backgroundColor = '';
        handleFile(box, e.dataTransfer.files[0], fileNameEl);
    });
}

function handleFile(box, file, fileNameEl) {
    if (!file) return;

    const allowed = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!allowed.includes(file.type)) {
        showToast('Chỉ hỗ trợ file PDF, JPG, PNG', 'error');
        return;
    }

    if (file.size > MAX_FILE_SIZE) {
        showToast('File không được vượt quá 5MB', 'error');
        return;
    }

    box.classList.add('has-file');
    fileNameEl.textContent = file.name;
    box.style.borderColor = '';
}

function updateMemberTitles() {
    const cards = membersContainer.querySelectorAll('.member-card');
    cards.forEach((card, index) => {
        card.querySelector('.member-title').textContent = `Nhân khẩu #${index + 1}`;
        const removeBtn = card.querySelector('.btn-remove-member');
        removeBtn.classList.toggle('hidden', cards.length === 1);
    });
}

function addMember() {
    memberCount += 1;
    const fragment = memberTemplate.content.cloneNode(true);
    const card = fragment.querySelector('.member-card');

    card.querySelector('.btn-remove-member').addEventListener('click', () => {
        if (membersContainer.querySelectorAll('.member-card').length <= 1) return;
        card.remove();
        updateMemberTitles();
    });

    initUploadBox(card.querySelector('.upload-box'));
    membersContainer.appendChild(fragment);
    updateMemberTitles();
}

function validateForm() {
    let valid = true;
    const cards = membersContainer.querySelectorAll('.member-card');

    cards.forEach((card) => {
        card.querySelectorAll('[required]').forEach((field) => {
            const empty = !field.value.trim();
            field.style.borderColor = empty ? '#DC2626' : '';
            if (empty) valid = false;
        });
    });

    if (!valid) {
        showToast('Vui lòng nhập đầy đủ thông tin bắt buộc', 'error');
    }

    return valid;
}

btnAddMember.addEventListener('click', addMember);

btnCancel.addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn hủy và xóa thông tin đã nhập?')) {
        membersContainer.innerHTML = '';
        memberCount = 0;
        addMember();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const count = membersContainer.querySelectorAll('.member-card').length;
    showToast(`Đã gửi hồ sơ khai nhân khẩu cho ${count} thành viên`);
});

addMember();
