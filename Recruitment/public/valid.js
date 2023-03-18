
// Dont look here, you won't find anything, it's just shit, pure shit!
// :- Lord Ayush Dubey ;-)

const uid = document.getElementById('uid');
const name_i = document.getElementById('name');
const libid = document.getElementById('libid');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const domain1 = document.getElementById('domain1');
const domain2 = document.getElementById('domain2');
const domain3 = document.getElementById('domain3');

const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    //e.preventDefault();
    var valid = true;
    const name_val = name_i.value.trim();
    const uid_val = uid.value.trim();
    const domain1_val = domain1.value.trim();
    const domain2_val = domain2.value.trim();
    const domain3_val = domain3.value.trim();
    const libid_val = libid.value.trim();
    const email_val = email.value.trim();
    const phone_val = phone.value.trim();
    

    inputControl = uid.parentElement;
    errorDisplay = inputControl.querySelector('.error');

    var regExp = /[a-zA-Z]/g;

    if(valid && (uid_val == '' || uid_val==null || regExp.test(uid_val))){
        console.log("UID");
        valid=false;
        errorDisplay.innerText = 'Enter a valid UID.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else if(valid){
        errorDisplay.innerText = '';
    }


    var inputControl = name_i.parentElement;
    var errorDisplay = inputControl.querySelector('.error');
    if(valid && (name_val === '' || name_val == null)){
        console.log("Name");
        valid=false;

        errorDisplay.innerText = 'Please enter your full name.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }
    

    
    inputControl = libid.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && (libid_val === '' || libid_val == null)){
        console.log("LibID");
        valid=false;
        errorDisplay.innerText = 'Please enter a valid library id.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }

    var chkExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    inputControl = email.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && (email_val === '' || email_val == null || !chkExp.test(email_val))){
        console.log("Email");
        valid=false;
        errorDisplay.innerText = 'Please enter a valid email id.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }

    inputControl = phone.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && (phone_val === '' || phone_val == null)){
        console.log("Phone No.");
        valid=false;
        errorDisplay.innerText = 'Please enter a valid phone number.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }



    inputControl = domain1.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && domain1_val == 'Domain Preference 1'){
        console.log("Domain1");
        valid=false;
        errorDisplay.innerText = 'Please select atleast one domain.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }

    inputControl = domain2.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && domain2_val == 'Domain Preference 2'){
        console.log("Domain2");
        valid=false;
        errorDisplay.innerText = 'Please select atleast one domain.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }

    inputControl = domain3.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    if(valid && (domain3_val == 'Domain Preference 3')){
        console.log("Domain3");
        valid=false;
        errorDisplay.innerText = 'Please select atleast one domain.';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    else{
        errorDisplay.innerText = '';
    }

    if(valid && (domain1_val == domain2_val || domain2_val==domain3_val || domain1_val == domain3_val)){
        console.log("Domain Same");
        valid=false;
        errorDisplay.innerText = 'All the selected domains should be different.';
    }
    else if(valid){
        errorDisplay.innerText = '';
    }

    
    if(!valid){
        e.preventDefault();
    }

})