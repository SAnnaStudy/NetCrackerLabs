export function sortArr(){
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
import yourHello from "./../3/task3.js"