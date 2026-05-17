const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('active'));
        tab.classList.add('active');
    });
});

const btnFilter = document.querySelector('.btn-filter');
if (btnFilter) {
    btnFilter.addEventListener('click', () => {
        alert('Tính năng lọc sẽ được triển khai sau.');
    });
}
