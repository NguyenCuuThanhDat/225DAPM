const absenceForm = document.querySelector('.absence-form');

absenceForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const startDate = absenceForm.querySelectorAll('input[type="date"]')[0].value;

    const endDate = absenceForm.querySelectorAll('input[type="date"]')[1].value;

    if (new Date(endDate) < new Date(startDate)) {

        showToast(
            'Ngày kết thúc phải lớn hơn ngày bắt đầu',
            'error'
        );

        return;
    }

    showToast('Gửi khai báo thành công');
});