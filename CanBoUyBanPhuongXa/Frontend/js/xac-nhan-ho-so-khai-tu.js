function renderKhaiTuContent() {
    return `
        <div class="death-page">
            <div class="death-header">
                <div>
                    <h2>Xác nhận hồ sơ khai tử</h2>
                    <p>Quản lý và xét duyệt các yêu cầu đăng ký khai tử, cập nhật trạng thái nhân khẩu.</p>
                </div>

                <div class="death-actions">
                    <input type="text" class="death-search-input" placeholder="Tìm mã HS, tên người mất...">
                    <button class="death-filter-btn">
                        <i class="fa-solid fa-filter"></i>
                        Lọc
                    </button>
                </div>
            </div>

            <div class="death-table-card">
                <table class="death-table">
                    <thead>
                        <tr>
                            <th>Mã hồ sơ</th>
                            <th>Tên người mất</th>
                            <th>Ngày mất</th>
                            <th>Người khai báo</th>
                            <th>Ngày nộp</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="death-record-row"
                            data-code="KT-2023-042"
                            data-name="Trần Thị C"
                            data-death-time="18/10/2023 08:30"
                            data-birth="12/05/1945"
                            data-cccd="079145223344"
                            data-death-place="Bệnh viện Chợ Rẫy, TP.HCM"
                            data-cause="Bệnh tuổi già"
                            data-address="78 Nguyễn Đình Chiểu, Phường Bến Nghé, Quận 1, TP.HCM"
                            data-reporter="Lê Văn D"
                            data-relation="Con trai"
                            data-reporter-cccd="079080112233">
                            <td class="code">KT-2023-042</td>
                            <td>Trần Thị C</td>
                            <td>18/10/2023 08:30</td>
                            <td>Lê Văn D<br><span>Con trai</span></td>
                            <td>19/10/2023</td>
                            <td><span class="badge badge-pending">Chờ xử lý</span></td>
                        </tr>

                        <tr class="death-record-row"
                            data-code="KT-2023-043"
                            data-name="Nguyễn Văn H"
                            data-death-time="20/10/2023 14:15"
                            data-birth="03/09/1952"
                            data-cccd="079152889900"
                            data-death-place="Nhà riêng, Quận 1, TP.HCM"
                            data-cause="Bệnh nặng"
                            data-address="20 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP.HCM"
                            data-reporter="Nguyễn Thị K"
                            data-relation="Vợ"
                            data-reporter-cccd="079081223344">
                            <td class="code">KT-2023-043</td>
                            <td>Nguyễn Văn H</td>
                            <td>20/10/2023 14:15</td>
                            <td>Nguyễn Thị K<br><span>Vợ</span></td>
                            <td>21/10/2023</td>
                            <td><span class="badge badge-pending">Chờ xử lý</span></td>
                        </tr>

                        <tr class="death-record-row"
                            data-code="KT-2023-040"
                            data-name="Lê Hữu T"
                            data-death-time="10/10/2023 09:00"
                            data-birth="08/02/1960"
                            data-cccd="079160556677"
                            data-death-place="Bệnh viện Nhân dân Gia Định"
                            data-cause="Tai biến"
                            data-address="15 Pasteur, Phường Bến Nghé, Quận 1, TP.HCM"
                            data-reporter="Lê Hữu M"
                            data-relation="Em trai"
                            data-reporter-cccd="079082334455">
                            <td class="code">KT-2023-040</td>
                            <td>Lê Hữu T</td>
                            <td>10/10/2023 09:00</td>
                            <td>Lê Hữu M<br><span>Em trai</span></td>
                            <td>11/10/2023</td>
                            <td><span class="badge badge-approved">Đã duyệt</span></td>
                        </tr>

                        <tr class="death-record-row"
                            data-code="KT-2023-044"
                            data-name="Phạm Thị N"
                            data-death-time="22/10/2023 22:00"
                            data-birth="01/01/1948"
                            data-cccd="079148778899"
                            data-death-place="Bệnh viện Quận 1"
                            data-cause="Suy tim"
                            data-address="45 Hai Bà Trưng, Phường Bến Nghé, Quận 1, TP.HCM"
                            data-reporter="Trần Văn P"
                            data-relation="Cháu ngoại"
                            data-reporter-cccd="079083445566">
                            <td class="code">KT-2023-044</td>
                            <td>Phạm Thị N</td>
                            <td>22/10/2023 22:00</td>
                            <td>Trần Văn P<br><span>Cháu ngoại</span></td>
                            <td>23/10/2023</td>
                            <td><span class="badge badge-more-info">Yêu cầu bổ sung</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            ${renderKhaiTuDetailDialog()}
        </div>
    `;
}

