document.addEventListener('DOMContentLoaded', function () {
    setupSidebarNavigation();
    navigateTo('khai-sinh');
});

function setupSidebarNavigation() {
    document.querySelectorAll('.nav-item[data-page]').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });

            this.classList.add('active');

            const page = this.getAttribute('data-page');
            navigateTo(page);
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

    pageContent.innerHTML = renderNotAvailableContent();
}

function renderKhaiSinhContent() {
    return `
        <div class="list-panel">
            <div class="panel-header">
                <h2>Xác nhận hồ sơ khai sinh</h2>
                <p class="subtitle">Quản lý và xử lý các hồ sơ khai sinh trên địa bàn.</p>
            </div>

            <div class="search-filter">
                <div class="search-box">
                    <input type="text" placeholder="Tìm theo mã hồ sơ, tên trẻ..." class="search-input">
                </div>
                <button class="btn-filter">
                    <span>⚙</span> Bộ lọc
                </button>
                <button class="btn-calendar">
                    <span>📅</span>
                </button>
            </div>

            <div class="stats-container">
                <div class="stat-card stat-total">
                    <div>
                        <div class="stat-label">Tổng hồ sơ</div>
                        <div class="stat-number">32</div>
                    </div>
                </div>

                <div class="stat-card stat-pending">
                    <div>
                        <div class="stat-label">Chờ xử lý</div>
                        <div class="stat-number">18</div>
                    </div>
                </div>

                <div class="stat-card stat-approved">
                    <div>
                        <div class="stat-label">Đã duyệt</div>
                        <div class="stat-number">10</div>
                    </div>
                </div>

                <div class="stat-card stat-more-info">
                    <div>
                        <div class="stat-label">Yêu cầu bổ sung</div>
                        <div class="stat-number">3</div>
                    </div>
                </div>

                <div class="stat-card stat-rejected">
                    <div>
                        <div class="stat-label">Từ chối</div>
                        <div class="stat-number">1</div>
                    </div>
                </div>
            </div>

            <div class="table-container">
                <table class="records-table">
                    <thead>
                        <tr>
                            <th>Mã hồ sơ</th>
                            <th>Tên trẻ em</th>
                            <th>Ngày sinh</th>
                            <th>Tên cha/mẹ</th>
                            <th>Ngày nộp</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="record-row" data-record-id="KS-2023-001" data-name="Nguyễn Minh Khải" data-birth="15/10/2023" data-parent="Nguyễn Văn Hùng" data-submit="20/10/2023">
                            <td class="code">KS-2023-001</td>
                            <td>Nguyễn Minh Khải</td>
                            <td>15/10/2023</td>
                            <td>Nguyễn Văn Hùng</td>
                            <td>20/10/2023</td>
                            <td><span class="badge badge-pending">Chờ xử lý</span></td>
                        </tr>

                        <tr class="record-row" data-record-id="KS-2023-002" data-name="Lê Ngọc Hân" data-birth="18/10/2023" data-parent="Lê Hoàng Sơn" data-submit="21/10/2023">
                            <td class="code">KS-2023-002</td>
                            <td>Lê Ngọc Hân</td>
                            <td>18/10/2023</td>
                            <td>Lê Hoàng Sơn</td>
                            <td>21/10/2023</td>
                            <td><span class="badge badge-pending">Chờ xử lý</span></td>
                        </tr>

                        <tr class="record-row" data-record-id="KS-2023-003" data-name="Trần Bảo Nam" data-birth="10/10/2023" data-parent="Trần Đình Trọng" data-submit="12/10/2023">
                            <td class="code">KS-2023-003</td>
                            <td>Trần Bảo Nam</td>
                            <td>10/10/2023</td>
                            <td>Trần Đình Trọng</td>
                            <td>12/10/2023</td>
                            <td><span class="badge badge-approved">Đã duyệt</span></td>
                        </tr>

                        <tr class="record-row" data-record-id="KS-2023-004" data-name="Phạm Gia Hùng" data-birth="05/10/2023" data-parent="Phạm Văn Dũng" data-submit="08/10/2023">
                            <td class="code">KS-2023-004</td>
                            <td>Phạm Gia Hùng</td>
                            <td>05/10/2023</td>
                            <td>Phạm Văn Dũng</td>
                            <td>08/10/2023</td>
                            <td><span class="badge badge-rejected">Từ chối</span></td>
                        </tr>

                        <tr class="record-row" data-record-id="KS-2023-005" data-name="Hoàng Tú Anh" data-birth="19/10/2023" data-parent="Hoàng Quốc Việt" data-submit="22/10/2023">
                            <td class="code">KS-2023-005</td>
                            <td>Hoàng Tú Anh</td>
                            <td>19/10/2023</td>
                            <td>Hoàng Quốc Việt</td>
                            <td>22/10/2023</td>
                            <td><span class="badge badge-more-info">Yêu cầu bổ sung</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="pagination">
                <span class="page-info">Hiển thị 10 dòng/trang</span>
                <div class="page-buttons">
                    <button class="page-btn">‹</button>
                    <button class="page-btn active">1</button>
                    <button class="page-btn">2</button>
                    <button class="page-btn">3</button>
                    <button class="page-btn">›</button>
                </div>
            </div>
        </div>

        <div class="detail-modal" id="detailModal">
            <div class="detail-modal-content">
                <div class="detail-content birth-detail">
                    <div class="detail-header birth-detail-header">
                        <h3>Chi tiết hồ sơ khai sinh: <span class="record-title">KS-2023-001</span></h3>
                        <button class="btn-close" onclick="closeDetailPanel()">✕</button>
                    </div>

                    <div class="detail-body">
                        <section class="detail-card">
                            <h4>Thông tin chung</h4>

                            <div class="detail-grid two-cols">
                                <div class="detail-field">
                                    <label>Ngày nộp hồ sơ</label>
                                    <p id="submitDate">20/10/2023 09:15</p>
                                </div>

                                <div class="detail-field">
                                    <label>Trạng thái</label>
                                    <span class="badge badge-pending">Chờ xử lý</span>
                                </div>

                                <div class="detail-field">
                                    <label>Người nộp hồ sơ</label>
                                    <p id="parentName">Nguyễn Văn Hùng (Cha)</p>
                                </div>

                                <div class="detail-field">
                                    <label>Cán bộ tiếp nhận</label>
                                    <p>Trần Thị Mai</p>
                                </div>

                                <div class="detail-field">
                                    <label>Số điện thoại</label>
                                    <p>079890123456</p>
                                </div>

                                <div class="detail-field">
                                    <label>Hình thức nộp</label>
                                    <p>Trực tuyến</p>
                                </div>
                            </div>

                            <div class="detail-field full">
                                <label>Địa chỉ liên hệ</label>
                                <p>123 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM</p>
                            </div>
                        </section>

                        <section class="detail-card child-card">
                            <h4>Thông tin trẻ em</h4>

                            <div class="detail-grid two-cols">
                                <div class="detail-field">
                                    <label>Họ và tên</label>
                                    <p id="childName">Nguyễn Minh Khải</p>
                                </div>

                                <div class="detail-field">
                                    <label>Giới tính</label>
                                    <p>Nam</p>
                                </div>

                                <div class="detail-field">
                                    <label>Ngày sinh</label>
                                    <p id="childBirth">15/10/2023</p>
                                </div>

                                <div class="detail-field">
                                    <label>Nơi sinh</label>
                                    <p>Bệnh viện Từ Dũ, TP.HCM</p>
                                </div>
                            </div>
                        </section>

                        <section class="detail-card parent-card-detail">
                            <h4>Thông tin cha/mẹ</h4>

                            <div class="detail-grid two-cols">
                                <div class="detail-field">
                                    <label>Cha</label>
                                    <p><strong>Nguyễn Văn Hùng</strong></p>
                                    <p>CCCD: 079890123456</p>
                                </div>

                                <div class="detail-field">
                                    <label>Mẹ</label>
                                    <p><strong>Trần Thị Mai</strong></p>
                                    <p>CCCD: 079192654321</p>
                                </div>
                            </div>

                            <div class="detail-field full">
                                <label>Địa chỉ thường trú</label>
                                <p>123 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM</p>
                            </div>
                        </section>

                        <div class="detail-bottom-grid">
                            <section class="detail-card">
                                <h4>Giấy tờ đính kèm</h4>

                                <div class="file-row">
                                    <span>📄 Giấy chứng sinh.pdf<br><small>1.2 MB</small></span>
                                    <button onclick="previewFile(event)">Xem trước</button>
                                    <button onclick="downloadFile(event)">⬇</button>
                                </div>

                                <div class="file-row">
                                    <span>📄 CCCD Cha.jpg<br><small>0.8 MB</small></span>
                                    <button onclick="previewFile(event)">Xem trước</button>
                                    <button onclick="downloadFile(event)">⬇</button>
                                </div>

                                <div class="file-row">
                                    <span>📄 CCCD Mẹ.jpg<br><small>0.7 MB</small></span>
                                    <button onclick="previewFile(event)">Xem trước</button>
                                    <button onclick="downloadFile(event)">⬇</button>
                                </div>
                            </section>

                            <section class="detail-card">
                                <h4>Lịch sử xử lý</h4>

                                <div class="mini-timeline">
                                    <div class="timeline-item">
                                        <span></span>
                                        <p><strong>Tiếp nhận hồ sơ</strong><br>Trần Thị Mai<br>20/10/2023 09:15</p>
                                    </div>

                                    <div class="timeline-item">
                                        <span></span>
                                        <p><strong>Đang chờ xử lý</strong><br>20/10/2023 09:15</p>
                                    </div>
                                </div>

                                <button class="btn-view-history">Xem chi tiết lịch sử</button>
                            </section>
                        </div>

                        <div class="detail-bottom-grid">
                            <section class="detail-card note-card" id="requiredNoteBox">
                                <h4>Ghi chú xử lý <span>*</span></h4>
                                <textarea 
                                    class="notes-input required-note" 
                                    maxlength="500"
                                    placeholder="Nhập ghi chú, lý do xử lý hồ sơ..."
                                    oninput="handleNoteInput()"></textarea>
                                <div class="note-footer">
                                    <small class="note-error" id="noteError">Vui lòng nhập ghi chú xử lý hồ sơ.</small>
                                    <small><span id="noteCount">0</span>/500</small>
                                </div>
                            </section>

                            <section class="detail-card suggestion-card">
                                <h4>Gợi ý ghi chú</h4>
                                <ul>
                                    <li>Hồ sơ đầy đủ, hợp lệ.</li>
                                    <li>Thiếu/không rõ giấy chứng sinh.</li>
                                    <li>Thông tin chưa khớp với giấy tờ.</li>
                                    <li>Yêu cầu bổ sung giấy tờ theo quy định.</li>
                                </ul>
                            </section>
                        </div>
                    </div>

                    <div class="action-buttons detail-actions">
                        <button class="btn btn-reject" onclick="rejectRecord()">Từ chối</button>
                        <button class="btn btn-more-info" onclick="requestMore()">Yêu cầu bổ sung</button>
                        <button class="btn btn-approve" onclick="approveRecord()">Xác nhận duyệt</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initKhaiSinhEvents() {
    document.querySelectorAll('.record-row').forEach(row => {
        row.addEventListener('click', function () {
            const recordId = this.getAttribute('data-record-id');
            const name = this.getAttribute('data-name');
            const birth = this.getAttribute('data-birth');
            const parent = this.getAttribute('data-parent');
            const submit = this.getAttribute('data-submit');

            const detailModal = document.getElementById('detailModal');
            detailModal.classList.add('active');

            document.querySelector('.record-title').textContent = recordId;
            document.getElementById('childName').textContent = name;
            document.getElementById('childBirth').textContent = birth;
            document.getElementById('parentName').textContent = parent + ' (Cha)';
            document.getElementById('submitDate').textContent = submit + ' 09:15';

            document.querySelectorAll('.record-row').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    document.querySelector('.search-input')?.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        document.querySelectorAll('.record-row').forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    document.querySelector('.btn-filter')?.addEventListener('click', function () {
        alert('Mở cửa sổ bộ lọc');
    });

    document.querySelector('.btn-calendar')?.addEventListener('click', function () {
        alert('Mở cửa sổ chọn ngày');
    });

    document.querySelectorAll('.page-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            if (this.textContent === '‹' || this.textContent === '›') {
                alert('Chuyển trang');
                return;
            }

            document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
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

function closeDetailPanel() {
    document.getElementById('detailModal')?.classList.remove('active');
}

function previewNotes() {
    const notesText = document.querySelector('.notes-input')?.value || '';

    if (notesText.trim()) {
        alert('Ghi chú preview:\n\n' + notesText);
    } else {
        alert('Vui lòng nhập ghi chú trước khi xem trước!');
    }
}

function saveNotes() {
    const notesText = document.querySelector('.notes-input')?.value || '';

    if (notesText.trim()) {
        alert('Ghi chú đã được lưu thành công!');
    } else {
        alert('Vui lòng nhập ghi chú trước khi lưu!');
    }
}

function previewFile(event) {
    event.preventDefault();

    const fileName = event.target.closest('.file-item').querySelector('.file-name').textContent;
    alert(`Xem trước file: ${fileName}`);
}

function downloadFile(event) {
    event.preventDefault();

    const fileName = event.target.closest('.file-item').querySelector('.file-name').textContent;
    alert(`Tải về file: ${fileName}`);
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeDetailPanel();
    }

    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        document.querySelector('.search-input')?.focus();
    }
});

function validateRequiredNote() {
    const noteInput = document.querySelector('.required-note');
    const noteBox = document.getElementById('requiredNoteBox');

    if (!noteInput || !noteBox) return true;

    if (!noteInput.value.trim()) {
        noteBox.classList.add('note-error-state');
        noteInput.focus();
        return false;
    }

    noteBox.classList.remove('note-error-state');
    return true;
}

function handleNoteInput() {
    const noteInput = document.querySelector('.required-note');
    const noteCount = document.getElementById('noteCount');
    const noteBox = document.getElementById('requiredNoteBox');

    if (noteInput && noteCount) {
        noteCount.textContent = noteInput.value.length;
    }

    if (noteInput.value.trim()) {
        noteBox?.classList.remove('note-error-state');
    }
}

function approveRecord() {
    if (!validateRequiredNote()) return;

    const recordId = document.querySelector('.record-title')?.textContent || '';
    if (confirm(`Xác nhận duyệt hồ sơ ${recordId}?`)) {
        alert(`Hồ sơ ${recordId} đã được xác nhận duyệt!`);
    }
}

function rejectRecord() {
    if (!validateRequiredNote()) return;

    const recordId = document.querySelector('.record-title')?.textContent || '';
    alert(`Hồ sơ ${recordId} đã bị từ chối.`);
}

function requestMore() {
    if (!validateRequiredNote()) return;

    const recordId = document.querySelector('.record-title')?.textContent || '';
    alert(`Yêu cầu bổ sung cho hồ sơ ${recordId} đã được gửi!`);
}

document.addEventListener('click', function (event) {
    const modal = document.getElementById('detailModal');

    if (event.target === modal) {
        closeDetailPanel();
    }
});