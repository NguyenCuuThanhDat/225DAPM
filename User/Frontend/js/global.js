// ACTIVE NAVIGATION
const navLinks = document.querySelectorAll('.nav-links li');

navLinks.forEach(link => {
    link.addEventListener('click', () => {

        navLinks.forEach(item => {
            item.classList.remove('active');
        });

        link.classList.add('active');
    });
});

// BUTTON LOADING
function setButtonLoading(button, isLoading = true) {

    if (isLoading) {
        button.disabled = true;
        button.dataset.original = button.innerHTML;
        button.innerHTML = 'Đang xử lý...';
    } else {
        button.disabled = false;
        button.innerHTML = button.dataset.original;
    }
}

// SIMPLE TOAST
function showToast(message, type = 'success') {

    const toast = document.createElement('div');

    toast.className = `toast toast-${type}`;
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {

        toast.classList.remove('show');

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 3000);
}