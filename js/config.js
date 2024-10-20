const scriptURL = 'https://script.google.com/a/macros/fpt.edu.vn/s/AKfycbyCyQoodV2Wp8sRMHXZxdxT9kXU9dqGZWBT--bizGgiOM-97eWwdq6qu3k3lS5Yw5aE_w/exec';
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate the form first
    if (validateForm()) {
        // Show the modal
        showModal();

        // Send form data to Google Sheets
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Cảm ơn bạn đã mua hàng. Chúng mình sẽ liên hệ sớm nhất.\n(Bấm OK khi đã hoàn thành chuyển khoản)"))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message));
    }
});
