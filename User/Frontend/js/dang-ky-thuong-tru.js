const form = document.getElementById('thuongTruForm');
const step1Panel = document.getElementById('step1Panel');
const step2Panel = document.getElementById('step2Panel');
const step3Panel = document.getElementById('step3Panel');
const confirmSummary = document.getElementById('confirmSummary');
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');
const btnCancel = document.getElementById('btnCancel');
const btnDraft = document.getElementById('btnDraft');
const stepLine1 = document.getElementById('stepLine1');
const stepLine2 = document.getElementById('stepLine2');
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

    stepLine1.classList.toggle('active', step >= 2);
    stepLine2.classList.toggle('active', step >= 3);

    step1Panel.classList.toggle('hidden', step !== 1);
    step2Panel.classList.toggle('hidden', step !== 2);
    step3Panel.classList.toggle('hidden', step !== 3);

    btnBack.classList.toggle('hidden', step === 1);
    btnDraft.classList.toggle('hidden', step === 3);

    if (step === 1) {
        btnNext.textContent = 'Tiếp theo';
    } else if (step === 2) {
        btnNext.textContent = 'Tiếp theo';
    } else {
        btnNext.textContent = 'Gửi hồ sơ';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateStep1() {
    const required = step1Panel.querySelectorAll('[required]');
    let valid = true;

    required.forEach((field) => {
        const empty = !field.value.trim();
        field.style.borderColor = empty ? '#DC2626' : '';
        if (empty) valid = false;
    });

    if (!valid) {
        showToast('Vui lòng nhập đầy đủ thông tin', 'error');
    }

    return valid;
}

function validateStep2() {
    let valid = true;
    const requiredKeys = ['cccd', 'residence'];

    requiredKeys.forEach((key) => {
        const box = step2Panel.querySelector(`[data-upload="${key}"]`);
        if (!uploadedFiles[key]) {
            box.style.borderColor = '#DC2626';
            valid = false;
        } else {
            box.style.borderColor = '';
        }
    });

    if (!valid) {
        showToast('Vui lòng tải lên đầy đủ giấy tờ bắt buộc', 'error');
    }

    return valid;
}

function getSelectText(name) {
    const select = form.elements[name];
    return select?.options[select.selectedIndex]?.text || '';
}

function buildSummary() {
    confirmSummary.innerHTML = `
        <div class="confirm-row"><strong>Họ và tên</strong><span>${form.fullName.value}</span></div>
        <div class="confirm-row"><strong>Ngày sinh</strong><span>${form.birthDate.value}</span></div>
        <div class="confirm-row"><strong>Số CCCD/CMND</strong><span>${form.cccd.value}</span></div>
        <div class="confirm-row"><strong>Số điện thoại</strong><span>${form.phone.value}</span></div>
        <div class="confirm-row"><strong>Địa chỉ</strong><span>${form.address.value}, ${getSelectText('ward')}, ${getSelectText('district')}</span></div>
        <div class="confirm-row"><strong>Chủ hộ</strong><span>${form.householdHead.value}</span></div>
        <div class="confirm-row"><strong>Quan hệ</strong><span>${getSelectText('relationship')}</span></div>
        <div class="confirm-row"><strong>CCCD/CMND</strong><span>${uploadedFiles.cccd?.name || ''}</span></div>
        <div class="confirm-row"><strong>Chứng minh chỗ ở</strong><span>${uploadedFiles.residence?.name || ''}</span></div>
        <div class="confirm-row"><strong>Giấy tờ khác</strong><span>${uploadedFiles.other?.name || 'Không có'}</span></div>
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
        setStep(2);
        return;
    }

    if (currentStep === 2) {
        if (!validateStep2()) return;
        buildSummary();
        setStep(3);
        return;
    }

    showToast('Gửi hồ sơ đăng ký thường trú thành công');
    setTimeout(() => {
        form.reset();
        Object.keys(uploadedFiles).forEach((k) => delete uploadedFiles[k]);
        document.querySelectorAll('.upload-box').forEach((box) => {
            box.classList.remove('has-file');
            box.querySelector('.file-name').textContent = '';
        });
        setStep(1);
    }, 1500);
});

btnBack.addEventListener('click', () => {
    if (currentStep > 1) setStep(currentStep - 1);
});

btnCancel.addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn hủy và xóa thông tin đã nhập?')) {
        form.reset();
        Object.keys(uploadedFiles).forEach((k) => delete uploadedFiles[k]);
        document.querySelectorAll('.upload-box').forEach((box) => {
            box.classList.remove('has-file');
            box.querySelector('.file-name').textContent = '';
        });
        setStep(1);
    }
});

btnDraft.addEventListener('click', () => {
    showToast('Đã lưu nháp hồ sơ');
});

setStep(1);
