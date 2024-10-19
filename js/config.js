const scriptURL = 'https://script.google.com/a/macros/fpt.edu.vn/s/AKfycbyCyQoodV2Wp8sRMHXZxdxT9kXU9dqGZWBT--bizGgiOM-97eWwdq6qu3k3lS5Yw5aE_w/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
