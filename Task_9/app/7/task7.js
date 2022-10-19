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