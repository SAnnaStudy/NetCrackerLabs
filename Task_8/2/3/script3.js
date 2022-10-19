import {fromEvent} from 'rxjs'
const buttons = document.querySelectorAll('.button');
const stream$ = fromEvent(buttons, 'click')
.subscribe(() => {
    document.body.style.backgroundColor = '#' + getColor();
});
let getColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
}
