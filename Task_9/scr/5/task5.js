export function fizzbuzz(){
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
import sortArr from "./../4/task4.js"