const scriptURL = 'https://script.google.com/macros/s/AKfycby3Th8CHZGV7HF-PIghtalNWbH8qh1-nkz-Oh7Vkt9KBnrQCNvdrWvbDn3bAjLwDbkbKQ/exec'
const form = document.forms['submit-to-google-sheet'];
const loadingIndicator = document.getElementById('loading');

form.addEventListener('submit', e => {
    e.preventDefault();
    loadingIndicator.style.display = 'block';
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                console.log('Success!', response);
                alert('Form Submitted Successfully');
                form.reset();
            } else {
                throw new error('network response was not ok.')
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('There was an error submitting the form. ;Please try again');
        })
        .finally(() => {
            loadingIndicator.style.display = 'none';
        });
});
