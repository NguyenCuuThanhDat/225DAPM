// Mock statistics data
const statsData = {
    totalPopulation: 12580,
    totalHouseholds: 3420,
    pendingDocuments: 15,
    processedDocuments: 128
};

// Set stats numbers
document.getElementById('totalPopulation').innerText = statsData.totalPopulation.toLocaleString();
document.getElementById('totalHouseholds').innerText = statsData.totalHouseholds.toLocaleString();
document.getElementById('pendingDocuments').innerText = statsData.pendingDocuments;
document.getElementById('processedDocuments').innerText = statsData.processedDocuments;

// Report data for different types
const reportData = {
    population: {
        title: "Thống kê dân số theo giới tính",
        labels: ['Nam', 'Nữ'],
        data: [6240, 6340],
        colors: ['#3B82F6', '#EC4899'],
        detail: [
            { name: 'Nam', value: 6240, percent: 49.6 },
            { name: 'Nữ', value: 6340, percent: 50.4 }
        ]
    },
    age: {
        title: "Thống kê nhân khẩu theo độ tuổi",
        labels: ['0-15 tuổi', '16-30 tuổi', '31-50 tuổi', '51-65 tuổi', '65+ tuổi'],
        data: [2150, 3580, 4120, 1850, 880],
        colors: ['#B91C1C', '#DC2626', '#EF4444', '#F87171', '#FCA5A5'],
        detail: [
            { name: '0-15 tuổi', value: 2150, percent: 17.1 },
            { name: '16-30 tuổi', value: 3580, percent: 28.5 },
            { name: '31-50 tuổi', value: 4120, percent: 32.8 },
            { name: '51-65 tuổi', value: 1850, percent: 14.7 },
            { name: '65+ tuổi', value: 880, percent: 6.9 }
        ]
    },
    household: {
        title: "Thống kê hộ gia đình theo khu vực",
        labels: ['Khu vực 1', 'Khu vực 2', 'Khu vực 3'],
        data: [1240, 1180, 1000],
        colors: ['#F59E0B', '#FBBF24', '#FCD34D'],
        detail: [
            { name: 'Khu vực 1', value: 1240, percent: 36.3 },
            { name: 'Khu vực 2', value: 1180, percent: 34.5 },
            { name: 'Khu vực 3', value: 1000, percent: 29.2 }
        ]
    },
    document: {
        title: "Thống kê hồ sơ theo loại (tháng này)",
        labels: ['Thường trú', 'Tạm trú', 'Tạm vắng', 'Khai sinh', 'Khai tử', 'Tách hộ', 'Nhập hộ'],
        data: [45, 32, 28, 52, 18, 25, 20],
        colors: ['#8B5CF6', '#A78BFA', '#C4B5FD', '#6D28D9', '#7C3AED', '#8B5CF6', '#A78BFA'],
        detail: [
            { name: 'Thường trú', value: 45, percent: 20.5 },
            { name: 'Tạm trú', value: 32, percent: 14.6 },
            { name: 'Tạm vắng', value: 28, percent: 12.8 },
            { name: 'Khai sinh', value: 52, percent: 23.7 },
            { name: 'Khai tử', value: 18, percent: 8.2 },
            { name: 'Tách hộ', value: 25, percent: 11.4 },
            { name: 'Nhập hộ', value: 20, percent: 9.1 }
        ]
    },
    trend: {
        title: "Biến động dân số 6 tháng gần nhất",
        labels: ['Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10'],
        data: [12500, 12530, 12545, 12560, 12575, 12580],
        changes: [0, 30, 15, 15, 15, 5],
        detail: [
            { month: 'Tháng 5', population: 12500, change: 0 },
            { month: 'Tháng 6', population: 12530, change: 30 },
            { month: 'Tháng 7', population: 12545, change: 15 },
            { month: 'Tháng 8', population: 12560, change: 15 },
            { month: 'Tháng 9', population: 12575, change: 15 },
            { month: 'Tháng 10', population: 12580, change: 5 }
        ]
    }
};

