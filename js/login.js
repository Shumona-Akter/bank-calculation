document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;

    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value;
    

    if(emailValue === "shumonarpi@gmail.com" && passwordValue === "902671"){
        window.location.href = "bank.html"
    }
    else{
        const emailField = document.getElementById('email-field');
        const passwordField = document.getElementById('password-field');

        emailField.style.border= "1px solid red"
        passwordField.style.border= "1px solid red"
    }
})