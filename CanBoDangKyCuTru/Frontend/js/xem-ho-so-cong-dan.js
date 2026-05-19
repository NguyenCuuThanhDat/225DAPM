document.addEventListener('DOMContentLoaded', () => {
    // Tabs logic
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('active');
                const badge = t.querySelector('.badge');
                if(badge) {
                    badge.classList.remove('badge-gray');
                    badge.classList.add('badge-gray');
                }
            });
            
            tab.classList.add('active');
            const activeBadge = tab.querySelector('.badge');
            if(activeBadge) {
                activeBadge.classList.remove('badge-gray');
            }
        });
    });

    // Close modal when clicking outside
    const modal = document.getElementById('detailModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

function openModal(id) {
    // In a real application, you would fetch the data based on the 'id' parameter here
    const modal = document.getElementById('detailModal');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
}
