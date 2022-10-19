
const table = document.getElementById("table");
table.addEventListener("contextmenu", readRow);
table.addEventListener("click", changeRow);

function readRow (event) {
    document.querySelectorAll("tr").forEach((row, index) => {
        if (row === event.target.parentElement) {
            if(event.which == 3 && index != 0) {
                animationDelete(index);
            }
        }
    });
}
function changeRow (event) {
    let td = event.target.closest("td");
    if(td.querySelector('input')){
        if(td.querySelector('input').value == ''){
            td.querySelector('input').addEventListener('blur', function(){
            td.innerHTML = this.value;
            td.addEventListener("click", changeRow);
        });
        td.removeEventListener('click', changeRow);
    }
}else{
    var input = document.createElement('input');
    input.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(input);
    input.focus();
    input.addEventListener('blur', function(){
        td.innerHTML = this.value;
        td.addEventListener("click", changeRow);
    });
    td.removeEventListener('click', changeRow);
}
}

function animationDelete(rowIndex){
    table.querySelectorAll("tr")[rowIndex].remove();
}

function addNext(id){
    var tbody = document.getElementById(id).getElementsByTagName('TBODY')[0];
    
    // Создание строки таблицы и её добавление
    var row = document.createElement("tr");
    tbody.appendChild(row);
    
    // Создание ячеек в вышесозданной строке и их добавление
    var td1 = document.createElement("td");
    //td1.appendChild(document.createTextNode("column 1"));
    td1.appendChild;
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");    
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    
    var input = document.createElement('input');
   /* input.addEventListener('blur', function(){
        td1.innerHTML = this.value
    });*/
    td1.appendChild(input);

    input = document.createElement('input');
    /*input.addEventListener('blur', function(){
        td2.innerHTML = this.value
    });*/
    td2.appendChild(input);

    input = document.createElement('input');
    /*  input.addEventListener('blur', function(){
        td3.innerHTML = this.value
    });*/
    td3.appendChild(input);
}