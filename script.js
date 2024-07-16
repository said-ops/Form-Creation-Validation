//Start with DOMContentLoaded Event:
document.addEventListener('DOMContentLoaded', function () {
    //Form Selection:
    const form = document.getElementById('registration-form');
    //Feedback Division Selection:
    const feedbackDiv = document.getElementById('form-feedback');
    //Form Submission Event Listene
    form.addEventListener('submit', function (event) {
        //prevent submission
        event.preventDefault();
        //Retrieve User Inputs
        const userInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passInput = document.getElementById('password');
        //retrieve input value and trim it
        const username = userInput.value.trim();
        const email = emailInput.value.trim();
        const password = passInput.value.trim();
        //Initialize Validation Variables
        let isValid = true;
        let messages = [];
        //Username Validation
        if(username.length < 3){
            isValid = false;
            messages.push('invalid user name,Try again!');
        }
        //email validation
        if(!email.includes('@') || !email.includes('.')){
            isValid = false;
            messages.push('Invalid email,Try again!');

        }
        //password validation
        if(password.length <8){
            isValid = false;
            messages.push('Invalid password,Try again!')
        }
        //Displaying Feedback
        feedbackDiv.style.display='block';
        if(isValid){
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        }
        else{
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
            
    });




});