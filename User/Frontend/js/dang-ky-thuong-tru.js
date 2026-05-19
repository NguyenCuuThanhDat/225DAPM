const form = document.querySelector('.resident-form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const requiredInputs = form.querySelectorAll('input, select');

    let isValid = true;

    requiredInputs.forEach(input => {

        if (!input.value.trim()) {

            input.style.borderColor = 'red';
            isValid = false;

        } else {

            input.style.borderColor = '#ddd';
        }
    });

    if (!isValid) {

        showToast('Vui lòng nhập đầy đủ thông tin', 'error');
        return;
    }

    showToast('Chuyển sang bước tiếp theo');
});