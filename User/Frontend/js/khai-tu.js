const uploadBoxes = document.querySelectorAll('.upload-box');

uploadBoxes.forEach(box => {

    box.addEventListener('click', () => {

        const input = document.createElement('input');

        input.type = 'file';

        input.accept = '.pdf,.jpg,.png';

        input.click();

        input.addEventListener('change', () => {

            if (input.files.length > 0) {

                const file = input.files[0];

                box.querySelector('p').innerHTML = `
                    Đã chọn:
                    <strong>${file.name}</strong>
                `;
            }
        });
    });
});

// FORM SUBMIT
const deathForm = document.querySelector('.death-form');

deathForm.addEventListener('submit', (e) => {

    e.preventDefault();

    showToast('Đã gửi khai tử');
});