function renderBarChart(data, labels, colors) {
    const maxData = Math.max(...data);
    const chartDiv = document.getElementById('barChart');
    
    chartDiv.innerHTML = data.map((value, index) => `
        <div class="bar-wrapper">
            <div class="bar" style="height: ${(value / maxData) * 200}px; background: ${colors[index % colors.length]}">
                <span class="bar-value">${value.toLocaleString()}</span>
            </div>
            <div class="bar-label">${labels[index]}</div>
        </div>
    `).join('');
}

function renderTrendChart(data, labels) {
    const maxData = Math.max(...data);
    const chartDiv = document.getElementById('barChart');
    
    chartDiv.innerHTML = `
        <div class="trend-chart">
            <div class="trend-bars">
                ${data.map((value, index) => {
                    const prevValue = index > 0 ? data[index - 1] : value;
                    const isIncrease = value >= prevValue;
                    return `
                        <div class="trend-item">
                            <div class="trend-bar ${isIncrease ? 'increase' : 'decrease'}" 
                                 style="height: ${(value / maxData) * 200}px">
                                <span class="bar-value">${value.toLocaleString()}</span>
                            </div>
                            <div class="trend-label">${labels[index]}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderDetailTable(detail) {
    const tbody = document.getElementById('detailBody');
    const maxValue = Math.max(...detail.map(d => d.value));
    
    tbody.innerHTML = detail.map(item => `
        <tr>
            <td><strong>${item.name}</strong></td>
            <td>${item.value.toLocaleString()}</td>
            <td>${item.percent}%</td>
            <td>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(item.value / maxValue) * 100}%"></div>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderTrendTable(detail) {
    const tbody = document.getElementById('detailBody');
    
    tbody.innerHTML = detail.map(item => `
        <tr>
            <td><strong>${item.month}</strong></td>
            <td>${item.population.toLocaleString()}</td>
            <td><span class="${item.change >= 0 ? 'stat-change positive' : 'stat-change negative'}">${item.change >= 0 ? '+' : ''}${item.change}</span></td>
            <td>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(item.change / 30) * 100}%; background: ${item.change >= 0 ? '#10B981' : '#EF4444'}"></div>
                </div>
            </td>
        </tr>
    `).join('');
}

function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = `<i class='bx bx-check-circle'></i> ${message}`;
    alertDiv.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${type === 'success' ? '#10B981' : '#3B82F6'};
        color: white;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 500;
        z-index: 2000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 3000);
}

function loadReport() {
    const type = document.getElementById('reportType').value;
    const fromDate = document.getElementById('fromDate').value;
    const toDate = document.getElementById('toDate').value;
    const scope = document.getElementById('scope').value;
    
    const data = reportData[type];
    document.getElementById('reportTitle').innerHTML = `<i class='bx bx-bar-chart-alt-2'></i> ${data.title}`;
    
    if (type === 'trend') {
        renderTrendChart(data.data, data.labels);
        renderTrendTable(data.detail);
    } else {
        renderBarChart(data.data, data.labels, data.colors);
        renderDetailTable(data.detail);
    }
    
    // Show scope and date info
    const scopeText = {
        'all': 'Toàn phường/xã',
        'zone1': 'Khu vực 1',
        'zone2': 'Khu vực 2',
        'zone3': 'Khu vực 3'
    };
    showAlert(`Đã tạo báo cáo "${data.title}" - ${scopeText[scope]} (${fromDate} đến ${toDate})`, 'success');
}

function exportToExcel() {
    showAlert('Đang tải xuống file Excel...', 'info');
}

function exportToPDF() {
    showAlert('Đang tạo file PDF...', 'info');
}

function printReport() {
    window.print();
}

// Event listeners
document.getElementById('btnGenerate').addEventListener('click', loadReport);
document.getElementById('btnExportExcel').addEventListener('click', exportToExcel);
document.getElementById('btnExportPDF').addEventListener('click', exportToPDF);
document.getElementById('btnPrint').addEventListener('click', printReport);

// Initialize with default report
loadReport();