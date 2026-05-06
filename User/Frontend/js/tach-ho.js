document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    const stepLines = document.querySelectorAll('.step-line');
    const formSteps = document.querySelectorAll('.form-step');
    const btnNext = document.getElementById('btnNext');
    const btnPrev = document.getElementById('btnPrev');
    
    let currentStep = 1;
    const totalSteps = steps.length;

    function updateStepper() {
        // Update Step Indicators
        steps.forEach((step, index) => {
            const stepNum = index + 1;
            
            // Remove all classes first
            step.classList.remove('active', 'completed');
            
            if (stepNum < currentStep) {
                step.classList.add('completed');
                step.querySelector('.step-circle').textContent = ''; // Will be replaced by checkmark via CSS
            } else if (stepNum === currentStep) {
                step.classList.add('active');
                step.querySelector('.step-circle').textContent = stepNum;
            } else {
                step.querySelector('.step-circle').textContent = stepNum;
            }
        });

        // Update Step Lines
        stepLines.forEach((line, index) => {
            if (index < currentStep - 1) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        });

        // Update Form Content
        formSteps.forEach(form => {
            form.classList.remove('active');
        });
        document.getElementById(`step-${currentStep}`).classList.add('active');

        // Update Buttons
        if (currentStep === 1) {
            btnPrev.style.visibility = 'hidden';
        } else {
            btnPrev.style.visibility = 'visible';
        }

        if (currentStep === totalSteps) {
            btnNext.textContent = 'Nộp hồ sơ';
        } else {
            btnNext.textContent = 'Tiếp theo';
        }
    }

    btnNext.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            currentStep++;
            updateStepper();
        } else {
            // Handle Submit
            alert('Đã nộp hồ sơ yêu cầu tách hộ thành công!');
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateStepper();
        }
    });

    // Add Member Logic
    const btnAddMember = document.getElementById('btnAddMember');
    const memberList = document.getElementById('member-list');
    let memberCount = 1;

    if (btnAddMember && memberList) {
        btnAddMember.addEventListener('click', () => {
            memberCount++;
            const newMember = document.createElement('div');
            newMember.className = 'member-item';
            newMember.style.cssText = 'background-color: #F9FAFB; padding: 25px; border-radius: 8px; border: 1px solid var(--border-color); margin-top: 15px; animation: fadeIn 0.3s ease;';
            newMember.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h4 style="font-size: 15px; font-weight: 600;">Thành viên <span class="member-index">${memberCount}</span></h4>
                    <button type="button" class="btn-remove" style="background: none; border: none; color: #EF4444; cursor: pointer; display: flex; align-items: center; gap: 5px; font-size: 13px;">
                        <i class='bx bx-trash'></i> Xóa
                    </button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label>Họ và tên <span class="required">*</span></label>
                        <input type="text" placeholder="Nhập họ và tên">
                    </div>
                    <div class="form-group">
                        <label>Số CCCD/CMND <span class="required">*</span></label>
                        <input type="text" placeholder="Nhập số CCCD">
                    </div>
                    <div class="form-group">
                        <label>Ngày sinh <span class="required">*</span></label>
                        <input type="date">
                    </div>
                    <div class="form-group">
                        <label>Quan hệ với chủ hộ <span class="required">*</span></label>
                        <select>
                            <option value="" disabled selected>Chọn quan hệ</option>
                            <option>Chủ hộ</option>
                            <option>Vợ/Chồng</option>
                            <option>Con</option>
                            <option>Khác</option>
                        </select>
                    </div>
                </div>
            `;
            memberList.appendChild(newMember);

            // Add delete event
            const btnRemove = newMember.querySelector('.btn-remove');
            btnRemove.addEventListener('click', () => {
                newMember.remove();
                updateMemberIndexes();
            });
        });
    }

    function updateMemberIndexes() {
        const items = memberList.querySelectorAll('.member-item');
        memberCount = items.length;
        items.forEach((item, index) => {
            item.querySelector('.member-index').textContent = index + 1;
        });
    }
});
