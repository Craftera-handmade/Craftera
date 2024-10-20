function validateForm() {
    let valid = true;

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const address = document.getElementById('address').value.trim();

    // Clear previous errors
    clearErrors();

    // Name validation
    if (name === "") {
        showError('nameError', 'Tên không được để trống');
        valid = false;
    }

    // Email validation (simple pattern)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        showError('emailError', 'Email không được để trống');
        valid = false;
    } else if (!emailPattern.test(email)) {
        showError('emailError', 'Email không hợp lệ');
        valid = false;
    }

    // Phone validation (simple 10-digit number)
    const phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        showError('phoneError', 'Số điện thoại không được để trống');
        valid = false;
    } else if (!phonePattern.test(phone)) {
        showError('phoneError', 'Số điện thoại không hợp lệ (phải gồm 10 số)');
        valid = false;
    }

    // Message validation
    if (message === "") {
        showError('messageError', 'Vui lòng nhập thông tin sản phẩm');
        valid = false;
    }

    // Address validation
    if (address === "") {
        showError('addressError', 'Địa chỉ không được để trống');
        valid = false;
    }

    return valid;
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('addressError').textContent = '';
}
