const form = document.getElementById('tamTruForm');
const step1Panel = document.getElementById('step1Panel');
const step2Panel = document.getElementById('step2Panel');
const confirmSummary = document.getElementById('confirmSummary');
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');
const btnCancel = document.getElementById('btnCancel');
const stepLine = document.getElementById('stepLine');
const steps = document.querySelectorAll('#formStepper .step');

let currentStep = 1;
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const uploadedFiles = {};

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
        const empty = field.type === 'file' ? !field.files.length : !field.value.trim();
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

function formatDate(value) {
    if (!value) return '';
    const [y, m, d] = value.split('-');
    return `${d}/${m}/${y}`;
}

function getSelectText(name) {
    const select = form.elements[name];
    return select.options[select.selectedIndex]?.text || '';
}

function buildSummary() {
    confirmSummary.innerHTML = `
        <div class="confirm-row"><strong>Họ và tên</strong><span>${form.fullName.value}</span></div>
        <div class="confirm-row"><strong>Ngày sinh</strong><span>${formatDate(form.birthDate.value)}</span></div>
        <div class="confirm-row"><strong>Số CCCD/CMND</strong><span>${form.cccd.value}</span></div>
        <div class="confirm-row"><strong>Số điện thoại</strong><span>${form.phone.value}</span></div>
        <div class="confirm-row"><strong>Địa chỉ</strong><span>${form.address.value}, ${getSelectText('ward')}, ${getSelectText('district')}</span></div>
        <div class="confirm-row"><strong>Thời gian tạm trú</strong><span>${formatDate(form.startDate.value)} – ${formatDate(form.endDate.value)}</span></div>
        <div class="confirm-row"><strong>CCCD/CMND</strong><span>${uploadedFiles.cccd?.name || ''}</span></div>
        <div class="confirm-row"><strong>Chứng minh chỗ ở</strong><span>${uploadedFiles.residence?.name || ''}</span></div>
    `;
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
        uploadedFiles.cccd = null;
        uploadedFiles.residence = null;
        document.querySelectorAll('.upload-box').forEach((box) => {
            box.classList.remove('has-file');
            box.querySelector('.file-name').textContent = '';
        });
        setStep(1);
    }, 1500);
});

btnBack.addEventListener('click', () => setStep(1));

btnCancel.addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn hủy và xóa thông tin đã nhập?')) {
        form.reset();
        setStep(1);
    }
});

setStep(1);
