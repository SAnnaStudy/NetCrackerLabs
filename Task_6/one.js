const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const textInput = document.getElementById("text"); 
const phonePattern = /^[+][0-9][(][0-9]{3}[)][0-9]{2}[-][0-9]{2}[-][0-9]{3}$/;
const emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

if (localStorage.name !== undefined)
{
    nameInput.value = localStorage.name;
}
if (localStorage.surname !==  undefined)
{
    surnameInput.value = localStorage.surname;
}
if (localStorage.email !==  undefined)
{
    emailInput.value = localStorage.email;
}
if (localStorage.phone !==  undefined)
{
    phoneInput.value = localStorage.phone;
}
if (localStorage.text !==  undefined)
{
    textInput.value = localStorage.text;
}
function getCookie(name) {
	let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? true : false;
}
function checkAll (elementId){
    const element = document.getElementById(elementId);
    switch(elementId){
        case 'name':
            const name = element.value;
            if(name && name.trim()){
                localStorage.setItem('name', name);
            }
        break;
        case 'surname':
            const surname = element.value;
            if(surname){
               localStorage.setItem('surname', surname);
            }
        break;
        case 'email':
            const email = element.value;
            if(emailPattern.test(email)){
               localStorage.setItem('email', email);
            }
        break;
        case 'phone':
            const phone = element.value;
            if(phonePattern.test(phone)){
               localStorage.setItem('phone', phone);
            }
        break;
        case 'text':
            const text = element.value;
            if(text){
                  localStorage.setItem('text', text);
            }
        break;
    }    
}
function valid (form){
    let fail = "";
    let name = form.name.value;
    let surname = form.surname.value;
    let email = form.email.value;
    let phone = form.phone.value;
    let text = form.text.value;
        
    if(!name){
        fail += "Name, ";
    }
    if(!surname){
        fail += "Surname, ";
    }
    if(!email || !emailPattern.test(email)){
        fail += "Email, ";
    }
    if(phone){
        if(!phonePattern.test(phone)){
            fail += "Number, ";
        }
    }
    if(!text){
        fail += "Text, ";
    }
    if(fail != ""){
        fail = fail.slice(0,-2);
        alert("Поля: " + fail + " заполнены не верно, пожалуйста исправьте");
        return;
    }
    else{
        if(getCookie('check')){
            alert(name + " " + surname + ", ваше обращение обрабатывается!");   
        }
        else{
            alert(name + " " + surname + ", спасибо за обращение!");
            document.cookie = `name=${name}`;
            document.cookie = `surname=${surname}`;
            document.cookie = "check=yes";
        }
    }
}