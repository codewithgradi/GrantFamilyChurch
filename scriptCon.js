// form validation
function validate(name, email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '') {
        alert('Please enter your name.');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}


document.getElementById('btn-sub-con').addEventListener('click', () => {
    let fName = document.getElementById('full-name-con');
    let u_email = document.getElementById('email-con');
    let u_message = document.getElementById('message');

    const nameValue = fName.value.trim();
    const emailValue = u_email.value.trim();

    if (validate(nameValue, emailValue)) {
        let finalMessage = u_message.value.trim() === '' ? 'Connect with me' : u_message.value.trim();

        let user_data = {
            name: nameValue,
            email: emailValue,
            message: finalMessage
        };
        alert(`God bless you, ${nameValue}! 😁`);
    }
});


