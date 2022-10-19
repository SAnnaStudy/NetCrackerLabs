export function yourHello(){
    var userName = prompt("Введите ваше имя");
    while(userName === ' ' || userName === ''){
        userName = prompt("Введите ваше имя");
  }
userName = userName.toLowerCase();
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
userName = userName.capitalize();;
    alert("Вас зовут " + userName);
var userAge = prompt("Введите ваш возраст");
    while(userAge === '0' || userAge === ''|| userAge < 0){
          userAge = prompt("Введите корректный возраст");
    }
        alert("Привет, " + userName + ", тебе уже "  + userAge + " лет!");
}
import helloJava from "./../2/task2.js"