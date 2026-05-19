document.addEventListener('DOMContentLoaded', function () {
    setupSidebarNavigation();
    navigateTo('khai-sinh');
});

function setupSidebarNavigation() {
    document.querySelectorAll('.nav-item[data-page]').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            navigateTo(this.getAttribute('data-page'));
        });
    });
}

function navigateTo(page) {
    const pageContent = document.getElementById('pageContent');

    if (page === 'khai-sinh') {
        pageContent.innerHTML = renderKhaiSinhContent();
        initKhaiSinhEvents();
        return;
    }

    if (page === 'khai-tu') {
        pageContent.innerHTML = renderKhaiTuContent();
        initKhaiTuEvents();
        return;
    }

    if (page === 'xem-ho') {
        pageContent.innerHTML = renderXemHoGiaDinhContent();
        initXemHoGiaDinhEvents();
        return;
    }

    pageContent.innerHTML = renderNotAvailableContent();
}

function renderNotAvailableContent() {
    return `
        <div class="list-panel" style="align-items:center; justify-content:center;">
            <div style="text-align:center; color:#999;">
                <div style="font-size:40px; margin-bottom:12px;">⚠️</div>
                <h2>Chưa có màn hình này</h2>
                <p>Chức năng này sẽ được thiết kế sau.</p>
            </div>
        </div>
    `;
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeDetailPanel?.();
    }
});

document.addEventListener('click', function (event) {
    const birthModal = document.getElementById('detailModal');
    const deathModal = document.getElementById('deathDetailModal');

    if (event.target === birthModal) {
        closeDetailPanel?.();
    }

    if (event.target === deathModal) {
        closeDeathDetailModal?.();
    }
});