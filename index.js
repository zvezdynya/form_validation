const errorMessage = document.getElementById("errorMessage");
const buttonRegistration = document.getElementById("but_registration");
const name = document.getElementById("userName");
const age = document.querySelector('#default_selected');
const agreement = document.getElementById("agreement");

function clearErrorDiv() {
    document.getElementById('errorMessage').innerHTML = "";
}   

function validateName() {
    if(name.value == '' || name.value.length <= 5) {
        errorMessage.innerHTML += 'Поле "Введите имя" не заполнено/заполнено некорректно<br/>';
        name.style.border = '1px solid red';
    } else if(name.value != '' && name.value.length > 5) {
        name.style.border = '1px solid green';
    }
}

function validatePhone() {
    const phone = document.getElementById("userPhone");
    const reg2 = /^\+?(\d{1})?[- .]?\(?(?:\d{3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/; 

    if(phone.value == '' || !reg2.test(phone.value) || phone.value.length < 11 || phone.value.length > 12) {
        errorMessage.innerHTML += 'Поле "Введите номер телефона" не заполнено/заполнено некорректно<br/>';
        phone.style.border = '1px solid red';
    } else if(phone.value != '' && reg2.test(phone.value) && phone.value.length <= 12 && phone.value.length >= 11) {
        phone.style.border = '1px solid green';
    }
}

function validateEmail() {
    const email = document.getElementById("userEmail");
    const reg = 
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    
    if(email.value == '' || email.value.length < 8 || !reg.test(email.value)) {
        errorMessage.innerHTML += 'Поле "Введите e-mail" не заполнено/заполнено некорректно<br/>';
        email.style.border = '1px solid red';
    } else if(email.value != '' && email.value.length > 8 && reg.test(email.value)) {
        email.style.border = '1px solid green';
    }
}

function validateMale() {
    const female = document.getElementById("female");
    const male = document.getElementById("male");
    if(male.checked == false && female.checked == false) {
        errorMessage.innerHTML += 'Поле "Выберете пол" не заполнено<br/>';
        document.getElementById('gender').style.border = '1px solid red';
    } else if(male.checked == true || female.checked == true) {
        document.getElementById('gender').style.border = '1px solid green';
    }
}

function validateAge() {
    const select = document.getElementById('age');

    if(age.selected) {
        errorMessage.innerHTML += 'Поле "Выберете возраст" не заполнено<br/>';
        select.style.border = '1px solid red';
    } else if(!age.selected) {
        select.style.border = '1px solid green';
    }
}

function validatePass() {
    const pass = document.getElementById("userPass");
    const passConfirm = document.getElementById("userPassConfirm");

    if(pass.value.length < 8 || pass.value.length > 20 || pass.value == '') {
        errorMessage.innerHTML += 'Поле "Придумайте пароль" не заполнено/заполнено не корректно" не заполнено<br/>';
        pass.style.border = '1px solid red';
    } else if(pass.value.length > 8 && pass.value.length < 20 && pass.value != '') {
        pass.style.border = '1px solid green';
    }

    if(passConfirm.value.length < 8 || passConfirm.value.length > 20 || passConfirm.value == '') {
        errorMessage.innerHTML += 'Поле "Повторите пароль" не заполнено/заполнено не корректно" не заполнено<br/>';
        passConfirm.style.border = '1px solid red';
    } else if(passConfirm.value.length > 8 && passConfirm.value.length < 20 && passConfirm.value != '') {
        passConfirm.style.border = '1px solid green';
    }
    
    if(pass.value != passConfirm.value) {
        errorMessage.innerHTML += 'Пароли не совпадают, попробуйте снова<br/>';
        passConfirm.style.border = '1px solid orange';
    } else if(pass.value == passConfirm.value && pass.value != '' && passConfirm.value != '') {
        passConfirm.style.border = '1px solid green';
    }

    if(pass.value != passConfirm.value) {
        errorMessage.innerHTML += 'Пароли не совпадают, попробуйте снова<br/>';
        passConfirm.style.border = '1px solid orange';
    } else if(pass.value == passConfirm.value && pass.value != '' && passConfirm.value != '') {
        passConfirm.style.border = '1px solid green';
    }
}

function validateAgreement() {
    if(agreement.checked == false) {
        errorMessage.innerHTML += 'Поле "Согласие на обработку данных" не заполнено<br/>';
        agreement.style.border = '1px solid red';
    } else if(agreement.checked == true) {
        agreement.style.border = '1px solid green';
    }
}

function validate() {
    clearErrorDiv(); 
    validateName();
    validatePhone();
    validateEmail();
    validateMale();
    validateAge();
    validatePass();
    validateAgreement();
}

function helloNewUser() {
    if(document.querySelectorAll('input').value != '' && age != "" && agreement.checked == true) {
        alert(`Добро пожаловать, ${name.value}!`);
    }
}

buttonRegistration.addEventListener('click', validate);
buttonRegistration.addEventListener('click', helloNewUser);

document.querySelector('.twitt').addEventListener('click', () => window.open('https://investor.twitterinc.com/home/default.aspx')); 

document.querySelector('.youtube').addEventListener('click', () => window.open('https://www.youtube.com/')); 

document.querySelector('.facebook').addEventListener('click', () => window.open('https://facebookvhod.ru/')); 