function renderKhaiTuDetailDialog() {
    return `
        <div class="detail-modal" id="deathDetailModal">
            <div class="detail-modal-content death-detail-modal-content">
                <div class="detail-header">
                    <h3>Chi tiết hồ sơ khai tử: <span id="deathRecordCode">KT-2023-042</span></h3>
                    <button class="btn-close" onclick="closeDeathDetailModal()">✕</button>
                </div>

                <div class="detail-body">
                    <section class="detail-card">
                        <h4>Thông tin người đã mất</h4>

                        <div class="detail-grid two-cols">
                            <div class="detail-field">
                                <label>Họ và tên</label>
                                <p id="deathPersonName">Trần Thị C</p>
                            </div>

                            <div class="detail-field">
                                <label>Số CCCD/CMND</label>
                                <p id="deathPersonCccd">079145223344</p>
                            </div>

                            <div class="detail-field">
                                <label>Ngày sinh</label>
                                <p id="deathPersonBirth">12/05/1945</p>
                            </div>

                            <div class="detail-field">
                                <label>Thời gian mất</label>
                                <p id="deathTime" class="danger-text">18/10/2023 08:30</p>
                            </div>

                            <div class="detail-field">
                                <label>Nơi mất</label>
                                <p id="deathPlace">Bệnh viện Chợ Rẫy, TP.HCM</p>
                            </div>

                            <div class="detail-field">
                                <label>Nguyên nhân</label>
                                <p id="deathCause">Bệnh tuổi già</p>
                            </div>
                        </div>

                        <div class="detail-field full">
                            <label>Nơi thường trú cuối cùng</label>
                            <p id="deathAddress">78 Nguyễn Đình Chiểu, Phường Bến Nghé, Quận 1, TP.HCM</p>
                        </div>
                    </section>

                    <section class="detail-card">
                        <h4>Thông tin người khai báo</h4>

                        <div class="detail-grid two-cols">
                            <div class="detail-field">
                                <label>Họ tên người khai báo</label>
                                <p id="deathReporterName">Lê Văn D</p>
                            </div>

                            <div class="detail-field">
                                <label>Số CCCD</label>
                                <p id="deathReporterCccd">079080112233</p>
                            </div>

                            <div class="detail-field">
                                <label>Quan hệ với người mất</label>
                                <p id="deathReporterRelation">Con trai</p>
                            </div>
                        </div>
                    </section>

                    <section class="detail-card">
                        <h4>Giấy tờ đính kèm</h4>

                        <div class="file-row">
                            <span>📄 Giấy báo tử.pdf<br><small>1.1 MB</small></span>
                            <button onclick="previewFile(event)">Xem trước</button>
                            <button onclick="downloadFile(event)">⬇</button>
                        </div>

                        <div class="file-row">
                            <span>📄 CCCD người khai báo.jpg<br><small>0.8 MB</small></span>
                            <button onclick="previewFile(event)">Xem trước</button>
                            <button onclick="downloadFile(event)">⬇</button>
                        </div>
                    </section>

                    <section class="detail-card note-card" id="deathRequiredNoteBox">
                        <h4>Ghi chú xử lý <span>*</span></h4>
                        <textarea 
                            class="notes-input death-required-note"
                            maxlength="500"
                            placeholder="Nhập ghi chú, lý do xử lý hồ sơ khai tử..."
                            oninput="handleDeathNoteInput()"></textarea>

                        <div class="note-footer">
                            <small class="note-error">Vui lòng nhập ghi chú xử lý hồ sơ.</small>
                            <small><span id="deathNoteCount">0</span>/500</small>
                        </div>
                    </section>
                </div>

                <div class="action-buttons detail-actions">
                    <button class="btn btn-reject" onclick="rejectDeathRecord()">Từ chối</button>
                    <button class="btn btn-more-info" onclick="requestMoreDeathRecord()">Yêu cầu bổ sung</button>
                    <button class="btn btn-approve" onclick="approveDeathRecord()">Xác nhận duyệt</button>
                </div>
            </div>
        </div>
    `;
}

