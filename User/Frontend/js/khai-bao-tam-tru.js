const form = document.getElementById('tamTruForm');
const step1Panel = document.getElementById('step1Panel');
const step2Panel = document.getElementById('step2Panel');
const confirmInfoGrid = document.getElementById('confirmInfoGrid');
const confirmDocsList = document.getElementById('confirmDocsList');
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');
const btnCancel = document.getElementById('btnCancel');
const stepLine = document.getElementById('stepLine');
const steps = document.querySelectorAll('#formStepper .step');

let currentStep = 1;
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const uploadedFiles = {};

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function setStep(step) {
    currentStep = step;

    steps.forEach((el) => {
        const n = Number(el.dataset.step);
        el.classList.toggle('active', n === step);
        el.classList.toggle('completed', n < step);
    });

    stepLine.classList.toggle('active', step >= 2);

    step1Panel.classList.toggle('hidden', step !== 1);
    step2Panel.classList.toggle('hidden', step !== 2);
    btnBack.classList.toggle('hidden', step === 1);
    btnNext.textContent = step === 1 ? 'Tiếp theo' : 'Gửi hồ sơ';
}

function validateStep1() {
    const required = form.querySelectorAll('#step1Panel [required]');
    let valid = true;

    required.forEach((field) => {
        const empty = !field.value.trim();
        field.style.borderColor = empty ? '#DC2626' : '';
        if (empty) valid = false;
    });

    const startDate = form.startDate.value;
    const endDate = form.endDate.value;

    if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
        form.endDate.style.borderColor = '#DC2626';
        showToast('Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu', 'error');
        return false;
    }

    const uploadBoxes = step1Panel.querySelectorAll('.upload-box[data-upload]');
    uploadBoxes.forEach((box) => {
        const key = box.dataset.upload;
        if (!uploadedFiles[key]) {
            box.style.borderColor = '#DC2626';
            valid = false;
        } else {
            box.style.borderColor = '';
        }
    });

    if (!valid) {
        showToast('Vui lòng nhập đầy đủ thông tin và tải lên giấy tờ', 'error');
    }

    return valid;
}

function daysBetween(startIso, endIso) {
    if (!startIso || !endIso) return 0;
    const ms = new Date(endIso) - new Date(startIso);
    return Math.max(0, Math.round(ms / 86400000));
}

function getSelectText(name) {
    const select = form.elements[name];
    return select?.options[select.selectedIndex]?.text || '';
}

function buildSummary() {
    const ward = getSelectText('ward');
    const district = getSelectText('district');
    const addressLine = `${form.address.value}, ${ward}, ${district}`;
    const start = form.startDate.value;
    const end = form.endDate.value;
    const days = daysBetween(start, end);

    confirmInfoGrid.innerHTML = `
        <div class="info-cell">
            <span class="info-label">Họ và tên</span>
            <span class="info-value">${escapeHtml(form.fullName.value)}</span>
        </div>
        <div class="info-cell">
            <span class="info-label">Số CCCD</span>
            <span class="info-value">${escapeHtml(form.cccd.value)}</span>
        </div>
        <div class="info-cell full-width">
            <span class="info-label">Địa chỉ tạm trú</span>
            <span class="info-value">${escapeHtml(addressLine)}</span>
        </div>
        <div class="info-cell full-width">
            <span class="info-label">Thời gian</span>
            <span class="info-value">${escapeHtml(start)} đến ${escapeHtml(end)} (${days} ngày)</span>
        </div>
    `;

    confirmDocsList.innerHTML = `
        <div class="doc-row">
            <span class="doc-label">CCCD/CMND</span>
            <span class="doc-value">${escapeHtml(uploadedFiles.cccd?.name || '')}</span>
        </div>
        <div class="doc-row">
            <span class="doc-label">Giấy tờ chỗ ở</span>
            <span class="doc-value">${escapeHtml(uploadedFiles.residence?.name || '')}</span>
        </div>
    `;
}

function clearUploads() {
    Object.keys(uploadedFiles).forEach((k) => delete uploadedFiles[k]);
    document.querySelectorAll('.upload-box').forEach((box) => {
        box.classList.remove('has-file');
        const fn = box.querySelector('.file-name');
        if (fn) fn.textContent = '';
        const input = box.querySelector('input[type="file"]');
        if (input) input.value = '';
    });
}

function handleFile(box, file) {
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

    const key = box.dataset.upload;
    uploadedFiles[key] = file;
    box.classList.add('has-file');
    box.querySelector('.file-name').textContent = file.name;
    box.style.borderColor = '';
}

document.querySelectorAll('.upload-box').forEach((box) => {
    const input = box.querySelector('input[type="file"]');

    box.addEventListener('click', () => input.click());

    input.addEventListener('change', () => {
        handleFile(box, input.files[0]);
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
        handleFile(box, e.dataTransfer.files[0]);
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (currentStep === 1) {
        if (!validateStep1()) return;
        buildSummary();
        setStep(2);
        return;
    }

    showToast('Gửi hồ sơ đăng ký tạm trú thành công');
    setTimeout(() => {
        form.reset();
        clearUploads();
        setStep(1);
    }, 1500);
});

btnBack.addEventListener('click', () => setStep(1));

btnCancel.addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn hủy và xóa thông tin đã nhập?')) {
        form.reset();
        clearUploads();
        setStep(1);
    }
});

setStep(1);
