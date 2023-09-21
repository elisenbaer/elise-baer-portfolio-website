(function() {
    let form = document.querySelector('.message-form');
    let emailInput = document.querySelector('#contact-email');
    let phoneNumberInput = document.querySelector('#contact-phone');
    let messageInput = document.querySelector('#message');

    function showErrorMessage(input, message) {
        let container = input.parentElement;
    }

        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    
    function validateEmail() {
        let value = emailInput.value;
       
        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field.');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validatePhoneNumber() {
        let value = phoneNumberInput.value;
        
        if (!value) {
            showErrorMessage(phoneNumberInput, 'Phone number is a required field.');
            return false;
        }

        if (value.indexOf('\d{3}[\-]\d{3}[|-]\d{4}') === -1) {
            showErrorMessage(phoneNumberInput, 'You must enter a valid phone number.');
            return false;
        }

        showErrorMessage(phoneNumberInput, null);
        return true;
    }



    function validateMessage() {
        let value = messageInput.value;

        if(!value) {
            showErrorMessage(messageInput, 'Please submit a message.');
            return false;
        }
        
        if (value.indexOf(maxlength="240")) {
            showErrorMessage(messageInput, 'Maximum characters=240.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;     
    }

    function validateForm() {
        return validateEmail() && validatePhoneNumber() && validateMessage();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Success!');
        }
    })

    return {
        showErrorMessage: showErrorMessage,
        validateEmail: validateEmail,
        validatePhoneNumber: validatePhoneNumber,
        validateMessage: validateMessage,
        validateForm: validateForm
    }
}) ();
