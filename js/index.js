let fm = document.querySelector('form'); 
let fn = document.getElementById('full-name');
let em = document.getElementById('email');  
let regexEm = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
let ms = document.getElementById('message');
let fb = document.querySelector('.feedback'); 
let err = document.querySelector('.errors'); 

function handleForm(event) {
    //prevents submitting form and preserves user input inside the form
    event.preventDefault(); 

    fb.textContent = ''; 
    err.textContent = ''; 
    let data = {}; 
    let errors = [];

    
    // check if user entered Full Name 
    if (fn.value !== '') {
        // check if full name is in correct format 
            // save the full name inside data 
        data.fullname = fn.value; 
    } else {
        // otherwise report corresponding error message
       errors.push('Full Name is empty. Please enter your full name');  
    }
    
    // check if user entered email 
    if (em.value !== '') {
        // check if email is in correct format 
        if (regexEm.test(em.value)) {
            // save the email inside data 
            data.email = em.value; 
        } else {
           // otherwise report corresponding error message 
           errors.push('Please enter the valid email') 
        }
        
    } else {
        // otherwise report corresponding error message
       errors.push('Email is empty. Please enter your email');  
    }

    // check if user entered message 
    if (ms.value !== '') {
        // check if message is in correct format 
            // save the message inside data 
        data.message = ms.value; 
        
    } else {
        // otherwise report corresponding error message
       errors.push('Message is empty. Please enter your message.');  
    }

    // handle feedback/ error-messages: 
    if (errors.length === 0) {
        //print out feedback 
        console.log(data); 
        //print in window 
        fb.textContent = 'Thank you for filling out the form. Your email ' + em.value + ' is saved.'; 
        // clear the error messages 
        // err.textContent = ''; 
        // clear input text
        fm.reset();  
    } else {
        // print out the error message 
        console.log(errors); 
        fb.textContent = ''; 

        for (let singleError of errors) { // not necessary for assignment 
            // Progammatically crete new list item
            let li = document.createElement('li');  

            // Add error message to that list 
            li.textContent = singleError;

            // Append list tiem to hard-coded list 
            err.appendChild(li);
        } 
    }   
} 

fm.addEventListener('submit', handleForm); 
