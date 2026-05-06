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
            alert('Đã nộp hồ sơ yêu cầu thay đổi hộ khẩu thành công!');
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateStepper();
        }
    });
});
