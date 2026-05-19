function renderXemHoGiaDinhContent() {
    return `
        <div class="household-page">
            <div class="household-header">
                <h2>Xem hồ sơ hộ gia đình</h2>
                <p>Tra cứu thông tin chi tiết về nhân khẩu, địa chỉ và lịch sử biến động của hộ gia đình.</p>
            </div>

            <div class="household-search-card">
                <div class="household-field">
                    <label>Mã hộ gia đình</label>
                    <input type="text" placeholder="VD: HK-001234">
                </div>

                <div class="household-field">
                    <label>Tên chủ hộ</label>
                    <input type="text" placeholder="VD: Nguyễn Văn A">
                </div>

                <div class="household-field">
                    <label>Địa chỉ</label>
                    <input type="text" placeholder="Tên đường, tổ dân phố...">
                </div>

                <button class="household-search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    Tra cứu
                </button>
            </div>

            <div class="household-result-card">
                <div class="household-result-title">
                    Kết quả tìm kiếm <span>(3)</span>
                </div>

                <table class="household-table">
                    <thead>
                        <tr>
                            <th>Mã hộ</th>
                            <th>Tên chủ hộ</th>
                            <th>Địa chỉ</th>
                            <th>Số thành viên</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="household-row"
                            data-code="HK-001234"
                            data-owner="Nguyễn Văn Hùng"
                            data-address="123 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM"
                            data-cccd="079090123456"
                            data-member-count="4">
                            <td class="code">HK-001234</td>
                            <td>Nguyễn Văn Hùng</td>
                            <td>123 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM</td>
                            <td><span class="member-count">4</span></td>
                            <td><span class="status-active">Đang cư trú</span></td>
                        </tr>

                        <tr class="household-row"
                            data-code="HK-001235"
                            data-owner="Lê Hoàng Sơn"
                            data-address="45 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM"
                            data-cccd="079091223344"
                            data-member-count="3">
                            <td class="code">HK-001235</td>
                            <td>Lê Hoàng Sơn</td>
                            <td>45 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM</td>
                            <td><span class="member-count">3</span></td>
                            <td><span class="status-active">Đang cư trú</span></td>
                        </tr>

                        <tr class="household-row"
                            data-code="HK-001236"
                            data-owner="Trần Đình Trọng"
                            data-address="89 Pasteur, Phường Bến Nghé, Quận 1, TP.HCM"
                            data-cccd="079092334455"
                            data-member-count="2">
                            <td class="code">HK-001236</td>
                            <td>Trần Đình Trọng</td>
                            <td>89 Pasteur, Phường Bến Nghé, Quận 1, TP.HCM</td>
                            <td><span class="member-count">2</span></td>
                            <td><span class="status-active">Đang cư trú</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            ${renderHouseholdDetailDialog()}
        </div>
    `;
}

function renderHouseholdDetailDialog() {
    return `
        <div class="detail-modal" id="householdDetailModal">
            <div class="detail-modal-content household-detail-modal">
                <div class="detail-header">
                    <h3>Sổ hộ khẩu: <span id="householdCode">HK-001234</span></h3>
                    <button class="btn-close" onclick="closeHouseholdDetailModal()">✕</button>
                </div>

                <div class="detail-body">
                    <section class="household-owner-card">
                        <div class="household-location-icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>

                        <div>
                            <h4>Chủ hộ: <span id="householdOwner">Nguyễn Văn Hùng</span></h4>
                            <p id="householdAddress">123 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM</p>
                            <div class="household-meta">
                                <span>CCCD: <strong id="householdCccd">079090123456</strong></span>
                                <span>Trạng thái: <strong class="status-active">Đang cư trú</strong></span>
                            </div>
                        </div>
                    </section>

                    <section class="detail-card">
                        <h4><i class="fa-solid fa-users"></i> Danh sách thành viên <span id="householdMemberCount">(4)</span></h4>

                        <table class="member-table">
                            <thead>
                                <tr>
                                    <th>Họ và tên</th>
                                    <th>Quan hệ</th>
                                    <th>Ngày sinh</th>
                                    <th>Số CCCD</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Nguyễn Văn Hùng</td>
                                    <td><span class="relation-badge primary">Chủ hộ</span></td>
                                    <td>15/04/1980</td>
                                    <td>079090123456</td>
                                </tr>
                                <tr>
                                    <td>Trần Thị Mai</td>
                                    <td><span class="relation-badge">Vợ</span></td>
                                    <td>20/08/1982</td>
                                    <td>079192654321</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Minh Khôi</td>
                                    <td><span class="relation-badge">Con trai</span></td>
                                    <td>15/10/2023</td>
                                    <td>Chưa có</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Thị Lan</td>
                                    <td><span class="relation-badge">Con gái</span></td>
                                    <td>05/06/2010</td>
                                    <td>079110112233</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section class="detail-card">
                        <h4><i class="fa-solid fa-clock-rotate-left"></i> Lịch sử biến động</h4>

                        <div class="household-history">
                            <div class="history-dot"></div>
                            <div class="history-box">
                                <div>
                                    <strong>Nhập sinh</strong>
                                    <span>20/10/2023</span>
                                </div>
                                <p>Thêm thành viên Nguyễn Minh Khôi</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="household-dialog-footer">
                    <button class="btn btn-secondary-outline" onclick="closeHouseholdDetailModal()">Đóng</button>
                </div>
            </div>
        </div>
    `;
}

function initXemHoGiaDinhEvents() {
    document.querySelector('.household-search-btn')?.addEventListener('click', function () {
        document.querySelector('.household-result-card')?.classList.add('show');
    });

    document.querySelectorAll('.household-row').forEach(row => {
        row.addEventListener('click', function () {
            openHouseholdDetail(this);
        });
    });
}

function openHouseholdDetail(row) {
    document.getElementById('householdCode').textContent = row.dataset.code;
    document.getElementById('householdOwner').textContent = row.dataset.owner;
    document.getElementById('householdAddress').textContent = row.dataset.address;
    document.getElementById('householdCccd').textContent = row.dataset.cccd;
    document.getElementById('householdMemberCount').textContent = `(${row.dataset.memberCount})`;

    document.querySelectorAll('.household-row').forEach(item => item.classList.remove('active'));
    row.classList.add('active');

    document.getElementById('householdDetailModal').classList.add('active');
}

function closeHouseholdDetailModal() {
    document.getElementById('householdDetailModal')?.classList.remove('active');
}