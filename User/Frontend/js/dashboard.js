const hoTichModal = document.getElementById('hoTichModal');
const btnHoTich = document.getElementById('btnHoTich');
const closeHoTichModal = document.getElementById('closeHoTichModal');

function openHoTichModal() {
    if (!hoTichModal) return;
    hoTichModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!hoTichModal) return;
    hoTichModal.classList.add('hidden');
    document.body.style.overflow = '';
}

if (btnHoTich) {
    btnHoTich.addEventListener('click', openHoTichModal);
}

if (closeHoTichModal) {
    closeHoTichModal.addEventListener('click', closeModal);
}

if (hoTichModal) {
    hoTichModal.addEventListener('click', (e) => {
        if (e.target === hoTichModal) closeModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hoTichModal && !hoTichModal.classList.contains('hidden')) {
        closeModal();
    }
});
