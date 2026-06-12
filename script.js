const generateBtn = document.getElementById('generate');
const passwordField = document.getElementById('password');

generateBtn.addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const hasUpper = document.getElementById('uppercase').checked;
    const hasNumbers = document.getElementById('numbers').checked;
    const hasSymbols = document.getElementById('symbols').checked;

    passwordField.value = generatePassword(length, hasUpper, hasNumbers, hasSymbols);
});

function generatePassword(length, upper, numbers, symbols) {
    let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numberChars = '0123456789';
    let symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let charset = lowerChars;
    if (upper) charset += upperChars;
    if (numbers) charset += numberChars;
    if (symbols) charset += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}
