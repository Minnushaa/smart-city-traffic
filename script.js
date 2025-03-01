const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signUp');
signUpButton.addEventListener('click', function(){
    signUpForm.style.display = 'block';
    signInForm.style.display = 'none';
})

signInButton.addEventListener('click', function(){
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
})
function loginUser() {
    let role = document.getElementById("role").value;

    if (role === "driver") {
        window.location.href = "driver_dashboard.html";
    } else if (role === "officer") {
        window.location.href = "officer_dashboard.html";
    } else if (role === "admin") {
        window.location.href = "admin_dashboard.html";
    } else if (role === "emergency") {
        window.location.href = "emergency_dashboard.html";
    } else {
        alert("Invalid Role Selected!");
    }
}
function logout() {
    window.location.href = "index.html";
}
