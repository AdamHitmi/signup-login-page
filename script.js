/*const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');

loginButton.addEventListener('click', () => {
    container.classList.add('active');
});

signupButton.addEventListener('click', () => {
    container.classList.remove('active');
});*/






























const signupBtn = document.querySelector('.signup-section header');
const loginBtn = document.querySelector('.login-section header');
const container = document.querySelector('.container');

signupBtn.onclick = function(){
    container.classList.remove("active");
}
loginBtn.onclick = function(){
    container.classList.add("active");
}
