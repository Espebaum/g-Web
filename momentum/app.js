const loginInput = document.querySelector('#login-form input');
const loginBtn = document.querySelector('#login-form button');

loginBtn.addEventListener('click', () => {
    const inputName = loginInput.value;
    if (inputName === '') {
        alert('Write Something');
    } else if (toString(inputName).length > 15) {
        alert('Too Long Name');
    } else {
        console.log('hello!', inputName);
    }
});
