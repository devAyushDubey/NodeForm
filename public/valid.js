
// Dont look here, you won't find anything, it's just shit, pure shit!
// :- Lord Ayush Dubey ;-)

const name_i = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const branch = document.getElementById('branch');
const year = document.getElementById('year');
const hostler = document.getElementById('residence-hostler');
const dayscholar = document.getElementById('residence-dayscholar');
const domain = document.getElementById('domain');
const terms = document.getElementById('terms');
const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    //e.preventDefault();
    var valid = true;
    const name_val = name_i.value.trim();
    const email_val = email.value.trim();
    const number_val = number.value.trim();
    const branch_val = branch.value.trim();
    const year_val = year.value.trim();
    const terms_val = terms.value.trim();
    
    var inputControl = name_i.parentElement;
    var errorDisplay = inputControl.querySelector('.error');
    if(valid && (name_val === '' || name_val == null)){

        valid=false;

        errorDisplay.innerText = 'Please enter your full name.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    inputControl = email.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && !re.test(String(email_val).toLowerCase())){

        valid = false;
        errorDisplay.innerText = 'Please enter a valid email address.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }
    
    inputControl = number.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && (number_val === '' || number_val == null)){

        valid=false;
        errorDisplay.innerText = 'Please enter a valid phone number.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }

    inputControl = branch.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && branch_val == 'Branch'){

        valid=false;
        
        errorDisplay.innerText = 'Select atleast one option.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }

    inputControl = year.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && year_val == 'Year'){

        valid=false;
        errorDisplay.innerText = 'Select atleast one option.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else if(valid){
        errorDisplay.innerText = '';
    }

    inputControl = hostler.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && !hostler.checked && !dayscholar.checked){

        valid = false;
        errorDisplay.innerText = 'Select atleast one option.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else if(valid){
        errorDisplay.innerText = '';
    }

    console.log(hostler.checked,dayscholar.checked);

    inputControl = terms.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && !terms.checked){
        valid = false;

        errorDisplay.innerText = 'Confirm your entry.';      
    }
    else if(valid){
        errorDisplay.innerText = '';
    }

    console.log(terms.checked);
    
    if(!valid){
        e.preventDefault();
    }

})