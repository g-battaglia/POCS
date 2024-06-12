const input = document.querySelector('input');
const form = document.querySelector('form');
const result = document.querySelector('#result');

var iti = window.intlTelInput(input, {
    initialCountry: 'it',
});

form.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();
        var num = iti.getNumber(),
            valid = iti.isValidNumber();
        result.textContent = 'Number: ' + num + ', valid: ' + valid;
    },
    false
);

input.addEventListener(
    'focus',
    () => {
        result.textContent = '';
    },
    false
);
