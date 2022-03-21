const signUpForm = (()=>{

    const errorText = document.querySelector('.error-text')
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const email = document.querySelector('.email');
    const country = document.querySelector('.country');
    const zipCode = document.querySelector('.zipcode');
    const passWord = document.querySelector('.password');
    const confirmPassword = document.querySelector('.confirm-password');
    const submitBtns = document.querySelector('.signup-container');
    const errorContainer = document.querySelector('.error-container')

    const nameValidation = () => {
        firstName.addEventListener('mouseleave',()=>{
            if (firstName.value === "" || firstName.value === null){
                errorText.textContent = "First Name is required"
                errorContainer.style.border = " 3px solid red"
                firstName.style.border = "2px solid red"
                setTimeout(()=>{
                    errorText.textContent = ""
                    errorContainer.style.border = ""
                },1000)
            } else {
                firstName.style.border = "3px solid green"
                errorContainer.style.border = ""
                errorText.textContent = ""
            }
        })
        lastName.addEventListener('mouseleave',()=>{
            if (lastName.value === "" || lastName.value === null){
                errorText.textContent = "Last Name is required"
                lastName.style.border = "3px solid red"
                errorContainer.style.border = " 3px solid red"
                setTimeout(()=>{
                    errorText.textContent = ""
                    errorContainer.style.border = ""
                },1000)
            } else {
                lastName.style.border = "3px solid green"
                errorContainer.style.border = "";
                errorText.textContent = ""
            }
        })
    };
    nameValidation();

    const emailValidation = () => {
        email.addEventListener('mouseleave',()=>{
            if (email.value === "" || email.value === null){
                errorText.textContent = "Email is required"
                email.style.border = "3px solid red"
                errorContainer.style.border = " 3px solid red"
                setTimeout(()=>{
                    errorText.textContent = ""
                    errorContainer.style.border = ""
                },1000)
            } else {
                email.style.border = "3px solid green"
                errorText.textContent = ""
                errorContainer.style.border = "";
            }
        })
    };
    emailValidation();

    const countryValidation = () => {
        country.addEventListener('mouseleave',()=>{
            if (country.value === "" || country.value === null){
                errorText.textContent = "Country is required"
                country.style.border = "3px solid red"
                errorContainer.style.border = " 3px solid red"
                setTimeout(()=>{
                    errorText.textContent = ""
                    errorContainer.style.border = ""
                },1000)
            } else {
                country.style.border = "3px solid green"
                errorContainer.style.border = "";
                errorText.textContent = ""
            }
        })
    };
    countryValidation();

    const zipCodeValidation = () => {
        zipCode.addEventListener('mouseleave',()=>{
            if (zipCode.value === "" || zipCode.value === null){
                errorText.textContent = "5 digit Zip-Code is required"
                zipCode.style.border = "3px solid red"
                errorContainer.style.border = " 3px solid red"
                setTimeout(()=>{
                    errorText.textContent = ""
                    errorContainer.style.border = ""
                },1000)
            } else {
                zipCode.style.border = "3px solid green"
                errorContainer.style.border = "";
                errorText.textContent = ""
            }
        })
    };
    zipCodeValidation();

    const passwordValidation = () => {
        passWord.addEventListener('mouseleave',()=>{
            if (passWord.value === "" || passWord.value === null){
                errorText.textContent = "Password is required"
                passWord.style.border = "3px solid red"
                errorContainer.style.border = " 3px solid red"
                setTimeout(()=>{
                    errorText.textContent = ""
                    errorContainer.style.border = ""
                },1000)
            } else {
                passWord.style.border = "3px solid green"
                errorContainer.style.border = "";
                errorText.textContent = ""
            }
        })
        confirmPassword.addEventListener('mouseleave',()=>{
            if (confirmPassword.value === "" || confirmPassword.value === null){
                errorText.textContent = "Password is required"
                confirmPassword.style.border = "3px solid red"
                errorContainer.style.border = " 3px solid red"
                setTimeout(()=>{
                    errorText.textContent = ""
                    errorContainer.style.border = ""
                },1000)
            } else {
                confirmPassword.style.border = "3px solid green"
                errorContainer.style.border = "";
                errorText.textContent = ""
            }
        })
    };
    passwordValidation();

    const submitForm = () =>{
        submitBtns.addEventListener('submit',(e)=>{
            e.preventDefault();
            if (firstName.value === "" || lastName.value === "" || email.value === "" || country.value === "" || zipCode.value === "" || passWord.value === "" || confirmPassword.value === ""){
                errorText.textContent = "Please Fill Out The Form"
            } else {
                errorText.textContent = "Congrats You Signed Up!"
                firstName.value = "";
                lastName.value = "";
                email.value = "";
                country.value = "";
                zipCode.value = "";
                passWord.value = "";
                confirmPassword.value = "";
            }
        })
    };
    submitForm();

    const emptyOutForm = () => {
        window.addEventListener('DOMContentLoaded',()=>{
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            zipCode.value = "";
            country.value = "";
            passWord.value = "";
            confirmPassword.value = "";
        })
    }
    emptyOutForm();
    return {}
})();

