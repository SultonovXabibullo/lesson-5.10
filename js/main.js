document.getElementById('loginBtn').addEventListener('click', function() {
    const modmeId = document.getElementById('modmeId').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (modmeId === '123456' && password === '78900') {
        message.style.color = 'green';
        message.textContent = 'Siz spacega kirdingiz!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Siz ID yoki parol xato!';
    }
});
