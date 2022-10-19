function changeNum(){
    alert("Имеются два числа, необходимо поменях их значения местами: a=3, b=2");
    var c;
    var a = 3;
    var b = 2;
    c = a;
    a = b;
    b = c;
    alert("Пезультат, полученный с помощью дополнительной переменной: a=" + a + ", b=" + b);
    a = a + b;
    b = a - b;
    a = a - b;
    alert("Поменяем их обратно. Вот результат, полученный без дополнительной переменной: a=" + a + ", b=" + b);
}


function helloJava(){
    alert("Привет, JavaScript");
}
function yourHello(){
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
function sortArr(){
    const arr = [];
var desc = "desc";
var asc = "asc";
for(var i = 0; i < 10; i++){
    arr.push(Math.round(Math.random() * 100)); 
}
function sumElem(mas){
    let sum = 0;
    for(var i = 0; i < 10; i++){
        if(mas[i] %2!=0){
            sum += i*i;
        }
    }
    return sum;
}

function sortirovka(mas, typeSort) {
     mas.sort(function(a,b) { return typeSort == "desc" ? a - b : b - a; });
    return mas;
}
alert("Сумма квадратов всех нечетных элементов в массиве: " + arr);
sumElem();
alert("Массив до сортировки " + arr);
sortirovka(arr, desc);
alert("Массив после сортировки по возрастанию " + arr);
sortirovka(arr, asc);
alert("Массив после сортировки по убыванию " + arr);
}
function fizzbuzz(){
    for(var i = 1; i < 101; i++){
    if(i % 3 === 0 && i % 5 === 0)
        {
            alert('FizzBuzz');
        }
    else if(i % 3 === 0)
        {
             alert('Fizz');
        }
    else if(i % 5 === 0)
        {
             alert('Buzz');
        }
    else  alert(i);
    }
}
function palindrom(){
    var word = prompt("Введите слово");
word = word.toLowerCase();
var word2 = word.split('').reverse().join('');
if(word2 == word)
    {
        alert(word + ' палиндром!');
    }
else
    {
        alert(word + ' не палиндром!');
    }
}
function myGame(){
    document.getElementById('start').hidden = true;
    document.getElementById('answerSubmit').style.display = 'block';
    document.getElementById('answerField').style.display = 'block';
    const regex = /[0-9]|\./;
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    let count = 0;
    const answerField = document.querySelector('.answerField');
    var answerSubmit = document.querySelector('.answerSubmit');
    function checkAnswer() {
        let userAnswer = Number(answerField.value);
        if (!regex.test(userAnswer)){
            alert('Введите число!');
        }
        else{
            count++;
            if (userAnswer > randomNumber){
                alert('Искомое число меньше!');
            } else if (userAnswer < randomNumber){
                alert('Искомое число больше!');
            } else{
                if (window.confirm('Вы угадали! Количество попыток: ' + count + '. Начать заново?')) {
                    myGame();
                }
                else{ window.close();}
            }
            answerField.value = '';
        }
    }
    answerSubmit.addEventListener('click', checkAnswer);
}