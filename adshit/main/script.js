document.querySelectorAll('button[data-file]').forEach((button) => {
    button.addEventListener('click', () => {
        const captchaChecked = document.getElementById('captcha-check').checked;

        if (captchaChecked) {
            const fileUrl = button.getAttribute('data-file');
            window.location.href = fileUrl;
        } else {
            const errorMessage = document.getElementById('error-message');
            errorMessage.classList.remove('hidden');
            setTimeout(() => errorMessage.classList.add('hidden'), 3000);
        }
    });
});
