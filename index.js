document.querySelector('#but_registration').onclick = function inputCheck() {

    const errorMessage = document.getElementById("errorMessage");
    const phone = document.getElementById("userPhone");
    const name = document.getElementById("userName");
    const email = document.getElementById("userEmail");
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const age = document.getElementById("age");
    const pass = document.getElementById("userPass");
    const passConfirm = document.getElementById("userPassConfirm");
    const agreement = document.getElementById("agreement");
    const buttonRegistration = document.getElementById("but_registration");
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    const reg2 = /^\+?(\d{1})?[- .]?\(?(?:\d{3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

    document.getElementById('errorMessage').innerHTML = "";

    if(name.value == '' || name.value.length <= 5) {
        errorMessage.innerHTML += 'Поле "Введите имя" не заполнено/заполнено некорректно<br/>';
    }

    if(name.value == '' || name.value.length <= 5) {
        name.style.border = '1px solid red';
    }

    if(name.value != '' && name.value.length > 5) {
        name.style.border = '1px solid green';
    }

    if(phone.value == '' || !reg2.test(phone.value) || phone.value.length < 11 || phone.value.length > 12) {
        errorMessage.innerHTML += 'Поле "Введите номер телефона" не заполнено/заполнено некорректно<br/>';
    }

    if(phone.value == '' || !reg2.test(phone.value) || phone.value.length < 11 || phone.value.length > 12) {
        phone.style.border = '1px solid red';
    }

    if(phone.value != '' && reg2.test(phone.value) && phone.value.length <= 12 && phone.value.length >= 11) {
        phone.style.border = '1px solid green';
    }

    if(email.value == '' || email.value.length < 8 || !reg.test(email.value)) {
        errorMessage.innerHTML += 'Поле "Введите e-mail" не заполнено/заполнено некорректно<br/>';
    }

    if(email.value == '' || email.value.length < 8 || !reg.test(email.value)) {
        email.style.border = '1px solid red';
    }

    if(email.value != '' && email.value.length > 8 && reg.test(email.value)) {
        email.style.border = '1px solid green';
    }

    if(male.checked == false && female.checked == false) {
        errorMessage.innerHTML += 'Поле "Выберете пол" не заполнено<br/>';
    }

    if(male.checked == false && female.checked == false) {
        document.getElementById('gender').style.border = '1px solid red';
    }

    if(male.checked == true || female.checked == true) {
        document.getElementById('gender').style.border = '1px solid green';
    }

    if(age.value == "none") {
        errorMessage.innerHTML += 'Поле "Выберете возраст" не заполнено<br/>';
    }

    if(age.value == "none") {
        age.style.border = '1px solid red';
    }

    if(age.value != "none") {
        age.style.border = '1px solid green';
    }

    if(pass.value.length < 8 || pass.value.length > 20 || pass.value == '') {
        errorMessage.innerHTML += 'Поле "Придумайте пароль" не заполнено/заполнено не корректно" не заполнено<br/>';
    }

    if(pass.value.length < 8 || pass.value.length > 20 || pass.value == '') {
        pass.style.border = '1px solid red';
    }

    if(pass.value.length > 8 && pass.value.length < 20 && pass.value != '') {
        pass.style.border = '1px solid green';
    }

    if(passConfirm.value.length < 8 || passConfirm.value.length > 20 || passConfirm.value == '') {
        errorMessage.innerHTML += 'Поле "Повторите пароль" не заполнено/заполнено не корректно" не заполнено<br/>';
    }

    if(passConfirm.value.length < 8 || passConfirm.value.length > 20 || passConfirm.value == '') {
        passConfirm.style.border = '1px solid red';
    }

    if(passConfirm.value.length > 8 && passConfirm.value.length < 20 && passConfirm.value != '') {
        passConfirm.style.border = '1px solid green';
    }

    if(pass.value != passConfirm.value) {
        errorMessage.innerHTML += 'Пароли не совпадают, попробуйте снова<br/>';
    }

    if(pass.value != passConfirm.value) {
        passConfirm.style.border = '1px solid orange';
    }

    if(pass.value != passConfirm.value) {
        pass.style.border = '1px solid orange';
    }

    if(pass.value == passConfirm.value && pass.value != '' && passConfirm.value != '') {
        passConfirm.style.border = '1px solid green';
    }

    if(pass.value == passConfirm.value && pass.value != '' && passConfirm.value != '') {
        pass.style.border = '1px solid green';
    }

    if(agreement.checked == false) {
        errorMessage.innerHTML += 'Поле "Согласие на обработку данных" не заполнено<br/>';
    }

    if(agreement.checked == false) {
        agreement.style.border = '1px solid red';
    }

    if(agreement.checked == true) {
        agreement.style.border = '1px solid green';
    }

    if(document.querySelectorAll('input').value != '' && age.value != "none" && agreement.checked == true) {
        alert(`Добро пожаловать, ${name.value}!`);
    }
}

document.querySelector('.twitt').addEventListener('click', () => window.open('https://investor.twitterinc.com/home/default.aspx')); 

document.querySelector('.youtube').addEventListener('click', () => window.open('https://www.youtube.com/')); 

document.querySelector('.facebook').addEventListener('click', () => window.open('https://facebookvhod.ru/')); 