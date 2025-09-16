//your code here
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const car = document.getElementById('cars').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const tel = document.getElementById('tel').value.trim();
    const password = document.getElementById('password').value.trim();
    const tos = document.getElementById('tos').checked;

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    if (!tos) {
        alert("You must agree to the TOS.");
        return;
    }

    alert("Form submitted successfully!");
    
});