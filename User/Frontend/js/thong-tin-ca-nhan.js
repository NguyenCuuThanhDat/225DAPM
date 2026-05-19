const editButtons = document.querySelectorAll('.profile-action');

editButtons.forEach(button => {

    button.addEventListener('click', () => {

        const row = button.parentElement;

        const valueElement = row.querySelector('.profile-value');

        const currentValue = valueElement.innerText;

        valueElement.innerHTML = `
            <input 
                type="text" 
                value="${currentValue}"
                class="edit-input"
            >
        `;

        button.innerHTML = '<i class="bx bx-check"></i>';
    });
});

// SAVE
const saveButton = document.querySelector('.btn-save');

if (saveButton) {

    saveButton.addEventListener('click', () => {

        showToast('Đã lưu thay đổi');
    });
}