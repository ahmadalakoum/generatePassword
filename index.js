const express =require("express");
const app=express();


function generatePassword(length, hasNumbers, hasSymbols, hasUppercase, hasLowercase) {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    let characters = '';
    if (hasNumbers) characters += numbers;
    if (hasSymbols) characters += symbols;
    if (hasUppercase) characters += uppercase;
    if (hasLowercase) characters += lowercase;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

app.get('/generate-password', (req, res) => {
    const { length = 8, numbers = 'true', symbols = 'true', uppercase = 'true', lowercase = 'true' } = req.query;

    const password = generatePassword(
        parseInt(length),
        numbers === 'true',
        symbols === 'true',
        uppercase === 'true',
        lowercase === 'true'
    );

    res.json({ password });
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});