function initKhaiTuEvents() {
    document.querySelector('.death-search-input')?.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        document.querySelectorAll('.death-table tbody tr').forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    document.querySelector('.death-filter-btn')?.addEventListener('click', function () {
        alert('Mở bộ lọc hồ sơ khai tử');
    });

    document.querySelectorAll('.death-record-row').forEach(row => {
        row.addEventListener('click', function () {
            openDeathDetail(this);
        });
    });
}

function openDeathDetail(row) {
    document.getElementById('deathRecordCode').textContent = row.dataset.code;
    document.getElementById('deathPersonName').textContent = row.dataset.name;
    document.getElementById('deathPersonCccd').textContent = row.dataset.cccd;
    document.getElementById('deathPersonBirth').textContent = row.dataset.birth;
    document.getElementById('deathTime').textContent = row.dataset.deathTime;
    document.getElementById('deathPlace').textContent = row.dataset.deathPlace;
    document.getElementById('deathCause').textContent = row.dataset.cause;
    document.getElementById('deathAddress').textContent = row.dataset.address;
    document.getElementById('deathReporterName').textContent = row.dataset.reporter;
    document.getElementById('deathReporterCccd').textContent = row.dataset.reporterCccd;
    document.getElementById('deathReporterRelation').textContent = row.dataset.relation;

    document.querySelectorAll('.death-record-row').forEach(item => item.classList.remove('active'));
    row.classList.add('active');

    document.getElementById('deathDetailModal').classList.add('active');
}

function closeDeathDetailModal() {
    document.getElementById('deathDetailModal')?.classList.remove('active');
}

function validateDeathRequiredNote() {
    const noteInput = document.querySelector('.death-required-note');
    const noteBox = document.getElementById('deathRequiredNoteBox');

    if (!noteInput || !noteBox) return true;

    if (!noteInput.value.trim()) {
        noteBox.classList.add('note-error-state');
        noteInput.focus();
        return false;
    }

    noteBox.classList.remove('note-error-state');
    return true;
}

function handleDeathNoteInput() {
    const noteInput = document.querySelector('.death-required-note');
    const noteCount = document.getElementById('deathNoteCount');
    const noteBox = document.getElementById('deathRequiredNoteBox');

    if (noteInput && noteCount) {
        noteCount.textContent = noteInput.value.length;
    }

    if (noteInput.value.trim()) {
        noteBox?.classList.remove('note-error-state');
    }
}

function approveDeathRecord() {
    if (!validateDeathRequiredNote()) return;

    const recordCode = document.getElementById('deathRecordCode')?.textContent || '';
    alert(`Hồ sơ ${recordCode} đã được xác nhận duyệt!`);
}

function rejectDeathRecord() {
    if (!validateDeathRequiredNote()) return;

    const recordCode = document.getElementById('deathRecordCode')?.textContent || '';
    alert(`Hồ sơ ${recordCode} đã bị từ chối.`);
}

function requestMoreDeathRecord() {
    if (!validateDeathRequiredNote()) return;

    const recordCode = document.getElementById('deathRecordCode')?.textContent || '';
    alert(`Yêu cầu bổ sung cho hồ sơ ${recordCode} đã được gửi!`);
}