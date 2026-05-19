const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {

    card.addEventListener('click', () => {

        const title = card.querySelector('h4').innerText;

        showToast(`Đã chọn: ${title}`);
    });
});