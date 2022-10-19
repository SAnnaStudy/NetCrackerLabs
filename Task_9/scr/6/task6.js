export function palindrom(){
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
import fizzbuzz from "./../5/task5.js"