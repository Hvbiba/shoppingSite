//log & sign page validation
let Name=document.getElementById('name');
let email=document.getElementById('mail');
let pass=document.getElementById('password');
let nameCheck=document.getElementById('p_name');
let emailCheck=document.getElementById('p_mail');
let passCheck=document.getElementById('p_pass');
let submitBtn=document.getElementById('submitSign');
 submitBtn.addEventListener('click', function(){
    // If empty, display the name validation message
    
    if (Name.value === "") {
        nameCheck.classList.add('pRed');
    }
    if (email.value === "") {
        emailCheck.classList.add('pRed');
    }
    if (pass.value === "") {
        passCheck.classList.add('pRed');
    }
});