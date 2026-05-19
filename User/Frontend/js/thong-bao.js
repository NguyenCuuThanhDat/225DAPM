const notifications = {
    1: {
        type: 'success',
        icon: "bx bx-check-circle",
        title: 'Hồ sơ đăng ký tạm trú được duyệt',
        time: '15/12/2023 - 14:30',
        content: 'Hồ sơ đăng ký tạm trú mã TT-2023-08912 của bạn đã được cán bộ phường/xã phê duyệt. Vui lòng đến trụ sở UBND để nhận kết quả trong thời hạn 10 ngày làm việc.'
    },
    2: {
        type: 'info',
        icon: "bx bx-info-circle",
        title: 'Lịch tiêm chủng mở rộng',
        time: '12/12/2023 - 09:00',
        content: 'Trạm y tế phường thông báo lịch tiêm chủng mở rộng cho trẻ em và người cao tuổi từ ngày 18/12/2023 đến 22/12/2023. Công dân vui lòng đăng ký trước qua cổng dịch vụ công hoặc trực tiếp tại trạm y tế.'
    },
    3: {
        type: 'warning',
        icon: "bx bx-error",
        title: 'Nhắc nhở đóng phí vệ sinh',
        time: '10/12/2023 - 08:00',
        content: 'Kính gửi hộ gia đình, phường/xã nhắc nhở việc đóng phí vệ sinh môi trường quý IV/2023. Thời hạn nộp trước ngày 31/12/2023. Liên hệ bộ phận một cửa để được hướng dẫn hình thức thanh toán.'
    },
    4: {
        type: 'info',
        icon: "bx bx-info-circle",
        title: 'Thông báo cắt điện tạm thời',
        time: '08/12/2023 - 10:00',
        content: 'Điện lực thông báo cắt điện tạm thời khu vực đường ABC ngày 09/12/2023 từ 8:00 đến 12:00 để bảo trì lưới điện. Công dân chủ động sắp xếp sinh hoạt và sản xuất phù hợp.'
    },
    5: {
        type: 'success',
        icon: "bx bx-check-circle",
        title: 'Kết quả xử lý hồ sơ tách hộ khẩu',
        time: '05/12/2023 - 16:00',
        content: 'Hồ sơ tách hộ khẩu mã TH-2023-00456 đã được xử lý xong. Kết quả: chấp thuận tách hộ. Bạn có thể tra cứu chi tiết tại mục Yêu cầu của tôi hoặc đến nhận bản sao tại UBND phường/xã.'
    }
};

const listEl = document.getElementById('notificationList');
const detailEmpty = document.getElementById('detailEmpty');
const detailContent = document.getElementById('detailContent');
const detailIcon = document.getElementById('detailIcon');
const detailTitle = document.getElementById('detailTitle');
const detailTime = document.getElementById('detailTime');
const detailText = document.getElementById('detailText');
const unreadBadge = document.getElementById('unreadBadge');
const searchInput = document.querySelector('.search-box input');

function updateUnreadBadge() {
    const count = document.querySelectorAll('.notification-item.unread').length;
    if (count === 0) {
        unreadBadge.textContent = 'Không có thông báo chưa đọc';
    } else {
        unreadBadge.textContent = `${count} thông báo chưa đọc`;
    }
}

function showDetail(id) {
    const data = notifications[id];
    if (!data) return;

    detailEmpty.classList.add('hidden');
    detailContent.classList.remove('hidden');

    detailIcon.className = `detail-icon ${data.type}`;
    detailIcon.innerHTML = `<i class='${data.icon}'></i>`;
    detailTitle.textContent = data.title;
    detailTime.textContent = data.time;
    detailText.textContent = data.content;
}

function selectNotification(item) {
    document.querySelectorAll('.notification-item').forEach(el => {
        el.classList.remove('active');
    });

    item.classList.add('active');
    item.classList.remove('unread');

    showDetail(item.dataset.id);
    updateUnreadBadge();
}

listEl.addEventListener('click', (e) => {
    const item = e.target.closest('.notification-item');
    if (item) selectNotification(item);
});

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();

        document.querySelectorAll('.notification-item').forEach(item => {
            const title = item.querySelector('h4').textContent.toLowerCase();
            item.style.display = title.includes(query) ? '' : 'none';
        });
    });
}

updateUnreadBadge();
